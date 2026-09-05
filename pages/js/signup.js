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
                showError(fullName, "Enter your full name.");
                valid = false;
            }

            if (!/^[A-Za-z]{1,2}\d{5,7}$/.test(cni.value.trim())) {
                showError(cni, "National ID looks like AB123456.");
                valid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
                showError(email, "Enter a valid email address.");
                valid = false;
            }

            if (phone.value.trim().replace(/[^\d+]/g, "").length < 9) {
                showError(phone, "Enter a valid phone number.");
                valid = false;
            }

            if (!valid) { return; }

            submit.disabled = true;
            submit.classList.add("opacity-70");
            submit.firstChild.textContent = "Creating account...";

            window.setTimeout(function () {
                window.M3ak.signIn({ name: fullName.value.trim(), email: email.value.trim() });
                window.location.href = "/pages/app/overview.html";
            }, 500);
        });
    }

    function showError(field, message) {
        var wrap = field.closest(".signup-field-wrap") || field.parentElement;
        var error = wrap.parentElement.querySelector(".field-error");

        if (!error) {
            error = document.createElement("p");
            error.className = "field-error mt-1 text-xs text-red-600";
            wrap.parentElement.appendChild(error);
        }

        error.textContent = message;
        field.classList.add("ring-2", "ring-red-200");
    }

    function clearError(field) {
        var wrap = field.closest(".signup-field-wrap") || field.parentElement;
        var error = wrap.parentElement.querySelector(".field-error");
        if (error) { error.remove(); }
        field.classList.remove("ring-2", "ring-red-200");
    }
})();
