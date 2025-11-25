'use strict';

//Swiper
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

// menu Button
const menu = document.getElementById("menu");
const openBtn = document.querySelector(".icon--menu");
const closeBtn = document.querySelector(".icon__close");
const menuLinks = document.querySelectorAll(".menu__link");

// Відкриття меню
openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

// Закриття меню через хрестик
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Закриття меню при кліку на лінку та плавний скролл
menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // запобігає різкому стрибку
    const targetId = link.getAttribute("href").substring(1); // отримуємо id секції
    const targetSection = document.getElementById(targetId);

    // Плавний скролл до секції
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Закриваємо меню
    menu.classList.remove("active");
  });
});

// Switch Button
const themeToggle = document.getElementById('themeToggle');
const slider = themeToggle.querySelector('.header__switch--slider');
const icon = slider.querySelector('i');

// максимальний рух повзунка (під ширину)
const MAX_MOVE = 20;

// змінні для drag
let isDragging = false;
let startX = 0;
let currentX = 0;

/* ---------------- CLICK ---------------- */
themeToggle.addEventListener('click', () => {
  // Якщо ми тільки що тягнули – клік ігноруємо
  if (isDragging) return;

  document.body.classList.toggle('dark-theme');
  updateIcon();
});

/* ---------------- DRAG ---------------- */

// початок перетягування
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  slider.style.transition = 'none';
});

// рух миші
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;

  // обмежуємо повзунок
  currentX = Math.max(0, Math.min(MAX_MOVE, dx));

  slider.style.transform = `translateX(${currentX}px)`;
});

// відпускання
document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;

  slider.style.transition = '0.25s';

  // якщо перетягнули більше половини – темна тема
  if (currentX > MAX_MOVE / 2) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  updateIcon();
});

/* ---------------- UPDATE ICON + POSITION ---------------- */

function updateIcon() {
  if (document.body.classList.contains('dark-theme')) {
    icon.className = "ri-cloud-fill";
    slider.style.transform = `translateX(${MAX_MOVE}px)`;
  } else {
    icon.className = "ri-moon-fill";
    slider.style.transform = `translateX(0px)`;
  }
}



