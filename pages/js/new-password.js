(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        setupToggles();
        setupValidation();
    });

    /* ---------- show / hide password ---------- */

    function setupToggles() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-toggle]"), function (button) {
            var input = document.getElementById(button.getAttribute("data-toggle"));
            if (!input) { return; }

            button.addEventListener("click", function () {
                var hidden = input.type === "password";
                input.type = hidden ? "text" : "password";

                var open = button.querySelector(".eye-open");
                var closed = button.querySelector(".eye-closed");
                if (open) { open.classList.toggle("hidden", hidden); }
                if (closed) { closed.classList.toggle("hidden", !hidden); }

                button.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
            });
        });
    }

    /* ---------- live requirement checks + submit ---------- */

    function setupValidation() {
        var newPassword = document.getElementById("newPassword");
        var confirmPassword = document.getElementById("confirmPassword");
        var matchError = document.getElementById("matchError");
        var resetBtn = document.getElementById("resetBtn");

        if (!newPassword || !confirmPassword || !resetBtn) { return; }

        var rules = {
            length: function (value) { return value.length >= 8; },
            number: function (value) { return /\d/.test(value); },
            special: function (value) { return /[!@#$%^&*]/.test(value); }
        };

        function paintRules(value) {
            var allValid = true;

            Object.keys(rules).forEach(function (key) {
                var item = document.querySelector('[data-rule="' + key + '"]');
                if (!item) { return; }

                var passed = rules[key](value);
                if (!passed) { allValid = false; }

                var icon = item.querySelector(".rule-icon");
                var text = item.querySelector(".rule-text");

                if (icon) {
                    icon.classList.toggle("bg-emerald-600", passed);
                    icon.classList.toggle("border-emerald-600", passed);
                    icon.classList.toggle("border-gray-300", !passed);
                    icon.classList.toggle("dark:border-night-600", !passed);
                    icon.innerHTML = passed
                        ? '<svg class="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                        : "";
                }
                if (text) {
                    text.classList.toggle("text-gray-400", !passed);
                    text.classList.toggle("dark:text-mist-300", !passed);
                    text.classList.toggle("text-emerald-700", passed);
                    text.classList.toggle("dark:text-accent-400", passed);
                }
            });

            return allValid;
        }

        function paintMatch() {
            var matches = confirmPassword.value.length === 0 || confirmPassword.value === newPassword.value;
            if (matchError) { matchError.classList.toggle("hidden", matches); }
            return matches;
        }

        function refresh() {
            var allValid = paintRules(newPassword.value);
            var matches = paintMatch();
            var ready = allValid && matches && confirmPassword.value.length > 0;
            resetBtn.disabled = !ready;
            resetBtn.classList.toggle("opacity-50", !ready);
            resetBtn.classList.toggle("cursor-not-allowed", !ready);
        }

        newPassword.addEventListener("input", refresh);
        confirmPassword.addEventListener("input", refresh);
        refresh();

        resetBtn.addEventListener("click", function () {
            if (resetBtn.disabled) { return; }

            resetBtn.disabled = true;
            resetBtn.textContent = "Redirecting to Log in...";

            window.setTimeout(function () {
                window.location.href = "/pages/auth/login.html";
            }, 700);
        });
    }
})();
