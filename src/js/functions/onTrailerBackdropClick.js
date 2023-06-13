import { modalTrailerClose } from './modalTrailerClose';

function onTrailerBackdropClick(e) {
  const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');

  if (e.target !== modalTrailerBackdrop) {
    return;
  }

  modalTrailerClose();
}

export { onTrailerBackdropClick };
