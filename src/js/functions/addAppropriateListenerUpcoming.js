import { onUpcomingLibraryBtnAddClick } from './onUpcomingLibraryBtnAddClick';
import { onUpcomingLibraryBtnRemoveClick } from './onUpcomingLibraryBtnRemoveClick';

function addAppropriateListenerUpcoming(isAddBtn, btnClasses, id, movieObject) {
  if (isAddBtn) {
    const libraryBtnAdd = document.querySelector(
      '[data-add-to-library-btn-upcoming]'
    );
    libraryBtnAdd.addEventListener(
      'click',
      () => {
        onUpcomingLibraryBtnAddClick(btnClasses, id, movieObject);
      },
      { once: true }
    );
  } else {
    const libraryBtnRemove = document.querySelector(
      '[data-remove-from-library-btn-upcoming]'
    );
    libraryBtnRemove.addEventListener(
      'click',
      () => {
        onUpcomingLibraryBtnRemoveClick(btnClasses, id, movieObject);
      },
      { once: true }
    );
  }
}

export { addAppropriateListenerUpcoming };
