const form = document.querySelector('.js-find-rooms');

const stopFormSubmit = (e) => {
  e.preventDefault();
};
if (form) {
  form.addEventListener('submit', (e) => stopFormSubmit(e));
}
