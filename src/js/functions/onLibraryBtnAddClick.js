import { generateLibraryBtnMarkup } from './generateLibraryBtnMarkup';
import { onLibraryBtnRemoveClick } from './onLibraryBtnRemoveClick'

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
  if (!localStorage.getItem('library')) {
    const array = [];
    array.push(movieObject);
    localStorage.setItem('library', JSON.stringify(array));
  } else {
    const filmsInLibrary = localStorage.getItem('library');
    const moviesArr = JSON.parse(filmsInLibrary);
    moviesArr.push(movieObject);
    localStorage.setItem('library', JSON.stringify(moviesArr));
  }

  const libraryBtnContainer = document.querySelector('[data-library-btn]');

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
