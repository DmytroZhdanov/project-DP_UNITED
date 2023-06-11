// Library Page - Library list section
import { fetchWeekTrends } from './functions/movieApiService';

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

//function outFromLocalStorage() {
//  const checkData = JSON.parse(localStorage.getItem(STRORAGE_LIST_LIBRARY));
//  if (checkData) {
//  refs.libraryMovieCard.innerHTML = fetchWeekTrends(checkData);
//  }
//else {
//=============если фильмов нет рисуем то что по умолчанию ==================
//refs.libraryOppsText.innerHTML = `
//<p>OOPS...</p>
//<p>We are very sorry!</p>
//<p>You don’t have any movies at your library.</p>

//`;

//  }
//}

//==================================END)======================================
//=======================Где начинаем рендерить==================
const refs = {
  libraryMovieCard: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
};
//=================================END)======================================

//=================прописал имитацию отсутствия данных в локал сторедж======================

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const a = getRandomInt(10);

if (a > 5) {
  refs.libraryMovieCard.innerHTML = fetchWeekTrends();
} else {
  refs.libraryOppsText.innerHTML = `
      <p>OOPS...</p>
      <p>We are very sorry!</p>
      <p>You don’t have any movies at your library.</p>
    
      `;
}
