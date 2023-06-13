import { modalMovieDetailsClose } from './modalMovieDetailsClose';

function onKeydownMovieDetails(keyboardEvt) {
  if (keyboardEvt.code !== 'Escape') {
    return;
  }

  modalMovieDetailsClose();
}

export { onKeydownMovieDetails };
