// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

const refs = {
  libraryMovieCard: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
};

const filmsInLibrary = JSON.parse(localStorage.getItem('library'));

if (filmsInLibrary) {
  refs.libraryMovieCard.innerHTML = generateMovieCardsMarkup(filmsInLibrary);
  refs.libraryMovieCard.classList.add('movie-cards-list-css');
} else {
  refs.libraryOppsText.innerHTML = `
      <p>OOPS...<br>
      We are very sorry!<br>
      You don’t have any movies at your library.</ps=>

      `;
  refs.libraryOppsText.classList.add('library-ops-text-css');
}
