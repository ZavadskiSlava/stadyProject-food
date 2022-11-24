function openModal(modalSelector, timerModalId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  if (timerModalId) {
    clearTimeout(timerModalId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");

  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, timerModalId) {
  // modal window

  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, timerModalId));
  });

  modalCloseBtn.addEventListener("click", () => closeModal(modalSelector));

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });

  function showModalWithScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, timerModalId);

      window.removeEventListener("scroll", showModalWithScroll);
    }
  }

  window.addEventListener("scroll", showModalWithScroll);
}

export default modal;
export { closeModal };
export { openModal };
