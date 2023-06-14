// Catalogue Page - Section Catalogue list
import { fetchWeekTrends } from './functions/movieApiService';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { fetchMovieBySearchQuery } from './functions/movieApiService';
import { fetchMovieBySearchQueryAndYear } from './functions/movieApiService';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const catalogEl = document.querySelector('[data-catalogue-movies]');
const paginEl = document.querySelector('#tui-pagination-container');
const catalogFormSearch = document.querySelector(
  '[data-catalogue-search-form]'
);
const choosefilm = document.querySelector('[data-catalogue-choose-movie]');
const chooseYear = document.querySelector('[data-catalogue-choose-year]');
const inputFilm = document.querySelector('#input-catalogue-film');
const inputYear = document.querySelector('#input-catalogue-year');
const inputSearchByName = document.querySelector(
  '#input-catalogue-search-by-name'
);
const iconClearFilm = document.querySelector('#btn-input-catalogue-film');
const iconClearSearch = document.querySelector('#btn-input-catalogue-search');
catalogFormSearch.addEventListener('submit', onCatalogSearchMovies);
iconClearSearch.addEventListener('click', onClearInputSearch);
iconClearFilm.addEventListener('click', onClearInputFilm);
chooseYear.addEventListener('change', searchMoviesByYear);
const moviesNumber = window.innerWidth < 768 ? 10 : 20;
let searchQuery;
let yearsArr = [];
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 4,
  page: 1,
};

const pagination = new Pagination(paginEl, options);

const page = pagination.getCurrentPage();

pagination.on('afterMove', createPopularMoviesForWeek);
const tuiPaginatBtn = document.querySelectorAll('.tui-page-btn');
console.log(tuiPaginatBtn);
// TRENDING MOVIES FOR WEEK //

async function onRenderCatalogPage(page) {
  try {
    const resp = await fetchWeekTrends(page);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);

    pagination.reset(resp.total_pages);
    const tuiPaginatBtn = document.querySelectorAll('.tui-page-btn');
    tuiPaginatBtn.forEach(button => {
      console.log(button);
      button.classList.add('btn-number');
    });

    const tuiPaginatContainer = document.querySelector('.tui-pagination');
    tuiPaginatContainer.classList.add(
      'dark-theme',
      'light-theme',
      'btn-container'
    );
    const tuiPaginatBtnSelected = document.querySelector('.tui-is-selected');
    console.log(tuiPaginatBtnSelected);
    tuiPaginatBtnSelected.classList.add('btn-current');

    paginEl.classList.remove('is-hidden');

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
  } catch (err) {
    console.log(err);
  }
}

async function createPopularMoviesForWeek(e) {
  const currentPage = e.page;

  try {
    const resp = await fetchWeekTrends(currentPage);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    const tuiPaginatBtnSelected = document.querySelector('.tui-is-selected');
    console.log(tuiPaginatBtnSelected);
    tuiPaginatBtnSelected.classList.add('btn-current');

    const tuiPaginatBtn = document.querySelectorAll('.tui-page-btn');
    tuiPaginatBtn.forEach(button => {
      console.log(button);
      button.classList.add('btn-number');
    });
  } catch (err) {
    console.log(err);
  }
}

onRenderCatalogPage();

// SEARCH MOVIES BY SEARCHQUERY //

async function onCatalogSearchMovies(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements['searchQuery'].value.trim();

  if (!searchQuery) {
    console.error("Search querry can't be empty");
    return;
  }

  pagination.off('afterMove', createPopularMoviesForWeek);

  try {
    const resp = await fetchMovieBySearchQuery(searchQuery, page);

    const moviesToRender = resp.results.slice(0, moviesNumber);

    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);

    iconClearSearch.hidden = false;
    inputFilm.hidden = false;
    iconClearFilm.hidden = false;
    inputYear.hidden = false;
    pagination.reset(resp.total_pages);

    paginEl.classList.remove('is-hidden');
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
    // chooseYear.innerHTML = markUpListOfYears(resp.results);

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
  } catch (err) {
    console.log(err);
  }
}

async function createPaginationByQuerry(evt) {
  const currentPage = evt.page;

  try {
    const resp = await fetchMovieBySearchQuery(currentPage);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
    // chooseYear.innerHTML = markUpListOfYears(resp.results);
  } catch (err) {
    console.log(err);
  }
}

// SEARCH BY NAME AND YEAR ///

async function searchMoviesByYear(e) {
  year = e.currentTarget.value;
  console.log(year);

  try {
    const resp = await fetchMovieBySearchQueryAndYear(year, searchQuery);

    console.log(resp.results.release_date);
  } catch (err) {
    console.log(err);
  }
}
async function createPaginationBySearchQueryAndYear(evt) {
  const currentPage = evt.page;

  try {
    const resp = await fetchMovieBySearchQueryAndYear(currentPage);
    console.log(resp);
    catalogEl.innerHTML = generateMovieCardsMarkup(resp.results);
  } catch (err) {
    console.log(err);
  }
}

// CLEAR INPUTS SEARCH NAME & FILMS //
function onClearInputSearch() {
  inputSearchByName.firstElementChild.value = '';
  iconClearSearch.hidden = true;
}

function onClearInputFilm() {
  inputFilm.firstElementChild.value = '';

  iconClearFilm.hidden = true;
}

function markUpListOfMovies(arr) {
  return arr
    .map(({ title }) => `<option value='${title}'>${title}</option>`)
    .join();
}

function markUpListOfYears(years) {
  return years
    .map(({ year }) => {
      years = release_date.slice(0, 4);
      console.log(years);
      yearsArr.push(years);
      console.log(year);
      `<option value='${year}'>${year}</option>`;
    })
    .join();
}
