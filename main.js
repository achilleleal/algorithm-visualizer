import './style.css'

const view = document.getElementById("visualizer");

document.getElementById("arrGenBtn").addEventListener('click', genRandArr)

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
    console.log(parseInt(bar.style.height))

    view.appendChild(bar)
  })

  return array
}