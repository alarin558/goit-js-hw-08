function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.disabled = true;

function onStartBtnClick (event) {
  event.target.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onStopBtnClick (event) {
  clearInterval(intervalId);
  event.target.disabled = true;
  startBtn.disabled = false;
}
