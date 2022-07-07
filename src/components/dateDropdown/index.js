import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { airDatePickerOptionsCreator, dateConversion } from '../airDatePicker/index';

const dateDropdownLeftInput = document.querySelectorAll('.dateDropdownLeft__main .textField__input');
const dateDropdownRightInput = document.querySelectorAll('.dateDropdownRight__main .textField__input');

const openCloseDropdownFunction = (e) => {
  if (e.target) {
    const inputDataset = e.target.parentNode?.dataset?.dropdown;
    if (!inputDataset) return;
    const airDatePickerWrapper = document.querySelector(`[data-datedropdown=${inputDataset}]`);
    airDatePickerWrapper.classList.toggle('dateDropdown__open');
  }
  if (e.$el) {
    e.$el.classList.toggle('dateDropdown__open');
  }
};

// eslint-disable-next-line no-return-assign, no-param-reassign
const changeTitleLeft = (dateString, leftInput) => (leftInput.value = dateString);
// eslint-disable-next-line no-return-assign, no-param-reassign
const changeTitleRight = (dateString, rightInput) => (rightInput.value = dateString);

const selectDate = (formDate, datepicker) => {
  const leftInput = datepicker.$el.parentNode.querySelector('.dateDropdownLeft__main input');
  const rightInput = datepicker.$el.parentNode.querySelector('.dateDropdownRight__main input');

  if (formDate.length === 0) {
    changeTitleLeft('ДД.ММ.ГГГГ', leftInput);
    changeTitleRight('ДД.ММ.ГГГГ', rightInput);
  } else if (formDate.length === 2) {
    changeTitleLeft(dateConversion(formDate).from, leftInput);
    changeTitleRight(dateConversion(formDate).to, rightInput);
  }
};

dateDropdownLeftInput?.forEach((el) => {
  el.parentNode?.addEventListener('click', (e) => openCloseDropdownFunction(e));
});
dateDropdownRightInput?.forEach((el) => {
  el.parentNode?.addEventListener('click', (e) => openCloseDropdownFunction(e));
});

const dropdownEl = document.querySelectorAll('.dateDropdown__close');

dropdownEl.forEach((el) => {
  // eslint-disable-next-line no-unused-vars
  const airDatePickerInst = new AirDatepicker(
    el,
    airDatePickerOptionsCreator(selectDate, (e) => openCloseDropdownFunction(e))
  );
});
