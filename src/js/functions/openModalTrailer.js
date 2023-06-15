import { fetchMovieVideosById } from './movieApiService';
import { modalTrailerShow, defaultModalTrailerShow } from './showModalTrailer';
import { loader } from './loader';

async function openModalTrailer(movieId) {
  loader.on();
  try {
    const response = await fetchMovieVideosById(movieId);
    const trailerKey = response.results.find(obj => obj.type === 'Trailer').key;

    trailerKey ? modalTrailerShow(trailerKey) : defaultModalTrailerShow();
  } catch (error) {
    console.error(error.message);
    defaultModalTrailerShow();
  } finally {
    loader.off();
  }
}
export { openModalTrailer };
