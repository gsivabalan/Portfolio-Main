import CRUD from "./Assets/Projects/CRUD .png";
import YOUTUBECLONE from "./Assets/Projects/YoutubeClone.png";
import MONEY_MANAGER from "./Assets/Projects/MoneyManager.jpg";
import DIET_APP from "./Assets/Projects/Diet Application.png";
import NODE_EXPRESS_JS from "./Assets/Projects/nodeexpressjs.webp";

export const PROJECTS = [
  
  {
    image: YOUTUBECLONE,
    name: "Clone Youtube",
    technologyUsed: "Auth, API_sample_requests, Javascript, HTML and CSS",
    description: "YouTube clone is a web application or platform that replicates some of the core features and functionality of the popular video-sharing website",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/gsivabalan/first-webcode-task",
      },
      {
        label: "Hosted",
        url: "https://tube-clone-219cc1.netlify.app/",
      }
    ]
  },
  {
    image: MONEY_MANAGER,
    name: "Money Manager",
    technologyUsed: " Javascript, authentication , authorization, frontend-backend connectivity",
    description: "A money manager application is a digital tool that simplifies the process of managing your finances. It helps you keep track of your money, make informed financial decisions, and work toward your financial goals.",
    links: [
      {
        label: "GitHub FE",
        url: "https://github.com/gsivabalan/Frontend-Money-Manager",
      },
      {
        label: "GitHub BE",
        url: "https://github.com/gsivabalan/Backend-Money-Manager",
      },
      {
        label: "Hosted",
        url: "https://frontend-moneymanager-0dc6ee.netlify.app/",
      }
    ]
  },
  {
    image: DIET_APP,
    name: "Diet App",
    technologyUsed: "authentication ,Reactjs, Nodejs, monogoDB",
    description: "web application designed to provide users with personalized dietary recommendations and meal plans based on their individual health and fitness goals.",
    links: [
      {
        label: "GitHub FE",
        url: "https://github.com/gsivabalan/Front-end-Diet-suggestion-app",
      },
      {
        label: "GitHub FE",
        url: "https://github.com/gsivabalan/Back-end-Diet-suggestion-app",
      },
      {
        label: "Hosted",
        url: "https://front-end-diet-suggestion-app.netlify.app/",
      }
    ]
  },
  {
    image: CRUD,
    name: "Library Management Using CRUD",
    technologyUsed: "CRUD refers to the major operations which are implemented by databases",
    description: "CRUD is used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/gsivabalan/Library-react-task",
      },
      {
        label: "Hosted",
        url: "https://sunny-gingersnap-e52a59.netlify.app/",
      }
    ]
  },  
  {
    image: NODE_EXPRESS_JS,
    name: "API for hall booking application",
    technologyUsed: "API methods- GET, POST, PUT, DELETE, Nodejs",
    description: "Hall Listings, Booking Management, Availability Checking, Pricing, and Payment",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/gsivabalan/Node-hallticket",
      },
      
    ]
  },
];


export const SKILLS = [
  
  { name: "JavaScript", initialRating: 4 },
  { name: "ReactJs", initialRating: 3 },
  { name: "Html5", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Bootstarp", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  
];

export const TOOLS = ["Visual Studio Code", "Github", "Chrome DevTools", "Npm (Node Package Manager)",  "netlify", "Postman", "Mongodb"]