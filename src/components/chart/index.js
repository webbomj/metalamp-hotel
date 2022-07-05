import ChartCreator from './ChartCreator';

// eslint-disable-next-line no-new
new ChartCreator('.js-chart', [
  { name: 'Великолепно', vote: 130, colors: ['#FFE39C', '#FFBA9C'] },
  { name: 'Хорошо', vote: 65, colors: ['#6FCF97', '#66D2EA'] },
  { name: 'Удовлетворительно', vote: 65, colors: ['#BC9CFF', '#8BA4F9'] },
  { name: 'Разочарован', vote: 0, colors: ['#919191', '#3D4975'] },
]);
