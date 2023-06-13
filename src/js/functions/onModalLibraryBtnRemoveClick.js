import { generateModalLibraryBtnMarkup } from './generateModalLibraryBtnMarkup';
import { onModalLibraryBtnAddClick } from './onModalLibraryBtnAddClick';
import { removeMovieFromLibrary } from './removeMovieFromLibrary';

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Removes item
 * @param {*} movieObject
 */
function onModalLibraryBtnRemoveClick(classes, id, movieObject) {
  removeMovieFromLibrary(movieObject);
  const libraryBtnContainer = document.querySelector('[data-library-btn-modal]');

  const changedlibraryBtn = generateModalLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn-modal]');
  libraryBtnAdd.addEventListener(
    'click',
    () => {
      onModalLibraryBtnAddClick(classes, id, movieObject);
    },
    { once: true }
  );
}

export { onModalLibraryBtnRemoveClick };
