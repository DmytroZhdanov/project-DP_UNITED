// Modal window for movie details
import { generateModalMovieDetailsMarkup } from './generateModalMovieDetailsMarkup';
import { addAppropriateListenerModal } from './addAppropriateListenerModal';
import { onMovieDetailsBackdropClick } from './onMovieDetailsBackdropClick';
import { modalMovieDetailsClose } from './modalMovieDetailsClose';
import { fetchMovieById } from './movieApiService';
import { onKeydownMovieDetails } from './onKeydownMovieDetails';
import { onModalTrailerBtnClick } from './onModalTrailerBtnClick';
import { loader } from './loader';

/**
 * Opens modal window with movie details
 * @param {String} id Movie id
 */
async function openModalMovieDetails(id) {
  loader.on()
  try {
    const movieObject = await fetchMovieById(id);

    const modalMovieDetails = document.querySelector('[data-modal-details]');
    const btnClasses = 'btn btn-empty';
    const modalMovieDetailsContent = document.querySelector(
      '[data-modal-details-content]'
    );
    modalMovieDetailsContent.innerHTML = generateModalMovieDetailsMarkup(
      btnClasses,
      movieObject
    );
    const isAddBtn = modalMovieDetails.innerHTML.includes('Add to library');

    addAppropriateListenerModal(isAddBtn, btnClasses, id, movieObject);

    const modalTrailerBtn = document.querySelector('[data-modal-trailer-btn]');
    modalTrailerBtn.addEventListener(
      'click',
      () => {
        onModalTrailerBtnClick(id);
      },
      { once: true }
    );

    modalMovieDetails.classList.remove('is-hidden');
    modalMovieDetails.addEventListener('click', onMovieDetailsBackdropClick);
    document.body.classList.add('disabled-scroll');

    const modalDetailsCloseBtn = document.querySelector(
      '[data-modal-details-close]'
    );
    modalDetailsCloseBtn.addEventListener('click', modalMovieDetailsClose);
    document.addEventListener('keydown', onKeydownMovieDetails, { once: true });
  } catch (error) {
    console.error(error.message);
  } finally {
    loader.off()
  }
}

export { openModalMovieDetails };
