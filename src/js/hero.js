// Hero main js
import { fetchDayTrends } from '../js/functions/movieApiService';
import { generateHeroMarkup } from './functions/generateHeroMarkup';
import { openModalMovieDetails } from './functions/openModalMovieDetails';
import { openModalTrailer } from './functions/openModalTrailer';
import { heroSlider } from './functions/heroSlider';
import { loader } from './functions/loader';

const refs = {
  heroSectionEl: document.querySelector('[data-hero-section]'),
  defaultHeroSectionEl: document.querySelector('[data-default-hero-section]'),
};

onHeroLoad();

async function onHeroLoad() {
  loader.on();
  try {
    const response = await fetchDayTrends(Math.round(Math.random() * 4 + 1));
    refs.heroSectionEl.innerHTML = generateHeroMarkup(response.results);
    heroSlider.enable();

    const modalTrailerBtn = document.querySelectorAll('[data-modal-movie-btn]');
    const modalMovieDetailsBtn = document.querySelectorAll(
      '[data-modal-movie-details-btn]'
    );

    modalTrailerBtn.forEach(el =>
      el.addEventListener('click', () => {
        openModalTrailer(el.getAttribute('data-id'));
        heroSlider.pause();
      })
    );

    modalMovieDetailsBtn.forEach(el =>
      el.addEventListener('click', () => {
        openModalMovieDetails(el.getAttribute('data-id'));
        heroSlider.pause();
      })
    );
  } catch (error) {
    console.error(error.message);
    refs.defaultHeroSectionEl.classList.remove('is-hidden');
  } finally {
    loader.off();
  }
}
