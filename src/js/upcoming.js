// Upcoming this month js
import { fetchUpcomingThisMonth } from './functions/movieApiService';
import { generateUpcomingSectionMarkup } from './functions/generateUpcomingSectionMarkup';

gettingMovie();
async function gettingMovie() {
  const data = await fetchUpcomingThisMonth();
  const uncomingArray = data.results;
  const randomMovie =
    uncomingArray[Math.floor(Math.random() * uncomingArray.length)];
  const upcomingConatainer = document.querySelector('.upcoming-flex');
  upcomingConatainer.innerHTML = generateUpcomingSectionMarkup(randomMovie);
}
