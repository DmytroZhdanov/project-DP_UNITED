import { getGenresIdByGenres } from './getGenresIdByGenres';
import { makeArrayFilterOnGanre } from './makeArrayFilterOnGanre';
import { rendFilterPageLibrary } from './rendFilterPageLibrary';

function ClickToSetGanre(evt) {
  //  console.log(evt);
  //  makeArrayFilterOnGanre(getGenresIdByGenres([`${evt}`]));
  //  console.log(getGenresIdByGenres([`${evt}`]));
  const idFilterGanre = getGenresIdByGenres([`${evt}`]);
  console.log('idFilterGanre: ', idFilterGanre);
  const arrayFilteredMoviesToRender = makeArrayFilterOnGanre(idFilterGanre);

  console.log('arrayFilteredMoviesToRender:', arrayFilteredMoviesToRender);

  //  console.log(filterArrayMovies);
  const totalFiltretPageOnLibrary = arrayFilteredMoviesToRender
    ? Math.ceil(arrayFilteredMoviesToRender.length / 9)
    : 0;

  //  console.log(totalFiltretPageOnLibrary);
  let FilterGanreCurentPage = 0;
  return rendFilterPageLibrary(
    totalFiltretPageOnLibrary,
    FilterGanreCurentPage,
    arrayFilteredMoviesToRender
  );
}

export { ClickToSetGanre };
