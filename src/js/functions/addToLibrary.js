/**
 * Отримує 
 * @param {Object} object information about film
 * @returns {String} local Storage with key 'library'
 */

const libraryBtn = document.querySelector(/*додати селектор*/);
libraryBtn.addEventListener('click', addToLibrary);

function addToLibrary(object) {
    if (!localStorage.getItem(library)) {
        const array = [];
        array.push(object);
        localStorage.setItem('library', JSON.stringify(array));
    } else {
        const filmsInLibrary = localStorage.getItem(library);
        const parsFilm = JSON.parse(filmsInLibrary);
        parsFilm.push(object);
        localStorage.setItem('library', JSON.stringify(parsFilm));
    }
}

export { addToLibrary }