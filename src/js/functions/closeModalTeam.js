import { onModalTeamBackdropClick } from './onModalTeamBackdropClick';
import { onKeydownTeam } from './onKeydownTeam';

function closeModalTeam() {
  const modalTeamBackdrop = document.querySelector(
    '[data-modal-team-backdrop]'
  );
  modalTeamBackdrop.classList.add('is-hidden');
  document.body.classList.remove('disabled-scroll');
  
  const modalCloseButton = document.querySelector('[data-modal-btn-close]');
  modalTeamBackdrop.removeEventListener('click', onModalTeamBackdropClick);
  modalCloseButton.removeEventListener('click', closeModalTeam);
  document.removeEventListener('keydown', onKeydownTeam);
}

export { closeModalTeam };
