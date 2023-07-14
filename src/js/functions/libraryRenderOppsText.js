import { refs } from '../list-library';
function libraryRenderOppsText() {
  refs.libraryOppsText.innerHTML = `
        <p>OOPS...<br>
        We are very sorry!<br>
        You don’t have any movies at your library.</p>
          <div class="btn-list-search">
          <a  href="./catalogue.html" class="btn btn-filled">
          Search movie
          </a>
          </div>
        `;
  refs.libraryOppsText.classList.add('library-ops-text-css');
}

export { libraryRenderOppsText };
