function generateModalTrailerMarkup(key) {
  return `<div class="trailer-iframe">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${key}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>`;
}

export { generateModalTrailerMarkup };