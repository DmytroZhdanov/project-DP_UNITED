import { modalMovieDetailsClose } from './modalMovieDetailsClose';

function onMovieDetailsBackdropClick(e) {
  const modalMovieDetails = document.querySelector('[data-modal-details]');

  if (e.target !== modalMovieDetails) {
    return;
  }

  modalMovieDetailsClose();
}

export { onMovieDetailsBackdropClick };
