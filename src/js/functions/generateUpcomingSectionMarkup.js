import { getGenresByGenresId } from './getGenresByGenresId';
import { generateUpcomingLibraryBtnMarkup } from './generateUpcomingLibraryBtnMarkup';
import imageNotFoundPic395 from '../../images/image-not-found-card-desc-1x-395.jpg';
import imageNotFoundPic790 from '../../images/image-not-found-card-desc-2x-790.jpg';
import imageNotFoundPic280 from '../../images/image-not-found-card-mob-1x-280.jpg';
import imageNotFoundPic560 from '../../images/image-not-found-card-mob-2x-560.jpg';
import imageNotFoundPic224 from '../../images/image-not-found-card-tab-1x-224.jpg';
import imageNotFoundPic448 from '../../images/image-not-found-card-tab-2x-448.jpg';
import imageNotFoundPicWebp395 from '../../images/image-not-found-card-desc-1x-395.webp';
import imageNotFoundPicWebp790 from '../../images/image-not-found-card-desc-2x-790.webp';
import imageNotFoundPicWebp280 from '../../images/image-not-found-card-mob-1x-280.webp';
import imageNotFoundPicWebp560 from '../../images/image-not-found-card-mob-2x-560.webp';
import imageNotFoundPicWebp224 from '../../images/image-not-found-card-tab-1x-224.webp';
import imageNotFoundPicWebp448 from '../../images/image-not-found-card-tab-2x-448.webp';

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
        <source
          srcset="${imageNotFoundPicWebp395} 395w,
                  ${imageNotFoundPicWebp790} 790w,
                  ${imageNotFoundPicWebp280} 280w,
                  ${imageNotFoundPicWebp560} 560w,
                  ${imageNotFoundPicWebp224} 224w,
                  ${imageNotFoundPicWebp448} 448w
        " 
        sizes="(min-width: 1280px) 395px, (min-width: 768px) 224px, (min-width: 280px) 280px, 100vw"
        type="image/webp" />
        <source
          srcset="${imageNotFoundPic395} 395w,
                  ${imageNotFoundPic790} 790w,
                  ${imageNotFoundPic280} 280w,
                  ${imageNotFoundPic560} 560w,
                  ${imageNotFoundPic224} 224w,
                  ${imageNotFoundPic448} 448w
        " 
        sizes="(min-width: 1280px) 395px, (min-width: 768px) 224px, (min-width: 280px) 280px, 100vw"
        type="image/jpeg" />
        <img
          class="movie-details-img"
          src="${imageNotFoundPic280}"
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
                  <span class="upcoming-inner-box">${vote_average.toFixed(1)}</span>
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
