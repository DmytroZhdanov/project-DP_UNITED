import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';
import { getGenresByGenresId } from './getGenresByGenresId';
/**
 *
 * @param {Array} arr
 * @returns {String} markup for movie cards. You should insert resul inside <ul> by innerHTML
 */
function generateMovieCardsMarkup(arr) {
  const markup = arr
    .map(
      ({ genre_ids, id, poster_path, release_date, title, vote_average }) => {
        const year = release_date.slice(0, 4);
        const posterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : './images/image-not-found.jpg';
        const ratingStarsMurkup = generateRatingStarsMarkup(vote_average);
        const genres = getGenresByGenresId(genre_ids).join(', ');
        return `<li class="cards-item">
                  <button type="button" class="btn cards-item-btn" data-movie-card-id="${id}">
                    <img
                      src="${posterPath}"
                      alt="Poster of the movie"
                      class="movie-card-poster"
                    />
                    <div class="cards-content">
                      <div class="cards-text-content">
                        <h3 class="cards-title">${title}</h3>
                        <p class="cards-text">${genres} | ${year}</p>
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
