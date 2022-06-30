const coll = document.getElementsByClassName('expandableCheckboxes__header');

[...coll].forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
    const content = el.nextElementSibling;

    el.lastChild.classList.toggle('expandableCheckboxes__arrow--rotate');

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});
