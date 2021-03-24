import './style.css'

import SelectionSort from './src/selectionSort'
import BubbleSort from './src/bubbleSort'

const view = document.getElementById("visualizer");
const selectSortBtn = document.getElementById("selectionSortBtn"),
      bubbleSortBtn = document.getElementById("bubbleSortBtn")
let currentArray, isRunning;

const SelectSrt = new SelectionSort(),
      BubbleSrt = new BubbleSort()

document.getElementById("arrGenBtn").addEventListener('click', displayArr)

selectSortBtn.addEventListener('click', () => SelectSrt.run(currentArray))
bubbleSortBtn.addEventListener('click', () => BubbleSrt.run(currentArray))

async function displayArr() {
  view.innerHTML = '';
  await new Promise(res => setTimeout(res, 1));
  currentArray = genRandArr()
}

function genRandArr() {

  const array = [];
  const arrLen = 250;

  for (let i = 0; i < arrLen; i++) {
    array.push(Math.round(Math.random() * 500));
  }

  array.forEach((i) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${i}px`;

    view.appendChild(bar)
  })

  return array
}