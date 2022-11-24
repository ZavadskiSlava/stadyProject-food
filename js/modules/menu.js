import { getMenuCards } from "../services/services";

function menu() {
  class Menu {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 2.5;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length == 0) {
        this.classes.push("menu__item");
      }
      this.classes.forEach((className) => element.classList.add(className));
      element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                    `;

      this.parent.append(element);
    }
  }

  getMenuCards("https://raw.githubusercontent.com/ZavadskiSlava/stadyProject-food/main/db.json").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new Menu(img, altimg, title, descr, price, ".menu .container").render();
    });
  });
}

export default menu;
