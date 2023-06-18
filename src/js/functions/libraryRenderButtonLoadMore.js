import { refs } from '../list-library';
function libraryRenderButtonLoadMore() {
  refs.libraryMovieList.insertAdjacentHTML(
    'afterend',
    `
                        <div class="btn-load-more" data-div-load-more-btn>
                            <button type="button" class="btn btn-filled" data-load-more-btn>
                            Load more
                            </button>
                        </div>`
  );
}

export { libraryRenderButtonLoadMore, loadButton };
