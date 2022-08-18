import Inputmask from 'inputmask';

const IMaskSelector = document.querySelectorAll('[data-masked="masked"]');

[...IMaskSelector].forEach((el) => {
  new Inputmask({
    alias: 'datetime',
    placeholder: 'ДД.ММ.ГГГГ',
    inputFormat: 'dd.mm.yyyy',
  }).mask(el);
});
