import { generateLibraryBtnMarkup } from './generateLibraryBtnMarkup';
import { onLibraryBtnAddClick } from './onLibraryBtnAddClick';
import { removeMovieFromLibrary } from './removeMovieFromLibrary';

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Removes item
 * @param {*} movieObject
 */
function onLibraryBtnRemoveClick(classes, id, movieObject) {
  removeMovieFromLibrary(movieObject);
  const libraryBtnContainer = document.querySelector('[data-library-btn]');

  const libraryBtnRemove = document.querySelector(
    '[data-remove-from-library-btn]'
  );
  libraryBtnRemove.removeEventListener('click', () => {
    onLibraryBtnRemoveClick(btnClasses, id, movieObject);
  });

  const changedlibraryBtn = generateLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
  libraryBtnAdd.addEventListener('click', () => {
    onLibraryBtnAddClick(classes, id, movieObject);
  });
}

export { onLibraryBtnRemoveClick };
