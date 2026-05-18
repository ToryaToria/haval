const btn = document.querySelector('.hero__btn');
const modal = document.querySelector('#dialog');
const buttonCloser = modal.querySelector('.dialog__btn-close');

const modalClose = () => {
  modal.classList.add('dialog--close');
  modal.close();
  modal.style.display = 'none';
  modal.classList.remove('dialog--close');
};


const handleModalClick = ({ currentTarget, target }) => {
  const isClickedOnBackdrop = target === currentTarget;
  if (isClickedOnBackdrop) {
    modalClose();
  }
};

btn.addEventListener('click', () => {
  modal.style.display = 'block';
  modal.showModal();
});

buttonCloser.addEventListener('click', () => {
  modalClose();
});
modal.addEventListener('click', handleModalClick);
