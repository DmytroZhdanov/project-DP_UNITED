/**
 * Отримує 
 * @param {String} movieId
 * @returns {String} local Storage with key 'library'
 */
const libraryBtnRemove = document.querySelector('[data-remove-from-library-btn]');
libraryBtnRemove.addEventListener('click', removeFromLibrary);

function removeFromLibrary(movieId) {
    const filmsInLibrary = localStorage.getItem(library);
    const parsFilms = JSON.parse(filmsInLibrary);
    const newArray = parsFilms.filter(value => value !== movieId);
    localStorage.setItem('library', JSON.stringify(newArray));
}

export { removeFromLibrary }