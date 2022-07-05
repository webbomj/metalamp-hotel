/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js/auto';

class DoughnutCreator {
  constructor(node, data) {
    this._ctx = node?.getContext('2d');
    this._init(data);
  }

  _init(data) {
    return this._createDoughnut(data);
  }

  // eslint-disable-next-line class-methods-use-this
  _countVotes(data) {
    let votes = 0;
    data.forEach((el) => {
      votes += el.vote;
    });
    return votes;
  }

  _setConvasGradient(colors) {
    const gradient = this._ctx?.createLinearGradient(0, 0, 0, 125);
    gradient?.addColorStop(0, colors[0]);
    gradient?.addColorStop(1, colors[1]);
    return gradient;
  }

  // eslint-disable-next-line class-methods-use-this
  _pluginCreator(countGradient, votes) {
    return {
      id: 'counter',
      beforeDraw(chart) {
        const {
          chartArea: { top, width, height },
          ctx,
        } = chart;
        ctx.save();
        ctx.font = 'bold 24px Montserrat';
        ctx.textAlign = 'center';
        ctx.fillStyle = countGradient;
        ctx.fillText(`${votes}`, width / 2, top - 2 + height / 2);
        ctx.save();
        ctx.font = 'bold 15px Montserrat';
        ctx.textAlign = 'center';
        ctx.fillText('голосов', width / 2, top + 18 + height / 2);
      },
    };
  }

  _createDoughnut(data) {
    const countGradient = this._setConvasGradient(['#BC9CFF', '#8BA4F9']);
    const votes = this._countVotes(data);
    const plugin = this._pluginCreator(countGradient, votes);

    return new Chart(this._ctx, {
      type: 'doughnut',
      data: {
        labels: data.map((el) => el.name).reverse(),
        datasets: [
          {
            label: '',
            data: data.reverse().map((el) => el.vote),
            backgroundColor: data.map((el) => this._setConvasGradient(el.colors)),
            cutout: '88%',
            borderWidth: 3,
            reverse: true,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 30,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      plugins: [plugin],
    });
  }
}

export default DoughnutCreator;
