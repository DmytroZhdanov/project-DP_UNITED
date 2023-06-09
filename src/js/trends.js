// Weekly trends js
import { fetchWeekTrends } from "./functions/movieApiService";

const trendsContainer = document.querySelector('.weekly-trends-list');

const weekTrends = fetchWeekTrends();
weekTrends.then((value) => {
    const trendsData = value.results.slice(0,3)
    trendsData.forEach(element => {
        let markup = `<li><a class="trend-film-link" href=""><img class="trend-film-thumb" width="500px" height="281px" src="https://image.tmdb.org/t/p//w500${element.backdrop_path}"/>${element.title} Mark: ${element.vote_average.toFixed(1)}</a></li>`;
        trendsContainer.insertAdjacentHTML("afterbegin",markup);
    });
    
})


