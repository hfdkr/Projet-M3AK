(function () {
  "use strict";

  // Final page after onboarding
  const FINAL_PAGE = "./pages/overview.htm";

  // Total onboarding steps
  const TOTAL_STEPS = 3;
  let currentStep = 1;

  // Initialize onboarding when page loads
  document.addEventListener("DOMContentLoaded", () => {
    cloneHeroActions();
    showStep(currentStep);
    setupSkipButton();
    setupIndicators();
    setupGetStartedButtons();
    setupResponsiveReset();
  });

  // Reset to first step on desktop screens
  function setupResponsiveReset() {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => {
      if (e.matches) showStep(1);
    };

    desktopQuery.addEventListener("change", handleChange);
    handleChange(desktopQuery);
  }

  // Duplicate hero action buttons for each slide
  function cloneHeroActions() {
    const source = document.getElementById("hero-actions-source");
    if (!source) return;

    document.querySelectorAll(".hero-actions-slot").forEach((slot) => {
      const clone = source.cloneNode(true);
      clone.removeAttribute("id");
      slot.replaceWith(clone);
    });
  }

  // Handle Skip button navigation
  function setupSkipButton() {
    const skipBtn = document.getElementById("skip-btn");
    if (!skipBtn) return;

    skipBtn.addEventListener("click", () => {
      const next = currentStep < TOTAL_STEPS ? currentStep + 1 : 1;
      showStep(next);
    });
  }

  // Enable step indicator navigation
  function setupIndicators() {
    document
      .querySelectorAll(
        ".carousel-indicators .indicator, .carousel-indicators .indicator-active"
      )
      .forEach((dot) => {
        dot.addEventListener("click", () => {
          const target = parseInt(dot.getAttribute("data-goto"), 10);
          if (target) showStep(target);
        });
      });
  }

  // Placeholder for Get Started button
  function setupGetStartedButtons() {}

  // Display the selected onboarding step
  function showStep(step) {
    if (step < 1 || step > TOTAL_STEPS) return;
    currentStep = step;

    // Toggle visible section
    document.querySelectorAll(".onboarding-step").forEach((section) => {
      const sectionStep = parseInt(section.getAttribute("data-step"), 10);
      section.classList.toggle("hidden", sectionStep !== step);
    });

    // Update active indicator
    document.querySelectorAll(".carousel-indicators").forEach((row) => {
      row.querySelectorAll(".indicator, .indicator-active").forEach((dot) => {
        const dotStep = parseInt(dot.getAttribute("data-goto"), 10);

        dot.classList.remove("indicator", "indicator-active");
        dot.classList.add(
          dotStep === step ? "indicator-active" : "indicator"
        );
      });
    });
  }
})();