import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elems = {
  delayEl: document.querySelector('input[name="delay"]'),
  radioEls: document.querySelectorAll('input[name="state"]'),
  buttonEl: document.querySelector('button[type="submit"]'),
};

let delay = 0;
let state = '';

elems.delayEl.addEventListener('input', () => {
  delay = parseInt(elems.delayEl.value);
  console.log(delay);
});

elems.radioEls.forEach(radioEl => {
  radioEl.addEventListener('change', () => {
    state = radioEl.value;
    console.log(state);
  });
});

elems.buttonEl.addEventListener('click', event => {
  event.preventDefault();
  runPromise();
});

function runPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        iziToast.show({
          title: '✅ OK',
          messageColor: '#fff',
          titleColor: '#fff',
          backgroundColor: '#23c04a',
          message: `Fulfilled promise in ${delay}ms`,
        });
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        iziToast.show({
          title: '❌ Error',
          messageColor: '#fff',
          titleColor: '#fff',
          backgroundColor: '#fb6464',
          message: `Rejected promise in ${delay}ms`,
        });
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
