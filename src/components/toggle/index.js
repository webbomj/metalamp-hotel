const toggleBlock = document.querySelectorAll('.toggle__Block');

const toggleChange = (e) => {
  const { target } = e;
  const toggleId = target.dataset.toggle;
  const toggleCircle = target.firstChild;

  toggleBlock.forEach((el) => {
    if (el.dataset.toggle === toggleId) {
      toggleCircle.classList.toggle('toggle__Circle--active');
      toggleBlock.classList.toggle('toggle__Block--active');
    }
  });
};

toggleBlock.forEach((el) => {
  el.addEventListener('click', (e) => toggleChange(e));
});
