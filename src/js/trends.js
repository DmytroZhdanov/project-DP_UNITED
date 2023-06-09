// Weekly trends js
import { fetchWeekTrends } from "./functions/movieApiService";

const trendsContainer = document.querySelector('.weekly-trends');

const weekTrends = fetchWeekTrends();
const filmTrends = [];
weekTrends.then((value) => {
    const trendsData = value.results.map(film => {
       filmTrends.push(film)
    })
    for (let i=0;i<=2;i+=1){
        let markup = `<a class="trend-film-link" href=""><img class="trend-film-thumb" width="500px" height="281px" href="https://image.tmdb.org/t/p//w500${filmTrends[i].backdrop_path}"/>${filmTrends[i].title} Mark: ${filmTrends[i].vote_average.toFixed(1)}</a>`;
        trendsContainer.insertAdjacentHTML("afterbegin",markup);
    }
    
})


