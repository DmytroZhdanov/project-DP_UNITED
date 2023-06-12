// Index.js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/trends';
import './js/upcoming';
import './js/footer';
import './js/modal-trailer';
import './js/modal-movie-details';
import { setGenresToSS } from './js/functions/setGenresToSS';

setGenresToSS();

const headerCurrent = document.querySelectorAll('[data-header-home]');
headerCurrent.forEach(i => i.classList.add('js-current'));

