import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// NAVBAR DATA

export const navbarData = {
  navlinks: [
    {
      name: 'Hero',
      link: '/#hero',
    },
    {
      name: 'Projects',
      link: '/#projects',
    },
    {
      name: 'About',
      link: '/#about',
    },
    {
      name: 'Contact',
      link: '/#contact',
    },
  ],
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Reid Fuhrman',
  subtitle:
    "I'm a self-taught web developer who has a passion for learning to and building beautiful, useful things.",
  cta: '',
  img: 'meteor.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'reid-small.jpg',
  paragraphOne:
    'By day I work as a Computer Scientist for the United States Airforce in Warner Robins, Georgia, with day to day duties including some light web development and unit testing, as well as verification and validation of software, software tests, and live testing events. (ehhh this needs work)',
  paragraphTwo:
    'By night I practice web development, building personal projects, as well as getting involved and contributing to community projects, most recently being the FreeCodeCamp Nashville Chapter. Outside of development I love to skateboard, cook Asian cuisine, and go backpacking.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'FreeCodeCamp Nashville Website',
    info: 'The official website of the FreeCodeCamp Nashville community',
    info2: '',
    url: 'https://fcc-nashville.netlify.app/',
    repo: 'https://github.com/nashvillefcc/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'screenshot1.jpg',
    title: 'React Games List',
    info: 'React Games List is a full realization of a previous project games-list-app and is inspired by MyAnimeList. You can search from a database of games, add the ones you have played to your own personal list, and rate them from 1 to 10. React Games List was built with React and Tailwind, and hosted with Firebase.',
    info2: '',
    url: 'https://react-games-list.web.app/',
    repo: 'https://github.com/rjfuhrman42/react-games-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lift-tracker.jpg',
    title: 'Lift Tracker',
    info: '',
    info2: '',
    url: 'https://lift-tracker-99bdc.web.app/',
    repo: 'https://github.com/rjfuhrman42/lift-tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'reidjf77@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ReidFuhrman',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/reidjf',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/reid-fuhrman-73324b180/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rjfuhrman42',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
