import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: "Reid Fuhrman",
  subtitle:
    "I'm a self-taught web developer who has a passion for learning to and building beautiful, useful things.",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "project.jpg",
    title: "FreeCodeCamp Nashville Website",
    info: "The official website of the FreeCodeCamp Nashville community",
    info2: "",
    url: "https://fcc-nashville.netlify.app/",
    repo: "https://github.com/nashvillefcc/", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "screenshot1.jpg",
    title: "React Games List",
    info: "React Games List is a full realization of a previous project games-list-app and is inspired by MyAnimeList. You can search from a database of games, add the ones you have played to your own personal list, and rate them from 1 to 10. React Games List was built with React and Tailwind, and hosted with Firebase.",
    info2: "",
    url: "https://react-games-list.web.app/",
    repo: "https://github.com/rjfuhrman42/react-games-list", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "lift-tracker.jpg",
    title: "Lift Tracker",
    info: "",
    info2: "",
    url: "https://lift-tracker-99bdc.web.app/",
    repo: "https://github.com/rjfuhrman42/lift-tracker", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "",
    },
    {
      id: nanoid(),
      name: "github",
      url: "",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
