/* ==========================================================
   M3ak Morocco — login.js
   Dépend de session.js et auth-store.js, chargés avant lui.
========================================================== */
(function () {
    "use strict";

    var form = document.getElementById("loginForm");
    var identifier = document.getElementById("identifier");
    var password = document.getElementById("password");
    var errorBox = document.getElementById("formError");
    var submitBtn = document.getElementById("submitBtn");

    var ADMIN_HOME = "/pages/dashboard/dashboard.html";
    var DEFAULT_HOME = "/index.html";

    /* ------------------------------------------------------
       Destination après connexion
       /pages/auth/login.html?next=/pages/dashboard/overview.html

       Seuls les chemins internes sont acceptés : "//evil.tld"
       est une URL protocol-relative, donc externe. Sans ce
       filtre, la page de login serait une redirection ouverte.
    ------------------------------------------------------ */
    function nextUrl() {
        var raw = new URLSearchParams(window.location.search).get("next");
        if (raw && raw.charAt(0) === "/" && raw.charAt(1) !== "/") return raw;
        return DEFAULT_HOME;
    }

    function destinationFor(user) {
        return user && user.role === "admin" ? ADMIN_HOME : nextUrl();
    }

    /* Déjà connecté : inutile de repasser par le formulaire */
    if (window.M3ak && M3ak.getUser()) {
        window.location.replace(nextUrl());
        return;
    }

    /* ------------------------------------------------------
       Messages d'erreur — jamais en alert()
    ------------------------------------------------------ */
    function showError(message, field) {
        if (!errorBox) return;
        errorBox.textContent = message;
        errorBox.classList.remove("hidden");
        if (field) field.focus();
    }

    function clearError() {
        if (!errorBox) return;
        errorBox.textContent = "";
        errorBox.classList.add("hidden");
    }

    [identifier, password].forEach(function (el) {
        if (el) el.addEventListener("input", clearError);
    });

    function setBusy(busy) {
        if (!submitBtn) return;
        submitBtn.disabled = busy;
        submitBtn.textContent = busy ? "Signing in..." : "Sign In";
    }

    /* Précharge la base pendant que l'utilisateur saisit. */
    if (window.M3akAuth) {
        M3akAuth.ready().catch(function () { /* signalé à la soumission */ });
    }

    /* ------------------------------------------------------
       Soumission
    ------------------------------------------------------ */
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            clearError();

            var id = identifier.value.trim();
            var pwd = password.value;

            if (!id) {
                showError("Enter your National ID or email address.", identifier);
                return;
            }

            if (!pwd) {
                showError("Enter your password.", password);
                return;
            }

            if (!window.M3akAuth) {
                showError("The account directory failed to load. Refresh the page and try again.");
                return;
            }

            setBusy(true);

            M3akAuth.authenticate(id, pwd)
                .then(function (user) {
                    M3ak.signIn({ name: user.name, email: user.email });
                    window.location.href = destinationFor(user);
                })
                .catch(function (error) {
                    setBusy(false);
                    showError(error.message || M3akAuth.GENERIC_ERROR, password);
                    password.value = "";
                });
        });
    }

    /* ------------------------------------------------------
       Affichage du mot de passe
    ------------------------------------------------------ */
    var toggleBtn = document.getElementById("togglePasswordBtn");

    function togglePassword() {
        if (!password) return;
        var shown = password.type === "text";
        password.type = shown ? "password" : "text";

        if (toggleBtn) {
            toggleBtn.setAttribute("aria-pressed", String(!shown));
            var label = toggleBtn.querySelector(".sr-only");
            if (label) label.textContent = shown ? "Show password" : "Hide password";
        }
    }

    if (toggleBtn) toggleBtn.addEventListener("click", togglePassword);
    window.togglePassword = togglePassword;   /* compat onclick inline */

    /* ------------------------------------------------------
       Sélecteur de langue (footer desktop)
    ------------------------------------------------------ */
    var langBtn = document.getElementById("selectedLanguage");
    var langMenu = document.getElementById("languageMenu");

    function closeLanguageMenu() {
        if (!langMenu || !langBtn) return;
        langMenu.classList.add("hidden");
        langBtn.setAttribute("aria-expanded", "false");
    }

    if (langBtn && langMenu) {
        langBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            var open = langMenu.classList.toggle("hidden") === false;
            langBtn.setAttribute("aria-expanded", String(open));
        });

        langMenu.querySelectorAll(".language-option").forEach(function (option) {
            option.addEventListener("click", function () {
                langBtn.childNodes[0].nodeValue = option.textContent.trim() + " ";
                closeLanguageMenu();
            });
        });

        document.addEventListener("click", closeLanguageMenu);

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeLanguageMenu();
        });
    }

    /* ------------------------------------------------------
       Connexions sociales (non branchées)
    ------------------------------------------------------ */
    document.querySelectorAll("[data-social]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            showError(btn.dataset.social + " sign-in isn't connected yet. Use your ID or email for now.");
        });
    });
})();
