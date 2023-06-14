import { fetchMovieVideosById } from './movieApiService';
import { modalTrailerShow, defaultModalTrailerShow } from './showModalTrailer';

async function openModalTrailer(movieId) {
  try {
    const response = await fetchMovieVideosById(movieId);
    const trailerKey = response.results.find(obj => obj.type === 'Trailer').key;

    trailerKey ? modalTrailerShow(trailerKey) : defaultModalTrailerShow();
  } catch (error) {
    console.error(error.message);
    defaultModalTrailerShow();
  }
}
export { openModalTrailer };
