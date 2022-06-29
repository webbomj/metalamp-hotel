const toggleBlock = document.querySelector('.toggle__Block');

const toggleChange = () => {
  const toggleCircle = document.querySelector('.toggle__Circle');
  toggleCircle.classList.toggle('toggle__Circle--active');
  toggleBlock.classList.toggle('toggle__Block--active');
};

toggleBlock.addEventListener('click', () => toggleChange());
