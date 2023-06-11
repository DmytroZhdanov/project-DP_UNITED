// Catalogue Page - Section Catalogue list
import { fetchWeekTrends } from './functions/movieApiService';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
// import { fetchGenresList } from './functions/movieApiService';
import { fetchMovieBySearchQuery } from './functions/movieApiService';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const catalogEl = document.querySelector('.catalog-movies-list');
const paginEl = document.querySelector('#tui-pagination-container');
const catalogFormSearch = document.querySelector('#data-catalog-search-form');
const inputFilm = document.querySelector('[input-catalog-film]');
const inputYear = document.querySelector('[input-catalog-year]');

const iconClose = document.querySelector('[btn-input-catalog-film]');
console.dir(catalogFormSearch);

catalogFormSearch.addEventListener('submit', onCatalogSearchMovies);

const options = {
  totalItems: 0,
  itemsPerPage: 10,
  visiblePages: 4,
  page: 1,
};

const pagination = new Pagination(paginEl, options);
const itemCount = 10;

const page = pagination.getCurrentPage();

pagination.on('afterMove', createPopularMoviesForWeek);

async function onRenderCatalogPage(page) {
  try {
    const resp = await fetchWeekTrends(page);

    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);

    pagination.reset(resp.total_pages);
    // const btnPaginatBtn = document.querySelectorAll('.tui-page-btn');
    // console.log(btnPaginatBtn);
    // btnPaginatBtn.classList.add('dark-theme');
    // pagination.setItemsPerPage(itemCount);

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

  try {
    const resp = await fetchWeekTrends(currentPage);

    pagination.setItemsPerPage(itemCount);
    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);

    // pagination.setItemsPerPage(10);
  } catch (err) {
    console.log(err);
  }
}

onRenderCatalogPage();

async function onCatalogSearchMovies(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements['searchQuery'].value.trim();
  console.log(searchQuery);
  if (!searchQuery) {
    console.error("Search querry can't be empty");
    return;
  }

  pagination.off('afterMove', createPopularMoviesForWeek);

  try {
    const resp = await fetchMovieBySearchQuery(searchQuery, page);
    console.log(resp);
    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);
    inputFilm.hidden = false;
    inputYear.hidden = false;
    pagination.reset(resp.total_pages);

    paginEl.classList.remove('is-hidden');
    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);

    if (resp.results.length === 0) {
      catalogEl.innerHTML =
        '<p class="catalog-desc"> OOPS... <br /> We are very sorry! <br /> We don’t have any results matching your search.</p>';
      paginEl.classList.add('is-hidden');
      return;
    }

    pagination.on('afterMove', createPaginationByQuerry);
    // pagination.setItemsPerPage(10);
  } catch (err) {
    console.log(err);
  }
}

async function createPaginationByQuerry(evt) {
  const currentPage = evt.page;

  try {
    const resp = await fetchMovieBySearchQuery(currentPage);
    // pagination.setItemsPerPage(10);
    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);
  } catch (err) {
    console.log(err);
  }
}
