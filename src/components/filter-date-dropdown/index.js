import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

import { createAirDatePickerOptions, converseDate } from '../air-date-picker/index';

const mainBlock = document.querySelectorAll('.js-filter-date-dropdown__main');
const airDatePickerBlocks = document.querySelectorAll('.js-filter-date-dropdown__close');

// eslint-disable-next-line no-return-assign, no-param-reassign
const changeTitle = (el, dateString = '') => (el.value = dateString);

const toggleAirDatePicker = (el) => {
  const airDatePickerNode = el.parentNode.parentNode.parentNode.querySelector(
    '.js-filter-date-dropdown__close'
  );
  airDatePickerNode.classList.toggle('filter-date-dropdown__date-open');
};

const closeAirDatePickerToggle = ({ $datepicker }) => {
  const datePickerNode = $datepicker.parentNode;

  datePickerNode.classList.toggle('filter-date-dropdown__date-open');
};

const selectDate = (formDate, datePicker) => {
  const datePickerNode = datePicker.$datepicker.parentNode;
  const currentInput = datePickerNode.parentNode.querySelector(
    '.js-filter-date-dropdown__main .text-field__input'
  );

  if (formDate.length === 0) {
    changeTitle(currentInput);
  } else if (formDate.length === 2) {
    changeTitle(currentInput, converseDate(formDate).resultDate);
  }
};

[...mainBlock].forEach((el) => el.addEventListener('click', () => toggleAirDatePicker(el)));

[...airDatePickerBlocks].forEach((el) => {
  // eslint-disable-next-line no-unused-vars
  const airDatePickerInst = new AirDatepicker(
    el,
    createAirDatePickerOptions(selectDate, closeAirDatePickerToggle)
  );
});
