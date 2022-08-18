const toggleBlock = document.querySelectorAll('.js-toggle__block');

const toggleClass = (e) => {
  const { target } = e;
  const toggleId = target.parentNode.dataset.toggle;

  toggleBlock.forEach((el) => {
    if (el.parentNode.dataset.toggle === toggleId) {
      el.firstChild.classList.toggle('toggle__circle--active');
      el.classList.toggle('toggle__block--active');
    }
  });
};

toggleBlock.forEach((el) => {
  el.addEventListener('click', (e) => toggleClass(e));
});
