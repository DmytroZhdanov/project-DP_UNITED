import { closeModalTeam } from './closeModalTeam';

function onModalTeamBackdropClick(e) {
  const modalTeamBackdrop = document.querySelector(
    '[data-window-modal]'
  );
  
  if (e.target !== modalTeamBackdrop) {
    console.log(e.target)
    return;
  }

  closeModalTeam();
}

export { onModalTeamBackdropClick };
