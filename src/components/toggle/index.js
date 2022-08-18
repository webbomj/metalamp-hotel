const toggleBlock = document.querySelectorAll('.js-toggle__Block');

const toggleClass = (e) => {
  const { target } = e;
  const toggleId = target.parentNode.dataset.toggle;

  toggleBlock.forEach((el) => {
    if (el.parentNode.dataset.toggle === toggleId) {
      el.firstChild.classList.toggle('toggle__Circle--active');
      el.classList.toggle('toggle__Block--active');
    }
  });
};

toggleBlock.forEach((el) => {
  el.addEventListener('click', (e) => toggleClass(e));
});
