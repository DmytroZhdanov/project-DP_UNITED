// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

//=========================Достаем данные с Локал сторедж и рисуем блок с фильмами========================

const refs = {
  libraryMovieList: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
};

const filmsInLibrary = JSON.parse(localStorage.getItem('library'));
//console.log(filmsInLibrary.length);
let libraryPage = filmsInLibrary ? Math.ceil(filmsInLibrary.length / 9) : 0;
//console.log(libraryPage);
console.log(filmsInLibrary.length);
if (filmsInLibrary) {
  if (!filmsInLibrary.length) {
    libraryOppsTextRender();
  } else {
    //let libraryPage = Math.ceil(filmsInLibrary.length / 9) - 1;

    console.log(libraryPage);
    if (libraryPage < 1) {
      refs.libraryMovieList.innerHTML =
        generateMovieCardsMarkup(filmsInLibrary);
    } else {
      //проверяем сколько у нас страниц будет и записываем в переменную

      //  рендерим первые 9 карточек и кнопку лоад мор

      refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
        renderNumberOfCard(filmsInLibrary, 0)
      );
      libraryPage -= 1;
      console.log(libraryPage);

      //  ====================================
      //  refs.libraryMovieList.innerHTML =
      //    generateMovieCardsMarkup(filmsInLibrary);
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

      libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
      //  console.log(libraryLoadMoreBtn);
      libraryLoadMoreBtn.addEventListener('click', renderLoadMoreCard);
    }
    // как только останется меньше чем 9 карточек кнопку лоад мор скрываем или делаем не активной, можно надпись на ней поменять
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

function renderNumberOfCard(array, n) {
  return array.slice(9 * n, 9 * n + 9);
}

console.log(libraryPage);

function renderLoadMoreCard() {
  if (libraryPage <= 1) {
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(renderNumberOfCard(filmsInLibrary, libraryPage))
    );

    //console.log(libraryPage);
    libraryLoadMoreBtn.style.opacity = '0';
  } else {
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(renderNumberOfCard(filmsInLibrary, libraryPage))
    );
    libraryPage -= 1;
    console.log(libraryPage);
  }
}
