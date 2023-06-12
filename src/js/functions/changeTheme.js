const STORAGE_KEY = 'theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkBoxThemeEl: document.querySelector('#theme-switch-toggle'),
  bodyEl: document.querySelector('body'),
};

checkSavedThemeOnLoad();
refs.checkBoxThemeEl.addEventListener('change', onThemeCheckboxClick);

/**
 * Перевіряє запис теми в LocalStorage, визначає тему за замовчуванням
 */
function checkSavedThemeOnLoad() {
  const savedValue = localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    refs.bodyEl.classList.add(savedValue);
  } else {
    refs.bodyEl.classList.add(Theme.DARK);
    refs.checkBoxThemeEl.setAttribute('checked', true);
  }
  if (savedValue === Theme.DARK) {
    refs.checkBoxThemeEl.setAttribute('checked', true);
  }
}

/**
 * Перемикає теми
 * @param {*} evt
 */
function onThemeCheckboxClick(evt) {
  let value = '';
  if (evt.currentTarget.checked) {
    value = Theme.DARK;
    refs.bodyEl.classList.add(value);
    refs.bodyEl.classList.remove(Theme.LIGHT);
  } else {
    value = Theme.LIGHT;
    refs.bodyEl.classList.remove(Theme.DARK);
    refs.bodyEl.classList.add(value);
  }
  localStorage.setItem(STORAGE_KEY, value);
}

export { onThemeCheckboxClick };
