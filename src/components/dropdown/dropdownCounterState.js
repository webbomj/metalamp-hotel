/* eslint-disable import/no-mutable-exports */
const allCountersQuantity = document.querySelectorAll('[data-dropdowncounter]');

export let counter = {};

const initCounter = () => {
  [...allCountersQuantity].forEach((el) => {
    const nameTarget = el.dataset.dropdowncounter;
    const quantityTarget = +el.textContent;
    counter = {
      ...counter,
      [nameTarget]: quantityTarget,
      [nameTarget.split('-')[0]]: 0,
    };
  });
};

export const incrementCounter = (name) => {
  counter = {
    ...counter,
    [name]: counter[name] + 1,
    [name.split('-')[0]]: counter[name.split('-')[0]] + 1,
  };
};

export const decrementCounter = (name) => {
  if (counter[name] <= 0) return;
  counter = {
    ...counter,
    [name]: counter[name] - 1,
    [name.split('-')[0]]: counter[name.split('-')[0]] - 1,
  };
};

export const clearState = (name) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in counter) {
    if (key.includes(name)) {
      counter[key] = 0;
    }
  }
};

initCounter();
