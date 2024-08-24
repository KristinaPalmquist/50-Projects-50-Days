const container = document.querySelector('.container');
const URL = 'https://picsum.photos/';
const rows = 10;
const columns = 3;

for (let i = 0; i < rows * columns; i++) {
  //   const height = getRandomSize();
  //   const width = getRandomSize();
  //   const image = document.createElement('img');
  //   image.src = `${URL}${width}/${height}`;
  //   //    URL + width + '/' + height + '/';
  //   container.appendChild(image);
  // }

  // function getRandomSize() {
  //   return Math.floor(Math.random() * 10) + 300;
  // }
  const img = document.createElement('img');
  img.src = `${URL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}/${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
