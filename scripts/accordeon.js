const accordeon = () => {

  const charItem = document.querySelectorAll('.characteristics__item');

  charItem.forEach(item => {
    const charButton = item.querySelector('.characteristics__title');
    const charContent = item.querySelector('.characteristics__description');

    charButton.addEventListener('click', () => {
      
      if (charContent.classList.contains('open')) {
        charContent.style.height = '';
      } else {
        charContent.style.height = charContent.scrollHeight + 'px';
      }
      
      charButton.classList.toggle('active');
      charContent.classList.toggle('open');
    });

  });

};

accordeon();