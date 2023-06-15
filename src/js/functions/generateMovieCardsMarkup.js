import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';
import { getGenresByGenresId } from './getGenresByGenresId';
import imageNotFoundPic from '../../images/image-not-found.jpg';
import imageNotFoundPicWebp from '../../images/image-not-found.webp';
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
        const posterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : `${imageNotFoundPic}`;
        const ratingStarsMurkup = generateRatingStarsMarkup(vote_average);
        const genresString = genre_ids
          ? getGenresByGenresId(genre_ids).join(', ')
          : genres.map(genre => genre.name).join(', ');
        const poster = poster_path
          ? `<img
        class="movie-details-img"
        src="${posterPath}"
        alt="${title}"
      />`
          : `<picture>
        <source srcset="${imageNotFoundPicWebp}" type="image/webp" />
        <source srcset="${posterPath}" type="image/jpeg" />
        <img
          class="movie-details-img"
          src="${posterPath}"
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
