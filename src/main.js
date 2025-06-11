import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

function getIziToastErrorOptions(message) {
  return {
    icon: 'fa-solid fa-circle-exclamation',
    iconColor: 'white',
    message: `${message}`,
    messageColor: 'white',
    position: 'topRight',
    timeout: 3000,
    color: '#EF4040',
    maxWidth: '432px',
  };
}

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;
  const searchedQuery = searchForm.elements.query.value.trim();

  if (!searchedQuery) {
    iziToast.show(getIziToastErrorOptions('Please enter a search query!'));
    return;
  }

  clearGallery();
  showLoader();

  fetchPhotosByQuery(searchedQuery)
    .finally(() => {
      hideLoader();
    })
    .then(images => {
      if (!images.length) {
        iziToast.show(
          getIziToastErrorOptions(
            'Sorry, there are no images matching your search query. Please try again!'
          )
        );
        return;
      }

      renderGallery(images);
    })
    .catch(err => {
      iziToast.show(
        getIziToastErrorOptions('Something went wrong. Please try again later.')
      );
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
