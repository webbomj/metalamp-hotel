import jQuery from 'jquery';

window.jQuery = jQuery;
require('paginationjs');

// function template(data) {
//   let html = '<ul>';
//   jQuery.each(data, (index, item) => {
//     html += `<li>${item}</li>`;
//   });
//   html += '</ul>';
//   return html;
// }

jQuery('#pagination').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  pageSize: 1,
  pageRange: 1,
  autoHidePrevious: true,
  className: 'paginationjs-theme-blue',
  nextText: '',
  prevText: '',
  // callback(data) {
  //   const html = template(data);

  //   jQuery('#data-container').html(html);
  // },
});
