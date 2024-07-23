import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import axios from 'axios';
import {
  emptyQueryErr,
  globalErr,
  noImgFoundErr,
  noMoreImg,
} from './js/iziToastErrors';

export const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.img-list'),
  imgItem: document.querySelector('.img-item'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.js-btn-load-more'),
  spinner: document.querySelector('.js-spinner'),
};

refs.form.addEventListener('submit', onFormSubmit);
let query = '';
let currentPage = 1;
let maxPage = null;
const perPage = 15;

async function onFormSubmit(e) {
  e.preventDefault();
  currentPage = 1;
  refs.list.innerHTML = '';
  query = e.target.elements.searchInput.value.trim();
  if (query === '') {
    emptyQueryErr();
    hideLoadMoreBtn();
    return;
  }

  e.target.reset();
  refs.loader.classList.remove('visually-hidden');

  try {
    const qRes = await fetchImages(query, currentPage);
    maxPage = Math.ceil(qRes.totalHits / perPage);
    if (qRes.hits.length === 0) {
      hideLoadMoreBtn();
      noImgFoundErr();
      refs.loader.classList.add('visually-hidden');
      return '';
    }

    const markup = renderImages(qRes);
    refs.list.innerHTML = markup;
    refs.loader.classList.add('visually-hidden');
    checkBtnStatus();
    lightbox.refresh();
  } catch (error) {
    checkBtnStatus();
    globalErr(error);
  }
}

//?=======================================================================

const lightbox = new SimpleLightbox('.img-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('visually-hidden');
}

refs.btnLoadMore.addEventListener('click', onLoadBtnClick);

async function onLoadBtnClick() {
  currentPage++;
  try {
    checkBtnStatus();
    refs.spinner.classList.remove('visually-hidden');
    const qRes = await fetchImages(query, currentPage);

    if (qRes.hits.length === 0) {
      checkBtnStatus();
      noImgFoundErr();
      refs.loader.classList.add('visually-hidden');

      return '';
    }

    const markup = renderImages(qRes);
    refs.list.insertAdjacentHTML('beforeend', markup);
    scrollPage();
    refs.spinner.classList.add('visually-hidden');
    refs.loader.classList.add('visually-hidden');
    lightbox.refresh();
  } catch (error) {
    checkBtnStatus();
    globalErr(error);
  }
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMoreBtn();
    noMoreImg();
  } else {
    showLoadMoreBtn();
  }
}

function scrollPage() {
  const singleCard = refs.list.firstElementChild;
  const height = singleCard.getBoundingClientRect().height;
  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
