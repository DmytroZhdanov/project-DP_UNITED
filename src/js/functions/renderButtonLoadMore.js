import { refs } from '../list-library';
function renderButtonLoadMore() {
  refs.libraryMovieList.insertAdjacentHTML(
    'afterend',
    `
                        <div class="btn-list-search" data-div-load-more-btn>
                            <button type="button" class="btn btn-filled" data-load-more-btn>
                            Load more
                            </button>
                        </div>`
  );
}

export { renderButtonLoadMore };
