import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';

function generateHomeHeroMarkup({
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
        ${generateRatingStarsMarkup(vote_average)}
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

export { generateHomeHeroMarkup };
