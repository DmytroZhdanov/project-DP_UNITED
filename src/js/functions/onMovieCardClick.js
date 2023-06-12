import { fetchMovieById } from './movieApiService';
import { openModalMovieDetails } from './openModalMovieDetails';

async function onMovieCardClick(e) {
  if (e.target.nodeName !== 'DIV') {
    return;
  }

  const movieCardBtn = e.target;
  const movieId = movieCardBtn.getAttribute('id');
  const response = await fetchMovieById(movieId);
  openModalMovieDetails(response);
}

export { onMovieCardClick };
