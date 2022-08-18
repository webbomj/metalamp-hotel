const filterButton = document.querySelector('.js-searchRoom__button');
const formSearchRoom = document.querySelector('.js-searchRoom__form');

const handleButtonPointerdown = () => {
  const dropdownFilterMenu = document.querySelector('.js-searchRoom__dropdown-filter');
  dropdownFilterMenu.classList.toggle('searchRoom__dropdown-filter--active');
};

const setFilterButtonListener = () => {
  filterButton.addEventListener('pointerdown', () => handleButtonPointerdown());
};

if (filterButton) {
  document.addEventListener('DOMContentLoaded', () => setFilterButtonListener());
}

const stopFormSubmit = (e) => {
  e.preventDefault();
};

if (formSearchRoom) {
  document.addEventListener('submit', (e) => stopFormSubmit(e));
}
