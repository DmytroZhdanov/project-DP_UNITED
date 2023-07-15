import { getGenresIdByGenres } from './getGenresIdByGenres';
import { libraryArrayFilterOnGanre } from './libraryArrayFilterOnGanre';
import { libraryPageRendToGanre } from './libraryPageRendToGanre';

function libraryClickToSetGanre(evt) {
  if (evt == 'All') {
    location.reload();
    //рендерим все жанры
  } else {
    const idFilterGanre = getGenresIdByGenres([`${evt}`]);

    const arrayFilteredMoviesToRender =
      libraryArrayFilterOnGanre(idFilterGanre);

    const totalFiltretPageOnLibrary = arrayFilteredMoviesToRender
      ? Math.ceil(arrayFilteredMoviesToRender.length / 9)
      : 0;
    
    let FilterGanreCurentPage = 0;
    libraryPageRendToGanre(
      totalFiltretPageOnLibrary,
      FilterGanreCurentPage,
      arrayFilteredMoviesToRender
    );
  }
}

export { libraryClickToSetGanre };
