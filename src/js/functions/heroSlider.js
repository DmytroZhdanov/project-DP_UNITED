import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroSlider = {
  options: {
    prevArrow: '<button type="button" class="hero-slick-prev">&xlarr;</button>',
    nextArrow: '<button type="button" class="hero-slick-next">&xrarr;</button>',
    lazyLoad: 'progressive',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    mobileFirst: true,
    touchThreshold: 20,
  },

  enable() {
    $('.hero-section').slick(this.options);
  },

  pause() {
    $('.hero-section').slick('slickPause');
  },

  resume() {
    $('.hero-section').slick('slickPlay');
  },
};

export { heroSlider };
