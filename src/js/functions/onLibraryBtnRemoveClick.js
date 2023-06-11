import { generateLibraryBtnMarkup } from './generateLibraryBtnMarkup';
import { onLibraryBtnAddClick } from './onLibraryBtnAddClick';

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Removes item
 * @param {*} movieObject
 */
function onLibraryBtnRemoveClick(classes, id, movieObject) {
  const filmsInLibrary = localStorage.getItem('library');
  const moviesArr = JSON.parse(filmsInLibrary);
  const newMoviesArray = moviesArr.filter(value => value.id !== movieObject.id);
  localStorage.setItem('library', JSON.stringify(newMoviesArray));

  const libraryBtnContainer = document.querySelector('[data-library-btn]');

  const changedlibraryBtn = generateLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
  libraryBtnAdd.addEventListener('click', () => {
    onLibraryBtnAddClick(classes, id, movieObject);
  });
}

export { onLibraryBtnRemoveClick };
