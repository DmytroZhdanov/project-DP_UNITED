import { onMovieDetailsBackdropClick } from './onMovieDetailsBackdropClick';
import { heroSlider } from './heroSlider';

function modalMovieDetailsClose() {
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  modalMovieDetails.classList.add('is-hidden');
  document.body.classList.remove('disabled-scroll');

  modalMovieDetails.removeEventListener('click', onMovieDetailsBackdropClick);

  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
  heroSlider.resume();
  modalDetailsCloseBtn.removeEventListener('click', modalMovieDetailsClose);
}

export { modalMovieDetailsClose };
