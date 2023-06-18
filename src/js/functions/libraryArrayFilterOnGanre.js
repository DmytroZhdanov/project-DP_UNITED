import { refs } from '../list-library';
function libraryArrayFilterOnGanre(ganre) {
  console.log('ganre:', ganre);
  //  console.log(refs.LibraryFromLocalStorage);
  const filterArrayMovies = [];

  refs.LibraryFromLocalStorage.map(element => {
    //console.log('element: ', element);
    const genresString = element.genre_ids
      ? element.genre_ids
      : element.genres.map(genre => genre.id);
    //console.log('genresString: ', genresString);
    //console.log('ganre: ', ganre);
    if (genresString.includes(...ganre)) {
      filterArrayMovies.push(element);
      //  console.log('filterArrayMovies: ', filterArrayMovies);
    }
  });

  //  console.log('filterArrayMovies: ', filterArrayMovies);
  return filterArrayMovies;
}

export { libraryArrayFilterOnGanre };
