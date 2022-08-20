import $ from 'jquery';
import { SliderHeader } from './rate-slider-header';
import './slider-mvp/slider';
import './slider-mvp/slider.css';

window.addEventListener('DOMContentLoaded', () => {
  const options = {
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 1,
    stepScale: 100,
    isVertical: false,
    isInterval: true,
    isLabel: false,
    isScale: false,
    isProgressBar: true,
  };

  const allSliders = document.querySelectorAll('.js-rate-slider');
  allSliders.forEach((el) => {
    const { id } = el;

    const sliderHeader = new SliderHeader({ id });
    const slider = $(`#${id} .rate-slider__main`).slider(options);
    slider.subscribe(sliderHeader.setState);
  });
});
