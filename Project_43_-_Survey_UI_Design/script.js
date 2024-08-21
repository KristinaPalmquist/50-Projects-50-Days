const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let reloadBtn = '';

let selectedRating = 'Satisfied';

// ratings.forEach(rating => rating.addEventListener('click', () => {}))

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerText;
  } else if (e.target.classList.contains('rating')) {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.children[1].innerText;
  }
  console.log(selectedRating);
});

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank you!</strong> 
  <br>
  <strong>Feedback: ${selectedRating} </strong>
  <p>We will use your feedback to improve our customer support.</p>
  <button class="btn"  id="reload">Reload page</button>
  `;
  reloadBtn = document.querySelector('#reload');
  addBackBtn();
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

function addBackBtn() {
  reloadBtn.addEventListener('click', () => {
    location.reload();
  });
}
