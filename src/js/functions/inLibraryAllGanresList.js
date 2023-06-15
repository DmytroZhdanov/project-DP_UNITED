import { getGenresByGenresId } from './getGenresByGenresId';

function inLibraryAllGanresList(arr) {
  const markup = arr.map(({ genre_ids, genres }) => {
    const genresString = genre_ids
      ? getGenresByGenresId(genre_ids)
      : genres.map(genre => genre.name);
    return genresString;
  });
  const arrayUnicalGanres = [...new Set(markup.flat())];
  return arrayUnicalGanres;
}

export { inLibraryAllGanresList };
