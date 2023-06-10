// const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
// libraryBtnAdd.addEventListener('click', onAddLibraryBtnClick);

/**
 * Sets local storage item with key 'library' and value of Array of movie objects
 * @param {Object} movieObject  Object with movie details
 */
function addMovieToLibrary(movieObject) {
  if (!localStorage.getItem(library)) {
    const array = [];
    array.push(movieObject);
    localStorage.setItem('library', JSON.stringify(array));
  } else {
    const filmsInLibrary = localStorage.getItem(library);
    const moviesArr = JSON.parse(filmsInLibrary);
    moviesArr.push(movieObject);
    localStorage.setItem('library', JSON.stringify(moviesArr));
  }
}

export { addMovieToLibrary };
