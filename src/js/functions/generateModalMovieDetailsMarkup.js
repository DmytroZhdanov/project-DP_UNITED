import { getGenresByGenresId } from './getGenresByGenresId';
import { generateModalLibraryBtnMarkup } from './generateModalLibraryBtnMarkup';
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
