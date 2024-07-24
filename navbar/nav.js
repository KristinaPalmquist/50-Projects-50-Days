// // fetch('nav.html')
// //   .then((res) => res.text())
// //   .then((text) => {
// //     let oldEle
// m = document.querySelector('script#replace_with_navbar');
// //     let newElem = document.createElement('div');
// //     newElem.innerHTML = text;
// //     oldElem.parentNode.replaceChild(newElem, oldElem);
// //   });

// const topnav = document.getElementsByClassName('topnav');

// const projects = [
//   {
//     id: '01',
//     name: 'Expanding Cards',
//     path: `./Project_01_-_Expanding_Cards`,
//   },
//   {
//     id: '02',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '03',
//     name: 'Progress Steps',
//     path: `./Project_03_-_Progress_Steps`,
//   },
//   {
//     id: '04',
//     name: 'Progress Steps',
//     path: `./Project_04_-_Progress_Steps`,
//   },
//   {
//     id: '05',
//     name: 'Progress Steps',
//     path: `./Project_05_-_Progress_Steps`,
//   },
//   {
//     id: '06',
//     name: 'Progress Steps',
//     path: `./Project_06_-_Progress_Steps`,
//   },
//   {
//     id: '07',
//     name: 'Progress Steps',
//     path: `./Project_07_-_Progress_Steps`,
//   },
//   {
//     id: '08',
//     name: 'Progress Steps',
//     path: `./Project_08_-_Progress_Steps`,
//   },
//   {
//     id: '09',
//     name: 'Progress Steps',
//     path: `./Project_09_-_Progress_Steps`,
//   },
//   {
//     id: '10',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '11',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '12',
//     name: 'Progress Steps',
//     path: `./Project_12_-_Progress_Steps`,
//   },
//   {
//     id: '13',
//     name: 'Progress Steps',
//     path: `./Project_13_-_Progress_Steps`,
//   },
//   {
//     id: '14',
//     name: 'Progress Steps',
//     path: `./Project_14_-_Progress_Steps`,
//   },
//   {
//     id: '15',
//     name: 'Progress Steps',
//     path: `./Project_15_-_Progress_Steps`,
//   },
//   {
//     id: '16',
//     name: 'Progress Steps',
//     path: `./Project_16_-_Progress_Steps`,
//   },
//   {
//     id: '17',
//     name: 'Progress Steps',
//     path: `./Project_17_-_Progress_Steps`,
//   },
//   {
//     id: '18',
//     name: 'Progress Steps',
//     path: `./Project_18_-_Progress_Steps`,
//   },
//   {
//     id: '19',
//     name: 'Theme Clock',
//     path: `./Project_19_-_Theme_Clock`,
//   },
//   {
//     id: '20',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '21',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '22',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '23',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '24',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '25',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '26',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '27',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
//   {
//     id: '28',
//     name: 'Progress Steps',
//     path: `./Project_02_-_Progress_Steps`,
//   },
// ];

// // showProjects(projects);

// function showProjects(projs) {
//   // console.log(projects);
//   topnav.innerHTML = '';
//   // console.log(topnav);
//   projs.forEach((project) => {
//     // console.log(project);
//     const { id, name, path } = project;
//     // console.log(id, name, path);
//     const projectEl = document.createElement('a');
//     projectEl.href = path;
//     projectEl.innerHTML = `
//         ${id}
//         <span> ${name}</span>
//         `;
//     console.log(projectEl);
//     topnav.appendChild(projectEl);
//   });
// }
