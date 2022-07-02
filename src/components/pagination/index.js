import jQuery from 'jquery';

window.jQuery = jQuery;
require('paginationjs');

const pagination = document.querySelector('#pagination');

// function template(data) {
//   let html = '<ul>';
//   jQuery.each(data, (index, item) => {
//     html += `<li>${item}</li>`;
//   });
//   html += '</ul>';
//   return html;
// }

const defineNavigatorText = (currentPage) =>
  `${currentPage * 12 - 11} - ${currentPage * 12} из 100+ вариантов аренды`;

if (pagination) {
  jQuery('#pagination').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17],
    pageSize: 1,
    pageRange: 1,
    autoHidePrevious: true,
    className: 'paginationjs-theme-blue',
    nextText: '',
    prevText: '',
    showNavigator: true,
    formatNavigator: defineNavigatorText,
    // callback(data) {
    //   const html = template(data);

    //   jQuery('#data-container').html(html);
    // },
  });
}
