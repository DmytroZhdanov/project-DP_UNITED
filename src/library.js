// Library js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-library';
import './js/footer';


const headerCurrent = document.querySelector('.header-home')
const headerCatCurrent = document.querySelector('.header-catalogue')
const headerLibCurrent = document.querySelector('.header-library')
headerLibCurrent.classList.add('current')
headerCatCurrent.classList.remove('current')
headerCurrent.classList.remove('current')
