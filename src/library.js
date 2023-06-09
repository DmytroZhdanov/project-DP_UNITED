// Library js
import './js/header';
import './js/mobile-menu';
import './js/hero';
import './js/list-library';
import './js/footer';

const headerCurrent = document.querySelector('[data-header-home]');
const headerCatCurrent = document.querySelector('[data-header-catalogue]');
const headerLibCurrent = document.querySelector('[data-header-library]');
headerLibCurrent.classList.add('js-current')
headerCatCurrent.classList.remove('js-current')
headerCurrent.classList.remove('js-current')
