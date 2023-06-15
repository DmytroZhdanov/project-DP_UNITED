const loader = {
  loaderEl: document.querySelector('.js-loader'),
  on() {
    this.loaderEl.classList.remove('is-hidden');
  },
  off() {
    this.loaderEl.classList.add('is-hidden');
  },
};

export { loader };
