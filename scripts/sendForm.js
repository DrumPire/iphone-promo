const sendForm = () => {
  const btnOpenModal = document.querySelector('.card-details__button_delivery');
  const cardDetailsTitle = document.querySelector('.card-details__title');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal__title');
  const modalClose = modal.querySelector('.modal__close');
  const modalForm = modal.querySelector('form');

  const openModal = () => {
    modal.style.display = 'flex';
    modalTitle.textContent = cardDetailsTitle.textContent;
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  btnOpenModal.addEventListener('click', openModal);

  modalClose.addEventListener('click', closeModal);

  modalForm.addEventListener('submit', e => {
    e.preventDefault();

    const labels = modal.querySelectorAll('.modal__label');

    const sendMassage = {};

    labels.forEach(label => {
      const span = label.querySelector('span');
      const input = label.querySelector('input');

      sendMassage[span.textContent] = input.value;
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendMassage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        console.log('Отправлено');
      });
    const modalInput = document.querySelectorAll('.modal__input');
    
    modalInput.forEach(input => {
      input.value = '';
    });

    closeModal();
  });
};

sendForm();