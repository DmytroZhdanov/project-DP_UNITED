// const libraryBtnRemove = document.querySelector(
//   '[data-remove-from-library-btn]'
// );
// libraryBtnRemove.addEventListener('click', removeFromLibrary);

/**
 * Отримує
 * @param {String} movieId
 * @returns {String} local Storage with key 'library'
 */
function removeFromLibrary(movieId) {
  const filmsInLibrary = localStorage.getItem(library);
  const moviesArr = JSON.parse(filmsInLibrary);
  const newMoviesArray = moviesArr.filter(value => value.id !== movieId);
  localStorage.setItem('library', JSON.stringify(newMoviesArray));
}

export { removeFromLibrary };
