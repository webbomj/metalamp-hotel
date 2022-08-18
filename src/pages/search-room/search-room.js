const filterButton = document.querySelector('.js-search-room__button');
const formSearchRoom = document.querySelector('.js-search-room__form');

const handleButtonPointerdown = () => {
  const dropdownFilterMenu = document.querySelector('.js-search-room__dropdown-filter');
  dropdownFilterMenu.classList.toggle('search-room__dropdown-filter--active');
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
