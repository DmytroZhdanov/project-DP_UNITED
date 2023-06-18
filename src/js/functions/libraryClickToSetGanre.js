//import { generateMovieCardsMarkup } from './generateMovieCardsMarkup';

import { getGenresIdByGenres } from './getGenresIdByGenres';
import { libraryArrayFilterOnGanre } from './libraryArrayFilterOnGanre';
import { libraryPageRendToGanre } from './libraryPageRendToGanre';
import { listLibrary } from '../list-library';

function libraryClickToSetGanre(evt) {
  console.log(evt);
  if (evt == 'All') {
    console.log('Yes');
    location.reload();
    //рендерим все жанры
  } else {
    const idFilterGanre = getGenresIdByGenres([`${evt}`]);
    console.log('idFilterGanre: ', idFilterGanre);

    const arrayFilteredMoviesToRender =
      libraryArrayFilterOnGanre(idFilterGanre);

    console.log('arrayFilteredMoviesToRender:', arrayFilteredMoviesToRender);

    //  console.log(filterArrayMovies);
    const totalFiltretPageOnLibrary = arrayFilteredMoviesToRender
      ? Math.ceil(arrayFilteredMoviesToRender.length / 9)
      : 0;

    //  console.log('totalFiltretPageOnLibrary:', totalFiltretPageOnLibrary);
    let FilterGanreCurentPage = 0;
    libraryPageRendToGanre(
      totalFiltretPageOnLibrary,
      FilterGanreCurentPage,
      arrayFilteredMoviesToRender
    );
  }
}

export { libraryClickToSetGanre };
