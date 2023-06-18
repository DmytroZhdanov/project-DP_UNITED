import { refs } from '../list-library';

function libraryRendHtmlGanresBackdrop() {
  refs.libraryFilterGanreBackdrop.innerHTML = `
  <button class="dropdown-button main-button">
  <span class="dropdown-title-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="ganre-svg"
    >
      <path
        d="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z"
      />
    </svg>
  </span>
  <span class="dropdown-title text-truncate text-mein-btn">Genre</span>
  <span class="dropdown-arrow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      class="ganre-svg"
    >
      <path
        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
      />
    </svg>
  </span>
</button>
<div class="dropdown-list-container">
  <div class="dropdown-list-wrapper">
    <ul class="dropdown-list"></ul>
    <div class="floating-icon" aria-hidden="true"></div>
  </div>
</div>
        `;
  //  refs.libraryFilterGanreBackdrop.classList.add('library-ops-text-css');
}

export { libraryRendHtmlGanresBackdrop };
