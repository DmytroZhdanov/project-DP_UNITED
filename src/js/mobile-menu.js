// Mobile menu js

const refs = {
  mobileMenuEl: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  bodyEl: document.querySelector('body'),
  bodyScrollLock: require('body-scroll-lock'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.mobileMenuEl.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenuEl.classList.remove('is-open');
  refs.openMenuBtn.setAttribute('aria-expanded', false);
  refs.bodyScrollLock.enableBodyScroll(document.body);
});

function toggleMenu() {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenuEl.classList.toggle('is-open');
  refs.bodyEl.classList.toggle('no-scroll');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  refs.bodyScrollLock[scrollLockMethod](document.body);
}
