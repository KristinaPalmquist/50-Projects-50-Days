const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ea5f89a2f3da65b1662a18e200a1446&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

let key = '';

fetch('./assets/apiKey.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => (key = data.api_key))
  .catch((error) => console.error('Unable to fetch data:', error));

const SEARCH_API = `
  https://api.themoviedb.org/3/search/movie?api_key=${key}"`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = ` 
        <img
        src="${IMG_PATH + poster_path}"
        alt="movie poster ${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${
      Math.round(vote_average * 10) / 10
    }</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm != '') {
    getMovies(SEARCH_API + searchTerm);
    console.log(getMovies(SEARCH_API + searchTerm));
    search.value = '';
  } else {
    window.location.reload();
  }
});
