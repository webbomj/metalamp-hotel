const coll = document.querySelectorAll('.expandableCheckboxes__header');

[...coll].forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
    const content = el.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }

    el.lastChild.classList.toggle('expandableCheckboxes__arrow--rotate');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});
