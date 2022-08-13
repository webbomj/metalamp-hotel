const filterButton = document.querySelector('.js-searchRoom__button');

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
