const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

let intervalID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const startchangeColor = function () {
  refs.startBtn.disabled = true;
  if (intervalID === null) {
    intervalID = setInterval(() => {
      let index = randomIntegerFromInterval(0, colors.length - 1);
     refs.body.style.backgroundColor = colors[index];
    }, 1000);
    }
    refs.stopBtn.disabled = false;
};

const stopChangeColor = function () {
  refs.startBtn.disabled = false;
    clearInterval(intervalID);
    intervalID = null;
    refs.stopBtn.disabled = true;
};

refs.startBtn.addEventListener('click', startchangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);