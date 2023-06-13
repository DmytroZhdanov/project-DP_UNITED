import { onTrailerBackdropClick } from './onTrailerBackdropClick';

function modalTrailerClose() {
  const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');
  modalTrailerBackdrop.classList.add('is-hidden');
  modalTrailerBackdrop.removeEventListener('click', onTrailerBackdropClick);
  document.body.classList.remove('disabled-scroll');

  const modalTrailerCloseBtn = document.querySelector(
    '[data-modal-trailer-close]'
  );
  if (modalTrailerCloseBtn) {
    modalTrailerCloseBtn.addEventListener('click', modalTrailerClose);
  }
}

export { modalTrailerClose };
