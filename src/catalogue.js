// Catalogue js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-catalogue';
import './js/footer';
import './js/modal-trailer';
import './js/modal-movie-details';


const headerCurrent = document.querySelector('.js-header-home')
const headerCatCurrent = document.querySelector('.js-header-catalogue')
const headerLibCurrent = document.querySelector('.js-header-library')
headerCatCurrent.classList.add('current')
headerLibCurrent.classList.remove('current')
headerCurrent.classList.remove('current')