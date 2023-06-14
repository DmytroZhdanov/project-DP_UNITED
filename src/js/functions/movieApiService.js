import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTc5NmYxNzM4NzI3OTg1NWM3MjBiMjdmNDljMjVmMSIsInN1YiI6IjY0N2Y3MDYzNzFmZmRmMDEwYzg3YWIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9AzF80qawQzmYwfptJjDK5gSiKy9M6ZEOpq2I4PFWtg';
const API_KEY = '55796f17387279855c720b27f49c25f1';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY_ENDPOINT = '/trending/movie/day';
const TRENDING_WEEK_ENDPOINT = '/trending/movie/week';
const UPCOMING_ENDPOINT = '/movie/upcoming';
const BY_ID_ENDPOINT = '/movie';
const SEARCH_QUERY_ENDPOINT = '/search/movie';
const GENRE_ENDPOINT = '/genre/movie/list';

const LANGUAGE = 'en-US';
const ADULT = 'false';

/**
 * Отримує трендові фільми дня
 * @param {String || Number} page
 * @returns {Promise} response data
 */
async function fetchDayTrends(page = 1) {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_DAY_ENDPOINT}?api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує трендові фільми тижня
 * @param {String || Number} page
 * @returns {Promise} response data
 */
async function fetchWeekTrends(page = 1) {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_WEEK_ENDPOINT}?api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує нові фільми
 * @param {String || Number} page
 * @returns {Promise} response data
 */
async function fetchUpcomingThisMonth(page = 1) {
  const response = await axios.get(
    `${BASE_URL}${UPCOMING_ENDPOINT}?api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує фільм за ID
 * @param {String} id
 * @returns {Promise} response data
 */
async function fetchMovieById(id) {
  const response = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує фільми за пошуковим запитом
 * @param {String} searchQuery
 * @param {String || Number} page
 * @returns {Promise} response data
 */
async function fetchMovieBySearchQuery(searchQuery, page = 1) {
  const response = await axios.get(
    `${BASE_URL}${SEARCH_QUERY_ENDPOINT}?query=${searchQuery}&api_key=${API_KEY}&page=${page}&include_adult=${ADULT}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує фільм за пошуковим запитом та роком
 * @param {String} searchQuery
 * @param {String || Number} year
 * @param {String || Number} page
 * @returns {Promise} response data
 */
async function fetchMovieBySearchQueryAndYear(searchQuery, year, page = 1) {
  const response = await axios.get(
    `${BASE_URL}${SEARCH_QUERY_ENDPOINT}?query=${searchQuery}&primary_release_year=${year}&page=${page}&api_key=${API_KEY}&include_adult=${ADULT}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує відео до фільму за ID
 * @param {String} id
 * @returns {Promise} response data
 */
async function fetchMovieVideosById(id) {
  const response = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return response.data;
}

/**
 * Отримує перелік жанрів
 * @returns {Promise} response data

 */
async function fetchGenresList() {
  const response = await axios.get(
    `${BASE_URL}${GENRE_ENDPOINT}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return response.data;
}

export {
  fetchDayTrends,
  fetchWeekTrends,
  fetchUpcomingThisMonth,
  fetchMovieById,
  fetchMovieBySearchQuery,
  fetchMovieBySearchQueryAndYear,
  fetchMovieVideosById,
  fetchGenresList,
};
