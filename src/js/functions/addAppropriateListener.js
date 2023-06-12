import { onLibraryBtnAddClick } from './onLibraryBtnAddClick';
import { onLibraryBtnRemoveClick } from './onLibraryBtnRemoveClick';

function addAppropriateListener(isAddBtn, btnClasses, id, movieObject) {
  if (isAddBtn) {
    const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
    libraryBtnAdd.addEventListener('click', () => {
      onLibraryBtnAddClick(btnClasses, id, movieObject);
    });
  } else {
    const libraryBtnRemove = document.querySelector(
      '[data-remove-from-library-btn]'
    );
    libraryBtnRemove.addEventListener('click', () => {
      onLibraryBtnRemoveClick(btnClasses, id, movieObject);
    });
  }
}

export { addAppropriateListener };
