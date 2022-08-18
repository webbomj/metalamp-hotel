const coll = document.querySelectorAll('.js-expandable-checkboxes__header');

const displayBlock = 'block';

[...coll].forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
    const content = el.nextElementSibling;

    if (content.style.display === displayBlock) {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }

    el.lastChild.classList.toggle('expandable-checkboxes__arrow--rotate');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});
