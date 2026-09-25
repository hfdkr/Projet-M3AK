(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("forgot-form");
        if (!form) { return; }

        var identifier = document.getElementById("identifier");
        var submit = form.querySelector('button[type="submit"]');

        identifier.addEventListener("input", function () { clearError(identifier); });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var value = identifier.value.trim();
            if (!value) {
                showError(identifier, "auth.errors.enterIdentifier");
                return;
            }

            submit.disabled = true;
            window.M3akI18n.setKey(submit, "auth.forgot.sending");
            submit.classList.add("opacity-70");

            /* Demo: no backend/email yet — go straight to the reset step */
            window.setTimeout(function () {
                window.location.href = "/pages/auth/reset-password.html";
            }, 700);
        });
    });

    /* `messageKey` is a translations.js key (re-translated on language switch). */
    function showError(field, messageKey) {
        var wrapper = field.parentElement;
        var error = wrapper.parentElement.querySelector(".field-error");

        if (!error) {
            error = document.createElement("p");
            error.className = "field-error mt-1 text-xs text-red-600";
            wrapper.parentElement.appendChild(error);
        }

        window.M3akI18n.setKey(error, messageKey);
        field.classList.add("ring-2", "ring-red-200");
    }

    function clearError(field) {
        var error = field.parentElement.parentElement.querySelector(".field-error");
        if (error) { error.remove(); }
        field.classList.remove("ring-2", "ring-red-200");
    }
})();
