import { refs } from '../list-library';
import { letRefs } from '../list-library';
import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';
import { renderNumberOfCard } from './renderNumberOfCard';

function renderLoadMoreCard() {
  //==================read div of button to delete div if no btn for css================================
  libraryDivLoadMoreBtn = document.querySelector('[data-div-load-more-btn]');
  console.log(libraryDivLoadMoreBtn);
  // =================if the last page is left - render and hide the button============
  if (letRefs.totalLibraryPage === letRefs.curentPage + 1) {
    refs.libraryMovieList.insertAdjacentHTML(
      'beforeend',
      generateMovieCardsMarkup(
        renderNumberOfCard(refs.LibraryFromLocalStorage, letRefs.curentPage)
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
        renderNumberOfCard(refs.LibraryFromLocalStorage, letRefs.curentPage)
      )
    );
    letRefs.curentPage += 1;
  }
}

export { renderLoadMoreCard };
