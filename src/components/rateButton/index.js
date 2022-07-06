/* eslint-disable no-param-reassign */
const stars = document.querySelectorAll('.material-icons.rateButton__icon');
const rateButton = document.querySelectorAll('.rateButton');

const starMaterialFont = 'star_border';
const starFilledMaterialFont = 'star';

const rateButtonInit = () => {
  [...rateButton].forEach((el) => {
    const starsClicked = +el.dataset.ratebuttonstars;
    const allStars = el.querySelectorAll('.rateButton__icon');

    allStars.forEach((star) => {
      if (Number(star.dataset.ratebutton.split('-')[1]) < starsClicked) {
        star.textContent = starFilledMaterialFont;
      }
    });
  });
};

const clickHandler = (e) => {
  const { target } = e;
  const rateButtonId = target.dataset.ratebutton.split('-')[0];
  const buttonId = Number(target.dataset.ratebutton.split('-')[1]);

  stars.forEach((star) => {
    if (star.dataset.ratebutton.split('-')[0] === rateButtonId) {
      star.textContent = starMaterialFont;
      if (Number(star.dataset.ratebutton.split('-')[1]) <= buttonId) {
        star.textContent = starFilledMaterialFont;
      }
    }
  });
};

[...rateButton].forEach((el) => {
  el.addEventListener('click', (e) => clickHandler(e));
});

document.addEventListener('DOMContentLoaded', rateButtonInit);
