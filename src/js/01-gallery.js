// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';

const gallery = document.querySelector(".gallery");
const imagesMarkup = createItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createItems(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
			<a class="gallery__item" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"          
					alt="${description}"
				/>
			</a>
    	`;
        })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
    fadeSpeed: 500,
});

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
});


// i tryed