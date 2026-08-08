/* ==========================================================
   M3ak Morocco — signup.js
   Dépend de session.js et auth-store.js, chargés avant lui.
========================================================== */
(function () {
    "use strict";

    var form = document.getElementById("signupForm");
    var fullName = document.getElementById("fullName");
    var email = document.getElementById("email");
    var nationalId = document.getElementById("nationalId");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var city = document.getElementById("city");
    var phone = document.getElementById("phone");
    var terms = document.getElementById("terms");
    var errorBox = document.getElementById("formError");
    var submitBtn = document.getElementById("submitBtn");

    var CITIZEN_HOME = "/pages/dashboard/overview.html";

    /* Déjà connecté : le formulaire n'a plus d'objet */
    if (window.M3ak && M3ak.getUser()) {
        window.location.replace(CITIZEN_HOME);
        return;
    }

    /* ------------------------------------------------------
       Messages d'erreur
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

    [fullName, email, nationalId, password, confirmPassword, city, phone].forEach(function (el) {
        if (el) el.addEventListener("input", clearError);
    });

    if (terms) terms.addEventListener("change", clearError);

    function setBusy(busy) {
        if (!submitBtn) return;
        submitBtn.disabled = busy;
        submitBtn.classList.toggle("opacity-60", busy);
    }

    /* Précharge la base pendant la saisie. */
    if (window.M3akAuth) {
        M3akAuth.ready().catch(function () { /* signalé à la soumission */ });
    }

    /* ------------------------------------------------------
       Soumission

       auth-store.js valide déjà le format des champs et les
       doublons ; on ne traite ici que ce qui lui échappe :
       la concordance des deux mots de passe et les conditions.
    ------------------------------------------------------ */
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            clearError();

            if (password.value !== confirmPassword.value) {
                showError("Both passwords must match.", confirmPassword);
                return;
            }

            if (terms && !terms.checked) {
                showError("Accept the Terms of Service to continue.", terms);
                return;
            }

            if (!window.M3akAuth) {
                showError("The account directory failed to load. Refresh the page and try again.");
                return;
            }

            setBusy(true);

            M3akAuth.register({
                name: fullName.value,
                email: email.value,
                nationalId: nationalId.value,
                password: password.value,
                city: city ? city.value : "",
                phone: phone ? phone.value : ""
            })
                .then(function (user) {
                    M3ak.signIn({ name: user.name, email: user.email });
                    window.location.href = CITIZEN_HOME;
                })
                .catch(function (error) {
                    setBusy(false);
                    showError(error.message || "We couldn't create your account. Try again.");
                });
        });
    }

    /* ------------------------------------------------------
       Affichage des mots de passe
    ------------------------------------------------------ */
    document.querySelectorAll("[data-toggle-password]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var field = document.getElementById(btn.getAttribute("data-toggle-password"));
            if (!field) return;

            var shown = field.type === "text";
            field.type = shown ? "password" : "text";
            btn.setAttribute("aria-pressed", String(!shown));

            var label = btn.querySelector(".sr-only");
            if (label) label.textContent = shown ? "Show password" : "Hide password";
        });
    });
})();
