import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';
import { renderNumberOfCard } from './renderNumberOfCard';
import { renderButtonLoadMore } from './renderButtonLoadMore';
import { renderLoadMoreCardToFilterGanres } from './renderLoadMoreCardToFilterGanres';
import { refs } from '../list-library';

function rendFilterPageLibrary(
  totalLibraryPage,
  FilterGanreCurentPage,
  arrayTorender
) {
  if (totalLibraryPage <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(arrayTorender);
    //refs.libraryMovieList.classList.add('movie-cards-list-css');
    //refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
  } else {
    //==============if page > 1 - render first page and Button "load more"==============

    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      renderNumberOfCard(arrayTorender, FilterGanreCurentPage)
    );

    renderButtonLoadMore();
    FilterGanreCurentPage += 1;

    refs.libraryMovieList.classList.add('movie-cards-list-css');
    //==================set event on Button "Load more"==================================
    libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
    libraryLoadMoreBtn.addEventListener(
      'click',
      renderLoadMoreCardToFilterGanres
    );
    //  totalLibraryPage, FilterGanreCurentPage, arrayTorender
  }
}

export { rendFilterPageLibrary };
