// Index.js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/trends';
import './js/upcoming';
import './js/footer';
import './js/modal-trailer';
import './js/modal-movie-details';

const headerCurrent = document.querySelector('[data-header-home]')
const headerCatCurrent = document.querySelector('[data-header-catalogue]');
const headerLibCurrent = document.querySelector('[data-header-library]');
headerCurrent.classList.add('js-current')
headerLibCurrent.classList.remove('js-current')
headerCatCurrent.classList.remove('js-current')

