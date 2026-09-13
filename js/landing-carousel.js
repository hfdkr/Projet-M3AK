(function () {
    "use strict";

    var TOTAL_STEPS = 3;
    var AUTO_ADVANCE_MS = 5000;
    var step = 1;
    var autoAdvanceTimer = null;

    document.addEventListener("DOMContentLoaded", function () {
        var steps = document.querySelectorAll(".onboarding-step[data-step]");
        var skipBtn = document.getElementById("skip-btn");
        if (!steps.length) { return; }

        fillActionSlots();

        document.querySelectorAll(".carousel-indicators [data-goto]").forEach(function (dot) {
            dot.addEventListener("click", function () {
                goToStep(Number(dot.dataset.goto));
                restartAutoAdvance();
            });
        });

        if (skipBtn) {
            skipBtn.addEventListener("click", function () {
                goToStep(TOTAL_STEPS);
                restartAutoAdvance();
            });
        }

        render();
        restartAutoAdvance();

        function goToStep(n) {
            step = Math.min(TOTAL_STEPS, Math.max(1, n));
            render();
        }

        function restartAutoAdvance() {
            if (window.innerWidth >= 768) { return; }
            clearInterval(autoAdvanceTimer);
            autoAdvanceTimer = setInterval(function () {
                goToStep(step === TOTAL_STEPS ? 1 : step + 1);
            }, AUTO_ADVANCE_MS);
        }

        function render() {
            steps.forEach(function (section) {
                section.classList.toggle("hidden", Number(section.dataset.step) !== step);
            });
            document.querySelectorAll(".carousel-indicators").forEach(function (group) {
                group.querySelectorAll("[data-goto]").forEach(function (dot) {
                    var isActive = Number(dot.dataset.goto) === step;
                    dot.classList.toggle("indicator-active", isActive);
                    dot.classList.toggle("indicator", !isActive);
                });
            });
        }

        function fillActionSlots() {
            var source = document.getElementById("hero-actions-source");
            if (!source) { return; }
            document.querySelectorAll(".hero-actions-slot").forEach(function (slot) {
                var clone = source.cloneNode(true);
                clone.removeAttribute("id");
                slot.appendChild(clone);
            });
        }
    });
})();
