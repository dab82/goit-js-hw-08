import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
            alt="${description}"/></a>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

const forOpenLightbox = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery__link', forOpenLightbox);
