// Catalogue Page - Section Catalogue list
import { fetchWeekTrends } from './functions/movieApiService';
import { fetchGenresList } from './functions/movieApiService';
import { fetchMovieBySearchQuery } from './functions/movieApiService';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const catalogEl = document.querySelector('.catalog-movies-list');
console.log(catalogEl);
const paginEl = document.querySelector('#tui-pagination-container');
console.log(paginEl);
let perPage = 10;
const options = {
  totalItems: 0,
  itemsPerPage: 10,
  visiblePages: 4,
  page: 1,
};

const pagination = new Pagination(paginEl, options);
const itemCount = 10;

const page = pagination.getCurrentPage();
const itemsPage = pagination.setItemsPerPage(10);

pagination.on('afterMove', createPopularMoviesForWeek);

async function onRenderCatalogPage(page) {
  try {
    const resp = await fetchWeekTrends(page);
    console.log(resp);
    // pagination.setItemsPerPage(perPage);

    // catalogEl.innerHTML = MarkupCatalogCard(resp.results);
    pagination.reset(resp.total_pages);
    paginEl.classList.remove('is-hidden');

    if (resp.results.length === 0) {
      catalogEl.innerHTML =
        '<p class="catalog-desc"> OOPS... <br /> We are very sorry! <br /> We don’t have any results matching your search.</p>';
      paginEl.classList.add('is-hidden');
      return;
    }

    if (page <= 1) {
      paginEl.classList.add('is-hidden');
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

async function createPopularMoviesForWeek(e) {
  const currentPage = e.page;
  console.log(currentPage);

  try {
    const resp = await fetchWeekTrends(currentPage);

    // pagination.setItemsPerPage(perPage);
    // catalogEl.innerHTML = MarkupCatalogCard(resp.results);
    // pagination.setItemsPerPage(10);
  } catch (err) {
    console.log(err);
  }
}

onRenderCatalogPage();

// function MarkupCatalogCard(arr) {
//   return arr
//     .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
//       return `<div class="catalog-card" >
//   <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class='catalog-movie-img''/>
// <div class="catalog-card-movie-info">
//     <div>
//     <h2>${title}</h2>
//       <p>${genre_ids} | ${release_date}</p>
//     </div>
//   <div>
//     <p>${vote_average}</p>
//   </div>
// </div></div>`;
//     })
//     .join();
// }
