// Library Page - Library list section

//Прописал временно прием данных а АПИ сервера для рендера страницы===================================
const axios = require('axios').default;
const KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNkZjVhNDE2N2JjNTk5ZWEwMWNjNmQyNGNjNzVhZCIsInN1YiI6IjY0N2VmMjg1OTM4MjhlMDBkY2RlNWNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqCYz0SAB1p5Vs4x_lTPXyMV57XvzeJMma8vmsX5SKs';

const refs = {
  contentForPictures: document.querySelector('.gallery'),
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: KEY,
  },
};

async function getApiSearch() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?key=${KEY}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    Notify.failure(error.message);
  }
}
//============================END (временно прописал выше с АПИ прием данных )===========================
//запускаем функцию рендера страницы (нужно переделать прием данных с локал сторидж)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const a = getRandomInt(10);

if (a > 5) {
  getApiSearch(URL).then(data => {
    console.log(data.results);
    createPage(data.results);
  });
} else {
  refs.contentForPictures.innerHTML = `<li>OOPS...</li>
  <li>We are very sorry!</li>
  <li>You don’t have any movies at your library.</li>`;
}

function createPage(arr) {
  return (refs.contentForPictures.innerHTML = arr
    .map(
      ({ poster_path, backdrop_path }) =>
        (refs.contentForPictures.innerHTML = `
          <a class="gallery__link" href=https://api.themoviedb.org/3/authentication${backdrop_path}>
            <div class="photo-card">
            <img src="https://image.tmdb.org/t/p//w500${poster_path}" alt="title" loading="lazy" />
            
          </div></a>`)
    )
    .join(''));
}
