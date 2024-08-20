// fetch('nav.html')
//   .then((res) => res.text())
//   .then((text) => {
//     let oldElem = document.querySelector('script#replace_with_navbar');
//     let newElem = document.createElement('div');
//     newElem.innerHTML = text;
//     oldElem.parentNode.replaceChild(newElem, oldElem);
//   });

const topnav = document.querySelector('.topnav');

function getRootUrl() {
  return window.location.origin;
}

const projects = [
  {
    id: '01',
    name: 'Expanding Cards',
    path: `/Project_01_-_Expanding_Cards`,
  },
  {
    id: '02',
    name: 'Progress Steps',
    path: `/Project_02_-_Progress_Steps`,
  },
  {
    id: '03',
    name: 'Rotating Navigation',
    path: `/Project_03_-_Rotating_Navigation`,
  },
  {
    id: '04',
    name: 'Hidden Search',
    path: `/Project_04_-_Hidden_Search`,
  },
  {
    id: '05',
    name: 'Blurry Loading',
    path: `/Project_05_-_Blurry_Loading`,
  },
  {
    id: '06',
    name: 'Scroll Animation',
    path: `/Project_06_-_Scroll_Animation`,
  },
  {
    id: '07',
    name: 'Split Landing Page',
    path: `/Project_07_-_Split_Landing_Page`,
  },
  {
    id: '08',
    name: 'Form_Input Wave',
    path: `/Project_08_-_Form_Input_Wave`,
  },
  {
    id: '09',
    name: 'Sound Board',
    path: `/Project_09_-_Sound_Board`,
  },
  {
    id: '10',
    name: 'Dad Jokes',
    path: `/Project_02_-_Dad_Jokes`,
  },
  {
    id: '11',
    name: 'Event KeyCodes',
    path: `/Project_02_-_Event_KeyCodes`,
  },
  {
    id: '12',
    name: 'FAQ',
    path: `/Project_12_-_FAQ`,
  },
  {
    id: '13',
    name: 'Random Choice Picker',
    path: `/Project_13_-_Random_Choice_Picker`,
  },
  {
    id: '14',
    name: 'Animated Navigation',
    path: `/Project_14_-_Animated_Navigation`,
  },
  {
    id: '15',
    name: 'Incrementing Counter',
    path: `/Project_15_-_Incrementing_Counter`,
  },
  {
    id: '16',
    name: 'Drink Water',
    path: `/Project_16_-_Drink_Water`,
  },
  {
    id: '17',
    name: 'Movie App',
    path: `/Project_17_-_Movie_App`,
  },
  {
    id: '18',
    name: 'Background Slider',
    path: `/Project_18_-_Background_Slider`,
  },
  {
    id: '19',
    name: 'Theme Clock',
    path: `/Project_19_-_Theme_Clock`,
  },
  {
    id: '20',
    name: 'Button Ripple Effect',
    path: `/Project_20_-_Button_Ripple_Effect`,
  },
  {
    id: '21',
    name: 'Drag n Drop',
    path: `/Project_21_-_Drag_n_Drop`,
  },
  {
    id: '22',
    name: 'Drawing App',
    path: `/Project_22_-_Drawing_App`,
  },
  {
    id: '23',
    name: 'Kinetic Loader',
    path: `/Project_23_-_Kinetic_Loader`,
  },
  {
    id: '24',
    name: 'Content Placeholder',
    path: `/Project_24_-_Content_Placeholder`,
  },
  {
    id: '25',
    name: 'Sticky Navigation',
    path: `/Project_25_-_Sticky_Navigation`,
  },
  {
    id: '26',
    name: 'Vertical Slider',
    path: `/Project_26_-_Vertical_Slider`,
  },
  {
    id: '27',
    name: 'Toast Notification',
    path: `/Project_27_-_Toast_Notification`,
  },
  {
    id: '28',
    name: 'Github Profiles',
    path: `/Project_28_-_Github_Profiles/`,
  },
  {
    id: '29',
    name: 'Double Click Heart',
    path: `/Project_29_-_Double_Click_Heart`,
  },
  {
    id: '30',
    name: 'Auto Text Effect',
    path: `/Project_30_-_Auto_Text_Effect`,
  },
  {
    id: '31',
    name: 'Password Generator',
    path: `/Project_31_-_Password_Generator`,
  },
  {
    id: '32',
    name: 'Good, Cheap, Fast',
    path: `/Project_32_-_Good,_Cheap,_Fast`,
  },
  {
    id: '33',
    name: 'Notes App',
    path: `/Project_33_-_Notes_App`,
  },
  {
    id: '34',
    name: 'Animated Countdown',
    path: `/Project_34_-_Animated_Countdown`,
  },
  {
    id: '35',
    name: 'Image Carousel',
    path: `/Project_35_-_Image_Carousel`,
  },
  {
    id: '36',
    name: 'Hover Board',
    path: `/Project_36_-_Hover_Board`,
  },
  {
    id: '37',
    name: 'Pokedex ',
    path: `/Project_37_-_Pokedex`,
  },
  {
    id: '38',
    name: 'Mobile Tab Navigation',
    path: `/Project_38_-_Mobile_Tab_Navigation`,
  },
  {
    id: '39',
    name: 'Password Strength Background',
    path: `/Project_39_-_Password_Strength_Background`,
  },
  {
    id: '40',
    name: '3D Boxes Background',
    path: `/Project_40_-_3D_Boxes_Background`,
  },
  {
    id: '41',
    name: 'Verify Account',
    path: `/Project_41_-_Verify_Account`,
  },
  {
    id: '42',
    name: 'Progress Steps',
    path: `/Project_42_-_Progress_Steps`,
  },
  {
    id: '43',
    name: 'Progress Steps',
    path: `/Project_43_-_Progress_Steps`,
  },
  {
    id: '44',
    name: 'Progress Steps',
    path: `/Project_44_-_Progress_Steps`,
  },
  {
    id: '45',
    name: 'Progress Steps',
    path: `/Project_45_-_Progress_Steps`,
  },
  {
    id: '46',
    name: 'Progress Steps',
    path: `/Project_46_-_Progress_Steps`,
  },
  {
    id: '47',
    name: 'Progress Steps',
    path: `/Project_47_-_Progress_Steps`,
  },
  {
    id: '48',
    name: 'Progress Steps',
    path: `/Project_48_-_Progress_Steps`,
  },
  {
    id: '49',
    name: 'Progress Steps',
    path: `/Project_49_-_Progress_Steps`,
  },
  {
    id: '50',
    name: 'Progress Steps',
    path: `/Project_50_-_Progress_Steps`,
  },
];

showProjects(projects);

function showProjects(projs) {
  // console.log('topnav element: ', topnav);
  if (topnav) {
    topnav.innerHTML = '';
    const rootUrl = getRootUrl();
    // console.log(rootUrl);
    projs.forEach((project) => {
      const { id, name, path } = project;
      const projectEl = document.createElement('a');

      // console.log(rootUrl + path);
      projectEl.href = rootUrl + path;
      projectEl.innerHTML = `
        ${id}
        <span> ${name}</span>
        `;
      projectEl.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = projectEl.href;
      });
      topnav.appendChild(projectEl);
    });
  } else {
    console.log('Element .topnav not found');
  }
}
