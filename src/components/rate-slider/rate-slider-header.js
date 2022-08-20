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

  setState = (state) => {
    const { from, to } = state;
    this.createTextToHeader(from, to);
    this.setValueToHeader(this.text);
  };
}

export { SliderHeader };
