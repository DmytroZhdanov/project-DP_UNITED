import { onModalTeamBackdropClick } from './onModalTeamBackdropClick';
import { closeModalTeam } from './closeModalTeam';
import { onKeydownTeam } from './onKeydownTeam';

function openModalTeam() {
  const modalTeamBackdrop = document.querySelector('[data-modal-team-backdrop]');
  modalTeamBackdrop.classList.remove('is-hidden');
  document.body.classList.add('disabled-scroll');
  
  const modalCloseButton = document.querySelector('[data-modal-btn-close]');
  modalTeamBackdrop.addEventListener('click', onModalTeamBackdropClick);
  modalCloseButton.addEventListener('click', closeModalTeam);
  document.addEventListener('keydown', onKeydownTeam);
}

export { openModalTeam };
