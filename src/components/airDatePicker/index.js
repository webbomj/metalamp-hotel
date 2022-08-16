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
    classes: 'js-airDatePicker',
    moveToOtherMonthsOnSelect: false,
    minDate: [new Date()],
    // multipleDates: true,
    multipleDatesSeparator: '-',
    range: true,
    prevHtml: "<span class='js-airDatePicker__arrowBack material-icons md-24'>&#xe5c4;</span>",
    nextHtml: "<span class='js-airDatePicker__arrowForward material-icons md-24'>&#xe5c8;</span>",
    navTitles: {
      days: `<div class='js-airDatePicker__header'>
          <span class='js-airDatePicker__title'>MMMM yyyy</span>
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
