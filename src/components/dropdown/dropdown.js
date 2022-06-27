import { counter, decrementCounter, incrementCounter, clearState } from './dropdownCounterState';
import { dropdownSaveStartTitle, dropdownChangeTitle } from './dropdownChangeTitle';

const dropdownElements = document.querySelectorAll('.dropdown__main');
const dropdownList = document.querySelectorAll('.dropdown__list');
const buttons = document.querySelectorAll(`.dropdown__buttons button[data-button]`);

const allInputs = [...dropdownElements];
const allList = [...dropdownList];
const allButtons = [...buttons];

document.addEventListener('DOMContentLoaded', () => {
  allList.forEach((el) => {
    const uniqId = el.dataset.dropdownList;
    console.log('uniqid', uniqId);
    console.log('el', el);
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

if (allButtons) {
  allButtons.forEach((el) => {
    if (el.textContent === 'применить') {
      const dataset = el.dataset.button;
      const target = document.querySelector(`[data-dropdown=${dataset}]`);
      el.addEventListener('click', () => {
        target.parentNode.nextElementSibling.nextElementSibling.classList.add(
          'dropdown__bottomField--none'
        );
        target.firstChild.classList.toggle('dropdown__field--active');
      });
    } else if (el.textContent === 'очистить') {
      el.addEventListener('click', (e) => {
        clearCount(e);
      });
    }
  });
}

const changeVisibility = (e) => {
  console.log(e.target);
  const datasetParent = e.target.parentNode.dataset.dropdown;
  if (!datasetParent) return;
  const target = allInputs.find((el) => el.dataset.dropdown === datasetParent);
  target.firstChild.classList.toggle('dropdown__field--active');
  target.parentNode.nextElementSibling.nextElementSibling.classList.toggle(
    'dropdown__bottomField--none'
  );
};

allInputs.forEach((el) => el.addEventListener('click', (e) => changeVisibility(e)));

const counterHandler = (e) => {
  const dataset = e.target.dataset.dropdownbutton;
  if (!dataset) return;

  const uniqDropDownId = dataset.split('-')[0];
  const clearButton = document.querySelector(`button[data-button=${uniqDropDownId}]`);
  const whatIsButton = e.target.textContent;
  const datasetCounter = document.querySelector(`[data-dropdowncounter='${dataset}']`);

  if (whatIsButton === '+') {
    incrementCounter(dataset);
    datasetCounter.textContent = counter[dataset];
    if (clearButton) {
      clearButton.classList.remove('button__none');
    }
  } else {
    decrementCounter(dataset);
    datasetCounter.textContent = counter[dataset];
  }

  dropdownChangeTitle(uniqDropDownId);

  if (counter[uniqDropDownId] === 0 && clearButton) {
    clearButton.classList.add('button__none');
  }

  const incremButton = document.getElementById(dataset);
  if (counter[dataset] > 0) {
    incremButton.classList.remove('dropdown__circle--none');
  } else if (counter[dataset] === 0) {
    incremButton.classList.add('dropdown__circle--none');
  }
};

allList.forEach((el) => el.addEventListener('click', (e) => counterHandler(e)));
