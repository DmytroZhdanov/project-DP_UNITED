import { refs } from '../list-library';
function libraryArrayFilterOnGanre(ganre) {
  const filterArrayMovies = [];

  refs.LibraryFromLocalStorage.map(element => {
    const genresString = element.genre_ids
      ? element.genre_ids
      : element.genres.map(genre => genre.id);
    if (genresString.includes(...ganre)) {
      filterArrayMovies.push(element);
    }
  });
  return filterArrayMovies;
}

export { libraryArrayFilterOnGanre };
