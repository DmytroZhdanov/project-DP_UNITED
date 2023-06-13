import { generateUpcomingLibraryBtnMarkup } from './generateUpcomingLibraryBtnMarkup';
import { onUpcomingLibraryBtnAddClick } from './onUpcomingLibraryBtnAddClick';
import { removeMovieFromLibrary } from './removeMovieFromLibrary';

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Removes item
 * @param {*} movieObject
 */
function onUpcomingLibraryBtnRemoveClick(classes, id, movieObject) {
  removeMovieFromLibrary(movieObject);
  const libraryBtnContainer = document.querySelector('[data-library-btn-upcoming]');

  const changedlibraryBtn = generateUpcomingLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;

  const libraryBtnAdd = document.querySelector('[data-add-to-library-btn-upcoming]');
  libraryBtnAdd.addEventListener(
    'click',
    () => {
      onUpcomingLibraryBtnAddClick(classes, id, movieObject);
    },
    { once: true }
  );
}

export { onUpcomingLibraryBtnRemoveClick };
