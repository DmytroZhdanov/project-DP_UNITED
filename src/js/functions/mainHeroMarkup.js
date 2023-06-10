import { renderStarRating } from './renderStarRating';

/**
 * Повертає картку для Main Hero
 * @param {Object}
 * @returns Main Hero Card
 */
function createHomeHeroMarkup({
  id,
  title,
  vote_average,
  overview,
  backdrop_path,
}) {
  return `
  <div class="backdrop-hero-main-film-img-container">
    <img
      src="https://image.tmdb.org/t/p/original/${backdrop_path}"
      alt="${title}"
      class="backdrop-hero-main-film-img"
    />
  </div>
  <div class="container hero-main-film-container">
    <div class="hero-main-film-info">
      <h2 class="title hero-main-film-title">${title}</h2>
      <div class="hero-main-film-rating">
        ${renderStarRating(vote_average)}
      </div>
      <p class="hero-main-film-overview">
        ${overview}
      </p>
      <ul class="hero-buttons-list">
        <li class="hero-btn-item">
          <button type="button" data-movie-id="${id}" class="btn btn-filled hero-main-btn">
            Watch trailer
          </button>
        </li>
        <li class="hero-btn-item">
          <button type="button" data-movie-id="${id}" class="btn btn-empty btn-black hero-main-btn">More details</button>
        </li>
      </ul>
    </div>
  </div>`;
}

export { createHomeHeroMarkup };
