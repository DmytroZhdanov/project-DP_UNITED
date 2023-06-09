/**
 * Отримує 
 * @param {Object} object information about film
 * @returns {String} local Storage with key 'library'
 */
const libraryBtn = document.querySelector(/*додати селектор*/);
libraryBtn.addEventListener('click', removeFromLibrary);

function removeFromLibrary(object) {
    const filmsInLibrary = localStorage.getItem(library);
    const parsFilms = JSON.parse(filmsInLibrary);
    const newArray = parsFilms.filter(value => value !== object);
    localStorage.setItem('library', JSON.stringify(newArray));
}

export { removeFromLibrary }