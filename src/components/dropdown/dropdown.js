import { counter, decrementCounter, incrementCounter, clearState } from './dropdownCounterState';
import { dropdownSaveStartTitle, dropdownChangeTitle } from './dropdownChangeTitle';

const dropdownElements = document.querySelectorAll('.js-dropdown__main');
const dropdownList = document.querySelectorAll('.js-dropdown__list');
const buttons = document.querySelectorAll(`.js-dropdown__buttons button[data-button]`);

const allInputs = [...dropdownElements];
const allList = [...dropdownList];
const allButtons = [...buttons];

const buttonsText = {
  apply: 'применить',
  clear: 'очистить',
};

document.addEventListener('DOMContentLoaded', () => {
  allList.forEach((el) => {
    const uniqId = el.dataset.dropdownList;
    dropdownSaveStartTitle(uniqId);
  });
});

const clearCount = (e) => {
  const dataset = e.target.dataset.button;
  clearState(dataset);
  const clearButton = document.querySelector(`button[data-button=${dataset}]`);
  clearButton.classList.add('button__none');
  const counterNumbers = document.querySelectorAll(`[data-dropdowncounter]`);
  [...counterNumbers].forEach((el) => {
    if (el.dataset.dropdowncounter.includes(dataset)) {
      // eslint-disable-next-line no-param-reassign
      el.textContent = 0;
    }
  });
  const allIncDecButtons = document.querySelectorAll(`[data-dropdownbutton]`);
  [...allIncDecButtons].forEach((el) => {
    if (el.dataset.dropdownbutton.includes(dataset) && el.textContent === '-') {
      el.classList.add('dropdown__circle--none');
    }
  });
};

if (allButtons.length) {
  allButtons.forEach((el) => {
    const dataset = el.dataset.button;
    if (el.textContent === buttonsText.apply) {
      const target = document.querySelector(`[data-dropdown=${dataset}]`);
      el.addEventListener('click', () => {
        target.parentNode.nextElementSibling.classList.add('dropdown__bottom-field--none');
        target.firstChild.classList.toggle('dropdown__field--active');
      });
    } else if (el.textContent === buttonsText.clear) {
      el.addEventListener('click', (e) => {
        clearCount(e);
        dropdownChangeTitle(dataset);
      });
    }
  });
}

const changeVisibility = (e) => {
  const datasetParent = e.target.parentNode.dataset.dropdown;
  if (!datasetParent) return;
  const target = allInputs.find((el) => el.dataset.dropdown === datasetParent);
  target.firstChild.classList.toggle('dropdown__field--active');
  target.parentNode.nextElementSibling.classList.toggle('dropdown__bottom-field--none');
};

allInputs.forEach((el) => el.addEventListener('click', (e) => changeVisibility(e)));

const handleListCounterClick = (e) => {
  const dataset = e.target.dataset.dropdownbutton;
  if (!dataset) return;
  const uniqDropDownId = dataset.split('-')[0];
  const clearButton = document.querySelector(`button[data-button=${uniqDropDownId}]`);
  const whatIsButton = e.target.textContent;
  const datasetCounter = document.querySelector(`[data-dropdowncounter='${dataset}']`);

  const buttonsSign = {
    inc: '+',
    dec: '-',
  };

  if (whatIsButton === buttonsSign.inc) {
    incrementCounter(dataset);
    datasetCounter.textContent = counter[dataset];
    if (clearButton) {
      clearButton.classList.remove('button__none');
    }
  } else {
    decrementCounter(dataset);
    datasetCounter.textContent = counter[dataset];
    const counterZeroAndClearButtonTruthy = counter[uniqDropDownId] === 0 && clearButton;
    if (counterZeroAndClearButtonTruthy) {
      clearButton.classList.add('button__none');
    }
  }

  dropdownChangeTitle(uniqDropDownId);

  const incButton = document.getElementById(dataset);
  if (counter[dataset] > 0) {
    incButton.classList.remove('dropdown__circle--none');
  } else if (counter[dataset] === 0) {
    incButton.classList.add('dropdown__circle--none');
  }
};

allList.forEach((el) => el.addEventListener('click', (e) => handleListCounterClick(e)));
