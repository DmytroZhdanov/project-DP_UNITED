// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { fetchWeekTrends } from './functions/movieApiService';

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

//function outFromLocalStorage() {
//  const checkData = JSON.parse(localStorage.getItem(STRORAGE_LIST_LIBRARY));
//  if (checkData) {
//    libraryListCreatePage(checkData);
//  } else {
//=============если фильмов нет рисуем то что по умолчанию ==================
//    LibraryEmptyList();
//  }
//}

//==================================END)======================================
//=======================Где начинаем рендерить==================
const refs = {
  libraryMovieCard: document.querySelector('.movie-cards-list'),
  libraryOppsText: document.querySelector('.library-oops-text'),
};
//=================================END)======================================

//=================прописал имитацию отсутствия данных в локал сторедж======================

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const a = getRandomInt(10);

if (a > 5) {
  fetchWeekTrends().then(data => {
    libraryListCreatePage(data.results);
  });
} else {
  refs.libraryMovieCard.innerHTML = LibraryEmptyList();
}

//====================Функция рендера странички с карточками из масива=========================
function libraryListCreatePage(arr) {
  return (refs.libraryMovieCard.innerHTML = arr
    .map(
      () => (refs.libraryMovieCard.innerHTML = generateMovieCardsMarkup(arr))
    )
    .join(''));
}
//=============================END==========================================================

//=================Функция рендерим надписи Opps - в библиотеке нет ниодного фильма==================

function LibraryEmptyList() {
  return (refs.libraryOppsText.innerHTML = `
    
      <p>OOPS...</p>
      <p>We are very sorry!</p>
      <p>You don’t have any movies at your library.</p>
    
      `);
}

//=============================END==========================================================
