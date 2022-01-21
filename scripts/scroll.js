const links = document.querySelectorAll('.header-menu__item a');
const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

seamless.polyfill();

links.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    const id = item.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
  });
});

linkCharacteristics.addEventListener('click', e => {
  e.preventDefault();

  seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});