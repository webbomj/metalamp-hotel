const allButtons = document.querySelectorAll('.likeButton');

const toggleLikeButtonClass = (el) => el.classList.toggle('likeButton__clicked');

allButtons.forEach((el) => {
  el.addEventListener('click', () => toggleLikeButtonClass(el));
});
