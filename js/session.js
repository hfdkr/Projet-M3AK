/* ==========================================================
   M3ak Morocco — session.js
   Une seule page pour les deux états : visiteur / connecté.

   Marquage HTML :
     data-auth="guest"      -> visible uniquement hors session
     data-auth="user"       -> visible uniquement en session
     data-user-name         -> rempli avec le nom
     data-user-initials     -> rempli avec les initiales
     data-action="logout"   -> déconnecte
     data-menu-toggle       -> ouvre le menu profil
     data-menu              -> le menu profil

     data-profile-city / -country / -dob / -gender / -mothertongue /
     data-profile-phone / -address / -bloodtype / -weight / -allergies /
     data-profile-medications / -emergency-name / -emergency-relation /
     -emergency-phone       -> remplis depuis le profil centralisé

   API :
     M3ak.signIn({ name, email })   depuis la page de login
     M3ak.signOut()
     M3ak.getUser()                 -> objet ou null
     M3ak.getProfile()              -> objet profil (jamais null, {} si vide)
     M3ak.updateProfile(patch)      -> fusionne (deep, par clé) et persiste
========================================================== */
(function () {
    "use strict";

    var STORAGE_KEY = "m3ak.session";
    var BLOCKER_ID = "m3ak-auth-blocker";

    /* Every page that shows profile data reads it through this one table —
       add a row here instead of writing bespoke read logic per page. */
    var PROFILE_FIELDS = {
        "data-profile-city": ["location", "city"],
        "data-profile-country": ["location", "country"],
        "data-profile-dob": ["personal", "dob"],
        "data-profile-gender": ["personal", "gender"],
        "data-profile-mothertongue": ["personal", "motherTongue"],
        "data-profile-phone": ["personal", "phone"],
        "data-profile-address": ["personal", "address"],
        "data-profile-bloodtype": ["medical", "bloodType"],
        "data-profile-weight": ["medical", "weight"],
        "data-profile-allergies": ["medical", "allergies"],
        "data-profile-medications": ["medical", "medications"],
        "data-profile-emergency-name": ["emergencyContact", "name"],
        "data-profile-emergency-relation": ["emergencyContact", "relation"],
        "data-profile-emergency-phone": ["emergencyContact", "phone"]
    };

    /* ------------------------------------------------------
       1. Anti-flash : on masque les zones à bascule le temps
          de savoir dans quel état on est. Le style est injecté
          dès le parsing du <head>, donc avant tout rendu.
    ------------------------------------------------------ */
    (function block() {
        if (document.getElementById(BLOCKER_ID)) return;
        var style = document.createElement("style");
        style.id = BLOCKER_ID;
        style.textContent = "[data-auth]{visibility:hidden !important}";
        (document.head || document.documentElement).appendChild(style);
    })();

    function unblock() {
        var style = document.getElementById(BLOCKER_ID);
        if (style) style.remove();
    }

    /* ------------------------------------------------------
       2. Lecture / écriture de la session
    ------------------------------------------------------ */
    function getUser() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    /* Write a value into every matching element: form fields get .value,
       everything else gets .textContent. Empty values are left untouched
       so a page's own placeholder text stays visible. */
    function fill(selector, value) {
        if (!value) { return; }
        document.querySelectorAll(selector).forEach(function (el) {
            var tag = el.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
                el.value = value;
            } else {
                el.textContent = value;
            }
        });
    }

    function initialsFrom(name) {
        return String(name || "")
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(function (part) { return part.charAt(0).toUpperCase(); })
            .join("") || "M3";
    }

    /* One-level-per-key deep merge: nested objects (location, medical, ...)
       are merged key-by-key rather than replaced wholesale, so patching
       {location:{city:"Agadir"}} never wipes an already-saved country. */
    function mergeDeep(base, patch) {
        var result = {}, key;
        base = base || {};
        patch = patch || {};
        for (key in base) {
            if (Object.prototype.hasOwnProperty.call(base, key)) result[key] = base[key];
        }
        for (key in patch) {
            if (!Object.prototype.hasOwnProperty.call(patch, key)) continue;
            var val = patch[key];
            if (val && typeof val === "object" && !Array.isArray(val) &&
                base[key] && typeof base[key] === "object") {
                result[key] = mergeDeep(base[key], val);
            } else {
                result[key] = val;
            }
        }
        return result;
    }

    function signIn(user) {
        var existing = getUser();
        var data = {
            name: (user && user.name) || "Citizen",
            email: (user && user.email) || "",
            initials: (user && user.initials) || initialsFrom(user && user.name),
            profile: (existing && existing.profile) || {}
        };
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
        apply();
        return data;
    }

    function signOut() {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
        apply();
    }

    function getProfile() {
        var user = getUser();
        return (user && user.profile) || {};
    }

    function updateProfile(patch) {
        var user = getUser();
        if (!user) { return null; }
        user.profile = mergeDeep(user.profile, patch);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); } catch (e) {}
        apply();
        return user.profile;
    }

    /* ------------------------------------------------------
       3. Application de l'état au DOM

       On passe par display inline plutôt que par une classe :
       les éléments utilisent des utilitaires responsives
       (hidden md:flex, md:block...) qu'une classe .hidden ne
       peut pas neutraliser au-delà du breakpoint.
    ------------------------------------------------------ */
    /* A page opened with ?as=guest is rendered as if nobody were signed in
       (used by the onboarding funnel, which links to shared pages like
       support.html but must never expose the signed-in app shell). */
    function isForcedGuest() {
        try {
            return new URLSearchParams(window.location.search).get("as") === "guest";
        } catch (e) {
            return false;
        }
    }

    function applyProfileFields(profile) {
        var attr, path, section, value;
        for (attr in PROFILE_FIELDS) {
            if (!Object.prototype.hasOwnProperty.call(PROFILE_FIELDS, attr)) continue;
            path = PROFILE_FIELDS[attr];
            section = profile[path[0]] || {};
            value = section[path[1]];
            fill("[" + attr + "]", value);
        }
    }

    function apply() {
        var user = isForcedGuest() ? null : getUser();
        var state = user ? "user" : "guest";

        if (document.body && document.body.hasAttribute("data-require-auth")) {
            if (!user) {
                window.location.replace("/pages/auth/login.html");
                return;
            }
            var country = user.profile && user.profile.location && user.profile.location.country;
            var onOnboarding = window.location.pathname.indexOf("/pages/auth/onboarding.html") !== -1;
            if (country && String(country).trim().toLowerCase() !== "morocco" && !onOnboarding) {
                window.location.replace("/pages/auth/region-restricted.html");
                return;
            }
        }

        document.querySelectorAll("[data-auth]").forEach(function (el) {
            if (el.getAttribute("data-auth") === state) {
                el.style.removeProperty("display");
            } else {
                el.style.setProperty("display", "none", "important");
            }
        });

        if (user) {
            fill("[data-user-name]", user.name);
            fill("[data-user-email]", user.email);
            document.querySelectorAll("[data-user-initials]").forEach(function (el) {
                el.textContent = user.initials;
            });
            applyProfileFields(user.profile || {});
        }

        closeMenus();
        unblock();
        document.documentElement.setAttribute("data-session", state);
    }

    /* ------------------------------------------------------
       4. Menu profil + déconnexion
    ------------------------------------------------------ */
    function closeMenus() {
        document.querySelectorAll("[data-menu]").forEach(function (menu) {
            menu.classList.add("hidden");
        });
        document.querySelectorAll("[data-menu-toggle]").forEach(function (btn) {
            btn.setAttribute("aria-expanded", "false");
        });
    }

    function wire() {
        document.addEventListener("click", function (e) {
            var toggle = e.target.closest("[data-menu-toggle]");
            if (toggle) {
                e.preventDefault();
                var wrap = toggle.closest("[data-auth], .relative") || document;
                var menu = wrap.querySelector("[data-menu]");
                if (menu) {
                    var open = menu.classList.toggle("hidden") === false;
                    toggle.setAttribute("aria-expanded", open);
                }
                return;
            }

            if (e.target.closest("[data-action='logout']")) {
                e.preventDefault();
                signOut();
                window.location.href = "/pages/auth/login.html";
                return;
            }

            if (!e.target.closest("[data-menu]")) closeMenus();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeMenus();
        });

        /* Session partagée entre onglets */
        window.addEventListener("storage", function (e) {
            if (e.key === STORAGE_KEY) apply();
        });
    }

    /* ------------------------------------------------------
       5. Démarrage
    ------------------------------------------------------ */
    function start() {
        wire();
        apply();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }

    window.M3ak = {
        signIn: signIn,
        signOut: signOut,
        getUser: getUser,
        getProfile: getProfile,
        updateProfile: updateProfile
    };
})();
