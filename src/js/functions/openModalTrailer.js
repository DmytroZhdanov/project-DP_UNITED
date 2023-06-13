import { fetchMovieVideosById } from './movieApiService';
import { generateModalTrailerMarkup } from './generateModalTrailerMarkup';
import { onBackdropClick } from './onBackdropClick';
import { modalClose } from './modalClose';

async function openModalTrailer(movieId) {
  const response = await fetchMovieVideosById(movieId);
  const trailerKey = response.results[0].key;
  const modaltrailerContainer = document.querySelector('[data-modal-trailer]');

  if (trailerKey) {
    modaltrailerContainer.innerHTML = generateModalTrailerMarkup(trailerKey);
  } else {
    const modalCloseBtn = document.querySelector('[data-modal-close]');
    modalCloseBtn.addEventListener('click', modalClose);
  }
  modaltrailerContainer.classList.remove('is-hidden');
  modaltrailerContainer.addEventListener('click', onBackdropClick);
}

export { openModalTrailer };
