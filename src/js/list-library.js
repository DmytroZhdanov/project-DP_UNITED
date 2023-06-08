// Library Page - Library list section

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

function outFromLocalStorage() {
  const checkData = JSON.parse(localStorage.getItem(STRORAGE_LIST_LIBRARY));
  if (checkData) {
    createPage(checkData);
    //  dataForm.email = checkData.email;
    //  dataForm.message = checkData.message;
    //  refs.inputEmail.value = checkData.email;
    //  refs.textArea.value = checkData.message;
  } else {
    //=============если фильмов нет рисуем то что по умолчанию ==================
    parceHtmlNoFavoriteFilm();
  }
}

//==================================END)======================================

//Прописал временно прием данных а АПИ сервера для рендера страницы===================================
const axios = require('axios').default;
const KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzNkZjVhNDE2N2JjNTk5ZWEwMWNjNmQyNGNjNzVhZCIsInN1YiI6IjY0N2VmMjg1OTM4MjhlMDBkY2RlNWNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqCYz0SAB1p5Vs4x_lTPXyMV57XvzeJMma8vmsX5SKs';

const refs = {
  contentForPictures: document.querySelector('.container'),
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
    //refs.contentForPictures.insertAdjacentHTML(
    //  'beforebegin',
    //  `
    //  <div class="dropdown">
    //  <button class="dropbtn">Dropdown</button>
    //  <div class="dropdown-content">
    //    <a href="#">Link 1</a>
    //    <a href="#">Link 2</a>
    //    <a href="#">Link 3</a>
    //  </div>
    //</div>
    //`
    //);
  });
} else {
  parceHtmlNoFavoriteFilm();
}

function createPage(arr) {
  return (refs.contentForPictures.innerHTML = arr
    .map(
      ({ poster_path, backdrop_path }) =>
        (refs.contentForPictures.innerHTML = `
        
        <a class="gallery__link" href=https://api.themoviedb.org/3/authentication${backdrop_path}>
            <img class="img-poster" src="https://image.tmdb.org/t/p//w500${poster_path}" alt="title" width="280" heigth="406" loading="lazy" />
        </a>
        `)
    )
    .join(''));
}

function parceHtmlNoFavoriteFilm() {
  refs.contentForPictures.innerHTML = `
  <ul class="oops">
    <li>OOPS...</li>
    <li>We are very sorry!</li>
    <li>You don’t have any movies at your library.</li>
    </ul>
    `;
}
