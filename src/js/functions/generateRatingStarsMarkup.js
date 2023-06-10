/**
 * 
 * @param {Number} num 
 * @returns {String} markup for star rating
 */
function generateRatingStarsMarkup(num) {
  const rating = num.toFixed(2);
  return `
  <div class="rating-container">
    <div class="rating-active" style="width: ${rating * 10}%">
      <p class="visually-hidden">Movie's rating: ${rating}</p>
    </div>
  </div>`;
}

export { generateRatingStarsMarkup };
