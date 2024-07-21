import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.img-list'),
  imgList: document.querySelector('.img-item'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  refs.list.innerHTML = '';
  const query = e.target.elements.searchInput.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please type your request!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconColor: '#fff',
      messageColor: '#fff',
      titleColor: '#fff',
    });
    return;
  }
  e.target.reset();
  refs.loader.classList.remove('visually-hidden');

  const res = fetchImages(query)
    .then(qRes => {
      if (qRes.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          iconColor: '#fff',
          messageColor: '#fff',
          titleColor: '#fff',
        });
        refs.loader.classList.add('visually-hidden');
        return '';
      }

      return renderImages(qRes);
    })
    .then()
    .then(markup => {
      if (markup) {
        refs.list.innerHTML = markup;
        refs.loader.classList.add('visually-hidden');
        new SimpleLightbox('.img-list a', {
          captionsData: 'alt',
          captionDelay: 250,
        }).refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Sorry, something went wrong: ${error.message}`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconColor: '#fff',
        messageColor: '#fff',
        titleColor: '#fff',
      });
    });
}
