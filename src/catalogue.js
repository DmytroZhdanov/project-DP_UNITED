// Catalogue js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-catalogue';
import './js/footer';
import './js/modal-trailer';
import './js/modal-movie-details';

const headerCurrent = document.querySelector('[data-header-home]');
const headerCatCurrent = document.querySelector('[data-header-catalogue]');
const headerLibCurrent = document.querySelector('[data-header-library]');
headerCatCurrent.classList.add('js-current');
headerLibCurrent.classList.remove('js-current');
headerCurrent.classList.remove('js-current');
