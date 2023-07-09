// Catalogue Page - Section Catalogue list
import { fetchWeekTrends } from './functions/movieApiService';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { fetchMovieBySearchQuery } from './functions/movieApiService';
import { fetchMovieBySearchQueryAndYear } from './functions/movieApiService';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { onMovieCardClick } from './functions/onMovieCardClick';

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

// inputFilm.style.display = 'none';
// inputYear.style.display = 'none';

// catalogFormSearch.addEventListener('submit', onCatalogSearchMovies);
iconClearSearch.addEventListener('click', onClearInputSearch);
// iconClearFilm.addEventListener('click', onClearInputFilm);
// chooseYear.addEventListener('change', onCatalogSearchMovies);
catalogFormSearch.addEventListener('submit', searchMoviesBySearchQueryAndYear);

const moviesNumber = window.innerWidth < 768 ? 10 : 20;

let searchQuery;
let year;
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
// const btnContainer = document.querySelector('.btn-container');

// TRENDING MOVIES FOR WEEK //

async function onRenderCatalogPage(page) {
  try {
    const resp = await fetchWeekTrends(page);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    catalogEl.addEventListener('click', onMovieCardClick);
    paginationStylesOfBtn();
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

    paginationStylesOfBtn();
  } catch (err) {
    console.log(err);
  }
}

onRenderCatalogPage();

// SEARCH MOVIES BY SEARCHQUERY //

// async function onCatalogSearchMovies(e) {
//   e.preventDefault();
//   searchQuery = e.currentTarget.elements['searchQuery'].value.trim();

//   if (!searchQuery) {
//     console.error("Search querry can't be empty");
//     return;
//   }

//   pagination.off('afterMove', createPopularMoviesForWeek);

//   try {
//     const resp = await fetchMovieBySearchQuery(searchQuery, page);

//     const moviesToRender = resp.results.slice(0, moviesNumber);
//     console.log(moviesToRender);
//     catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
//     choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
//     chooseYear.innerHTML = markUpListOfYears(moviesToRender);

//     if (window.innerWidth >= 768) {
//       inputSearchByName.style.display = 'none';
//       catalogFormSearch.style.flexWrap = 'nowrap';
//     }
//     inputFilm.style.display = 'flex';
//     inputYear.style.display = 'flex';
//     iconClearSearch.hidden = false;
//     iconClearFilm.hidden = false;

//     pagination.reset(resp.total_pages);

//     paginationStylesOfBtn();

//     paginEl.classList.remove('is-hidden');
//     catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);

//     if (resp.total_results === 0) {
//       choosefilm.innerHTML = '<option value="Film">Film</option>';
//       catalogEl.innerHTML =
//         '<p class="catalog-desc"> OOPS... <br /> We are very sorry! <br /> We don’t have any results matching your search.</p>';
//       paginEl.classList.add('is-hidden');
//       return;
//     }

//     if (resp.total_results <= 20) {
//       paginEl.classList.add('is-hidden');
//       return;
//     }

//     pagination.on('afterMove', createPaginationByQuerry);
//   } catch (err) {
//     console.log(err);
//   }
// }

async function createPaginationByQuerry(evt) {
  const currentPage = evt.page;

  try {
    const resp = await fetchMovieBySearchQuery(currentPage);
    const moviesToRender = resp.results.slice(0, moviesNumber);

    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
    chooseYear.innerHTML = markUpListOfYears2(moviesToRender);

    paginationStylesOfBtn();
  } catch (err) {
    console.log(err);
  }
}

// SEARCH BY NAME AND YEAR ///

async function searchMoviesBySearchQueryAndYear(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements['searchQuery'].value.trim();
  year = e.currentTarget.elements.queryFilmYear.value;

  pagination.off('afterMove', createPaginationByQuerry);

  try {
    const resp = await fetchMovieBySearchQueryAndYear(searchQuery, year, page);
    const moviesToRender = resp.results.slice(0, moviesNumber);

    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
    chooseYear.innerHTML = markUpListOfYears2(yearsArr);

    if (window.innerWidth >= 768) {
      inputSearchByName.style.display = 'none';
      catalogFormSearch.style.flexWrap = 'nowrap';
    }
    inputFilm.style.display = 'flex';
    inputYear.style.display = 'flex';
    iconClearSearch.hidden = false;
    iconClearFilm.hidden = false;

    pagination.reset(resp.total_results);

    paginationStylesOfBtn();

    paginEl.classList.remove('is-hidden');
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    chooseYear.innerHTML = markUpListOfYears2(yearsArr);
    if (resp.total_results === 0) {
      choosefilm.innerHTML = '<option value="Film">Film</option>';
      catalogEl.innerHTML =
        '<p class="catalog-desc"> OOPS... <br /> We are very sorry! <br /> We don’t have any results matching your search.</p>';
      paginEl.classList.add('is-hidden');
      return;
    }

    if (resp.total_results <= 20) {
      paginEl.classList.add('is-hidden');
      return;
    }

    pagination.on('afterMove', createPaginationBySearchQueryAndYear);
  } catch (err) {
    console.log(err);
  }
}
async function createPaginationBySearchQueryAndYear(evt) {
  const currentPage = evt.page;

  try {
    const resp = await fetchMovieBySearchQueryAndYear(currentPage, year);
    console.log(resp);
    const moviesToRender = resp.results.slice(0, moviesNumber);
    catalogEl.innerHTML = generateMovieCardsMarkup(moviesToRender);
    choosefilm.innerHTML = markUpListOfMovies(moviesToRender);
    chooseYear.innerHTML = markUpListOfYears2(yearsArr);

    // pagination btn styles //
    paginationStylesOfBtn();
  } catch (err) {
    console.log(err);
  }
}

// CLEAR INPUTS SEARCH NAME & FILMS //
function onClearInputSearch() {
  inputSearchByName.firstElementChild.value = '';
  iconClearSearch.hidden = true;
}

// function onClearInputFilm() {
//   inputFilm.firstElementChild.value = '';

//   iconClearFilm.hidden = true;
// }

// MARKUP LISTS OF MOVIES AND YEARS ///
function markUpListOfMovies(arr) {
  return arr
    .map(({ title }) => {
      return `<option class='catalog-list-movies' value="${title}">${title}</option>`;
    })
    .join();
}

let yearsArr = [];
const date = new Date();

year = date.getFullYear();
const lastYear = year - 20;

for (let i = year; i >= lastYear; i -= 1) {
  const year = { year: i };
  yearsArr.push(year);
}

function markUpListOfYears2(yearsArr) {
  return yearsArr
    .map(({ year }) => {
      return `<option class='catalog-list-movies' value="${year}">${year}</option>`;
    })
    .join();
}

// -----FUNCTION OF SORT OF YEARS IN COOSED MOVIES----//

// function markUpListOfSortedYears(years) {
//   let yearsArr = [];
//   let newArrOfYears = [];

//   years.forEach(({ release_date }) => {
//     const year = parseInt(release_date.slice(0, 4));

//     const items = { year: year };

//     yearsArr.push(year);
//   });

//   // console.log(yearsArr);

//   const num = yearsArr.reduce((prev, current) => {
//     return { ...prev, [current]: [...(prev[current] || []), current] };
//   }, {});

//   const groupedYearsToArr = Object.values(num);
//   // console.log(groupedYearsToArr);

//   groupedYearsToArr.map(values => {
//     return newArrOfYears.push(values[0]);
//   });
//   // console.log(newArrOfYears);
//   const sortedArr = newArrOfYears.sort((a, b) => b - a);
//   // console.log(sortedArr);

//   return sortedArr
//     .map(year => {
//       return `<option class='catalog-list-years' value='${year}'>${year}</option>`;
//     })
//     .join();
// }

//  PAGINATION STYLES //

function paginationStylesOfBtn() {
  const tuiPaginatBtnSelected = document.querySelector('.tui-is-selected');
  tuiPaginatBtnSelected.classList.add('btn-current');

  const tuiPaginatBtn = document.querySelectorAll('.tui-page-btn');
  tuiPaginatBtn.forEach(button => button.classList.add('btn-number'));
}
