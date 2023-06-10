/**
 * Отримує 
 * @param {String} movieId
 * @returns {String} local Storage with key 'library'
 */

const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
libraryBtnAdd.addEventListener('click', onAddLibraryBtnClick);

function onAddLibraryBtnClick(movieId) {
    if (!localStorage.getItem(library)) {
        const array = [];
        array.push(movieId);
        localStorage.setItem('library', JSON.stringify(array));
    } else {
        const filmsInLibrary = localStorage.getItem(library);
        const parsFilm = JSON.parse(filmsInLibrary);
        parsFilm.push(movieId);
        localStorage.setItem('library', JSON.stringify(parsFilm));
    }
}

export { onAddLibraryBtnClick }