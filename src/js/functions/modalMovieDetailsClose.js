// import { removeAppropriateListener } from './removeAppropriateListener';
import { onMovieDetailsBackdropClick } from './onMovieDetailsBackdropClick';


function modalMovieDetailsClose() {
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  modalMovieDetails.classList.add('is-hidden');
  // removeAppropriateListener(isAddBtn, btnClasses, id, movieObject);

  modalMovieDetails.removeEventListener('click', onMovieDetailsBackdropClick);

  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
  modalDetailsCloseBtn.removeEventListener('click', modalMovieDetailsClose);
}

export { modalMovieDetailsClose };
