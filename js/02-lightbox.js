import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
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
// Инициализация библиотеки +добавь отображение подписей к изображениям
// из атрибута alt.Пусть подпись будет снизу и появляется через
// 250 миллисекунд после открытия изображения.
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
