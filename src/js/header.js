// Header js
import { onThemeCheckboxClick } from './functions/changeTheme';

const upButtonEl = document.querySelector('.js-up-button');

/**
 * Показує та сховує UP_BUTTON
 */
window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? upButtonEl.classList.remove('is-shown')
      : upButtonEl.classList.add('is-shown');
  } else {
    scrollY <= 120
      ? upButtonEl.classList.remove('is-shown')
      : upButtonEl.classList.add('is-shown');
  }
};
