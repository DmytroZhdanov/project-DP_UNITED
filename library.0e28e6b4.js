!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},r.parcelRequired7c6=a),a("i8Q71"),a("cs7FV"),a("gVa74");var o=a("2xcQJ");function i(e,r){return e.slice(9*r,9*r+9)}o=a("2xcQJ");function s(){L.libraryMovieList.insertAdjacentHTML("afterend",'\n                        <div class="btn-list-load-more" data-div-load-more-btn>\n                            <button type="button" class="btn btn-filled" data-load-more-btn>\n                            Load more\n                            </button>\n                        </div>')}var l=a("8nrFW"),c=a("4cCwH");l=a("8nrFW");o=a("2xcQJ");function d(e,r,t){libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),e<=1?(L.libraryMovieList.innerHTML=(0,o.generateMovieCardsMarkup)(t),libraryLoadMoreBtn&&libraryLoadMoreBtn.remove()):(L.libraryMovieList.innerHTML=(0,o.generateMovieCardsMarkup)(i(t,r)),libraryLoadMoreBtn||(s(),r+=1,L.libraryMovieList.classList.add("movie-cards-list-css"),libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),libraryLoadMoreBtn.addEventListener("click",(function(){libraryDivLoadMoreBtn=document.querySelector("[data-div-load-more-btn]"),e===r+1?(L.libraryMovieList.insertAdjacentHTML("beforeend",(0,o.generateMovieCardsMarkup)(i(t,r))),L.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),L.libraryMovieList.classList.remove("movie-cards-list-css"),libraryDivLoadMoreBtn.remove()):(L.libraryMovieList.insertAdjacentHTML("beforeend",(0,o.generateMovieCardsMarkup)(i(t,r))),r+=1)}))))}function u(r){if("All"==r)location.reload();else{var t=(i=["".concat(r)],s=JSON.parse(sessionStorage.getItem("genres")),i.map((function(e){return s.genres.find((function(r){return r.name===e})).id}))),n=(a=t,o=[],L.LibraryFromLocalStorage.map((function(r){var t;(t=r.genre_ids?r.genre_ids:r.genres.map((function(e){return e.id}))).includes.apply(t,e(l)(a))&&o.push(r)})),o);d(n?Math.ceil(n.length/9):0,0,n)}var a,o,i,s}function v(e){return'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ganre-svg">\n            <path d="'.concat(e,'" />\n          </svg>\n        ')}var y,b,g,L={libraryMovieList:document.querySelector("[data-library-list]"),libraryOppsText:document.querySelector("[data-library-oops-text]"),libraryFilterGanreBackdrop:document.querySelector("[data-library-filter-ganre]"),LibraryFromLocalStorage:JSON.parse(localStorage.getItem("library"))},p={totalLibraryPage:L.LibraryFromLocalStorage?Math.ceil(L.LibraryFromLocalStorage.length/9):0,curentPage:0};L.LibraryFromLocalStorage&&L.LibraryFromLocalStorage.length?(L.libraryFilterGanreBackdrop.innerHTML='\n  <button class="dropdown-button main-button">\n  <span class="dropdown-title-icon">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 512 512"\n      class="ganre-svg"\n    >\n      <path\n        d="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z"\n      />\n    </svg>\n  </span>\n  <span class="dropdown-title text-truncate text-mein-btn">Genre</span>\n  <span class="dropdown-arrow">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 0 16 16"\n      class="ganre-svg"\n    >\n      <path\n        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"\n      />\n    </svg>\n  </span>\n</button>\n<div class="dropdown-list-container">\n  <div class="dropdown-list-wrapper">\n    <ul class="dropdown-list"></ul>\n    <div class="floating-icon" aria-hidden="true"></div>\n  </div>\n</div>\n        ',function(e){for(var r=document.documentElement,t=document.querySelector(".dropdown-title-icon"),n=document.querySelector(".dropdown-title"),a=document.querySelector(".dropdown-list"),o=document.querySelector(".main-button"),i=document.querySelector(".floating-icon"),s={},l=e,c=0;c<l.length;c++)s[l[c]]="M430 460h30V351.327a258.217 258.217 0 0 1-30 44.817V460zM230 0C102.975 0 0 102.975 0 230s102.975 230 230 230 230-102.975 230-230S357.025 0 230 0zm0 40c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55zM46.607 188.283c0-30.376 24.624-55 55-55 30.375 0 55 24.624 55 55 0 30.375-24.625 55-55 55s-55-24.625-55-55zm104.042 205.934c-30.375 0-55-24.624-55-55s24.625-55 55-55c30.376 0 55 24.624 55 55s-24.624 55-55 55zM230 250c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20zm79.351 144.217c-30.376 0-55-24.624-55-55s24.624-55 55-55c30.375 0 55 24.624 55 55s-24.624 55-55 55zm49.042-150.934c-30.375 0-55-24.625-55-55 0-30.376 24.625-55 55-55 30.376 0 55 24.624 55 55 0 30.375-24.625 55-55 55z";window.addEventListener("load",(function(){!function(e,r){r.innerHTML+=e.map((function(e,r){return t=e,'\n      <li class="dropdown-list-item">\n        <button class="dropdown-button list-button"  data-translate-value="'.concat(100*r,'%">\n          <span class="text-truncate text-btn">').concat(t,"</span>\n        </button>\n      </li>\n    ");var t})).join("")}(l,a)}));var d=function(e,t,n){r.style.setProperty("--rotate-arrow",0!==e?e+"deg":0),r.style.setProperty("--dropdown-height",0!==t?t+"rem":0),r.style.setProperty("--list-opacity",n)};o.addEventListener("click",(function(){var e=4.6*l.length+3.5;"0"===(r.style.getPropertyValue("--dropdown-height")||"0")?d(180,e,1):d(0,0,0)})),a.addEventListener("mouseover",(function(e){var t=e.target.dataset.translateValue;r.style.setProperty("--translate-value",t)})),a.addEventListener("click",(function(e){var r=e.target.innerText.trim();console.log(r),u(r);var a=s[r];t.innerHTML=v(a),n.innerHTML=r,d(0,0,0)})),a.addEventListener("mousemove",(function(e){var t=r.style.getPropertyValue("--floating-icon-size")||0,n=e.clientX-a.getBoundingClientRect().x,o=e.clientY-a.getBoundingClientRect().y,l=e.target.innerText.trim(),c=s[l];i.innerHTML=v(c),r.style.setProperty("--floating-icon-left",n-t/2+"px"),r.style.setProperty("--floating-icon-top",o-t/2+"px")}))}((y=L.LibraryFromLocalStorage,b=y.map((function(e){var r=e.genre_ids,t=e.genres;return r?(0,c.getGenresByGenresId)(r):t.map((function(e){return e.name}))})),(g=e(l)(new Set(b.flat())).sort()).splice(0,0,"All"),g)),p.totalLibraryPage<=1?(L.libraryMovieList.innerHTML=(0,o.generateMovieCardsMarkup)(L.LibraryFromLocalStorage),L.libraryMovieList.classList.add("movie-cards-list-css-no-btn")):(L.libraryMovieList.innerHTML=(0,o.generateMovieCardsMarkup)(i(L.LibraryFromLocalStorage,p.curentPage)),s(),p.curentPage+=1,L.libraryMovieList.classList.add("movie-cards-list-css"),libraryLoadMoreBtn=document.querySelector("[data-load-more-btn]"),libraryLoadMoreBtn.addEventListener("click",(function(){libraryDivLoadMoreBtn=document.querySelector("[data-div-load-more-btn]"),p.totalLibraryPage===p.curentPage+1?(L.libraryMovieList.insertAdjacentHTML("beforeend",(0,o.generateMovieCardsMarkup)(i(L.LibraryFromLocalStorage,p.curentPage))),L.libraryMovieList.classList.add("movie-cards-list-css-no-btn"),L.libraryMovieList.classList.remove("movie-cards-list-css"),libraryDivLoadMoreBtn.remove()):(L.libraryMovieList.insertAdjacentHTML("beforeend",(0,o.generateMovieCardsMarkup)(i(L.LibraryFromLocalStorage,p.curentPage))),p.curentPage+=1)})))):(L.libraryOppsText.innerHTML='\n        <p>OOPS...<br>\n        We are very sorry!<br>\n        You don’t have any movies at your library.</p>\n          <div class="btn-list-search">\n          <a  href="./catalogue.html" class="btn btn-filled">\n          Search movie\n          </a>\n          </div>\n        ',L.libraryOppsText.classList.add("library-ops-text-css")),a("7hKzD"),(0,a("9qBU4").setGenresToSS)(),document.querySelectorAll("[data-header-library]").forEach((function(e){return e.classList.add("js-current")}))}();
//# sourceMappingURL=library.0e28e6b4.js.map
