!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},c=e.parcelRequired7c6;null==c&&((c=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var c={id:n,exports:{}};return t[n]=c,e.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){a[n]=e},e.parcelRequired7c6=c),c("iE7OH").register(JSON.parse('{"EVgbq":"index.96155e1d.js","chXFQ":"image-not-found-card-desc-1x-395.8b99bda0.jpg","39kLH":"image-not-found-card-desc-2x-790.83caa5aa.jpg","2NoJ7":"image-not-found-card-mob-1x-280.0f9e6c3f.jpg","8qCrf":"image-not-found-card-mob-2x-560.4b3dca72.jpg","6X2yy":"image-not-found-card-tab-1x-224.33f0ac10.jpg","aMJqp":"image-not-found-card-tab-2x-448.d745f0d3.jpg","9rVKF":"image-not-found-card-desc-1x-395.5c16e78d.webp","c6UTt":"image-not-found-card-desc-2x-790.c98a0e72.webp","4tvZU":"image-not-found-card-mob-1x-280.298b2583.webp","6uW2A":"image-not-found-card-mob-2x-560.e1c58391.webp","a2gPn":"image-not-found-card-tab-1x-224.e44bdd17.webp","8nydb":"image-not-found-card-tab-2x-448.a1ec171a.webp","1XaNB":"catalogue.b347042f.css","e4RIS":"library.9c158b11.js"}')),c("i8Q71"),c("cs7FV"),c("gVa74");var r=c("bpxeT"),i=c("2TvXO"),o=c("iM4cy"),s=c("2xcQJ"),l=c("kHa4C"),u=(r=c("bpxeT"),i=c("2TvXO"),o=c("iM4cy"),c("4cCwH"));function d(n,e){var t=localStorage.getItem("library");return t&&JSON.parse(t).find((function(n){return n.id===e}))?'<button type="button" data-remove-from-library-btn-upcoming class="'.concat(n,'">Remove from library</button>'):'<button type="button" data-add-to-library-btn-upcoming class="'.concat(n,'">Add to library</button>')}var p;p=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("chXFQ");var m;m=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("39kLH");var g;g=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("2NoJ7");var b;b=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("8qCrf");var v;v=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("6X2yy");var f;f=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("aMJqp");var y;y=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("9rVKF");var h;h=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("c6UTt");var w;w=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("4tvZU");var E;E=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("6uW2A");var H;H=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("a2gPn");var x;function _(e){var t=e.backdrop_path,a=e.title,c=e.genre_ids,r=e.overview,i=e.popularity,o=e.poster_path,s=e.release_date,l=e.vote_average,_=e.vote_count,S=e.id,q=(0,u.getGenresByGenresId)(c).join(", "),R=o||t?'<picture>\n      <source\n        srcset="https://image.tmdb.org/t/p/original/'.concat(t,'"\n        media="(min-width:1280px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(t,'"\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(o,'"\n        media="(min-width:320px)"\n      />\n      <img\n        class="upcoming-movie-img"\n        src="https://image.tmdb.org/t/p/original/').concat(o,'"\n        alt="').concat(a,'"\n      />\n    </picture>'):'<picture>\n        <source\n          srcset="'.concat(n(y)," 395w,\n                  ").concat(n(h)," 790w,\n                  ").concat(n(w)," 280w,\n                  ").concat(n(E)," 560w,\n                  ").concat(n(H)," 224w,\n                  ").concat(n(x),' 448w\n        " \n        sizes="(min-width: 1280px) 395px, (min-width: 768px) 224px, (min-width: 280px) 280px, 100vw"\n        type="image/webp" />\n        <source\n          srcset="').concat(n(p)," 395w,\n                  ").concat(n(m)," 790w,\n                  ").concat(n(g)," 280w,\n                  ").concat(n(b)," 560w,\n                  ").concat(n(v)," 224w,\n                  ").concat(n(f),' 448w\n        " \n        sizes="(min-width: 1280px) 395px, (min-width: 768px) 224px, (min-width: 280px) 280px, 100vw"\n        type="image/jpeg" />\n        <img\n          class="movie-details-img"\n          src="').concat(n(g),'"\n          alt="Image not found"\n        />\n      </picture>');return" \n    ".concat(R,'\n    <div class="upcoming-column">\n      <h2 class="upcoming-headline">').concat(a,'</h2>\n      <div class="upcoming-wrap">\n        <div class="upcoming-inner-wrap">\n          <div class="upcoming-wrapper upcoming-wrapper-gap">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-data">\n                <p class="upcoming-subject">Release date</p>\n              </li>\n              <li class="upcoming-item-data-num">\n                <p class="upcoming-date">').concat(s.split("-").reverse().join("."),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-vote">\n                <p class="upcoming-subject">Vote / Votes</p>\n              </li>\n              <li class="upcoming-item-vote-num">\n                <p class="upcoming-vote">\n                  <span class="upcoming-inner-box">').concat(l.toFixed(1),'</span>\n                  <span class="upcoming-inner-color">/</span>\n                  <span class="upcoming-inner-box-votes">').concat(_,'</span>\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class="upcoming-wrapper">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-pop">\n                <p class="upcoming-subject">Popularity</p>\n              </li>\n              <li class="upcoming-item-pop-num">\n                <p class="upcoming-famous">').concat(i.toFixed(1),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-genre">\n                <p class="upcoming-subject">Genre</p>\n              </li>\n              <li class="upcoming-item-genre-num">\n                <p class="upcoming-janres">').concat(q,'</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n    \n        <h3 class="upcoming-caption">About</h3>\n        <p class="upcoming-description">\n          ').concat(r,'\n        </p>\n        <div class="library-btn-upcoming" data-library-btn-upcoming>\n          ').concat(d("btn btn-filled",S),"\n        </div>\n      </div>\n    </div>")}x=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("8nydb");var S=c("gNR05");function q(n,e,t){(0,S.removeMovieFromLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),c=d(n,e);a.innerHTML=c,document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){L(n,e,t)}),{once:!0})}var R=c("kyEhf");function L(n,e,t){(0,R.addMovieToLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),c=d(n,e);a.innerHTML=c,document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){q(n,e,t)}),{once:!0})}function A(n,e,t,a){n?document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){L(e,t,a)}),{once:!0}):document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){q(e,t,a)}),{once:!0})}var C=document.querySelector(".js-upcomming-cards"),F=document.querySelector(".js-upcomming-default");function k(){return(k=n(r)(n(i).mark((function e(){var t,a,c,r,s;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchUpcomingThisMonth)();case 3:t=n.sent,a=t.results,c=a[Math.floor(Math.random()*a.length)],(r=document.querySelector("[data-upcoming]")).innerHTML=_(c),s=r.innerHTML.includes("Add to library"),"btn btn-filled",A(s,"btn btn-filled",c.id,c),n.next=22;break;case 13:if(n.prev=13,n.t0=n.catch(0),console.error(n.t0.message),C.classList.add("visually-hidden"),F.setAttribute("data-shown",!0),"true"!==O.getAttribute("data-shown")){n.next=21;break}return O.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 21:F.classList.remove("visually-hidden");case 22:case"end":return n.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){k.apply(this,arguments)}();var j=document.querySelector("[data-weekly-trends-list]"),N=document.querySelector(".js-weekly-trends-cards"),O=document.querySelector(".js-weekly-trends-default"),U=window.innerWidth<768?1:3;function J(){return(J=n(r)(n(i).mark((function e(){var t,a,c;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchWeekTrends)();case 3:t=n.sent,a=t.results.slice(0,U),c=(0,s.generateMovieCardsMarkup)(a),j.innerHTML=c,j.addEventListener("click",l.onMovieCardClick),n.next=19;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.error(n.t0.message),N.classList.add("visually-hidden"),O.setAttribute("data-shown",!0),"true"!==F.getAttribute("data-shown")){n.next=18;break}return F.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 18:O.classList.remove("visually-hidden");case 19:case"end":return n.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){J.apply(this,arguments)}(),c("7hKzD"),(0,c("9qBU4").setGenresToSS)(),document.querySelectorAll("[data-header-home]").forEach((function(n){return n.classList.add("js-current")}))}();
//# sourceMappingURL=index.96155e1d.js.map
