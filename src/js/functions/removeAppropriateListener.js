import { onLibraryBtnAddClick } from './onLibraryBtnAddClick';
import { onLibraryBtnRemoveClick } from './onLibraryBtnRemoveClick';

function removeAppropriateListener(isAddBtn, btnClasses, id, movieObject) {
  if (isAddBtn) {
    const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
    libraryBtnAdd.removeEventListener('click', () => {
      onLibraryBtnAddClick(btnClasses, id, movieObject);
    });
  } else {
    const libraryBtnRemove = document.querySelector(
      '[data-remove-from-library-btn]'
    );
    libraryBtnRemove.removeEventListener('click', () => {
      onLibraryBtnRemoveClick(btnClasses, id, movieObject);
    });
  }
}

export { removeAppropriateListener };
