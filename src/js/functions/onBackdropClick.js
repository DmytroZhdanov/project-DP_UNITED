import { modalClose } from './modalClose';

function onBackdropClick(e) {
  const modalBackdrop = document.querySelector('.backdrop');

  if (e.target !== modalBackdrop) {
    return;
  }

  modalClose();
}

export { onBackdropClick };
