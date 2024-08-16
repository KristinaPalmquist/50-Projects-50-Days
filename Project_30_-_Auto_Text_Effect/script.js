const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const inputTextEl = document.getElementById('inputText');

let text = 'We Love Programming';

let idx = 1;
let speed = 300 / speedEl.value;

// console.log(textEl);
// console.log(speedEl);
// console.log(text);
// console.log(idx);
// console.log(speed);

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

inputTextEl.addEventListener('input', (e) => {
  text = e.target.value;
});

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
