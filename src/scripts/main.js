'use strict';


const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  rtl: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});


const menu = document.getElementById("menu");
const openBtn = document.querySelector(".icon--menu");
const closeBtn = document.querySelector(".icon__close");
const menuLinks = document.querySelectorAll(".menu__link");


openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});


closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});


menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);


    targetSection.scrollIntoView({ behavior: "smooth" });


    menu.classList.remove("active");
  });
});


const themeToggle = document.getElementById('themeToggle');
const slider = themeToggle.querySelector('.header__switch--slider');
const MAX_MOVE = 23;
let isDragging = false;
let startX = 0;
let startPosition = 0;
let currentX = 0;

// Mouse events
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startPosition = currentX;
  slider.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  currentX = Math.max(0, Math.min(MAX_MOVE, startPosition + dx));
  slider.style.transform = `translateX(${currentX}px)`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  slider.style.transition = '0.25s';
  if (currentX > MAX_MOVE / 2) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});

// Touch events
slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startPosition = currentX;
  slider.style.transition = 'none';
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - startX;
  currentX = Math.max(0, Math.min(MAX_MOVE, startPosition + dx));
  slider.style.transform = `translateX(${currentX}px)`;
});

document.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;
  slider.style.transition = '0.25s';
  if (currentX > MAX_MOVE / 2) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});

const openMenuBtn = document.querySelector('.icon--menu');
const closeMenuBtn = document.querySelector('#menu-close');
// const menu = document.querySelector('.menu');

openMenuBtn.addEventListener('click', (e) => {
  e.preventDefault(); // щоб не стрибало по якірцю
  menu.classList.add('active');
  document.body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.classList.remove('no-scroll');
});