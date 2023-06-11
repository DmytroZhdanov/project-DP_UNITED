// Modal window for movie details
import { getGenresByGenresId } from './getGenresByGenresId';
import { generateLibraryBtnMarkup } from './generateLibraryBtnMarkup';
import { onLibraryBtnAddClick } from './onLibraryBtnAddClick';
import { onLibraryBtnRemoveClick } from './onLibraryBtnRemoveClick';

/**
 * Opens modal window with movie details
 * @param {Object} Object Movie object
 */
function openModalMovieDetails(object) {
  const {
    poster_path,
    title,
    overview,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    id,
  } = object;
  const genres = getGenresByGenresId(genre_ids);
  const classes = 'btn btn-empty';
  const libraryBtn = generateLibraryBtnMarkup(classes, id);
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : './images/image-not-found.jpg';

  const modalMovieDetails = document.querySelector('[data-modal-details]');
  modalMovieDetails.innerHTML = `<div class="modal-details">
                                  <button type="button" class="btn modal-close" data-modal-details-close>
                                    <svg class="icon-close" width="10.5" height="10.5">
                                      <use href="./images/icons.svg#icon-close"></use>
                                    </svg>
                                  </button>
                                  <img src="${posterPath}" />
                                  <h2>${title}</h2>
                                  <h3>Vote / Votes</h3>
                                  <p><span>${vote_average}</span> / <span>${vote_count}</span></p>
                                  <h3>Popularity</h3>
                                  <p>${popularity}</p>
                                  <h3>Genre</h3>
                                  <p class='modal-genre'>${genres}</p>
                                  <h3>About</h3>
                                  <p>${overview}</p>
                                  <div data-library-btn>
                                    ${libraryBtn}
                                  </div>
                                </div>`;

  if (libraryBtn.includes('add')) {
    const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
    libraryBtnAdd.addEventListener('click', () => {
      onLibraryBtnAddClick(classes, id, object);
    });
  } else {
    const libraryBtnRemove = document.querySelector(
      '[data-remove-from-library-btn]'
    );
    libraryBtnRemove.addEventListener('click', () => {
      onLibraryBtnRemoveClick(classes, id, object);
    });
  }

  modalMovieDetails.classList.remove('is-hidden');

  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
  modalDetailsCloseBtn.addEventListener('click', () => {
    modalMovieDetails.classList.add('is-hidden');
  });
}

export { openModalMovieDetails };
