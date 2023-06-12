// Modal window for movie details
import { generateModalMovieDetailsMarkup } from './generateModalMovieDetailsMarkup';
import { addAppropriateListener } from './addAppropriateListener';

/**
 * Opens modal window with movie details
 * @param {Object} movieObject Movie object
 */
function openModalMovieDetails(movieObject) {
  const { id } = movieObject;
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  const btnClasses = 'btn btn-empty';
  modalMovieDetails.innerHTML = generateModalMovieDetailsMarkup(
    btnClasses,
    movieObject
  );
  const isAddBtn = modalMovieDetails.innerHTML.includes('Add to library');

  addAppropriateListener(isAddBtn, btnClasses, id, movieObject);

  modalMovieDetails.classList.remove('is-hidden');

  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
  modalDetailsCloseBtn.addEventListener('click', () => {
    modalMovieDetails.classList.add('is-hidden');
    removeAppropriateListener(isAddBtn, btnClasses, id, movieObject);
  });
}

export { openModalMovieDetails };
