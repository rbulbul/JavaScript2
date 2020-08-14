'use strict';

// 1. In this week's project you'll be making a Pomodoro Clock!
// 2. A user can specify how many minutes the timer should be set,
// and with a click on the play button it starts counting down!
// 3. If the user wants to pause the timer, they can do so by clicking the pause button.
// 4. It should look like this:
// 5. If the timer is running, the user can't change the session length anymore
// 6. Use at least 3 functions
// 7. Display minutes and seconds
// 8. If the timer finishes the timer should be replaced by the message: Time's up!

// DOM elements
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const setTime = document.getElementById('set-time');
const timeLeft = document.querySelector('.time-left');
const startBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

decreaseBtn.addEventListener('click', () => {
  const currentTime = parseFloat(setTime.textContent);
  setTime.textContent = currentTime - 1;
  const getSecond = (currentTime * 60) % 60;
  const getMinute = currentTime - 1;
  timeLeft.innerHTML = `${getMinute.toString().padStart('2', 0)}: ${getSecond
    .toString()
    .padStart('2', 0)}`;
});

increaseBtn.addEventListener('click', () => {
  const currentTime = parseFloat(setTime.textContent);
  setTime.textContent = currentTime + 1;
  const getSecond = (currentTime * 60) % 60;
  const getMinute = currentTime - 1;
  timeLeft.innerHTML = `${getMinute.toString().padStart('2', 0)}: ${getSecond
    .toString()
    .padStart('2', 0)}`;
});

let startTime;

startBtn.addEventListener('click', () => {
  startBtn.style.pointerEvents = 'none';
  increaseBtn.style.pointerEvents = 'none';
  decreaseBtn.style.pointerEvents = 'none';
  startTime = setInterval(() => {
    const getTimes = timeLeft.textContent.split(':');
    const getSeconds = parseInt(getTimes[0] * 60, 10) + parseInt(getTimes[1], 10) - 1;
    if (getSeconds > 0) {
      if (getSeconds % 60 === 0) {
        getTimes[0]--;
        timeLeft.textContent = getTimes.join(':');
      }
      getTimes[0] = Math.floor(getSeconds / 60)
        .toString()
        .padStart('2', 0);
      getTimes[1] = (getSeconds % 60).toString().padStart('2', 0);
      timeLeft.textContent = getTimes.join(':');
    } else {
      clearInterval();
      timeLeft.textContent = `Time's up!`;
    }
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(startTime);
  startBtn.style.pointerEvents = 'initial';
});
