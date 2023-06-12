/**
 *
 * @param {Array} genresIdsArr Array of genres_ids
 * @returns {Array} Array of genres (strings) as a result
 */
function getGenresByGenresId(genresIdsArr) {
  const allGenres = JSON.parse(sessionStorage.getItem('genres'));

  const genres = genresIdsArr.map(id => {
    const genresObjects = allGenres.genres.find(object => object.id === id);

    return genresObjects.name;
  });

  return genres;
}

export { getGenresByGenresId };
