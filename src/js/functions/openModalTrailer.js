import { fetchMovieVideosById } from './movieApiService';
import { generateModalTrailerMarkup } from './generateModalTrailerMarkup';

async function openModalTrailer(movieId) {
  const response = await fetchMovieVideosById(movieId);
  const trailerKey = response.results[0].key;
  const modaltrailerContainer = document.querySelector('[data-modal-trailer]');

  modaltrailerContainer.innerHTML = generateModalTrailerMarkup(trailerKey);
  modaltrailerContainer.classList.remove('is-hidden');
  console.log(trailerKey);
}

export { openModalTrailer };
