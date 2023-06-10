/**
 * Отримує 
 * @param {Object} classes information about film
 * @param {String} movieId information about film
 * @returns {String} markup
 */

function generateLibraryBtnMarkup(classes, movieId) {

    const libraryBtn = document.createElement('button');

    const filmsInLibrary = localStorage.getItem(library);
    const parsFilms = JSON.parse(filmsInLibrary);
    if (parsFilms.includes(movieId)) {
        /* видалення */
        const markup = `<button type="button" data-remove-from-library-btn class="${classes}">Remove from library</button>`;
    } else {
        /* додавання */
        const markup = `<button type="button" data-add-to-library-btn class="${classes}">Add to library</button>`;
    }

    return markup;
}

export { generateLibraryBtnMarkup };

