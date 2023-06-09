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
      src="https://image.tmdb.org/t/p/original/${backdrop_path}
"
      alt="${title}"
      class="backdrop-hero-main-film-img"
    />
  </div>
  <div class="container hero-main-film-container">
    <div class="hero-main-film-info">
      <h2 class="title hero-main-film-title">${title}</h2>
      <div class="hero-main-film-rating">
        <progress max="10" value="${Math.round(vote_average)}"></progress>
      </div>
      <p class="hero-main-film-overview">
        ${overview}
      </p>
      <div class="hero-main-buttons-container">
        <button type="button" class="btn watch-trailer-btn btn-filled">
          Watch trailer
        </button>
        <button type="button" class="more-details-btn">More details</button>
      </div>
    </div>
  </div>`;
}

export { createHomeHeroMarkup };
// {adult: false;
// backdrop_path: '/vfSsZ3AEht8v3S9n8udwzCJ4IAU.jpg';
// genre_ids: (2)[(18, 53)];
// id: 869612;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Master Gardener';
// overview: 'Narvel Roth is a meticulous horticulturist who is devoted to tending the grounds of a beautiful estate and pandering to his employer, the wealthy dowager Mrs. Haverhill. When she demands that he take on her wayward and troubled great niece, it unlocks dark secrets from a buried violent past.';
// popularity: 24.021;
// poster_path: '/gdiuvpKrFtkGsWMbitVBHt82yn7.jpg';
// release_date: '2023-05-19';
// title: 'Master Gardener';
// video: false;
// vote_average: 6.214;
// vote_count: 14;}
