import { openModalMovieDetails } from './openModalMovieDetails';

function onMovieCardClick(e) {
  if (e.target.nodeName !== 'DIV') {
    return;
  }

  const movieCardBtn = e.target;
  const movieId = movieCardBtn.getAttribute('id');
  openModalMovieDetails(movieId);
}

export { onMovieCardClick };
