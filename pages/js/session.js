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

   API :
     M3ak.signIn({ name, email })   depuis la page de login
     M3ak.signOut()
     M3ak.getUser()                 -> objet ou null
========================================================== */
(function () {
    "use strict";

    var STORAGE_KEY = "m3ak.session";
    var BLOCKER_ID = "m3ak-auth-blocker";

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

    function initialsFrom(name) {
        return String(name || "")
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(function (part) { return part.charAt(0).toUpperCase(); })
            .join("") || "M3";
    }

    function signIn(user) {
        var data = {
            name: (user && user.name) || "Citizen",
            email: (user && user.email) || "",
            initials: (user && user.initials) || initialsFrom(user && user.name)
        };
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
        apply();
        return data;
    }

    function signOut() {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
        apply();
    }

    /* ------------------------------------------------------
       3. Application de l'état au DOM

       On passe par display inline plutôt que par une classe :
       les éléments utilisent des utilitaires responsives
       (hidden md:flex, md:block...) qu'une classe .hidden ne
       peut pas neutraliser au-delà du breakpoint.
    ------------------------------------------------------ */
    function apply() {
        var user = getUser();
        var state = user ? "user" : "guest";

        if (document.body && document.body.hasAttribute("data-require-auth") && !user) {
            window.location.replace("/pages/auth/login.html");
            return;
        }

        document.querySelectorAll("[data-auth]").forEach(function (el) {
            if (el.getAttribute("data-auth") === state) {
                el.style.removeProperty("display");
            } else {
                el.style.setProperty("display", "none", "important");
            }
        });

        if (user) {
            document.querySelectorAll("[data-user-name]").forEach(function (el) {
                el.textContent = user.name;
            });
            document.querySelectorAll("[data-user-initials]").forEach(function (el) {
                el.textContent = user.initials;
            });
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

    window.M3ak = { signIn: signIn, signOut: signOut, getUser: getUser };
})();