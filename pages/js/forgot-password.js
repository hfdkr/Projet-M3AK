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
                showError(identifier, "Enter your National ID or email.");
                return;
            }

            submit.disabled = true;
            submit.textContent = "Sending reset link...";
            submit.classList.add("opacity-70");

            /* Demo: no backend/email yet — go straight to the reset step */
            window.setTimeout(function () {
                window.location.href = "/pages/auth/new-password.html";
            }, 700);
        });
    });

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
    }

    function clearError(field) {
        var error = field.parentElement.parentElement.querySelector(".field-error");
        if (error) { error.remove(); }
        field.classList.remove("ring-2", "ring-red-200");
    }
})();
