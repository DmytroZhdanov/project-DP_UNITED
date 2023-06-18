// Library Page - Library list section
import { generateMovieCardsMarkup } from './functions/generateMovieCardsMarkup';
import { libraryRenderOppsText } from './functions/libraryRenderOppsText';
import { libraryRenderNumberOfCard } from './functions/libraryRenderNumberOfCard';
import { libraryRenderLoadMoreCard } from './functions/libraryRenderLoadMoreCard';
import { libraryRenderButtonLoadMore } from './functions/libraryRenderButtonLoadMore';
import { libraryRendHtmlGanresBackdrop } from './functions/libraryRendHtmlGanresBackdrop';
import { libraryAllGanresList } from './functions/libraryAllGanresList';
import { libraryRendListAllGanres } from './functions/libraryRendListAllGanres';

export const refs = {
  libraryMovieList: document.querySelector('[data-library-list]'),
  libraryOppsText: document.querySelector('[data-library-oops-text]'),
  libraryFilterGanreBackdrop: document.querySelector(
    '[data-library-filter-ganre]'
  ),
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
  //  renderLibraryOppsText();
  libraryRenderOppsText();
} else {
  //====================render HTML dropback Filter  Ganres==========================================
  //  renderFilterGanresBackdrop();
  libraryRendHtmlGanresBackdrop();
  //  Create list of Ganres All movies in Local Storage and render Backdrop with All Ganres
  libraryRendListAllGanres(libraryAllGanresList(refs.LibraryFromLocalStorage));

  //========================================
  //==============if total page < 1 - render first page without button==================
  if (letRefs.totalLibraryPage <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      refs.LibraryFromLocalStorage
    );
    refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
  } else {
    //==============if page > 1 - render first page and Button "load more"==============

    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      libraryRenderNumberOfCard(
        refs.LibraryFromLocalStorage,
        letRefs.curentPage
      )
    );

    libraryRenderButtonLoadMore();
    letRefs.curentPage += 1;

    refs.libraryMovieList.classList.add('movie-cards-list-css');

    //==================set event on Button "Load more"==================================
    libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
    libraryLoadMoreBtn.addEventListener('click', libraryRenderLoadMoreCard);
  }
}
