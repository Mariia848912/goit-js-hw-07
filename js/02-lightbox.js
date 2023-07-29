import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
}
galleryRef.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
