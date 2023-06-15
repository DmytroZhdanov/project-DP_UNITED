import { getGenresByGenresId } from './getGenresByGenresId';
import { generateUpcomingLibraryBtnMarkup } from './generateUpcomingLibraryBtnMarkup';
import imageNotFoundPic from '../../images/image-not-found.jpg';
import imageNotFoundPicWebp from '../../images/image-not-found.webp';

function generateUpcomingSectionMarkup({
  backdrop_path,
  title,
  genre_ids,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  id,
}) {
  const genres = getGenresByGenresId(genre_ids).join(', ');
  const classes = 'btn btn-filled';
  const poster =
    poster_path || backdrop_path
      ? `<picture>
      <source
        srcset="https://image.tmdb.org/t/p/original/${backdrop_path}"
        media="(min-width:1280px)"
      />
      <source
        srcset="https://image.tmdb.org/t/p/original/${backdrop_path}"
        media="(min-width:768px)"
      />
      <source
        srcset="https://image.tmdb.org/t/p/original/${poster_path}"
        media="(min-width:320px)"
      />
      <img
        class="upcoming-movie-img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt="${title}"
      />
    </picture>`
      : `<picture>
        <source srcset="${imageNotFoundPicWebp}" type="image/webp" />
        <source srcset="${imageNotFoundPic}" type="image/jpeg" />
        <img
          class="movie-details-img"
          src="${imageNotFoundPic}"
          alt="Image not found"
        />
      </picture>`;

  return ` 
    ${poster}
    <div class="upcoming-column">
      <h2 class="upcoming-headline">${title}</h2>
      <div class="upcoming-wrap">
        <div class="upcoming-inner-wrap">
          <div class="upcoming-wrapper upcoming-wrapper-gap">
            <ul class="upcoming-list">
              <li class="upcoming-item-data">
                <p class="upcoming-subject">Release date</p>
              </li>
              <li class="upcoming-item-data-num">
                <p class="upcoming-date">${release_date
                  .split('-')
                  .reverse()
                  .join('.')}</p>
              </li>
            </ul>
    
            <ul class="upcoming-list">
              <li class="upcoming-item-vote">
                <p class="upcoming-subject">Vote / Votes</p>
              </li>
              <li class="upcoming-item-vote-num">
                <p class="upcoming-vote">
                  <span class="upcoming-inner-box">${vote_average}</span>
                  <span class="upcoming-inner-color">/</span>
                  <span class="upcoming-inner-box-votes">${vote_count}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="upcoming-wrapper">
            <ul class="upcoming-list">
              <li class="upcoming-item-pop">
                <p class="upcoming-subject">Popularity</p>
              </li>
              <li class="upcoming-item-pop-num">
                <p class="upcoming-famous">${popularity.toFixed(1)}</p>
              </li>
            </ul>
    
            <ul class="upcoming-list">
              <li class="upcoming-item-genre">
                <p class="upcoming-subject">Genre</p>
              </li>
              <li class="upcoming-item-genre-num">
                <p class="upcoming-janres">${genres}</p>
              </li>
            </ul>
          </div>
        </div>
    
        <h3 class="upcoming-caption">About</h3>
        <p class="upcoming-description">
          ${overview}
        </p>
        <div class="library-btn-upcoming" data-library-btn-upcoming>
          ${generateUpcomingLibraryBtnMarkup(classes, id)}
        </div>
      </div>
    </div>`;
}

export { generateUpcomingSectionMarkup };
