import calc from "./modules/calc";
import menu from "./modules/menu";
import modal from "./modules/modal";
import postModal from "./modules/postModal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
  const timerModalId = setTimeout(
    () => openModal(".modal", timerModalId),
    50000
  );

  calc();
  menu();
  modal("[data-modal]", ".modal", timerModalId);
  postModal("form", timerModalId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer("2022-12-01", ".timer");
});
