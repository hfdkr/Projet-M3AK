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
        var lastStepFields = document.querySelectorAll('.ob-step[data-step="' + TOTAL_STEPS + '"] input, .ob-step[data-step="' + TOTAL_STEPS + '"] select');

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
            if (nextBtn.disabled) { return; }
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

        /* Skip moves forward one step at a time, same as Next but without
           requiring that step's fields — it never jumps straight out of
           onboarding. On the last step it's gated exactly like Next (see
           updateFinalStepGate): an untouched final step blocks both. */
        skipBtn.addEventListener("click", function () {
            if (skipBtn.disabled) { return; }
            hideError();
            save();

            if (step < TOTAL_STEPS) {
                step += 1;
                render();
                return;
            }

            window.location.href = "/pages/app/home.html";
        });

        lastStepFields.forEach(function (field) {
            field.addEventListener("input", updateFinalStepGate);
            field.addEventListener("change", updateFinalStepGate);
        });

        function lastStepHasAnyValue() {
            for (var i = 0; i < lastStepFields.length; i++) {
                if (lastStepFields[i].value && lastStepFields[i].value.trim()) { return true; }
            }
            return false;
        }

        /* On the final step, an entirely empty step blocks both Skip and
           Next — only Back stays available — so onboarding can't be
           finished without at least starting the last step. */
        function updateFinalStepGate() {
            var locked = step === TOTAL_STEPS && !lastStepHasAnyValue();
            nextBtn.disabled = locked;
            skipBtn.disabled = locked;
        }

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
            window.M3akI18n.setKey(nextBtn, step === TOTAL_STEPS ? "onboarding.finish" : "common.next");
            updateFinalStepGate();
        }

        /* Contact phone accepts digits only (plus the usual phone punctuation:
           + ( ) spaces and dashes). Letters are dropped as they are typed
           rather than rejected later, so the field can never hold a non-number. */
        var phoneInput = document.getElementById("emergencyPhone");
        if (phoneInput) {
            phoneInput.addEventListener("input", function () {
                var cleaned = phoneInput.value.replace(/[^0-9+()\s-]/g, "");
                if (cleaned === phoneInput.value) { return; }
                /* Keep the caret where the user left it after stripping. */
                var removed = phoneInput.value.length - cleaned.length;
                var caret = Math.max(0, (phoneInput.selectionStart || 0) - removed);
                phoneInput.value = cleaned;
                phoneInput.setSelectionRange(caret, caret);
            });
        }

        function validateStep(n) {
            var stepEl = document.querySelector('.ob-step[data-step="' + n + '"]');
            var required = stepEl.querySelectorAll("[required]");
            for (var i = 0; i < required.length; i++) {
                if (!required[i].value.trim()) {
                    var label = required[i].previousElementSibling;
                    showError(window.M3akI18n.t("onboarding.fillIn", {
                        field: label ? label.textContent.trim() : window.M3akI18n.t("onboarding.thisField")
                    }));
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
