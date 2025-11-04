'use strict';
const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  rtl:true,
  autoplay: {
    delay: 190000000,
  },
  navigation: {
    prevEl: '.swiper-button-next', 
    nextEl: '.swiper-button-prev',
  },
});