function removeMovieFromLibrary(movieObject) {
  const filmsInLibrary = localStorage.getItem('library');
  const moviesArr = JSON.parse(filmsInLibrary);
  const newMoviesArray = moviesArr.filter(value => value.id !== movieObject.id);
  localStorage.setItem('library', JSON.stringify(newMoviesArray));
}

export { removeMovieFromLibrary };