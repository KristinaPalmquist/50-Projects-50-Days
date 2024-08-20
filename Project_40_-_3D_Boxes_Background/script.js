const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

// const boxes = document.getElementById('boxes');
// const magicBtn = document.getElementById('btn');

// const width = 500;

// const positions = [
//   (-width / 4) * 0,
//   (-width / 4) * 1,
//   (-width / 4) * 2,
//   (-width / 4) * 3,
// ];

// magicBtn.addEventListener('click', () => {
//   boxes.classList.toggle('big');
// });

// for (let i = 0; i < positions.length; i++) {
//   for (let j = 0; j < positions.length; j++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     box.style.backgroundPosition = `${positions[j]}px ${positions[i]}px`;

//     boxes.appendChild(box);
//   }
// }
