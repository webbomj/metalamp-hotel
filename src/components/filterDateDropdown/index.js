import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { airDatePickerOptionsCreator, dateConversion } from '../airDatePicker/index';

const mainBlock = document.querySelector('.filterDateDropdown__main');
const airDatePickerBlock = document.querySelector('.filterDateDropdown__close');
const airDatePickerInput = document.querySelector('.filterDateDropdown__main .textField__input');

// eslint-disable-next-line no-return-assign
const changeTitle = (dateString = '') => (airDatePickerInput.value = dateString);

const closeAirDatePickerToogle = () =>
  airDatePickerBlock.classList.toggle('filterDateDropdown__dateOpen');

const selectDate = (formDate) => {
  if (formDate.length === 0) {
    changeTitle();
  } else if (formDate.length === 2) {
    changeTitle(dateConversion(formDate).resultDate);
  }
};

mainBlock?.addEventListener('click', () => closeAirDatePickerToogle());

// eslint-disable-next-line no-unused-vars
const airDatePickerInst = new AirDatepicker(
  airDatePickerBlock,
  airDatePickerOptionsCreator(selectDate, closeAirDatePickerToogle)
);
