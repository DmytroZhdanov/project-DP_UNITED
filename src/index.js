// Index.js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/trends';
import './js/upcoming';
import './js/footer';
import './js/modal-trailer';
import './js/modal-movie-details';

const headerCurrent = document.querySelector('.js-header-home')
const headerCatCurrent = document.querySelector('.js-header-catalogue')
const headerLibCurrent = document.querySelector('.js-header-library')
headerCurrent.classList.add('current')
headerLibCurrent.classList.remove('current')
headerCatCurrent.classList.remove('current')

