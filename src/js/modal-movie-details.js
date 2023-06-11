// Modal window for movie details
import { getGenresByGenresId } from './functions/getGenresByGenresId';
import { generateLibraryBtnMarkup } from './functions/generateLibraryBtnMarkup';
import { onLibraryBtnAddClick } from './functions/onLibraryBtnAddClick';
import { onLibraryBtnRemoveClick } from './functions/onLibraryBtnRemoveClick';

/**
 * Opens modal window with movie details
 * @param {Object} Object Movie object
 */
function openModalMovieDetails({
  poster_path,
  title,
  overview,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  id,
}) {
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  const genres = getGenresByGenresId(genre_ids);
  const libraryBtn = generateLibraryBtnMarkup(id);

  modalMovieDetails.innerHTML = `<div class="modal-details">
            <button type="button" class="btn modal-close" data-modal-details-close>
                <svg class="icon-close" width="10.5" height="10.5">
                    <use href="./images/icons.svg#icon-close"></use>
                </svg>
            </button>
            <img src="${poster_path}" />
            <h2>${title}</h2>
            <h3>Vote / Votes</h3>
            <p><span>${vote_average}</span> / <span>${vote_count}</span></p>
            <h3>Popularity</h3>
            <p>${popularity}</p>
            <h3>Genre</h3>
            <p class='modal-genre'>${genres}</p>
            <h3>About</h3>
            <p>${overview}</p>
            ${libraryBtn}
        </div>`;

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
  const libraryBtnRemove = document.querySelector(
    '[data-remove-from-library-btn]'
  );
  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
    
  modalMovieDetails.classList.remove('is-hidden');
  libraryBtnAdd.addEventListener('click', onLibraryBtnAddClick);
  libraryBtnRemove.addEventListener('click', onLibraryBtnRemoveClick);
  modalDetailsCloseBtn.addEventListener('click', () => {
    modalMovieDetails.classList.add('is-hidden');
  });
}

export { openModalMovieDetails };
