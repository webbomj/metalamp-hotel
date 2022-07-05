/* eslint-disable no-underscore-dangle */
import DoughnutCreator from './doughnutCreator';

class ChartCreator {
  constructor(selector, data) {
    this.node = document.querySelector(selector);
    this._init(data);
  }

  _init(data) {
    this._createVouteList(data);
    this._createChart(data);
  }

  _createVouteList(data) {
    const ul = document.createElement('ul');
    ul.classList.add('chart__list');
    let list = '';

    data.forEach((el) => {
      list += this._createVouteItem(el.name, el.colors);
    });

    ul.innerHTML = list;
    this.node?.append(ul);
  }

  // eslint-disable-next-line class-methods-use-this
  _createVouteItem(name, colors) {
    return `
      <li class="chart__item">
        <div style="background: linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)" 
          class="chart__circle">
        </div>
        <div class="chart__name">${name}</div>
      </li>
    `;
  }

  _createChart(data) {
    const chartNode = document.querySelector('.js-chart__canvas');
    this.chart = new DoughnutCreator(chartNode, data);
  }
}

export default ChartCreator;
