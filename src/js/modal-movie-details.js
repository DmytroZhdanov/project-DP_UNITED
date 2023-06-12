// import { refs } from './refs/refs';
// import { onLibraryBtnAddClick } from './functions/onLibraryBtnAddClick';
// import { onLibraryBtnRemoveClick } from './functions/onLibraryBtnRemoveClick';
// import { generateLibraryBtnMarkup } from './functions/generateLibraryBtnMarkup';

// const isModalMovieDetailsHidden =
//   refs.modalMovieDetails.classList.contains('is-hidden');

// if (!isModalMovieDetailsHidden) {
//   if (refs.libraryBtnContainer.includes('add')) {
//     refs.libraryBtnAdd.addEventListener('click', () => {
//       onLibraryBtnAddClick(object);
//       const libraryBtn = generateLibraryBtnMarkup(classes, id);
//       refs.libraryBtnContainer.innerHTML = libraryBtn;
//     });
//   } else {
//     refs.libraryBtnRemove.addEventListener('click', () => {
//       onLibraryBtnRemoveClick(object);
//       const libraryBtn = generateLibraryBtnMarkup(classes, id);
//       refs.libraryBtnContainer.innerHTML = libraryBtn;
//     });
//   }

//   refs.modalDetailsCloseBtn.addEventListener('click', () => {
//     refs.modalMovieDetails.classList.add('is-hidden');
//   });
// }
