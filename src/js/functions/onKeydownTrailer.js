import { modalTrailerClose } from './modalTrailerClose';

function onKeydownTrailer(keyboardEvt) {
  if (keyboardEvt.code !== 'Escape') {
    return;
  }

  modalTrailerClose();
}

export { onKeydownTrailer };
