const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
  console.log('mouseenter hover left');
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  console.log('mouseleave hover left');
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  console.log('mouseenter hover right');
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  console.log('mouseleave hover right');
  container.classList.remove('hover-right');
});
