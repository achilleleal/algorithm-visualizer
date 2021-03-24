import './style.css'

import SelectionSort from './src/selectionSort'
import BubbleSort from './src/bubbleSort'

const view = document.getElementById("visualizer");
const arrGenBtn = document.getElementById("arrGenBtn");
const algorithmBtns = document.getElementById("algorithmBtns");

const algList = [
  ["Selection Sort", SelectionSort], 
  ["Bubble Sort", BubbleSort],
];

let currentArray;

// Functions

const btnsSetDisabled = bool => Array.from(algorithmBtns.children).forEach(btn => btn.disabled = bool)

function run(algorithm) {
  btnsSetDisabled(true)
  algorithm.run(currentArray);
}

async function displayArr() {
  btnsSetDisabled(false)
  view.innerHTML = '';
  // Stop briefly to let current algorithm stop due to error (it was the easiest way)
  await new Promise(res => setTimeout(res, 1));
  genRandArr()
}

function genRandArr() {

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

algList.forEach(arr => {
  const [name, alg] = arr; 
  const btn = document.createElement('button');
  btn.innerHTML = name
  btn.addEventListener('click', () => run(alg))

  algorithmBtns.appendChild(btn)
})