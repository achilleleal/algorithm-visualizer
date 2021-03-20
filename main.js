import './style.css'

import selectionSort from './src/selectionSort'

const view = document.getElementById("visualizer");
let currentArray, viewItems;

document.getElementById("arrGenBtn").addEventListener('click', () => currentArray = genRandArr())

document.getElementById("selectionSortBtn").addEventListener('click', () => selectionSort(currentArray, viewItems))

function genRandArr() {

  view.innerHTML = '';

  const array = [];
  const arrLen = 750;

  for (let i = 0; i < arrLen; i++) {
    array.push(Math.random() * 500);
  }

  array.forEach((i) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${i}px`;

    view.appendChild(bar)
  })

  viewItems = view.children
  return array
}