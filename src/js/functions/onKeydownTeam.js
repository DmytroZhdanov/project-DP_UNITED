import { closeModalTeam } from './closeModalTeam';

function onKeydownTeam(event) {
  if (event.code === 'Escape') {
    closeModalTeam();
  }
  return;
}

export { onKeydownTeam };
