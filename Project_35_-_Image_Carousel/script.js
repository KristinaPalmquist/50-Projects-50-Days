const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

// const prevBtn = document.getElementById('left');
// const nextBtn = document.getElementById('right');

// const nbrOfImgs = document.querySelectorAll('img').length;

// let currentImgIdx = 0;

// prevBtn.addEventListener('click', () => {
//   if (currentImgIdx === 0) {
//     currentImgIdx = nbrOfImgs.length;
//   }
//   currentImgIdx--;
//   showImage();
// });

// nextBtn.addEventListener('click', () => {
//   currentImgIdx++;
//   if (currentImgIdx === nbrOfImgs.length) {
//     currentImgIdx = 0;
//   }
//   showImage();
// });

// function showImage() {
//   let position = currentImgIdx * -500;
//   imgs.style.transform = `translateX(${position}px)`;
// }
