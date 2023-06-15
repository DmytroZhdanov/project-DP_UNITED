import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';
import { renderNumberOfCard } from './renderNumberOfCard';
import { refs } from '../list-library';

function renderLoadMoreCardToFilterGanres() {
  //==================read div of button to delete div if no btn for css================================
  libraryDivLoadMoreBtn = document.querySelector('[data-div-load-more-btn]');
  console.log(libraryDivLoadMoreBtn);
  // =================if the last page is left - render and hide the button============
  if (totalLibraryPage === FilterGanreCurentPage + 1) {
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(
        renderNumberOfCard(arrayTorender, FilterGanreCurentPage)
      )
    );
    refs.libraryMovieList.classList.add('movie-cards-list-css-no-btn');
    refs.libraryMovieList.classList.remove('movie-cards-list-css');
    libraryDivLoadMoreBtn.style.display = 'none';
  } else {
    //=================render next page and add +1 to  cuontpage=======================
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(
        renderNumberOfCard(arrayTorender, FilterGanreCurentPage)
      )
    );
    FilterGanreCurentPage += 1;
  }
}

export { renderLoadMoreCardToFilterGanres };
