/* eslint-disable arrow-body-style */
import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

const airDatepickerContainer = document.getElementById('airDatePicker');

const converseDate = (dates) => {
  if (dates.length !== 2) return;

  const [from, to] = dates;

  const localMonth = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const fromMonth = localMonth[+from.split('.')[1]];
  const toMonth = localMonth[+to.split('.')[1]];
  const fromDay = +from.split('.')[0];
  const toDay = +to.split('.')[0];

  const resultDate = `${fromDay} ${fromMonth} - ${toDay} ${toMonth}`;

  // eslint-disable-next-line consistent-return
  return {
    from,
    to,
    resultDate,
  };
};

const createAirDatePickerOptions = (fnSelect, fnHandler) => {
  return {
    classes: 'js-air-datepicker',
    moveToOtherMonthsOnSelect: false,
    minDate: [new Date()],
    multipleDatesSeparator: '-',
    range: true,
    prevHtml: "<span class='js-air-datepicker__arrow-back material-icons md-24'>&#xe5c4;</span>",
    nextHtml: "<span class='js-air-datepicker__arrow-forward material-icons md-24'>&#xe5c8;</span>",
    navTitles: {
      days: `<div class='js-air-datepicker__header'>
          <span class='js-air-datepicker__title'>MMMM yyyy</span>
        </div>
        `,
    },
    onSelect({ formattedDate, datepicker }) {
      fnSelect(formattedDate, datepicker);
    },
    buttons: [
      'clear',
      {
        content: 'применить',
        className: 'custom-button-classname',
        onClick: (e) => {
          if (fnHandler) {
            fnHandler(e);
          }
        },
      },
    ],
  };
};
// eslint-disable-next-line no-unused-vars
const initAirDatePickerInst = new AirDatepicker(
  airDatepickerContainer,
  createAirDatePickerOptions(converseDate)
);

export { initAirDatePickerInst, createAirDatePickerOptions, converseDate };
