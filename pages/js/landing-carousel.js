(function () {
    "use strict";

    var TOTAL_STEPS = 3;
    var SWIPE_THRESHOLD = 40;
    var step = 1;

    document.addEventListener("DOMContentLoaded", function () {
        var steps = document.querySelectorAll(".onboarding-step[data-step]");
        var skipBtn = document.getElementById("skip-btn");
        var main = document.querySelector("main");
        if (!steps.length) { return; }

        fillActionSlots();

        document.querySelectorAll(".carousel-indicators [data-goto]").forEach(function (dot) {
            dot.addEventListener("click", function () {
                goToStep(Number(dot.dataset.goto));
            });
        });

        if (skipBtn) {
            skipBtn.addEventListener("click", function () {
                goToStep(TOTAL_STEPS);
            });
        }

        if (main) {
            enableSwipe(main);
        }

        render();

        function goToStep(n) {
            step = Math.min(TOTAL_STEPS, Math.max(1, n));
            render();
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

        function enableSwipe(target) {
            var startX = 0;
            var startY = 0;
            var tracking = false;

            target.addEventListener("touchstart", function (e) {
                if (window.innerWidth >= 768) { return; }
                var touch = e.touches[0];
                startX = touch.clientX;
                startY = touch.clientY;
                tracking = true;
            }, { passive: true });

            target.addEventListener("touchend", function (e) {
                if (!tracking) { return; }
                tracking = false;
                var touch = e.changedTouches[0];
                var deltaX = touch.clientX - startX;
                var deltaY = touch.clientY - startY;

                if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
                    return;
                }

                if (deltaX < 0) {
                    goToStep(step + 1);
                } else {
                    goToStep(step - 1);
                }
            }, { passive: true });
        }
    });
})();
