import fullStarPng from '../../images/star.png';
import halfStarPng from '../../images/star-half.png';
import emptyStarPng from '../../images/star-outline.png';

/**
 * Функція повертає зірковий рейтинг
 * @param {Number} rating
 * @returns string with star-rating
 */
function renderStarRating(rating) {
  rating = Math.round(rating) / 2;
  const arr = [];
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 ? 1 : 0;
  const emptyStars = 5 - Math.ceil(rating);

  for (let i = 0; i < fullStars; i += 1) {
    arr.push(`<img src="${fullStarPng}" alt="Full star" />`);
  }
  for (let i = 0; i < halfStars; i += 1) {
    arr.push(`<img src="${halfStarPng}" alt="Half star" />`);
  }
  for (let i = 0; i < emptyStars; i += 1) {
    arr.push(`<img src="${emptyStarPng}" alt="Empty star" />`);
  }
  return arr.join('');
}

export { renderStarRating };
