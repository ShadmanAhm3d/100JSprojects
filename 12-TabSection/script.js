document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons-tabs button");
  const steps = document.querySelectorAll(".actual-step");

  function updateDOM(stepIndex) {
    // Remove "active" from all steps & buttons
    document.querySelector(".actual-step.active")?.classList.remove("active");
    document.querySelector(".button-active")?.classList.remove("button-active");

    // Add "active" class to the selected step
    steps[stepIndex].classList.add("active");
    buttons[stepIndex].classList.add("button-active");
  }

  // Event delegation - single event listener
  document.querySelector(".buttons-tabs").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = [...buttons].indexOf(e.target);
      updateDOM(index);
    }
  });

  // Set initial state
  updateDOM(0);
});

