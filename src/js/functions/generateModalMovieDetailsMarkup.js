import { getGenresByGenresId } from './getGenresByGenresId';
import { generateModalLibraryBtnMarkup } from './generateModalLibraryBtnMarkup';
import imageNotFoundPic from '../../images/image-not-found.jpg';
import imageNotFoundPicWebp from '../../images/image-not-found.webp';

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
    ? getGenresByGenresId(genre_ids).join(', ')
    : genres.map(genre => genre.name).join(', ');
  const libraryBtn = generateModalLibraryBtnMarkup(classes, id);
  const poster = poster_path
    ? `<img
        class="movie-details-img"
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        alt="${title}"
      />`
    : `<picture>
        <source srcset="${imageNotFoundPicWebp}" type="image/webp" />
        <source srcset="${imageNotFoundPic}" type="image/jpeg" />
        <img
          class="movie-details-img"
          src="${imageNotFoundPic}"
          alt="Image not found"
        />
      </picture>`;

  return `<div class="movie-details-img-wrap">
            ${poster}
          </div>
          <div class="movie-details-wrapper">
            <h2 class="movie-details-headline">${title}</h2>
            <div class="movie-details-inner">
              <ul class="movie-details-list">
                <li class="movie-details-item">Vote / Votes</li>
                <li class="movie-details-item">Popularity</li>
                <li class="movie-details-item">Genre</li>
              </ul>

              <ul class="movie-details-items">
                <li class="movie-details-content-inner-item movie-details-content">
                  <span class="movie-details-content-inner">${vote_average.toFixed(
                    1
                  )}</span
                  ><span class="movie-details-content-inner-slash">/</span
                  ><span class="movie-details-content-inner-wrap">${vote_count.toFixed(
                    1
                  )}</span>
                </li>
                <li class="movie-details-content">${popularity.toFixed(1)}</li>
                <li class="movie-details-content">${genresString}</li>
              </ul>
            </div>

            <h3 class="movie-details-subtitle">About</h3>

            <p class="movie-details-description">
              ${overview}
            </p>
            <div class="library-btn-modal" data-library-btn-modal>
              ${libraryBtn}
            </div>
          </div>`;
}

export { generateModalMovieDetailsMarkup };
