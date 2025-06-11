import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const clearGallery = () => {
  gallery.innerHTML = '';
};

const createGalleryCardTemplate = ({
  tags,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${downloads}</p>
          </div>
        </div>
      </li>
    `;
};

export const renderGallery = images => {
  gallery.insertAdjacentHTML(
    'beforeend',
    images.map(image => createGalleryCardTemplate(image)).join('')
  );

  lightbox.refresh();
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};
