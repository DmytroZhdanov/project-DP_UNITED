// Header js
import { onCheckboxClick } from './functions/is-change-them';

const checkBoxEl = document.querySelector('#theme-switch-toggle');
checkBoxEl.addEventListener('change', onCheckboxClick);
