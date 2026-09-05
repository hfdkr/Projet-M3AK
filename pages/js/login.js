(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        /* Always show the login form and require credentials — no auto sign-in,
           even if a previous session is still stored. */
        setupLanguageDropdown();
        setupPasswordToggle();
        setupForm();
    });

    /* ---------- language dropdown (desktop footer) ---------- */

    function setupLanguageDropdown() {
        var dropdown = document.getElementById("languageDropdown");
        var menu = document.getElementById("languageMenu");
        var selected = document.getElementById("selectedLanguage");

        if (!dropdown || !menu || !selected) { return; }

        dropdown.addEventListener("mouseenter", function () {
            menu.classList.remove("hidden");
        });

        dropdown.addEventListener("mouseleave", function () {
            menu.classList.add("hidden");
        });

        Array.prototype.forEach.call(
            document.querySelectorAll(".language-option"),
            function (option) {
                option.addEventListener("click", function () {
                    selected.innerHTML =
                        option.textContent.trim() +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>' +
                        "</svg>";
                    menu.classList.add("hidden");
                });
            }
        );
    }

    /* ---------- show / hide password ---------- */

    function setupPasswordToggle() {
        var input = document.getElementById("password");
        var button = document.querySelector('[data-toggle-password]');

        if (!input || !button) { return; }

        button.setAttribute("type", "button");
        button.addEventListener("click", function () {
            var hidden = input.type === "password";
            input.type = hidden ? "text" : "password";
            button.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
            input.focus();
        });
    }

    /* ---------- form ---------- */

    function setupForm() {
        var form = document.getElementById("login-form");
        if (!form) { return; }

        var identifier = document.getElementById("identifier");
        var password = document.getElementById("password");
        var submit = form.querySelector('button[type="submit"]');

        /* Social buttons have no type: stop them from submitting the form */
        Array.prototype.forEach.call(
            form.querySelectorAll("button:not([type])"),
            function (button) { button.setAttribute("type", "button"); }
        );

        [identifier, password].forEach(function (field) {
            if (field) {
                field.addEventListener("input", function () { clearError(field); });
            }
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var idValue = identifier.value.trim();
            var pwValue = password.value;
            var valid = true;

            if (!idValue) {
                showError(identifier, "Enter your National ID or email.");
                valid = false;
            } else if (idValue.indexOf("@") !== -1 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(idValue)) {
                showError(identifier, "This email address is not valid.");
                valid = false;
            } else if (idValue.indexOf("@") === -1 && !/^[A-Za-z]{1,2}\d{5,7}$/.test(idValue)) {
                showError(identifier, "National ID looks like AB123456.");
                valid = false;
            }

            if (pwValue.length < 6) {
                showError(password, "Password must be at least 6 characters.");
                valid = false;
            }

            if (!valid) { return; }

            submit.disabled = true;
            submit.textContent = "Signing in...";
            submit.classList.add("opacity-70");

            /* Demo: no backend yet, open the session and redirect.
               Keep a name from a previous sign-up if we already have one. */
            window.setTimeout(function () {
                var isEmail = idValue.indexOf("@") !== -1;
                var existing = window.M3ak.getUser();
                var keptName = existing && existing.name && existing.name !== "Citizen"
                    ? existing.name
                    : (isEmail ? idValue.split("@")[0] : "Citizen");
                window.M3ak.signIn({
                    name: keptName,
                    email: isEmail ? idValue : (existing && existing.email) || ""
                });
                window.location.href = "/pages/app/overview.html";
            }, 500);
        });
    }

    /* ---------- inline errors ---------- */

    function showError(field, message) {
        var wrapper = field.parentElement;
        var error = wrapper.parentElement.querySelector(".field-error");

        if (!error) {
            error = document.createElement("p");
            error.className = "field-error mt-1 text-xs text-red-600";
            wrapper.parentElement.appendChild(error);
        }

        error.textContent = message;
        field.classList.add("ring-2", "ring-red-200");
        field.setAttribute("aria-invalid", "true");
    }

    function clearError(field) {
        var error = field.parentElement.parentElement.querySelector(".field-error");
        if (error) { error.remove(); }
        field.classList.remove("ring-2", "ring-red-200");
        field.removeAttribute("aria-invalid");
    }
})();
