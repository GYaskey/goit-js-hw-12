import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import axios from 'axios';
import { emptyQueryErr, globalErr, noImgFoundErr } from './js/iziToastErrors';

export const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.img-list'),
  imgList: document.querySelector('.img-item'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.js-btn-load-more'),
};

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  refs.list.innerHTML = '';
  const query = e.target.elements.searchInput.value.trim();
  if (query === '') return emptyQueryErr();

  e.target.reset();
  refs.loader.classList.remove('visually-hidden');

  try {
    const qRes = await fetchImages(query);
    console.log(qRes);
    if (qRes.hits.length === 0) {
      noImgFoundErr();
      refs.loader.classList.add('visually-hidden');
      return '';
    }

    const markup = renderImages(qRes);
    refs.list.innerHTML = markup;
    refs.loader.classList.add('visually-hidden');
    showLoadMoreBtn(); //!===================== продовжити функцію
    new SimpleLightbox('.img-list a', {
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();
  } catch (error) {
    globalErr(error);
  }
}

//?=======================================================================

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('visually-hidden');
}

refs.btnLoadMore.addEventListener('click', onLoadBtnClick);

async function onLoadBtnClick() {}
