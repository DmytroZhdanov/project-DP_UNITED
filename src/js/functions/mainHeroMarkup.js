import { renderStarRating } from './renderStarRating';

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
          <button type="button" data-movie-id="${id}" class="btn btn-filled">
            Watch trailer
          </button>
        </li>
        <li class="hero-btn-item">
          <button type="button" data-movie-id="${id}" class="btn btn-empty btn-black">More details</button>
        </li>
      </ul>
    </div>
  </div>`;
}

export { createHomeHeroMarkup };

  // Розмітку кнопок змінив для тесту. Твою, оригінальну залишаю нижче
  
{/* <div class="hero-main-buttons-container">
  <button
    type="button"
    data-movie-id="${id}"
    class="btn watch-trailer-btn btn-filled"
  >
    Watch trailer
  </button>
  <button type="button" data-movie-id="${id}" class="more-details-btn">
    More details
  </button>
</div>; */}