'use strict';


const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  rtl: true,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
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

const btn = document.getElementById('themeToggle');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.className = "ri-moon-fill";
  } else {
    icon.className = "ri-cloud-fill";
  }
});;
