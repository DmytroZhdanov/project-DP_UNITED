function addMovieToLibrary(movieObject) {
  if (!localStorage.getItem('library')) {
    const array = [];
    array.push(movieObject);
    localStorage.setItem('library', JSON.stringify(array));
  } else {
    const filmsInLibrary = localStorage.getItem('library');
    const moviesArr = JSON.parse(filmsInLibrary);
    moviesArr.push(movieObject);
    localStorage.setItem('library', JSON.stringify(moviesArr));
  }
}

export { addMovieToLibrary };
