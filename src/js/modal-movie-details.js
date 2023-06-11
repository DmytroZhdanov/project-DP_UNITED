// Modal window for movie details

/* Отже. Що потрібно від функції відкриття та закриття модалки з переглядом 
інформації про фільм. Ця функція являє собою колбек-функцію, яка буде 
передаватися в слухач подій на тих секціях, де це потрібно. Це для загальної інформації))
Що ця функція повинна робити? Вона приймає аргументом ID фільму. Спершу треба скористатися 
функцією фетч запита, та знайти фільм за айді. Відповідь з апішки треба обробити 
(тому що з тієї функції повернеться проміс). Далі ти передаєш отриманий обʼєкт з фільмів у 
функцію, що генерує розмітку для модального вікна (цю функцію тобі треба теж написати). 
Розмітка в тебе вже є, у файлі modal-movie-details.html (вона закоментована, 
тому що вона там не треба, вона буде підставлятися динамічно). 
Для генерації тобі ще знадобиться функція generateLibraryBtnMarkup. 
Після того, як розмітка згенерована ти додаєш її всередину data-modal-details і вішаєш на цей контейнер клас backdrop. 
Після того, як ти закинув розмітку в ДОМ, ти шукаєш 2 елементи за дата-атрибутом. 
А саме кнопку додавання та кнопку видалення. Потім вішаєш на кожну з них слухача подій і в якості колбек функцій 
передаєш вже написані тобою функції додавання та видалення (в залежності від кнопки). Не забудь передати їм аргументами те, що їм треба. 
Також повішай слухача подій на хрестик (кнопку закриття модалки) */

/**
 * @param {String} id Movie ID
 * @returns {String} modal markup
 */

import { fetchMovieById } from './functions/movieApiService';
import { getGenresByGenresId } from './functions/getGenresByGenresId';
import { generateLibraryBtnMarkup } from './functions/generateLibraryBtnMarkup';
import { onAddLibraryBtnClick } from './functions/onLibraryBtnAddClick'
import { removeFromLibrary } from './functions/onLibraryBtnRemoveClick'

async function modalMovieDetails(id) {
    const response = await fetchMovieById(id);
    return createModalWindow (response);
}

function createModalWindow(response, id) {
    modalWindow.innerHTML = response.map (({ poster_path, title, overview, vote_average, vote_count, popularity } ) => 
    `<div class="backdrop" data-modal-details>
        <div class="modal-details">
            <button type="button" class="btn modal-close" data-modal-details-close>
                <svg class="icon-close" width="10.5" height="10.5">
                    <use href="./images/icons.svg#icon-close"></use>
                </svg>
            </button>
            <img src="${poster_path}" />
            <h2>${title}</h2>
            <h3>Vote / Votes</h3>
            <p><span>${vote_average}</span> / <span>${vote_count}</span></p>
            <h3>Popularity</h3>
            <p>${popularity}</p>
            <h3>Genre</h3>
            <p class='modal-genre'></p>
            <h3>About</h3>
            <p>${overview}</p>
            <button class="modal-btn"></button>
        </div>
    </div> -->`).join('');

    const genre = document.document.querySelector('.modal-genre');
    genre.insertAdjacentHTML("beforeend", createGenres(response));

    const btn = document.querySelector('.modal-btn')
    btn.insertAdjacentHTML("beforeend", generateLibraryBtnMarkup(id));

    const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
    libraryBtnAdd.addEventListener('click', onAddLibraryBtnClick);

    const libraryBtnRemove = document.querySelector('[data-remove-from-library-btn]');
    libraryBtnRemove.addEventListener('click', removeFromLibrary);

    const modalClose = document.querySelector('[data-modal-details-close]');
    modalClose.addEventListener ('click', modalClose.classList.add('is-hidden')); /* передивись цей момент, якщо так не працює, то зроблю окрему функцію */
}

function createGenres(response) {
    new array = [response.genre_ids];
    return getGenresByGenresId(array);
}

export { modalMovieDetails }