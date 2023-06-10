/**
 *
 * @param {Object} classes Classes to add to button
 * @param {String} movieId Movie ID
 * @returns {String} Button markup
 */

function generateLibraryBtnMarkup(classes, movieId) {
  const filmsInLibrary = localStorage.getItem(library);
  const parsedFilmsInLibrary = JSON.parse(filmsInLibrary);
  const isInLibrary = parsedFilmsInLibrary.find(
    object => object.id === movieId
  );
  if (isInLibrary) {
    /* Remove button */
    return `<button type="button" data-remove-from-library-btn class="${classes}">Remove from library</button>`;
  } else {
    /* Add button */
    return `<button type="button" data-add-to-library-btn class="${classes}">Add to library</button>`;
  }
}

export { generateLibraryBtnMarkup };
