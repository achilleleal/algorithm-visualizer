import './style.css'

import SelectionSort from './src/selectionSort'
import BubbleSort from './src/bubbleSort'

const view = document.getElementById("visualizer");
const arrGenBtn = document.getElementById("arrGenBtn");
const algorithmBtns = Array.from(document.getElementById("algorithmBtns").children)

const algList = [
  SelectionSort, 
  BubbleSort,
]

let currentArray;

// Functions

const btnsSetDisabled = bool => algorithmBtns.forEach(btn => btn.disabled = bool)

function run(algorithm) {
  btnsSetDisabled(true)
  algorithm.run(currentArray);
}

async function displayArr() {
  btnsSetDisabled(false)
  // Stop briefly to let current algorithm stop due to error (it was the easiest way)
  await new Promise(res => setTimeout(res, 5));
  genRandArr()
}

function genRandArr() {

  view.innerHTML = '';

  currentArray = [];
  const arrLen = 250;

  for (let i = 0; i < arrLen; i++) {
    currentArray.push(Math.round(Math.random() * 500));
  }

  currentArray.forEach((i) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${i}px`;

    view.appendChild(bar)
  })
}

// Events

arrGenBtn.addEventListener('click', displayArr)

algorithmBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => run(algList[i]))
})