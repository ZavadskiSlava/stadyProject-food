import { openModal, closeModal } from "./modal";

import { postData } from "../services/services";

function postModalWindow(formSelector, timerModalId) {
  // post modal window info

  const forms = document.querySelectorAll(formSelector);

  const message = {
    loaing: "img/form/spinner.svg",
    success: "Отлично. Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так",
  };

  function binPostForm(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loaing;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          answerModalWindow(message.success);
          console.log(data);

          statusMessage.remove();
        })
        .catch(() => {
          answerModalWindow(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  forms.forEach((form) => binPostForm(form));

  function answerModalWindow(message) {
    const modalWindow = document.querySelector(".modal__dialog");
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    openModal(".modal", timerModalId);

    const answerDialog = document.createElement("div");
    answerDialog.classList.add("modal__dialog");
    answerDialog.innerHTML = `<div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>`;

    document.querySelector(".modal").append(answerDialog);

    setTimeout(() => {
      answerDialog.remove();
      modalWindow.classList.add("show");
      modalWindow.classList.remove("hide");
      closeModal(".modal");
    }, 4000);
  }
}

export default postModalWindow;
