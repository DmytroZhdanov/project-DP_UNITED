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
      ({ genre_ids, id, poster_path, release_date, title, vote_average, genres }) => {
        const year = release_date.slice(0, 4);
        const posterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : './images/image-not-found.jpg';
        const ratingStarsMurkup = generateRatingStarsMarkup(vote_average);
        const genresString = genre_ids
          ? getGenresByGenresId(genre_ids).join(', ')
          : genres.map(genre => genre.name).join(', ');
        return `<li class="cards-item">
                  <button type="button" class="btn cards-item-btn">
                    <img
                      src="${posterPath}"
                      alt="Poster of the movie"
                      class="movie-card-poster"
                    />
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
