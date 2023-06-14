// Footer js
import { openModalTeam } from './functions/openModalTeam';

onFooterLoad();

function onFooterLoad() {
  const developersInfo = document.querySelector('[data-modal-open]');

  developersInfo.addEventListener('click', openModalTeam);
}
