const codes = document.querySelectorAll('.code');

window.setTimeout(() => codes[0].focus(), 0);
// codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9 && idx !== 5) {
      codes[idx].value = '';
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace' && idx !== 0) {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
