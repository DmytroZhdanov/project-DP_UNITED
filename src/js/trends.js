// Weekly trends js
import { fetchWeekTrends } from './functions/movieApiService';
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { onMovieCardClick } from './functions/onMovieCardClick';
import { upcommingTrendsDefaultEl } from './upcoming';

const weeklyTrendsList = document.querySelector('[data-weekly-trends-list]');
const weeklyTrendsCardsEl = document.querySelector('.js-weekly-trends-cards');
const weeklyTrendsDefaultEl = document.querySelector(
  '.js-weekly-trends-default'
);

const moviesNumber = window.innerWidth < 768 ? 1 : 3;

renderWeeklyTrendsItems();

async function renderWeeklyTrendsItems() {
  try {
    const response = await fetchWeekTrends();
    const moviesToRender = response.results.slice(0, moviesNumber);
    const weeklyTrendsMarkup = generateMovieCardsMarkup(moviesToRender);
    weeklyTrendsList.innerHTML = weeklyTrendsMarkup;

    weeklyTrendsList.addEventListener('click', onMovieCardClick);
  } catch (error) {
    console.error(error.message);
    weeklyTrendsCardsEl.classList.add('visually-hidden');
    weeklyTrendsDefaultEl.setAttribute('data-shown', true);
    if (upcommingTrendsDefaultEl.getAttribute('data-shown') === 'true') {
      upcommingTrendsDefaultEl.lastElementChild.textContent =
        'We don’t have any results.';

      return;
    }
    weeklyTrendsDefaultEl.classList.remove('visually-hidden');
  }
}

export { weeklyTrendsDefaultEl };
