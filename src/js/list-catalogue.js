// Catalogue Page - Section Catalogue list
import { fetchWeekTrends } from './functions/movieApiService';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { fetchMovieBySearchQuery } from './functions/movieApiService';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { onMovieCardClick } from './functions/onMovieCardClick';
import { loader } from './functions/loader';

const catalogEl = document.querySelector('[data-catalogue-movies]');
const paginEl = document.querySelector('#tui-pagination-container');
const catalogFormSearch = document.querySelector(
  '[data-catalogue-search-form]'
);
const inputSearchByName = document.querySelector(
  '#input-catalogue-search-by-name'
);
const iconClearSearch = document.querySelector('#btn-input-catalogue-search');

catalogFormSearch.addEventListener('submit', onCatalogSearchMovies);
iconClearSearch.addEventListener('click', onClearInputSearch);

const moviesNumber = window.innerWidth < 768 ? 10 : 20;

let searchQuery;
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 4,
  page: 1,
};

const pagination = new Pagination(paginEl, options);
const page = pagination.getCurrentPage();

pagination.on('afterMove', createPopularMoviesForWeek);
const tuiPaginatContainer = document.querySelector('.tui-pagination');
tuiPaginatContainer.classList.add('btn-container');

onRenderCatalogPage();

// TRENDING MOVIES FOR WEEK //
async function onRenderCatalogPage(page) {
  loader.on()
  try {
    const resp = await fetchWeekTrends(page);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    catalogEl.addEventListener('click', onMovieCardClick);


    pagination.reset(resp.total_pages);
    paginationStylesOfBtn();
    paginEl.classList.remove('is-hidden');

    if (resp.total_results === 0) {
      catalogEl.innerHTML =
        '<p class="catalog-desc"> OOPS... <br />We are very sorry! <br />We don’t have any results matching your search.</p>';
      paginEl.classList.add('is-hidden');
      return;
    }

    if (resp.total_results <= 20) {
      paginEl.classList.add('is-hidden');
      return;
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    loader.off()
  }
}

async function createPopularMoviesForWeek(e) {
  loader.on()
  const currentPage = e.page;

  try {
    paginationStylesOfBtn();

    const resp = await fetchWeekTrends(currentPage);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
  } catch (error) {
    console.error(error.message);
  } finally {
    loader.off()
  }
}

// SEARCH MOVIES BY SEARCHQUERY //
async function onCatalogSearchMovies(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements['searchQuery'].value.trim();

  if (!searchQuery) {
    console.error("Search querry can't be empty");
    return;
  }
  loader.on()

  pagination.off('afterMove', createPopularMoviesForWeek);

  try {
    const resp = await fetchMovieBySearchQuery(searchQuery, page);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    iconClearSearch.hidden = false;

    pagination.reset(resp.total_pages);
    paginationStylesOfBtn();
    paginEl.classList.remove('is-hidden');
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);

    if (resp.total_results === 0) {
      catalogEl.innerHTML =
        '<p class="catalog-desc"> OOPS... <br /> We are very sorry! <br /> We don’t have any results matching your search.</p>';
      paginEl.classList.add('is-hidden');
      return;
    }

    if (resp.total_results <= 20) {
      paginEl.classList.add('is-hidden');
      return;
    }

    pagination.on('afterMove', createPaginationByQuerry);
  } catch (error) {
    console.error(error);
  } finally {
    loader.off()
  }
}

async function createPaginationByQuerry(evt) {
  loader.on()
  const currentPage = evt.page;

  try {
    paginationStylesOfBtn();

    const resp = await fetchMovieBySearchQuery(searchQuery, currentPage);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
  } catch (error) {
    console.error(error.message);
  } finally {
    loader.off()
  }
}

// CLEAR INPUTS SEARCH NAME & FILMS //
function onClearInputSearch() {
  inputSearchByName.firstElementChild.value = '';
  iconClearSearch.hidden = true;
  onRenderCatalogPage(1);
}

//  PAGINATION STYLES //
function paginationStylesOfBtn() {
  const tuiPaginatBtnSelected = document.querySelector('.tui-is-selected');
  tuiPaginatBtnSelected.classList.add('btn-current');

  const tuiPaginatBtn = document.querySelectorAll('.tui-page-btn');
  tuiPaginatBtn.forEach(button => button.classList.add('btn-number'));
}
