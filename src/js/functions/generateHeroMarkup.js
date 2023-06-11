import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';

function generateHeroMarkup(movieObject) {
  const { id, title, vote_average, overview, backdrop_path } = movieObject;
  return `
  <div class="backdrop-hero-img-container backdrop-hero-film-img-container">
    <img
      src="https://image.tmdb.org/t/p/original/${backdrop_path}"
      alt="${title}"
      class="backdrop-hero-img backdrop-hero-film-img"
    />
  </div>
  <div class="container hero-film-container">
    <h1 class="visually-hidden">Cinemania: Discover the world of movies</h1>
    <div class="hero-info hero-film-info">
      <h2 class="title hero-title hero-film-title">${title}</h2>
      <div class="hero-film-rating">
        <div class="hero-rating-stars-wrapper">
          ${generateRatingStarsMarkup(vote_average)}
        </div>
      </div>
      <p class="hero-text hero-film-overview">
        ${overview}
      </p>
      <ul class="hero-buttons-list">
        <li class="hero-btn-item">
          <button type="button" data-movie-id="${id}" class="btn btn-filled">
            Watch trailer
          </button>
        </li>
        <li class="hero-btn-item">
          <button type="button" data-modal-movie-details-btn class="btn btn-hero">More details</button>
        </li>
      </ul>
    </div>
  </div>`;
}

export { generateHeroMarkup };
