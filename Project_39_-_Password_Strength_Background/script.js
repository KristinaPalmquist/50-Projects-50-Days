const background = document.getElementById('background');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');

passwordEl.addEventListener('input', (e) => {
  if (validateEmail()) {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
  }
});

function validateEmail() {
  return /^\S+@\S+\.\S+$/.test(emailEl.value);
}

// check number, symbols, uppercase, lowercase etc.
