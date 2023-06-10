// Weekly trends js
import { fetchWeekTrends } from "./functions/movieApiService";
// import { generateRatingStarsMarkup } from './functions/generateRatingStarsMarkup';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

const weeklyTrendsList = document.querySelector('[data-weekly-trends-list]');

renderWeeklyTrendsItems()

const moviesNumber = window.innerWidth < 768 ? 1 : 3;

async function renderWeeklyTrendsItems() {
  const response = await fetchWeekTrends();
  const moviesToRender = response.results.slice(0,moviesNumber)
  const weeklyTrendsMarkup = generateMovieCardsMarkup(moviesToRender)
  weeklyTrendsList.innerHTML = weeklyTrendsMarkup
}

console.log(window.innerWidth)


