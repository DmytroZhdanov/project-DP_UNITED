// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

const refs = {
  libraryMovieList: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
};

const filmsInLibrary = JSON.parse(localStorage.getItem('library'));

if (filmsInLibrary) {
  if (filmsInLibrary.length) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(filmsInLibrary);
    refs.libraryMovieList.insertAdjacentHTML(
      'afterend',
      `
  <div class="btn-list-search">
      <button type="button" class="btn btn-filled" data-load-more-btn>
      Load more
      </button>
    </div>`
    );

    refs.libraryMovieList.classList.add('movie-cards-list-css');
  } else {
    libraryOppsTextRender();
  }
} else {
  libraryOppsTextRender();
}

function libraryOppsTextRender() {
  refs.libraryOppsText.innerHTML = `
      <p>OOPS...<br>
      We are very sorry!<br>
      You don’t have any movies at your library.</p>
        <div class="btn-list-search">
        <a  href="./catalogue.html" class="btn btn-filled">
        Search movie
        </a>
        </div>
      `;
  refs.libraryOppsText.classList.add('library-ops-text-css');
}
