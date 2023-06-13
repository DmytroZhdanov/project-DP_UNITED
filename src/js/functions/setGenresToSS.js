import { fetchGenresList } from './movieApiService';

async function setGenresToSS() {
  try {
    const response = await fetchGenresList();
    const genresToStore = JSON.stringify(response);

    sessionStorage.setItem('genres', genresToStore);
  } catch (error) {
    console.error(error.message);
  }
}

export { setGenresToSS };
