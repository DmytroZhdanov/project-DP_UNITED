import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';
import { libraryRenderNumberOfCard } from './libraryRenderNumberOfCard';
import { libraryRenderButtonLoadMore } from './libraryRenderButtonLoadMore';
import { refs } from '../list-library';

function libraryPageRendToGanre(
  totalFiltretPageOnLibrary,
  FilterGanreCurentPage,
  arrayFilteredMoviesToRender
) {
  const libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
  if (totalFiltretPageOnLibrary <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      arrayFilteredMoviesToRender
    );
    if (libraryLoadMoreBtn) {
      libraryLoadMoreBtn.remove();
    }
  } else {
    //==============if page > 1 - render first page and Button "load more"==============

    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      libraryRenderNumberOfCard(
        arrayFilteredMoviesToRender,
        FilterGanreCurentPage
      )
    );
    if (!libraryLoadMoreBtn) {
      libraryRenderButtonLoadMore();
      FilterGanreCurentPage += 1;

      refs.libraryMovieList.classList.add('movie-cards-list-css');
      //==================set event on Button "Load more"==================================
      const libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
      libraryLoadMoreBtn.addEventListener(
        'click',
        libraryRenderLoadMoreCardToFilterGanres
      );
    }
  }
  function libraryRenderLoadMoreCardToFilterGanres() {
    //==================read div of button to delete div if no btn for css================================
    const libraryDivLoadMoreBtn = document.querySelector('[data-div-load-more-btn]');
    // =================if the last page is left - render and hide the button============
    if (totalFiltretPageOnLibrary === FilterGanreCurentPage + 1) {
      refs.libraryMovieList.insertAdjacentHTML(
        'beforeend',
        generateMovieCardsMarkup(
          libraryRenderNumberOfCard(
            arrayFilteredMoviesToRender,
            FilterGanreCurentPage
          )
        )
      );
      refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
      refs.libraryMovieList.classList.remove('movie-cards-list-css');
      libraryDivLoadMoreBtn.remove();
    } else {
      //=================render next page and add +1 to  cuontpage=======================
      refs.libraryMovieList.insertAdjacentHTML(
        'beforeend',
        generateMovieCardsMarkup(
          libraryRenderNumberOfCard(
            arrayFilteredMoviesToRender,
            FilterGanreCurentPage
          )
        )
      );
      FilterGanreCurentPage += 1;
    }
  }
}

export { libraryPageRendToGanre };
