'use strict';
const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  rtl: true,

  navigation: {
    prevEl: '.swiper-button-next',
    nextEl: '.swiper-button-prev',
  },
});

const menu = document.getElementById("menu");
const openBtn = document.querySelector(".icon--menu");
const closeBtn = document.querySelector(".icon__close");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

