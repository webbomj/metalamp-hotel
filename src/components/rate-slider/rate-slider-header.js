class SliderHeader {
  headerNode;

  text;

  constructor({ id }) {
    const slider = document.getElementById(id);
    const headerSlider = slider.querySelector('.rate-slider__header-count');
    this.headerNode = headerSlider;
  }

  createTextToHeader(from, to) {
    this.text = `${from}₽ - ${to}₽`;
  }

  setValueToHeader(text) {
    if (typeof text === 'string') {
      this.headerNode.textContent = text;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  transformNumber(number) {
    const transformNumber = String(number).split('').reverse('');
    let result = number;
    if (transformNumber.length >= 4) {
      result = [...transformNumber.slice(0, 3), ' ', ...transformNumber.slice(3)].reverse().join('');
    }

    return result;
  }

  setState = (state) => {
    const { from, to } = state;

    const transformFrom = this.transformNumber(from);
    const transformTo = this.transformNumber(to);

    this.createTextToHeader(transformFrom, transformTo);
    this.setValueToHeader(this.text);
  };
}

export { SliderHeader };
