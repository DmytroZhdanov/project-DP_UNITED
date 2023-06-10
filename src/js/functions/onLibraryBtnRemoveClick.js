// const libraryBtnRemove = document.querySelector(
//   '[data-remove-from-library-btn]'
// );
// libraryBtnRemove.addEventListener('click', removeFromLibrary);

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Removes item
 * @param {*} movieObject 
 */
function onLibraryBtnRemoveClick(movieObject) {
  const filmsInLibrary = localStorage.getItem(library);
  const moviesArr = JSON.parse(filmsInLibrary);
  const newMoviesArray = moviesArr.filter(value => value.id !== movieObject.id);
  localStorage.setItem('library', JSON.stringify(newMoviesArray));
}

export { onLibraryBtnRemoveClick };
