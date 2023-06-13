// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { renderLibraryOppsText } from './functions/renderLibraryOppsText';
import { renderNumberOfCard } from './functions/renderNumberOfCard';
import { renderLoadMoreCard } from './functions/renderLoadMoreCard';
import { renderButtonLoadMore } from './functions/renderButtonLoadMore';

export const refs = {
  libraryMovieList: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
  LibraryFromLocalStorage: JSON.parse(localStorage.getItem('library')),
};

//================Сount how many pages we have with cards==============================
export let letRefs = {
  totalLibraryPage: refs.LibraryFromLocalStorage
    ? Math.ceil(refs.LibraryFromLocalStorage.length / 9)
    : 0,
  curentPage: 0,
};

//================Check LocalStorage====================================================
if (!refs.LibraryFromLocalStorage || !refs.LibraryFromLocalStorage.length) {
  renderLibraryOppsText();
} else {
  //==============if total page < 1 - render first page without button==================
  if (letRefs.totalLibraryPage <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      refs.LibraryFromLocalStorage
    );
    refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
  } else {
    //==============if page > 1 - render first page and Button "load more"==============

    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      renderNumberOfCard(refs.LibraryFromLocalStorage, letRefs.curentPage)
    );

    renderButtonLoadMore();
    letRefs.curentPage += 1;

    refs.libraryMovieList.classList.add('movie-cards-list-css');

    //==================set event on Button "Load more"==================================
    libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
    libraryLoadMoreBtn.addEventListener('click', renderLoadMoreCard);
  }
}
