import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { heroSlider } from './heroSlider';
import { onTrailerBackdropClick } from './onTrailerBackdropClick';
import { modalTrailerClose } from './modalTrailerClose';
import { onKeydownTrailer } from './onKeydownTrailer';

function modalTrailerShow(key) {
  const instance = basicLightbox.create(
    `
    <iframe class="trailer-iframe"
              src="https://www.youtube-nocookie.com/embed/${key}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
`,
    {
      handlerEscape: null,
      onShow(instance) {
        this.handlerEscape = handlerEsc.bind(instance);
        document.addEventListener('keydown', this.handlerEscape);
        document.body.classList.add('disabled-scroll');
      },
      onClose() {
        document.removeEventListener('keydown', this.handlerEscape);
        heroSlider.resume();
        document.body.classList.remove('disabled-scroll');
      },
    }
  );
  instance.show();
}

function defaultModalTrailerShow() {
  const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');
  const modalTrailerCloseBtn = document.querySelector(
    '[data-modal-trailer-close]'
  );

  modalTrailerBackdrop.classList.remove('is-hidden');
  modalTrailerBackdrop.addEventListener('click', onTrailerBackdropClick);
  modalTrailerCloseBtn.addEventListener('click', modalTrailerClose);
  document.body.classList.add('disabled-scroll');
  document.addEventListener('keydown', onKeydownTrailer, { once: true });
}

function handlerEsc(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { modalTrailerShow, defaultModalTrailerShow };
