// Library js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-library';
import './js/footer';
import { setGenresToSS } from './js/functions/setGenresToSS';

setGenresToSS();

const headerLibCurrent = document.querySelectorAll('[data-header-library]');
headerLibCurrent.forEach(i => i.classList.add('js-current'));
