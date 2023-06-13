import { modalMovieDetailsClose } from './modalMovieDetailsClose';

function onMovieDetailsBackdropClick(e, isAddBtn, btnClasses, id, movieObject) {
  const modalMovieDetails = document.querySelector('[data-modal-details]');

  if (e.target !== modalMovieDetails) {
    return;
  }

  modalMovieDetailsClose(isAddBtn, btnClasses, id, movieObject);
}

export { onMovieDetailsBackdropClick };