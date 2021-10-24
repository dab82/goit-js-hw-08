// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
	            <a class="gallery__link" href="${original}">
		            <img
			            class="gallery__image"
			            src="${preview}"
			            data-source="${original}"
			            alt="${description}"/>
	            </a>
            </div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

function openModal(currentImageUrl, currentImageAlt) {
  const modalImg = basicLightbox.create(
    `
     <div class="modal">
       <img
      class="gallery__image--large"
      src = "${currentImageUrl}"
      alt = "${currentImageAlt}"
    />
    </div>
`,
    closeModalImg,
  );

  modalImg.show();
}
const closeModalImg = {
  onShow: modalImg => {
    modalImg.element().querySelector('img').onclick = modalImg.close;
    window.addEventListener('keydown', onEscKeyPress);
    function onEscKeyPress(event) {
      if (event.code === 'Escape') {
        window.removeEventListener('keydown', onEscKeyPress);
        modalImg.close();
      }
    }
  },
};
function onGalleryContainerClick(event) {
  event.preventDefault();

  const galleryCardEl = event.target.classList.contains('gallery__image');
  if (!galleryCardEl) {
    return;
  }

  const currentImageUrl = event.target.dataset.source;
  const currentImageAlt = event.target.alt;

  openModal(currentImageUrl, currentImageAlt);
}
galleryContainer.addEventListener('click', onGalleryContainerClick);
