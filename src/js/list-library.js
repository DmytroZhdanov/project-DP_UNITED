// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';

export const refs = {
  libraryMovieList: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
  LibraryFromLocalStorage: JSON.parse(localStorage.getItem('library')),
};

//================Сount how many pages we have with cards==============================
let totalLibraryPage = refs.LibraryFromLocalStorage
  ? Math.ceil(refs.LibraryFromLocalStorage.length / 9)
  : 0;
let curentPage = 0;

//================Check LocalStorage====================================================
if (!refs.LibraryFromLocalStorage || !refs.LibraryFromLocalStorage.length) {
  renderLibraryOppsText();
} else {
  //==============if total page < 1 - render first page without button==================
  if (totalLibraryPage <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      refs.LibraryFromLocalStorage
    );
    refs.libraryMovieList.classList.add('movie-cards-list-css');
  } else {
    //==============if page > 1 - render first page and Button "load more"==============

    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      renderNumberOfCard(refs.LibraryFromLocalStorage, curentPage)
    );

    renderButtonLoadMore();
    curentPage += 1;

    refs.libraryMovieList.classList.add('movie-cards-list-css');
    //==================set event on Button "Load more"==================================
    libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
    libraryLoadMoreBtn.addEventListener('click', renderLoadMoreCard);
  }
}

function renderLibraryOppsText() {
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

//====================make arrayCard for every page=================================
function renderNumberOfCard(array, n) {
  return array.slice(9 * n, 9 * n + 9);
}

function renderLoadMoreCard() {
  // =================if the last page is left - render and hide the button============
  if (totalLibraryPage === curentPage + 1) {
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(
        renderNumberOfCard(refs.LibraryFromLocalStorage, curentPage)
      )
    );

    libraryLoadMoreBtn.classList.add('is-hidden');
  } else {
    //=================render next page and add +1 to  cuontpage=======================
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(
        renderNumberOfCard(refs.LibraryFromLocalStorage, curentPage)
      )
    );
    curentPage += 1;
  }
}

function renderButtonLoadMore() {
  refs.libraryMovieList.insertAdjacentHTML(
    'afterend',
    `
                      <div class="btn-list-search">
                          <button type="button" class="btn btn-filled" data-load-more-btn>
                          Load more
                          </button>
                      </div>`
  );
}
