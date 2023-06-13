import { onModalLibraryBtnAddClick } from './onModalLibraryBtnAddClick';
import { onModalLibraryBtnRemoveClick } from './onModalLibraryBtnRemoveClick';

function addAppropriateListenerModal(isAddBtn, btnClasses, id, movieObject) {
  if (isAddBtn) {
    const libraryBtnAdd = document.querySelector('[data-add-to-library-btn-modal]');
    libraryBtnAdd.addEventListener(
      'click',
      () => {
        onModalLibraryBtnAddClick(btnClasses, id, movieObject);
      },
      { once: true }
    );
  } else {
    const libraryBtnRemove = document.querySelector(
      '[data-remove-from-library-btn-modal]'
    );
    libraryBtnRemove.addEventListener(
      'click',
      () => {
        onModalLibraryBtnRemoveClick(btnClasses, id, movieObject);
      },
      { once: true }
    );
  }
}

export { addAppropriateListenerModal };
