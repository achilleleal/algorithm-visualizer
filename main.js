import './style.css'

import SelectionSort from './src/selectionSort'

const view = document.getElementById("visualizer");
const selectSortBtn = document.getElementById("selectionSortBtn");
const viewItems = view.children;
let currentArray;

const SelectSort = new SelectionSort(viewItems)

document.getElementById("arrGenBtn").addEventListener('click', () => currentArray = genRandArr())

selectSortBtn.addEventListener('click', () => SelectSort.run(currentArray))

function genRandArr() {

  view.innerHTML = '';

  const array = [];
  const arrLen = 500;

  for (let i = 0; i < arrLen; i++) {
    array.push(Math.random() * 500);
  }

  array.forEach((i) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${i}px`;

    view.appendChild(bar)
  })

  return array
}