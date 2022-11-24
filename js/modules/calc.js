function calc() {
  // Calc

  const result = document.querySelector(".calculating__result span");
  let gender, height, weight, age, ratio;

  if (localStorage.getItem("gender")) {
    gender = localStorage.getItem("gender");
  } else {
    gender = "fermale";
    localStorage.setItem("gender", "fermale");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function initLocalStorage(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute("id") === localStorage.getItem("gender")) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalStorage("#gender div", "calculating__choose-item_active");
  initLocalStorage(
    ".calculating__choose_big  div",
    "calculating__choose-item_active"
  );

  function calcTotal() {
    if (!gender || !height || !weight || !age || !ratio) {
      result.textContent = "____";
      return;
    }

    if (gender === "fermale") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();
  function getStaticInf(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          gender = e.target.getAttribute("id");
          localStorage.setItem("gender", e.target.getAttribute("id"));
        }

        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);

        calcTotal();
      });
    });
  }

  getStaticInf("#gender div", "calculating__choose-item_active");
  getStaticInf(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDynamicInf(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }
  getDynamicInf("#height");
  getDynamicInf("#weight");
  getDynamicInf("#age");
}

export default calc;
