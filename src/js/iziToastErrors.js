import iziToast from 'izitoast';

export function emptyQueryErr() {
  iziToast.error({
    title: 'Error',
    message: 'Please type your request!',
    position: 'topRight',
    backgroundColor: '#EF4040',
    iconColor: '#fff',
    messageColor: '#fff',
    titleColor: '#fff',
  });
}

export function noImgFoundErr() {
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
}

export function globalErr(error) {
  iziToast.error({
    title: 'Error',
    message: `Sorry, something went wrong: ${error.message}`,
    position: 'topRight',
    backgroundColor: '#EF4040',
    iconColor: '#fff',
    messageColor: '#fff',
    titleColor: '#fff',
  });
}
