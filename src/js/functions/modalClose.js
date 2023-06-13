function modalClose() {
  const modalBackdrop = document.querySelector('.backdrop');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  modalBackdrop.classList.add('is-hidden');
  modalCloseBtn.removeEventListener('click', modalClose);
}

export { modalClose };