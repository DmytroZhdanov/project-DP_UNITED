import { fetchGenresList } from './movieApiService';
/**
 * 
 * @param {Array} genresIdsArr Array of genres_ids
 * @returns {Promise} Promise with array of genres (strings) as a result
 */
async function getGenresByGenresId(genresIdsArr) {
  const response = await fetchGenresList();

  const genres = genresIdsArr.map(id => {
    const genresObjects = response.genres.find(object => object.id === id);

    return genresObjects.name;
  });

  return genres;
}

export { getGenresByGenresId };
