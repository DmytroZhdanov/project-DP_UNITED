import { getGenresByGenresId } from './getGenresByGenresId';

function libraryAllGanresList(arr) {
  const markup = arr.map(({ genre_ids, genres }) => {
    const genresString = genre_ids
      ? getGenresByGenresId(genre_ids)
      : genres.map(genre => genre.name);

    return genresString;
  });

  const arrayUnicalGanres = [...new Set(markup.flat())].sort();

  arrayUnicalGanres.splice(0, 0, 'All');
  console.log('arrayUnicalGanres:', arrayUnicalGanres);
  return arrayUnicalGanres;
}

export { libraryAllGanresList };
