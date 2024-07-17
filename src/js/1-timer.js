import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startButtonEl = document.querySelector('[data-start]');
const timerDaysEl = document.querySelector('[data-days]');
const timerHoursEl = document.querySelector('[data-hours]');
const timerMinutesEl = document.querySelector('[data-minutes]');
const timerSecondsEl = document.querySelector('[data-seconds]');

startButtonEl.disabled = true;
let userSelectedDate;
let countdownInterval;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      userSelectedDate = selectedDates[0];
      startButtonEl.disabled = false;
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });

      startButtonEl.disabled = true;
    }
  },
};

flatpickr(inputEl, options);

startButtonEl.addEventListener('click', startTimer);

function startTimer() {
  const endTime = userSelectedDate.getTime();

  startButtonEl.disabled = true;
  inputEl.disabled = true;

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = endTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      timerDaysEl.textContent = '00';
      timerHoursEl.textContent = '00';
      timerMinutesEl.textContent = '00';
      timerSecondsEl.textContent = '00';
      inputEl.disabled = false;
      iziToast.success({
        title: 'Success',
        message: 'Time is up!',
      });
    } else {
      const remainingTime = convertMs(timeDifference);
      updateTimer(
        remainingTime.days,
        remainingTime.hours,
        remainingTime.minutes,
        remainingTime.seconds
      );
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer(days, hours, minutes, seconds) {
  timerDaysEl.textContent = addLeadingZero(days);
  timerHoursEl.textContent = addLeadingZero(hours);
  timerMinutesEl.textContent = addLeadingZero(minutes);
  timerSecondsEl.textContent = addLeadingZero(seconds);
}
