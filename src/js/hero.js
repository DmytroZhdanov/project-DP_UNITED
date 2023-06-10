// Hero main js
import { fetchDayTrends } from '../js/functions/movieApiService';
import { generateHomeHeroMarkup } from './functions/generateHomeHeroMarkup';

const refs = {
  heroMainSectionEl: document.querySelector('[data-hero-main-section]'),
  defaultHomeHeroSection: document.querySelector(
    '[data-default-home-hero-section]'
  ),
};

onMainHeroLoad();

async function onMainHeroLoad() {
  try {
    const response = await fetchDayTrends();
    const randomNumber = getRandomNumber(response.results.length);
    const heroFilm = response.results[randomNumber];
    refs.heroMainSectionEl.innerHTML = generateHomeHeroMarkup(heroFilm);
  } catch (error) {
    console.error(error.message);
    refs.defaultHomeHeroSection.classList.remove('is-hidden');
  }
}

function getRandomNumber(arrLength) {
  return Math.round(Math.random() * (arrLength - 1));
}
