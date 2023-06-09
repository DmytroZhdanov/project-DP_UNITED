/**
 * Отримує 
 * @param {Object} object information about film
 * @returns {Button} 
 */

function renderLibraryBtn(object) {

    const libraryBtn = document.createElement('button');

    const filmsInLibrary = localStorage.getItem(library);
    const parsFilms = JSON.parse(filmsInLibrary);
    if (parsFilms.includes(object)) {
        /* видалення */
        libraryBtn.innerHTML = 'Remove from library';
        libraryBtn.id = 'addbtn' /*зверни увагу, скоріш за все не вірний атрибут*/
        document.body.appendChild(libraryBtn)
    } else {
        /* додавання */
        libraryBtn.innerHTML = 'Add to library';
        libraryBtn.id = 'removebtn' /*зверни увагу, скоріш за все не вірний атрибут*/
        document.body.appendChild(libraryBtn)
    }
}

export { renderLibraryBtn };
