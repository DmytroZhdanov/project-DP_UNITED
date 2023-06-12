// Mobile menu js

const refs = {
  mobileMenuEl: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  bodyEl: document.querySelector('body'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.mobileMenuEl.addEventListener('click', toggleMenu);

/**
 * Закриває мобільне меню при зміні орієнтації гаджету
 */
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenuEl.classList.remove('is-open');
  refs.openMenuBtn.setAttribute('aria-expanded', false);
  refs.bodyEl.classList.remove('disabled-scroll');
});

/**
 * Відкриває та закриває мобільне меню, блокує скрол при відкритому меню
 */
function toggleMenu() {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenuEl.classList.toggle('is-open');
  refs.bodyEl.classList.toggle('disabled-scroll');

  isMenuOpen
    ? refs.bodyEl.classList.remove('disabled-scroll')
    : refs.bodyEl.classList.add('disabled-scroll');
}
