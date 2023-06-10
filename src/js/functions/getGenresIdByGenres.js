import { fetchGenresList } from './movieApiService';

/**
 *
 * @param {Array} genresArr Array of genres
 * @returns {Promise} Promise with array of ids (numbers) as a result
 */
async function getGenresIdByGenres(genresArr) {
  const response = await fetchGenresList();

  const ids = genresArr.map(genre => {
    const genresObjects = response.genres.find(object => object.name === genre);

    return genresObjects.id;
  });

  return ids;
}

export { getGenresIdByGenres };
