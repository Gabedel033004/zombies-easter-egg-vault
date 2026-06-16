document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const game = btn.dataset.game;

      // Update tabs
      tabBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      // Update panels
      panels.forEach((p) => p.classList.remove("active"));
      const target = document.getElementById("panel-" + game);
      if (target) target.classList.add("active");

      // Update URL without full reload
      window.history.pushState({}, "", "/game/" + game);
    });
  });
});
