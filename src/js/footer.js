// Footer js
import { openModalTeam } from './functions/openModalTeam';
// import { closeModalTeam } from './functions/closeModalTeam';

onFooterLoad();

function onFooterLoad() {
  const developersInfo = document.querySelector('[data-modal-open]');

  developersInfo.addEventListener('click', openModalTeam);
}
