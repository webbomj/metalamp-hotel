const form = document.querySelector('.js-booking');

const stopFormSubmit = (e) => {
  e.preventDefault();
};
if (form) {
  form.addEventListener('submit', (e) => stopFormSubmit(e));
}
