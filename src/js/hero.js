// Hero main js
import { fetchDayTrends } from '../js/functions/movieApiService';
import { createHomeHeroMarkup } from './functions/mainHeroMarkup';

const refs = {
  heroMainSectionEl: document.querySelector('.js-hero-main-section'),
  defaultHomeHeroSection: document.querySelector(
    '.js-default-home-hero-section'
  ),
};

onHomeLoad();

async function onHomeLoad() {
  try {
    const response = await fetchDayTrends();
    console.log(response);
    const randomNumber = getRandomNumber(response.results.length);
    const heroFilm = response.results[randomNumber];
    console.log(heroFilm);
    refs.heroMainSectionEl.innerHTML = createHomeHeroMarkup(heroFilm);
  } catch (error) {
    console.error(error.message);
    refs.defaultHomeHeroSection.classList.remove('visually-hidden');
  }
}

function getRandomNumber(arrLength) {
  return Math.round(Math.random() * (arrLength - 1));
}
