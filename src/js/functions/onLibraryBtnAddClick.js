import { generateLibraryBtnMarkup } from './generateLibraryBtnMarkup';
import { onLibraryBtnRemoveClick } from './onLibraryBtnRemoveClick';
import { addMovieToLibrary } from './addMovieToLibrary';

// /**
//  * Sets local storage item with key 'library' and value of Array of movie objects. Adds Item
//  * @param {Object} movieObject  Object with movie details
//  */

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Adds Item.
 * @param {*} classes
 * @param {*} id
 * @param {*} movieObject
 */
function onLibraryBtnAddClick(classes, id, movieObject) {
  addMovieToLibrary(movieObject);

  const libraryBtnContainer = document.querySelector('[data-library-btn]');

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
  libraryBtnAdd.removeEventListener('click', () => {
    onLibraryBtnAddClick(btnClasses, id, movieObject);
  });
  
  const changedlibraryBtn = generateLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;
  const libraryBtnRemove = document.querySelector(
    '[data-remove-from-library-btn]'
  );
  libraryBtnRemove.addEventListener('click', () => {
    onLibraryBtnRemoveClick(classes, id, movieObject);
  });
}

export { onLibraryBtnAddClick };
