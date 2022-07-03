/* eslint-disable import/no-unresolved */
import Swiper, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  // direction: 'vertical',
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
