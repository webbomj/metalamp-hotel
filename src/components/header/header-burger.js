const allHeaders = document.querySelectorAll('.js-header[data-header]');

const handleBurgerPointer = (expandedMenu) => {
  expandedMenu.classList.toggle('header__dropdown-menu--active');
};

const setListeners = () => {
  [...allHeaders].forEach((el) => {
    const burgerButton = el.querySelector('.js-header__burger');
    const expandedMenu = el.querySelector('.js-header__dropdown-menu');
    burgerButton.addEventListener('click', () => handleBurgerPointer(expandedMenu));
  });
};

document.addEventListener('DOMContentLoaded', () => setListeners());
