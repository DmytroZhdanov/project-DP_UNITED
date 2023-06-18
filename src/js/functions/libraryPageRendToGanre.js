import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';
import { libraryRenderNumberOfCard } from './libraryRenderNumberOfCard';
import { libraryRenderButtonLoadMore } from './libraryRenderButtonLoadMore';

import { refs } from '../list-library';

//нахожу кнопку лоад море для подальшего ее удаления при  рендере жанров

//=================================конец===============================

function libraryPageRendToGanre(
  totalFiltretPageOnLibrary,
  FilterGanreCurentPage,
  arrayFilteredMoviesToRender
) {
  //  console.log('totalLibraryPage:', totalFiltretPageOnLibrary);
  //  libraryRenderButtonLoadMore();
  libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
  console.log(libraryLoadMoreBtn);
  if (totalFiltretPageOnLibrary <= 1) {
    refs.libraryMovieList.innerHTML = generateMovieCardsMarkup(
      arrayFilteredMoviesToRender
    );
    //refs.libraryMovieList.classList.add('movie-cards-list-css');
    //refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
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
    console.log('libraryLoadMoreBtn:', libraryLoadMoreBtn);
    if (!libraryLoadMoreBtn) {
      libraryRenderButtonLoadMore();
      console.log('if-libraryLoadMoreBtn:', !libraryLoadMoreBtn);
      FilterGanreCurentPage += 1;

      refs.libraryMovieList.classList.add('movie-cards-list-css');
      //==================set event on Button "Load more"==================================
      libraryLoadMoreBtn = document.querySelector('[data-load-more-btn]');
      libraryLoadMoreBtn.addEventListener(
        'click',
        libraryRenderLoadMoreCardToFilterGanres
      );
    }
    //  totalFiltretPageOnLibrary, FilterGanreCurentPage, arrayFilteredMoviesToRender
  }
  function libraryRenderLoadMoreCardToFilterGanres() {
    console.log('total:', totalFiltretPageOnLibrary);
    console.log('curent:', FilterGanreCurentPage);
    console.log('array:', arrayFilteredMoviesToRender);
    //==================read div of button to delete div if no btn for css================================
    libraryDivLoadMoreBtn = document.querySelector('[data-div-load-more-btn]');
    console.log('libraryDivLoadMoreBtn:', libraryDivLoadMoreBtn);
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
