(function () {
    "use strict";

    var TOTAL_STEPS = 3;
    var step = 1;

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("onboardingForm");
        if (!form) { return; }

        var backBtn = document.getElementById("obBack");
        var nextBtn = document.getElementById("obNext");
        var skipBtn = document.getElementById("obSkip");
        var errorEl = document.getElementById("obError");

        /* Prefill from any partial profile already saved (e.g. user came back
           after skipping, or edited elsewhere and re-entered onboarding). */
        prefill();
        render();

        backBtn.addEventListener("click", function () {
            hideError();
            step = Math.max(1, step - 1);
            render();
        });

        nextBtn.addEventListener("click", function () {
            if (!validateStep(step)) { return; }
            hideError();

            if (step < TOTAL_STEPS) {
                step += 1;
                render();
                return;
            }

            save();
            window.location.href = "/pages/app/home.html";
        });

        skipBtn.addEventListener("click", function () {
            save();
            window.location.href = "/pages/app/home.html";
        });

        function render() {
            document.querySelectorAll(".ob-step").forEach(function (el) {
                el.classList.toggle("is-active", Number(el.dataset.step) === step);
            });
            document.querySelectorAll(".ob-dot").forEach(function (dot) {
                var n = Number(dot.dataset.dot);
                dot.classList.toggle("is-active", n === step);
                dot.classList.toggle("is-done", n < step);
            });
            backBtn.classList.toggle("invisible", step === 1);
            nextBtn.textContent = step === TOTAL_STEPS ? "Finish Setup" : "Next";
        }

        function validateStep(n) {
            var stepEl = document.querySelector('.ob-step[data-step="' + n + '"]');
            var required = stepEl.querySelectorAll("[required]");
            for (var i = 0; i < required.length; i++) {
                if (!required[i].value.trim()) {
                    showError("Please fill in " + (required[i].previousElementSibling ? required[i].previousElementSibling.textContent : "this field") + ".");
                    required[i].focus();
                    return false;
                }
            }
            return true;
        }

        function showError(message) {
            errorEl.textContent = message;
            errorEl.classList.remove("hidden");
        }

        function hideError() {
            errorEl.classList.add("hidden");
        }

        function val(id) {
            var el = document.getElementById(id);
            return el ? el.value.trim() : "";
        }

        function prefill() {
            var profile = window.M3ak.getProfile();
            var personal = profile.personal || {};
            var location = profile.location || {};
            var medical = profile.medical || {};
            var contact = profile.emergencyContact || {};

            if (personal.dob) document.getElementById("dob").value = personal.dob;
            if (personal.gender) document.getElementById("gender").value = personal.gender;
            if (personal.motherTongue) document.getElementById("motherTongue").value = personal.motherTongue;
            if (location.country) document.getElementById("country").value = location.country;
            if (location.city) document.getElementById("city").value = location.city;
            if (medical.weight) document.getElementById("weight").value = medical.weight;
            if (medical.bloodType) document.getElementById("bloodType").value = medical.bloodType;
            if (medical.allergies) document.getElementById("allergies").value = medical.allergies;
            if (medical.medications) document.getElementById("medications").value = medical.medications;
            if (contact.name) document.getElementById("emergencyName").value = contact.name;
            if (contact.relation) document.getElementById("emergencyRelation").value = contact.relation;
            if (contact.phone) document.getElementById("emergencyPhone").value = contact.phone;
        }

        function save() {
            window.M3ak.updateProfile({
                personal: {
                    dob: val("dob"),
                    gender: val("gender"),
                    motherTongue: val("motherTongue")
                },
                location: {
                    country: val("country"),
                    city: val("city")
                },
                medical: {
                    weight: val("weight"),
                    bloodType: val("bloodType"),
                    allergies: val("allergies"),
                    medications: val("medications")
                },
                emergencyContact: {
                    name: val("emergencyName"),
                    relation: val("emergencyRelation"),
                    phone: val("emergencyPhone")
                }
            });
        }
    });
})();
