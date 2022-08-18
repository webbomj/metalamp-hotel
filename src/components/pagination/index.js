import jQuery from 'jquery';

window.jQuery = jQuery;
require('paginationjs');

const pagination = document.querySelector('.js-pagination');

const defineNavigatorText = (currentPage) =>
  `${currentPage * 12 - 11} - ${currentPage * 12} из 100+ вариантов аренды`;

if (pagination) {
  jQuery('.js-pagination').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17],
    pageSize: 1,
    pageRange: 1,
    autoHidePrevious: true,
    className: 'paginationjs-theme-blue',
    nextText: '',
    prevText: '',
    showNavigator: true,
    formatNavigator: defineNavigatorText,
  });
}
