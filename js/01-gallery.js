import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `
     		<img src="${evt.target.dataset.source}" width="1400" height="900">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscBtn);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscBtn);
      },
    }
  );
  modal.show();
  function onEscBtn(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      modal.close();
    }
  }
}
