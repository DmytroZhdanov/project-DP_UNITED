var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n),n("bUb57"),n("8FnLx"),n("eEHR3");var a=n("coBnA");function o(e,r){return e.slice(9*r,9*r+9)}a=n("coBnA");function i(){y.libraryMovieList.insertAdjacentHTML("afterend",'\n                        <div class="btn-list-load-more" data-div-load-more-btn>\n                            <button type="button" class="btn btn-filled" data-load-more-btn>\n                            Load more\n                            </button>\n                        </div>')}var s=n("2ZOXv");function l(e){const r=JSON.parse(sessionStorage.getItem("genres"));return e.map((e=>r.genres.find((r=>r.name===e)).id))}function d(e){const r=[];return y.LibraryFromLocalStorage.map((t=>{(t.genre_ids?t.genre_ids:t.genres.map((e=>e.id))).includes(...e)&&r.push(t)})),r}a=n("coBnA");function c(e,r,t){libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),e<=1?(y.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(t),libraryLoadMoreBtn&&libraryLoadMoreBtn.remove()):(y.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(o(t,r)),libraryLoadMoreBtn||(i(),r+=1,y.libraryMovieList.classList.add("movie-cards-list-css"),libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),libraryLoadMoreBtn.addEventListener("click",(function(){libraryDivLoadMoreBtn=document.querySelector("[data-div-load-more-btn]"),e===r+1?(y.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(t,r))),y.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),y.libraryMovieList.classList.remove("movie-cards-list-css"),libraryDivLoadMoreBtn.remove()):(y.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(t,r))),r+=1)}))))}function u(e){if("All"==e)location.reload();else{const r=d(l([`${e}`]));c(r?Math.ceil(r.length/9):0,0,r)}}function b(e){return`\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ganre-svg">\n            <path d="${e}" />\n          </svg>\n        `}const y={libraryMovieList:document.querySelector("[data-library-list]"),libraryOppsText:document.querySelector("[data-library-oops-text]"),libraryFilterGanreBackdrop:document.querySelector("[data-library-filter-ganre]"),LibraryFromLocalStorage:JSON.parse(localStorage.getItem("library"))};let v={totalLibraryPage:y.LibraryFromLocalStorage?Math.ceil(y.LibraryFromLocalStorage.length/9):0,curentPage:0};y.LibraryFromLocalStorage&&y.LibraryFromLocalStorage.length?(y.libraryFilterGanreBackdrop.innerHTML='\n  <button class="dropdown-button main-button">\n  <span class="dropdown-title-icon">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 512 512"\n      class="ganre-svg"\n    >\n      <path\n        d="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z"\n      />\n    </svg>\n  </span>\n  <span class="dropdown-title text-truncate text-mein-btn">Genre</span>\n  <span class="dropdown-arrow">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 16 16"\n      class="ganre-svg"\n    >\n      <path\n        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"\n      />\n    </svg>\n  </span>\n</button>\n<div class="dropdown-list-container">\n  <div class="dropdown-list-wrapper">\n    <ul class="dropdown-list"></ul>\n    <div class="floating-icon" aria-hidden="true"></div>\n  </div>\n</div>\n        ',function(e){const r=document.documentElement,t=document.querySelector(".dropdown-title-icon"),n=document.querySelector(".dropdown-title"),a=document.querySelector(".dropdown-list"),o=document.querySelector(".main-button"),i=document.querySelector(".floating-icon"),s={},l=e;for(let e=0;e<l.length;e++)s[l[e]]="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z";window.addEventListener("load",(()=>{!function(e,r){r.innerHTML+=e.map(((e,r)=>`\n      <li class="dropdown-list-item">\n        <button class="dropdown-button list-button"  data-translate-value="${100*r}%">\n          <span class="text-truncate text-btn">${e}</span>\n        </button>\n      </li>\n    `)).join("")}(l,a)}));const d=(e,t,n)=>{r.style.setProperty("--rotate-arrow",0!==e?e+"deg":0),r.style.setProperty("--dropdown-height",0!==t?t+"rem":0),r.style.setProperty("--list-opacity",n)};o.addEventListener("click",(()=>{const e=4.6*l.length+3.5;"0"===(r.style.getPropertyValue("--dropdown-height")||"0")?d(180,e,1):d(0,0,0)})),a.addEventListener("mouseover",(e=>{const t=e.target.dataset.translateValue;r.style.setProperty("--translate-value",t)})),a.addEventListener("click",(e=>{const r=e.target.innerText.trim();console.log(r),u(r);const a=s[r];t.innerHTML=b(a),n.innerHTML=r,d(0,0,0)})),a.addEventListener("mousemove",(e=>{const t=r.style.getPropertyValue("--floating-icon-size")||0,n=e.clientX-a.getBoundingClientRect().x,o=e.clientY-a.getBoundingClientRect().y,l=e.target.innerText.trim(),d=s[l];i.innerHTML=b(d),r.style.setProperty("--floating-icon-left",n-t/2+"px"),r.style.setProperty("--floating-icon-top",o-t/2+"px")}))}(function(e){const r=e.map((({genre_ids:e,genres:r})=>e?(0,s.getGenresByGenresId)(e):r.map((e=>e.name)))),t=[...new Set(r.flat())].sort();return t.splice(0,0,"All"),t}(y.LibraryFromLocalStorage)),v.totalLibraryPage<=1?(y.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(y.LibraryFromLocalStorage),y.libraryMovieList.classList.add("movie-cards-list-css-no-btn")):(y.libraryMovieList.innerHTML=(0,a.generateMovieCardsMarkup)(o(y.LibraryFromLocalStorage,v.curentPage)),i(),v.curentPage+=1,y.libraryMovieList.classList.add("movie-cards-list-css"),libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),libraryLoadMoreBtn.addEventListener("click",(function(){libraryDivLoadMoreBtn=document.querySelector("[data-div-load-more-btn]"),v.totalLibraryPage===v.curentPage+1?(y.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(y.LibraryFromLocalStorage,v.curentPage))),y.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),y.libraryMovieList.classList.remove("movie-cards-list-css"),libraryDivLoadMoreBtn.remove()):(y.libraryMovieList.insertAdjacentHTML("beforeend",(0,a.generateMovieCardsMarkup)(o(y.LibraryFromLocalStorage,v.curentPage))),v.curentPage+=1)})))):(y.libraryOppsText.innerHTML='\n        <p>OOPS...<br>\n        We are very sorry!<br>\n        You don’t have any movies at your library.</p>\n          <div class="btn-list-search">\n          <a  href="./catalogue.html" class="btn btn-filled">\n          Search movie\n          </a>\n          </div>\n        ',y.libraryOppsText.classList.add("library-ops-text-css")),n("epHO8"),(0,n("aSB85").setGenresToSS)();document.querySelectorAll("[data-header-library]").forEach((e=>e.classList.add("js-current")));
//# sourceMappingURL=library.447edaa2.js.map
