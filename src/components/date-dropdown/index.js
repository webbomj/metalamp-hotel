import AirDatepicker from 'air-datepicker';

import { createAirDatePickerOptions, converseDate } from '../air-date-picker/index';

import 'air-datepicker/air-datepicker.css';

const dateDropdownLeftInput = document.querySelectorAll(
  '.js-date-dropdown__left--main .text-field__input'
);
const dateDropdownRightInput = document.querySelectorAll(
  '.js-date-dropdown__right--main .text-field__input'
);

const toggleDropdownFunction = (e) => {
  if (e.target) {
    const inputDataset = e.target.parentNode?.dataset?.dropdown;
    if (!inputDataset) return;
    const airDatePickerWrapper = document.querySelector(`[data-datedropdown=${inputDataset}]`);
    airDatePickerWrapper.classList.toggle('date-dropdown__open');
  }
  if (e.$el) {
    e.$el.classList.toggle('date-dropdown__open');
  }
};

// eslint-disable-next-line no-return-assign, no-param-reassign
const changeTitleLeft = (dateString, leftInput) => (leftInput.value = dateString);
// eslint-disable-next-line no-return-assign, no-param-reassign
const changeTitleRight = (dateString, rightInput) => (rightInput.value = dateString);

const selectDate = (formDate, datepicker) => {
  const leftInput = datepicker.$el.parentNode.querySelector('.js-date-dropdown__left--main input');
  const rightInput = datepicker.$el.parentNode.querySelector('.js-date-dropdown__right--main input');

  if (formDate.length === 0) {
    changeTitleLeft('ДД.ММ.ГГГГ', leftInput);
    changeTitleRight('ДД.ММ.ГГГГ', rightInput);
  } else if (formDate.length === 2) {
    changeTitleLeft(converseDate(formDate).from, leftInput);
    changeTitleRight(converseDate(formDate).to, rightInput);
  }
};

dateDropdownLeftInput?.forEach((el) => {
  el.parentNode?.addEventListener('click', (e) => toggleDropdownFunction(e));
});
dateDropdownRightInput?.forEach((el) => {
  el.parentNode?.addEventListener('click', (e) => toggleDropdownFunction(e));
});

const dropdownEl = document.querySelectorAll('.js-date-dropdown__close');

dropdownEl.forEach((el) => {
  // eslint-disable-next-line no-unused-vars
  const airDatePickerInst = new AirDatepicker(
    el,
    createAirDatePickerOptions(selectDate, (e) => toggleDropdownFunction(e))
  );
});
