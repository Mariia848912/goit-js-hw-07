import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
// // Вариант 1
// galleryRef.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   const modal = basicLightbox.create(
//     `
//      		<img width="1400" height="900" src="${evt.target.dataset.source}">
//      	`
//   );
//   modal.show();

//   window.addEventListener("keydown", onCloseModal);
//   function onCloseModal(event) {
//     console.log(event.code);
//     const ESC_KEY_CODE = "Escape";
//     if (event.code === ESC_KEY_CODE) {
//       modal.close();
//       window.removeEventListener("keydown", onCloseModal);
//     }
//   }
// });

// Вариант 2
galleryRef.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openModal(evt.target.dataset.source);
  window.addEventListener("keydown", OnEscPress);
});

function openModal(params) {
  basicLightbox
    .create(
      `
  		<img width="1400" height="900" src="${params}">
  	`
    )
    .show();
}

function onCloseModalEsc() {
  const modalRef = document.querySelector(".basicLightbox");
  window.removeEventListener("keydown", OnEscPress);
  modalRef.classList.remove("basicLightbox--img");
  modalRef.classList.remove("basicLightbox--visible");
}
function OnEscPress(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    onCloseModalEsc();
  }
}
