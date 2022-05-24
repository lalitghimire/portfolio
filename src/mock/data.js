import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lalit Ghimire - Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lalit Ghimire',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'lalit.jpg',
  paragraphOne:
    'An aspiring full stack developer based in Helsinki, Finland. I have been learning and practising modern web development technologies. The tools and technolgies, I am focused are listed below  ',
  paragraphTwo: 'Frontend - React, Redux',
  paragraphThree: 'Backend - Node, Express, MongoDB, MySql, REST',
  paragraphFour: 'Cloud/DevOps - Docker, Git, Python/Bash Scripting, AWS ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mycontacts.jpg',
    title: 'My contacts',
    info: ' A fullstack application where a user can add, update and delete contact information like name, email, phone number, address and an image. The information is stored in database. User can search by name among contacts.',
    info2: 'React, Redux-tookit,  Node,  Express, MongoDB ',
    url: '',
    repo: 'https://github.com/lalitghimire/contacts-directory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'githubproj.png',
    title: 'Github repositories list',
    info: ' A react app to display all the public Github repositories and their link of a given username.',
    info2: 'React, Github API',
    url: 'https://githubuser-repo.herokuapp.com/',
    repo: 'https://github.com/lalitghimire/githubUserSearch', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dbroker.png',
    title: 'Assignment from Dream Broker',
    info: 'My implementation for the task assignment from the Dream Broker Oy website',
    info2: 'Nodejs, Express, REST',
    url: 'https://dbrcodetask.herokuapp.com/',
    repo: 'https://github.com/lalitghimire/dreamBrokerAssignment', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iotproj1.png',
    title: 'Weather station with ESP32 IoT board',
    info: 'A project with esp32 development board which is programmed with micropython to send measured data from the sensors connected to a cloud platform. The cloud platform, asksensors.com allows different visualization of the data. The program is also able to get data from openweather API, parse it and sends it to cloud platform for visualization',
    info2: 'MicroPython, Sensors, IoT, API ',
    url: '',
    repo: 'https://github.com/lalitghimire/Esp32_Iot_project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If my profile matches any position in your mind, please do let me know.',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
