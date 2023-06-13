function modalTrailerClose() {
  const modalTrailerBackdrop = document.querySelector('[data-modal-trailer]');
  modalTrailerBackdrop.classList.add('is-hidden');
}

export { modalTrailerClose };