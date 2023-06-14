import { generateModalLibraryBtnMarkup } from './generateModalLibraryBtnMarkup';
import { onModalLibraryBtnRemoveClick } from './onModalLibraryBtnRemoveClick';
import { addMovieToLibrary } from './addMovieToLibrary';

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Adds Item.
 * @param {*} classes
 * @param {*} id
 * @param {*} movieObject
 */
function onModalLibraryBtnAddClick(classes, id, movieObject) {
  addMovieToLibrary(movieObject);

  const libraryBtnContainer = document.querySelector(
    '[data-library-btn-modal]'
  );
  
  const changedlibraryBtn = generateModalLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;
  const libraryBtnRemove = document.querySelector(
    '[data-remove-from-library-btn-modal]'
    );
  libraryBtnRemove.addEventListener(
    'click',
    () => {
      onModalLibraryBtnRemoveClick(classes, id, movieObject);
    },
    { once: true }
  );
}

export { onModalLibraryBtnAddClick };
