import Inputmask from 'inputmask';

const IMaskSelector = document.querySelectorAll('[date-masked="masked"]');

// Inputmask({ mask: '30.12.2060', maskPlaceholder: 'ДД.ММ.ГГГГ', value: '12' }).mask(IMaskSelector);
// Inputmask({
//   // mask: '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$',
//   regex: '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$',
// }).mask(IMaskSelector);

[...IMaskSelector].forEach((el) => {
  new Inputmask({
    alias: 'datetime',
    placeholder: 'ДД.ММ.ГГГГ',
    inputFormat: 'dd.mm.yyyy',
  }).mask(el);
});
