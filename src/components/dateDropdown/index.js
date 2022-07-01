import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { airDatePickerOptionsCreator, dateConversion } from '../airDatePicker/index';

const dateDropdownLeftInput = document.querySelector('.dateDropdownLeft__main .textField__input');
const dateDropdownRightInput = document.querySelector('.dateDropdownRight__main .textField__input');
const dateDropdownElement = document.querySelector('.dateDropdown__close');

const openCloseDropdownFunction = () => {
  dateDropdownElement.classList.toggle('dateDropdown__open');
};

// eslint-disable-next-line no-return-assign
const changeTitleLeft = (dateString = 'ДД.ММ.ГГГГ') => (dateDropdownLeftInput.value = dateString);
// eslint-disable-next-line no-return-assign
const changeTitleRight = (dateString = 'ДД.ММ.ГГГГ') => (dateDropdownRightInput.value = dateString);

const selectDate = (formDate) => {
  if (formDate.length === 0) {
    changeTitleLeft();
    changeTitleRight();
  } else if (formDate.length === 2) {
    changeTitleLeft(dateConversion(formDate).from);
    changeTitleRight(dateConversion(formDate).to);
  }
};

dateDropdownLeftInput?.parentNode?.addEventListener('click', () => openCloseDropdownFunction());
dateDropdownRightInput?.parentNode?.addEventListener('click', () => openCloseDropdownFunction());

// eslint-disable-next-line no-unused-vars
const airDatePickerInst = new AirDatepicker(
  dateDropdownElement,
  airDatePickerOptionsCreator(selectDate, openCloseDropdownFunction)
);
