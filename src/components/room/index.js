/* eslint-disable import/no-unresolved */
import Swiper, { Pagination, Navigation, HashNavigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Pagination, HashNavigation, Navigation],
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
});
