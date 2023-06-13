import { generateRatingStarsMarkup } from './generateRatingStarsMarkup';
import defaultImage from '../../images/hero-main-desc-1x-1280.jpg';

function generateHeroMarkup(movieArr) {
  return movieArr
    .map(({ id, title, vote_average, overview, backdrop_path }) => {
      return `
  <div class="slide"><div class="backdrop-hero-img-container backdrop-hero-film-img-container">
  ${
    backdrop_path
      ? `<picture>
        <source
          srcset="
            https://image.tmdb.org/t/p/w1280/${backdrop_path} 1280w,
            https://image.tmdb.org/t/p/original/${backdrop_path} 2560w,
            https://image.tmdb.org/t/p/original/${backdrop_path} 3840w,
            https://image.tmdb.org/t/p/w780/${backdrop_path}    768w,
            https://image.tmdb.org/t/p/original/${backdrop_path}  1536w,
            https://image.tmdb.org/t/p/original/${backdrop_path}  2304w,
            https://image.tmdb.org/t/p/w500/${backdrop_path}    320w,
            https://image.tmdb.org/t/p/w780/${backdrop_path}    640w,
            https://image.tmdb.org/t/p/w1280/${backdrop_path}    960w
          "
          sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px, 100vw"
          type="image/jpeg"
        />
        <img
          class="backdrop-hero-img backdrop-hero-film-img"
          src="https://image.tmdb.org/t/p/original/${backdrop_path}"
          alt="${title}"
        />
      </picture>`
      : `<img
          class="backdrop-hero-img backdrop-hero-film-img"
          src="${defaultImage}"
          alt="Home hero image"
        />`
  }  
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
          <button type="button" data-modal-movie-btn data-id="${id}" class="btn btn-filled">
            Watch trailer
          </button>
        </li>
        <li class="hero-btn-item">
          <button type="button" data-modal-movie-details-btn data-id="${id}" class="btn btn-hero">More details</button>
        </li>
      </ul>
    </div>
  </div>
</div>
`;
    })
    .join('');
}

export { generateHeroMarkup };
