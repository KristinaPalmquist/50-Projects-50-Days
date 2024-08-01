const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img
              src="./assets/old-book-6362421_1280.jpg"
              alt="Old book with flower"
            />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro!`;
  profile_img.innerHTML = `<img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Woman"
                />`;
  nameEl.innerHTML = `Jonna Svensson`;
  date.innerHTML = `Aug 01, 2024`;

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
