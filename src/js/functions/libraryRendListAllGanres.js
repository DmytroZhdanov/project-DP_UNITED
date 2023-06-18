import { libraryClickToSetGanre } from './libraryClickToSetGanre';
//const root = document.documentElement;
//const dropdownTitleIcon = document.querySelector('.dropdown-title-icon');
//const dropdownTitle = document.querySelector('.dropdown-title');
//const dropdownList = document.querySelector('.dropdown-list');
//const mainButton = document.querySelector('.main-button');
//const floatingIcon = document.querySelector('.floating-icon');
//const icons = {};

function libraryRendListAllGanres(arrayUnicalGanres) {
  console.log('arrayUnicalGanres:', arrayUnicalGanres);
  const root = document.documentElement;
  const dropdownTitleIcon = document.querySelector('.dropdown-title-icon');
  const dropdownTitle = document.querySelector('.dropdown-title');
  const dropdownList = document.querySelector('.dropdown-list');
  const mainButton = document.querySelector('.main-button');
  const floatingIcon = document.querySelector('.floating-icon');
  const icons = {};
  const listItems = arrayUnicalGanres;

  for (let i = 0; i < listItems.length; i++) {
    icons[listItems[i]] =
      'M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z';
  }

  ////console.log(listItems);
  ////console.log(icons);

  //  const iconTemplate = path => {
  //    return `
  //      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ganre-svg">
  //        <path d="${path}" />
  //      </svg>
  //    `;
  //  };

  ////console.log(iconTemplate);

  //  const listItemTemplate = (text, translateValue) => {
  //    return `
  //      <li class="dropdown-list-item">
  //        <button class="dropdown-button list-button"  data-translate-value="${translateValue}%">
  //          <span class="text-truncate text-btn">${text}</span>
  //        </button>
  //      </li>
  //    `;
  //  };
  //  listItemTemplate(text, translateValue);

  //  function renderListItems() {
  //    dropdownList.innerHTML += listItems
  //      .map((item, index) => {
  //        return listItemTemplate(item, 100 * index);
  //      })
  //      .join('');
  //  }

  window.addEventListener('load', () => {
    renderListItems(listItems, dropdownList);
  });

  const setDropdownProps = (deg, ht, opacity) => {
    root.style.setProperty('--rotate-arrow', deg !== 0 ? deg + 'deg' : 0);
    root.style.setProperty('--dropdown-height', ht !== 0 ? ht + 'rem' : 0);
    root.style.setProperty('--list-opacity', opacity);
  };

  mainButton.addEventListener('click', () => {
    const listWrapperSizes = 3.5; // margins, paddings & borders
    const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
    const currDropdownHeight =
      root.style.getPropertyValue('--dropdown-height') || '0';

    currDropdownHeight === '0'
      ? setDropdownProps(180, dropdownOpenHeight, 1)
      : setDropdownProps(0, 0, 0);
  });

  dropdownList.addEventListener('mouseover', e => {
    const translateValue = e.target.dataset.translateValue;
    root.style.setProperty('--translate-value', translateValue);
  });

  dropdownList.addEventListener('click', e => {
    const clickedItemText = e.target.innerText.trim();
    console.log(clickedItemText);
    libraryClickToSetGanre(clickedItemText);
    const clickedItemIcon = icons[clickedItemText];

    dropdownTitleIcon.innerHTML = iconTemplate(clickedItemIcon);
    dropdownTitle.innerHTML = clickedItemText;
    setDropdownProps(0, 0, 0);
  });

  dropdownList.addEventListener('mousemove', e => {
    const iconSize = root.style.getPropertyValue('--floating-icon-size') || 0;
    const x = e.clientX - dropdownList.getBoundingClientRect().x;
    const y = e.clientY - dropdownList.getBoundingClientRect().y;
    const targetText = e.target.innerText.trim();
    const hoverItemText = icons[targetText];

    floatingIcon.innerHTML = iconTemplate(hoverItemText);
    root.style.setProperty('--floating-icon-left', x - iconSize / 2 + 'px');
    root.style.setProperty('--floating-icon-top', y - iconSize / 2 + 'px');
  });
}

function renderListItems(listItems, dropdownList) {
  dropdownList.innerHTML += listItems
    .map((item, index) => {
      return listItemTemplate(item, 100 * index);
    })
    .join('');
}

function listItemTemplate(text, translateValue) {
  return `
      <li class="dropdown-list-item">
        <button class="dropdown-button list-button"  data-translate-value="${translateValue}%">
          <span class="text-truncate text-btn">${text}</span>
        </button>
      </li>
    `;
}

function iconTemplate(path) {
  return `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ganre-svg">
            <path d="${path}" />
          </svg>
        `;
}

export { libraryRendListAllGanres };
