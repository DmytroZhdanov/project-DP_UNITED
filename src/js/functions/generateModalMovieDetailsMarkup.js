import { getGenresByGenresId } from './getGenresByGenresId';
import { generateModalLibraryBtnMarkup } from './generateModalLibraryBtnMarkup';

function generateModalMovieDetailsMarkup(classes, movieObject) {
  const {
    poster_path,
    title,
    overview,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    id,
    genres,
  } = movieObject;
  const genresString = genre_ids
    ? getGenresByGenresId(genre_ids)
    : genres.map(genre => genre.name);
  const libraryBtn = generateModalLibraryBtnMarkup(classes, id);
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : './images/image-not-found.jpg';

  return `<div class="modal-details">
          <button type="button" class="btn modal-close" data-modal-details-close>
            <svg class="icon-close" width="10.5" height="10.5">
              <use href="./images/icons.svg#icon-close"></use>
            </svg>
          </button>
          <img src="${posterPath}" />
          <h2>${title}</h2>
          <h3>Vote / Votes</h3>
          <p><span>${vote_average}</span> / <span>${vote_count}</span></p>
          <h3>Popularity</h3>
          <p>${popularity}</p>
          <h3>Genre</h3>
          <p class='modal-genre'>${genresString}</p>
          <h3>About</h3>
          <p>${overview}</p>
          <div data-library-btn-modal>
            ${libraryBtn}
          </div>
        </div>`;
}

export { generateModalMovieDetailsMarkup };
