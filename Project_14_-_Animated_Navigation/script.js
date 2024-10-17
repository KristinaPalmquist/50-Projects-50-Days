const toggle = document.getElementById('toggle');
const nav = document.getElementById('page-nav');

toggle.addEventListener('click', () => {
  console.log('click');
  nav.classList.toggle('active');
});
