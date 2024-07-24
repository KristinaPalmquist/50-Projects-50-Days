// fetch('nav.html')
//   .then((res) => res.text())
//   .then((text) => {
//     let oldEle
m = document.querySelector('script#replace_with_navbar');
//     let newElem = document.createElement('div');
//     newElem.innerHTML = text;
//     oldElem.parentNode.replaceChild(newElem, oldElem);
//   });

const topnav = document.querySelector('.topnav');

const projects = [
  {
    id: '01',
    name: 'Expanding Cards',
    path: `../Project_01_-_Expanding_Cards`,
  },
  {
    id: '02',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '03',
    name: 'Rotating Navigation',
    path: `../Project_03_-_Rotating_Navigation`,
  },
  {
    id: '04',
    name: 'Hidden Search',
    path: `../Project_04_-_Hidden_Search`,
  },
  {
    id: '05',
    name: 'Blurry Loading',
    path: `../Project_05_-_Blurry_Loading`,
  },
  {
    id: '06',
    name: 'Scroll Animation',
    path: `../Project_06_-_Scroll_Animation`,
  },
  {
    id: '07',
    name: 'Split Landing Page',
    path: `../Project_07_-_Split_Landing_Page`,
  },
  {
    id: '08',
    name: 'Progress Steps',
    path: `../Project_08_-_Progress_Steps`,
  },
  {
    id: '09',
    name: 'Progress Steps',
    path: `../Project_09_-_Progress_Steps`,
  },
  {
    id: '10',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '11',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '12',
    name: 'Progress Steps',
    path: `../Project_12_-_Progress_Steps`,
  },
  {
    id: '13',
    name: 'Progress Steps',
    path: `../Project_13_-_Progress_Steps`,
  },
  {
    id: '14',
    name: 'Animated Navigation',
    path: `../Project_14_-_Animated_Navigation`,
  },
  {
    id: '15',
    name: 'Incrementing Counter',
    path: `../Project_15_-_Incrementing_Counter`,
  },
  {
    id: '16',
    name: 'Drink Water',
    path: `../Project_16_-_Drink_Water`,
  },
  {
    id: '17',
    name: 'Movie App',
    path: `../Project_17_-_Movie_App`,
  },
  {
    id: '18',
    name: 'Background Slider',
    path: `../Project_18_-_Background_Slider`,
  },
  {
    id: '19',
    name: 'Theme Clock',
    path: `../Project_19_-_Theme_Clock`,
  },
  {
    id: '20',
    name: 'Button Ripple Effect',
    path: `../Project_20_-_Button_Ripple_Effect`,
  },
  {
    id: '21',
    name: 'Drag n Drop',
    path: `../Project_21_-_Drag_n_Drop`,
  },
  {
    id: '22',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '23',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '24',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '25',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '26',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '27',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
  {
    id: '28',
    name: 'Progress Steps',
    path: `../Project_02_-_Progress_Steps`,
  },
];

showProjects(projects);

function showProjects(projs) {
  topnav.innerHTML = '';
  projs.forEach((project) => {
    const { id, name, path } = project;
    const projectEl = document.createElement('a');
    projectEl.href = path;
    projectEl.innerHTML = `
        ${id}
        <span> ${name}</span>
        `;
    topnav.appendChild(projectEl);
  });
}
