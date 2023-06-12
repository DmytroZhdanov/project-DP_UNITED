import { fetchGenresList } from './movieApiService';

async function setGenresToSS() {
  const response = await fetchGenresList();
  const genresToStore = JSON.stringify(response);

  sessionStorage.setItem('genres', genresToStore);
}

export { setGenresToSS };
