!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){i[n]=e},e.parcelRequired7c6=r),r("i8Q71"),r("cs7FV"),r("gVa74");var a=r("bpxeT"),c=r("2TvXO"),o=r("iM4cy"),s=r("2xcQJ"),l=r("kHa4C"),u=(a=r("bpxeT"),c=r("2TvXO"),o=r("iM4cy"),r("4cCwH"));function d(n,e){var t=localStorage.getItem("library");return t&&JSON.parse(t).find((function(n){return n.id===e}))?'<button type="button" data-remove-from-library-btn-upcoming class="'.concat(n,'">Remove from library</button>'):'<button type="button" data-add-to-library-btn-upcoming class="'.concat(n,'">Add to library</button>')}function p(n){var e=n.backdrop_path,t=n.title,i=n.genre_ids,r=n.overview,a=n.popularity,c=n.poster_path,o=n.release_date,s=n.vote_average,l=n.vote_count,p=n.id,m=(0,u.getGenresByGenresId)(i).join(", ");return' <picture>\n      <source\n        srcset="https://image.tmdb.org/t/p/original/'.concat(e,'"\n        media="(min-width:1280px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(e,'"\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(c,'"\n        media="(min-width:320px)"\n      />\n      <img\n        class="upcoming-movie-img"\n        src="https://image.tmdb.org/t/p/original/').concat(c,'"\n        alt="').concat(t,'"\n      />\n    </picture>\n    \n    <div class="upcoming-column">\n      <h2 class="upcoming-headline">').concat(t,'</h2>\n      <div class="upcoming-wrap">\n        <div class="upcoming-inner-wrap">\n          <div class="upcoming-wrapper upcoming-wrapper-gap">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-data">\n                <p class="upcoming-subject">Release date</p>\n              </li>\n              <li class="upcoming-item-data-num">\n                <p class="upcoming-date">').concat(o.split("-").reverse().join("."),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-vote">\n                <p class="upcoming-subject">Vote / Votes</p>\n              </li>\n              <li class="upcoming-item-vote-num">\n                <p class="upcoming-vote">\n                  <span class="upcoming-inner-box">').concat(s,'</span>\n                  <span class="upcoming-inner-color">/</span>\n                  <span class="upcoming-inner-box-votes">').concat(l,'</span>\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class="upcoming-wrapper">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-pop">\n                <p class="upcoming-subject">Popularity</p>\n              </li>\n              <li class="upcoming-item-pop-num">\n                <p class="upcoming-famous">').concat(a.toFixed(1),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-genre">\n                <p class="upcoming-subject">Genre</p>\n              </li>\n              <li class="upcoming-item-genre-num">\n                <p class="upcoming-janres">').concat(m,'</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n    \n        <h3 class="upcoming-caption">About</h3>\n        <p class="upcoming-description">\n          ').concat(r,'\n        </p>\n        <div class="library-btn-upcoming" data-library-btn-upcoming>\n          ').concat(d("btn btn-filled",p),"\n        </div>\n      </div>\n    </div>")}var m=r("gNR05");function g(n,e,t){(0,m.removeMovieFromLibrary)(t);var i=document.querySelector("[data-library-btn-upcoming]"),r=d(n,e);i.innerHTML=r,document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){b(n,e,t)}),{once:!0})}var v=r("kyEhf");function b(n,e,t){(0,v.addMovieToLibrary)(t);var i=document.querySelector("[data-library-btn-upcoming]"),r=d(n,e);i.innerHTML=r,document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){g(n,e,t)}),{once:!0})}function f(n,e,t,i){n?document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){b(e,t,i)}),{once:!0}):document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){g(e,t,i)}),{once:!0})}var y=document.querySelector(".js-upcomming-cards"),h=document.querySelector(".js-upcomming-default");function w(){return(w=n(a)(n(c).mark((function e(){var t,i,r,a,s;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchUpcomingThisMonth)();case 3:t=n.sent,i=t.results,r=i[Math.floor(Math.random()*i.length)],(a=document.querySelector("[data-upcoming]")).innerHTML=p(r),s=a.innerHTML.includes("Add to library"),"btn btn-filled",f(s,"btn btn-filled",r.id,r),n.next=22;break;case 13:if(n.prev=13,n.t0=n.catch(0),console.error(n.t0.message),y.classList.add("visually-hidden"),h.setAttribute("data-shown",!0),"true"!==L.getAttribute("data-shown")){n.next=21;break}return L.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 21:h.classList.remove("visually-hidden");case 22:case"end":return n.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){w.apply(this,arguments)}();var x=document.querySelector("[data-weekly-trends-list]"),k=document.querySelector(".js-weekly-trends-cards"),L=document.querySelector(".js-weekly-trends-default"),S=window.innerWidth<768?1:3;function M(){return(M=n(a)(n(c).mark((function e(){var t,i,r;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchWeekTrends)();case 3:t=n.sent,i=t.results.slice(0,S),r=(0,s.generateMovieCardsMarkup)(i),x.innerHTML=r,x.addEventListener("click",l.onMovieCardClick),n.next=19;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.error(n.t0.message),k.classList.add("visually-hidden"),L.setAttribute("data-shown",!0),"true"!==h.getAttribute("data-shown")){n.next=18;break}return h.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 18:L.classList.remove("visually-hidden");case 19:case"end":return n.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){M.apply(this,arguments)}(),r("7hKzD"),r("ijwS8"),r("i1PHi"),(0,r("9qBU4").setGenresToSS)(),document.querySelectorAll("[data-header-home]").forEach((function(n){return n.classList.add("js-current")}))}();
//# sourceMappingURL=index.2c61cddd.js.map
