(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        /* Always show the signup form and require the fields to be filled in —
           no auto sign-in, even if a previous session is still stored. */
        setupForm();
    });

    function setupForm() {
        var form = document.querySelector(".signup-form");
        if (!form) { return; }

        var fullName = document.getElementById("fullName");
        var cni = document.getElementById("cni");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var submit = form.querySelector('button[type="submit"]');

        [fullName, cni, email, phone].forEach(function (field) {
            if (field) {
                field.addEventListener("input", function () { clearError(field); });
            }
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var valid = true;

            if (!fullName.value.trim()) {
                showError(fullName, "auth.errors.fullName");
                valid = false;
            }

            if (!/^[A-Za-z]{1,2}\d{5,7}$/.test(cni.value.trim())) {
                showError(cni, "auth.errors.idFormat");
                valid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
                showError(email, "auth.errors.validEmail");
                valid = false;
            }

            if (phone.value.trim().replace(/[^\d+]/g, "").length < 9) {
                showError(phone, "auth.errors.validPhone");
                valid = false;
            }

            if (!valid) { return; }

            submit.disabled = true;
            submit.classList.add("opacity-70");
            window.M3akI18n.setKey(submit, "auth.signup.creating");

            window.setTimeout(function () {
                window.M3ak.signIn({ name: fullName.value.trim(), email: email.value.trim() });
                window.location.href = "/pages/auth/onboarding.html";
            }, 500);
        });
    }

    /* `messageKey` is a translations.js key (re-translated on language switch). */
    function showError(field, messageKey) {
        var wrap = field.closest(".signup-field-wrap") || field.parentElement;
        var error = wrap.parentElement.querySelector(".field-error");

        if (!error) {
            error = document.createElement("p");
            error.className = "field-error mt-1 text-xs text-red-600";
            wrap.parentElement.appendChild(error);
        }

        window.M3akI18n.setKey(error, messageKey);
        field.classList.add("ring-2", "ring-red-200");
    }

    function clearError(field) {
        var wrap = field.closest(".signup-field-wrap") || field.parentElement;
        var error = wrap.parentElement.querySelector(".field-error");
        if (error) { error.remove(); }
        field.classList.remove("ring-2", "ring-red-200");
    }
})();
