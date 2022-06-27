/* eslint-disable prefer-destructuring */
import { counter } from './dropdownCounterState';

export const allDropdown = {};

export const dropdownSaveStartTitle = (uniqId) => {
  const dropdownInput = document.querySelector(`[data-dropdown-input=${uniqId}]`);
  const dropdownTitle = dropdownInput.value;
  allDropdown[uniqId] = dropdownTitle;
  console.log(allDropdown);
};

// eslint-disable-next-line no-unused-vars
const setStartTitle = (uniqId) => {
  const dropdownInput = document.querySelector(`[data-dropdown-input=${uniqId}]`);
  dropdownInput.value = allDropdown[uniqId];
};

const getGuestsValue = (uniqId) => {
  const guestsWords = [
    ['гость', 'младенец'],
    ['гостя', 'младенца'],
    ['гостей', 'младенецев'],
  ];
  let adults = 0;
  let babies = 0;

  if (counter[`${uniqId}-0`]) {
    adults += counter[`${uniqId}-0`];
  }
  if (counter[`${uniqId}-1`]) {
    adults += counter[`${uniqId}-1`];
  }
  if (counter[`${uniqId}-2`]) {
    babies += counter[`${uniqId}-2`];
  }
  let firstWord = '';
  let secondWord = '';

  if (adults === 1) {
    firstWord = guestsWords[0][0];
  }
  if (babies === 1) {
    secondWord = guestsWords[0][1];
  }
  if (adults > 1 && adults <= 4) {
    firstWord = guestsWords[1][0];
  }
  if (babies > 1 && babies <= 4) {
    secondWord = guestsWords[1][1];
  }
  if (adults > 4) {
    firstWord = guestsWords[2][0];
  }
  if (babies > 4) {
    secondWord = guestsWords[2][1];
  }

  if (adults === 0 && babies > 0) {
    return `${babies} ${secondWord}`;
  }
  if (adults > 0 && babies === 0) {
    return `${adults} ${firstWord}`;
  }
  if (adults > 0 && babies > 0) {
    return `${adults} ${firstWord}, ${babies} ${secondWord}`;
  }

  return allDropdown[uniqId];
};

const getFurnitureValue = (uniqId) => {
  const furnitureWords = [
    ['спальня', 'кровать', 'ванная'],
    ['спальни', 'кровати', 'ванные'],
    ['спален', 'кроватей', 'ванных'],
  ];
  let bedroom = 0;
  let bed = 0;
  let bathroom = 0;

  if (counter[`${uniqId}-0`]) {
    bedroom += counter[`${uniqId}-0`];
  }
  if (counter[`${uniqId}-1`]) {
    bed += counter[`${uniqId}-1`];
  }
  if (counter[`${uniqId}-2`]) {
    bathroom += counter[`${uniqId}-2`];
  }

  let firstWord = '';
  let secondWord = '';
  let thirdWord = '';

  if (bedroom === 1) {
    firstWord = furnitureWords[0][0];
  }
  if (bed === 1) {
    secondWord = furnitureWords[0][1];
  }
  if (bathroom === 1) {
    thirdWord = furnitureWords[0][2];
  }

  if (bedroom > 1 && bedroom <= 4) {
    firstWord = furnitureWords[1][0];
  }
  if (bed > 1 && bed <= 4) {
    secondWord = furnitureWords[1][1];
  }
  if (bathroom > 1 && bathroom <= 4) {
    thirdWord = furnitureWords[1][1];
  }

  if (bedroom > 4) {
    firstWord = furnitureWords[2][0];
  }
  if (bed > 4) {
    secondWord = furnitureWords[2][1];
  }
  if (bathroom > 4) {
    thirdWord = furnitureWords[2][1];
  }

  if (bedroom > 0 && bed > 0 && bathroom > 0) {
    const result = `${bedroom} ${firstWord}, ${bed} ${secondWord}, ${bathroom} ${thirdWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom === 0 && bed > 0 && bathroom === 0) {
    const result = `${bed} ${secondWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom === 0 && bed === 0 && bathroom > 0) {
    const result = `${bathroom} ${thirdWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom > 0 && bed === 0 && bathroom === 0) {
    const result = `${bedroom} ${firstWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom > 0 && bed > 0 && bathroom === 0) {
    const result = `${bedroom} ${firstWord}, ${bed} ${secondWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom > 0 && bed === 0 && bathroom > 0) {
    const result = `${bedroom} ${firstWord}, ${bathroom} ${thirdWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }
  if (bedroom === 0 && bed > 0 && bathroom > 0) {
    const result = `${bed} ${secondWord}, ${bathroom} ${thirdWord}`;
    return result.length > 20 ? `${result.slice(0, 20)}...` : result;
  }

  return allDropdown[uniqId];
};

const setNewTitle = (uniqId) => {
  const dropdownField = document.querySelector(`.dropdown[data-type*=${uniqId}]`);
  const dropdownInput = document.querySelector(`[data-dropdown=${uniqId}]`);
  const type = dropdownField.dataset.type.split('-')[1];
  if (type === 'guests') {
    const newTitle = getGuestsValue(uniqId);
    dropdownInput.firstChild.value = newTitle;
  }
  if (type === 'furniture') {
    const newTitle = getFurnitureValue(uniqId);
    dropdownInput.firstChild.value = newTitle;
  }
};

export const dropdownChangeTitle = (uniqId) => {
  if (counter[uniqId] === 0) {
    setStartTitle(uniqId);
  } else {
    setNewTitle(uniqId);
  }
};
