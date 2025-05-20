(() => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  openButtons.forEach(button => {
    const modalId = button.getAttribute("data-modal-open");
    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    button.addEventListener("click", () => {
      modal.classList.add("is-open");
      document.body.classList.add("no-scroll");
    });
  });

  closeButtons.forEach(button => {
    const modalId = button.getAttribute("data-modal-close");
    const modal = document.querySelector(`[data-modal="${modalId}"]`);

    button.addEventListener("click", () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
})();