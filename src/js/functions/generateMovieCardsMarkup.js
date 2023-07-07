import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';
import { getGenresByGenresId } from './getGenresByGenresId';
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
/**
 *
 * @param {Array} arr
 * @returns {String} markup for movie cards. You should insert resul inside <ul> by innerHTML
 */
function generateMovieCardsMarkup(arr) {
  const markup = arr
    .map(
      ({
        genre_ids,
        id,
        poster_path,
        release_date,
        title,
        vote_average,
        genres,
      }) => {
        const year = release_date.slice(0, 4);
        const ratingStarsMurkup = generateRatingStarsMarkup(vote_average);
        const genresString = genre_ids
          ? getGenresByGenresId(genre_ids).join(', ')
          : genres.map(genre => genre.name).join(', ');
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
        return `<li class="cards-item">
                  <button type="button" class="btn cards-item-btn">
                    ${poster}
                    <div class="cards-content" id="${id}">
                      <div class="cards-text-content">
                        <h3 class="cards-title">${title}</h3>
                        <p class="cards-text">${genresString} | ${year}</p>
                      </div>
                      <div class="rating-stars-wrapper">${ratingStarsMurkup}
                      </div>
                    </div>
                  </button>
                </li>`;
      }
    )
    .join('');

  return markup;
}

export { generateMovieCardsMarkup };
