import { fetchMovieVideosById } from './movieApiService';
import { generateModalTrailerMarkup } from './generateModalTrailerMarkup';
import { onTrailerBackdropClick } from './onTrailerBackdropClick';
import { modalTrailerClose } from './modalTrailerClose';
import { onKeydownTrailer } from './onKeydownTrailer';

async function openModalTrailer(movieId) {
  try {
    const response = await fetchMovieVideosById(movieId);
    const trailerKey = response.results.find(obj => obj.type === 'Trailer').key;
    const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');
  
    if (trailerKey) {
      modalTrailerBackdrop.innerHTML = generateModalTrailerMarkup(trailerKey);
    } else {
      const modalTrailerCloseBtn = document.querySelector(
        '[data-modal-trailer-close]'
      );
      modalTrailerCloseBtn.addEventListener('click', modalTrailerClose);
    }
    modalTrailerBackdrop.classList.remove('is-hidden');
    modalTrailerBackdrop.addEventListener('click', onTrailerBackdropClick);
    document.body.classList.add('disabled-scroll')
    document.addEventListener('keydown', onKeydownTrailer, { once: true });
  } catch (error) {
    console.error(error.message)
  }
}

export { openModalTrailer };
