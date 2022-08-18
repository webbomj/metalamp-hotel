const allButtons = document.querySelectorAll('.js-like-button');

const toggleLikeButtonClass = (el) => el.classList.toggle('like-button__clicked');

allButtons.forEach((el) => {
  el.addEventListener('click', () => toggleLikeButtonClass(el));
});
