const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', handleStartChengeColor);
stopBtnEl.addEventListener('click', handleStopChengeColor);

let isForIntervalClear;

function handleStartChengeColor(e) {
  chengeColorBody();
  addAtrebuteDisabledBtn(e);
  isForIntervalClear = true;
}

function handleStopChengeColor(e) {
  addAtrebuteDisabledBtn(e);
  isForIntervalClear = false;
}

function addAtrebuteDisabledBtn(e) {
  const isDisabledBtn = document.querySelector('[disabled]');

  if (isDisabledBtn) {
    isDisabledBtn.disabled = false;
  }

  e.target.disabled = true;
}

function chengeColorBody() {
  const setIntervalChenge = setInterval(() => {
    if (!isForIntervalClear) {
      clearInterval(setIntervalChenge);
      return;
    }
    bodyEl.style.background = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
