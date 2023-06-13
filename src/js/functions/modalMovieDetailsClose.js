import { removeAppropriateListener } from './removeAppropriateListener';

function modalMovieDetailsClose(isAddBtn, btnClasses, id, movieObject) {
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  modalMovieDetails.classList.add('is-hidden');
  removeAppropriateListener(isAddBtn, btnClasses, id, movieObject);

}

export { modalMovieDetailsClose };
