// Footer js
const developersInfo = document.querySelector('[data-modal-open]');
const modalWindow = document.querySelector('[data-window-modal]');
const modalContent = document.querySelector('[data-modal-content]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const svgCloseButton = document.querySelector('[data-modal-cross]');

developersInfo.addEventListener('click', () => {
  modalWindow.style.display = 'block';
});

modalWindow.addEventListener('click', (event) => {
  if (event.target === modalWindow || event.target === modalCloseButton || event.target === svgCloseButton) {
    modalWindow.style.display = 'none';
  }
});

