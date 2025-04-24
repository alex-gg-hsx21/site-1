const tabitem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabitem.forEach(function (element) {
  element.addEventListener("click", open);
});
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabitem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });
  tabTarget.classList.add("tabs__btn-item--active");
  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });
  document
    .querySelector(`#${button}`)
    .classList.add(`tabs__content-item--active`);
}



document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu__btn");
  const menuList = document.querySelector(".menu__list");
  const headerInner = document.querySelector(".header__inner");

  menuBtn.addEventListener("click", () => {
    // Переключаем активный класс у меню
    menuList.classList.toggle("menu__list--active");

    // Переключаем фон у header__inner
    headerInner.classList.toggle("header__inner--active");
  });
});
const swiper = new Swiper(".swiper", {
  effect: "face",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOninterection: false,
  },
});
