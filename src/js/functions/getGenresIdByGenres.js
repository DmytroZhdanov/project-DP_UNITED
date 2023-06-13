/**
 *
 * @param {Array} genresArr Array of genres
 * @returns {Array} Array of ids (numbers) as a result
 */
function getGenresIdByGenres(genresArr) {
  const allGenres = JSON.parse(sessionStorage.getItem('genres'));

  const ids = genresArr.map(genre => {
    const genresObjects = allGenres.genres.find(
      object => object.name === genre
    );

    return genresObjects.id;
  });

  return ids;
}

export { getGenresIdByGenres };
