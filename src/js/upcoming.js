// Upcoming this month js
import { fetchUpcomingThisMonth } from './functions/movieApiService';
import { generateUpcomingSectionMarkup } from './functions/generateUpcomingSectionMarkup';
import { addAppropriateListenerUpcoming } from './functions/addAppropriateListenerUpcoming';
import { weeklyTrendsDefaultEl } from './trends';

const upcommingTrendsCardsEl = document.querySelector('.js-upcomming-cards');
const upcommingTrendsDefaultEl = document.querySelector(
  '.js-upcomming-default'
);

gettingMovie();
async function gettingMovie() {
  try {
    const data = await fetchUpcomingThisMonth();
    const uncomingArray = data.results;
    const randomMovie =
      uncomingArray[Math.floor(Math.random() * uncomingArray.length)];
    const upcomingConatainer = document.querySelector('[data-upcoming]');
    upcomingConatainer.innerHTML = generateUpcomingSectionMarkup(randomMovie);

    const isAddBtn = upcomingConatainer.innerHTML.includes('Add to library');
    const btnClasses = 'btn btn-filled';
    addAppropriateListenerUpcoming(isAddBtn, btnClasses, randomMovie.id, randomMovie);
  } catch (error) {
    console.error(error.message);
    upcommingTrendsCardsEl.classList.add('visually-hidden');
    upcommingTrendsDefaultEl.setAttribute('data-shown', true);
    if (weeklyTrendsDefaultEl.getAttribute('data-shown') === 'true') {
      weeklyTrendsDefaultEl.lastElementChild.textContent =
        'We don’t have any results.';
      return;
    }
    upcommingTrendsDefaultEl.classList.remove('visually-hidden');
  }
}

export { upcommingTrendsDefaultEl };
