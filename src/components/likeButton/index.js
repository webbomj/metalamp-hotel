const allButtons = document.querySelectorAll('.likeButton');

allButtons.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('likeButton__clicked');
  });
});
