// Upcoming this month js
import {
  fetchUpcomingThisMonth,
  fetchGenresList,
} from './functions/movieApiService';

console.log(fetchGenresList());

const upcomingConatainer = document.querySelector('.upcoming-flex');

gettingMovie();
async function gettingMovie() {
  const data = await fetchUpcomingThisMonth();
  const uncomingArray = data.results;
  const randomMovie =
    uncomingArray[Math.floor(Math.random() * uncomingArray.length)];
  console.log(randomMovie);
  upcomingConatainer.innerHTML = await renderingUpcomingMovie(randomMovie);
}

async function renderingUpcomingMovie({
  backdrop_path,
  title,
  genre_ids,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) {
  const genres = await fetchGenres(genre_ids);
  return ` <picture>
  <source
    srcset="https://image.tmdb.org/t/p/original/${backdrop_path}"
    media="(min-width:1280px)"
  />
  <source
    srcset="https://image.tmdb.org/t/p/original/${backdrop_path}"
    media="(min-width:768px)"
  />
  <source
    srcset="https://image.tmdb.org/t/p/original/${poster_path}"
    media="(min-width:320px)"
  />
  <img
    class="upcoming-movie-img"
    src="https://image.tmdb.org/t/p/original/${poster_path}"
    alt="${title}"
  />
</picture>

<div class="upcoming-column">
  <h2 class="upcoming-headline">${title}</h2>
  <div class="upcoming-wrap">
    <div class="upcoming-inner-wrap">
      <div class="upcoming-wrapper upcoming-wrapper-gap">
        <ul class="upcoming-list">
          <li class="upcoming-item-data">
            <p class="upcoming-subject">Release date</p>
          </li>
          <li class="upcoming-item-data-num">
            <p class="upcoming-date">${release_date}</p>
          </li>
        </ul>

        <ul class="upcoming-list">
          <li class="upcoming-item-vote">
            <p class="upcoming-subject">Vote / Votes</p>
          </li>
          <li class="upcoming-item-vote-num">
            <p class="upcoming-vote">
              <span class="upcoming-inner-box">${vote_average}</span>
              <span class="upcoming-inner-color">/</span>
              <span class="upcoming-inner-box-votes">${vote_count}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="upcoming-wrapper">
        <ul class="upcoming-list">
          <li class="upcoming-item-pop">
            <p class="upcoming-subject">Popularity</p>
          </li>
          <li class="upcoming-item-pop-num">
            <p class="upcoming-famous">${popularity.toFixed(1)}</p>
          </li>
        </ul>

        <ul class="upcoming-list">
          <li class="upcoming-item-genre">
            <p class="upcoming-subject">Genre</p>
          </li>
          <li class="upcoming-item-genre-num">
            <p class="upcoming-janres">${genres}</p>
          </li>
        </ul>
      </div>
    </div>

    <h3 class="upcoming-caption">About</h3>
    <p class="upcoming-description">
      ${overview}
    </p>
    <button class="btn btn-filled" type="button">
      Add to my library
    </button>
  </div>
</div>`;
}

async function fetchGenres(ids) {
  const genresData = await fetchGenresList();

  const genresArray = genresData.genres;
  const genresName = ids.map(id => {
    const gener = genresArray.find(gener => gener.id === id);
    return gener.name;
  });
  return genresName.join(', ');
}
