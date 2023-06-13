import { fetchMovieVideosById } from './movieApiService';
import { generateModalTrailerMarkup } from './generateModalTrailerMarkup';
import { onTrailerBackdropClick } from './onTrailerBackdropClick';
import { modalTrailerClose } from './modalTrailerClose';

async function openModalTrailer(movieId) {
  const response = await fetchMovieVideosById(movieId);
  const trailerKey = response.results[0].key;
  const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');

  if (trailerKey) {
    modalTrailerBackdrop.innerHTML = generateModalTrailerMarkup(trailerKey);
  } else {
    const modalTrailerCloseBtn = document.querySelector('[data-modal-trailer-close]');
    modalTrailerCloseBtn.addEventListener('click', modalTrailerClose);
  }
  modalTrailerBackdrop.classList.remove('is-hidden');
  modalTrailerBackdrop.addEventListener('click', onTrailerBackdropClick);
}

export { openModalTrailer };