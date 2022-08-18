const form = document.querySelector('.js-findRooms');

const stopFormSubmit = (e) => {
  e.preventDefault();
};
if (form) {
  form.addEventListener('submit', (e) => stopFormSubmit(e));
}
