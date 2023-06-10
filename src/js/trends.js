// Weekly trends js
import { fetchWeekTrends } from "./functions/movieApiService";
// import { generateRatingStarsMarkup } from './functions/generateRatingStarsMarkup';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

const weeklyTrendsList = document.querySelector('[data-weekly-trends-list]');

renderWeeklyTrendsItems()

async function renderWeeklyTrendsItems() {
  const response = await fetchWeekTrends();
  const moviesToRender = response.results.slice(0,3)
  const weeklyTrendsMarkup = generateMovieCardsMarkup(moviesToRender)
  weeklyTrendsList.innerHTML = weeklyTrendsMarkup
}

// const weekTrends = fetchWeekTrends();
// weekTrends.then(async(value) => {
//     const trendsData = await value.results.slice(0,3)
//     trendsData.forEach(element => {
//         let markup = `<li><a class="trend-film-link" href=""><img class="trend-film-thumb" width="500px" height="281px" src="https://image.tmdb.org/t/p//w500${element.backdrop_path}"/>${element.title} Mark: ${element.vote_average.toFixed(1)}</a></li>`;
//         trendsContainer.innerHTML = markup;
//     });
    
// })


