import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Reid Fuhrman | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to Reid Fuhrmans's personal portfolio", // e.g: Welcome to my website
};

// NAVBAR DATA

export const navbarData = {
  navlinks: [
    {
      name: 'Projects',
      link: '/#projects',
      id: nanoid(),
    },
    {
      name: 'About',
      link: '/#about',
      id: nanoid(),
    },
    {
      name: 'Contact',
      link: '/#contact',
      id: nanoid(),
    },
  ],
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Reid Fuhrman',
  subtitle:
    "I'm a self-taught web developer with a passion for learning and building beautiful, useful things on the web.",
  cta: '',
  img: 'planet.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'reid-small.jpg',
  paragraphOne:
    "Hey there! I'm a Computer Scientist at Robins Air Force Base where I am currently involved in independent verification and validation of software documentation and testing.",
  paragraphTwo:
    'By night I practice web development, building personal projects, as well as getting involved and contributing to community projects, most recently being the FreeCodeCamp Nashville Chapter. I love creating websites that are beautiful, functional, and accessible to all. My skills primarily lie in Front-end Development, but I seek involvement in all aspects of development with the goal to be a Full-stack Developer',
  paragraphThree:
    ' Outside of development I love to skateboard, cook Asian cuisine, and go backpacking.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'freecodecamp2.jpg',
    title: 'FreeCodeCamp Nashville Website',
    info: 'The official website of the FreeCodeCamp Nashville Chapter where I am part of the team who developed it!',
    info2: '',
    url: 'https://www.nashvillefcc.com/',
    repo: 'https://github.com/nashvillefcc/nashvillefcc2020website', // if no repo, the button will not show up
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
    img: 'memory-game.jpg',
    title: 'Danganronpa 2 Themed Memory Game',
    info: 'Test your memory with this fanmade danganronpa 2 themed card flipping game! Match all 36 cards to win!',
    info2: '',
    url: 'https://dangan2-memory-game.web.app/',
    repo: 'https://github.com/rjfuhrman42/danganronpa2-memory-card-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lift-tracker.jpg',
    title: 'Lift Tracker',
    info: 'A web app for searching excerises and tracking which ones you did, or will do, on a personal calendar.',
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
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/ReidFuhrman',
    },
    {
      id: nanoid(),
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/reid-fuhrman-73324b180/',
    },
    {
      id: nanoid(),
      name: 'Github',
      icon: 'github',
      url: 'https://github.com/rjfuhrman42',
    },
    {
      id: nanoid(),
      name: 'Codepen',
      icon: 'codepen',
      url: 'https://codepen.io/reidjf',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
