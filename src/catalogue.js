// Catalogue js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-catalogue';
import './js/footer';
import { setGenresToSS } from './js/functions/setGenresToSS';

setGenresToSS();

const headerCatCurrent = document.querySelectorAll('[data-header-catalogue]');
headerCatCurrent.forEach(i => i.classList.add('js-current'));
