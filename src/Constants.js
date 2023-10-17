import CRUD from "./Assets/Projects/CRUD .png";
import YOUTUBECLONE from "./Assets/Projects/YoutubeClone.png";
import SHORTEN_URL from "./Assets/Projects/ShortenURL.png";
import DIET_APP from "./Assets/Projects/Diet Application.png";
import NODE_EXPRESS_JS from "./Assets/Projects/nodeexpressjs.webp";

export const PROJECTS = [
  {
    image: CRUD,
    name: "Library Management Using CRUD",
    technologyUsed: "CRUD refers to the major operations which are implemented by databases",
    description: "CRUD is used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.",
    urls: [
      {
        label: "View Project",
        url: "https://github.com/gsivabalan/Library-react-task",
      }
    ]
  },
  {
    image: YOUTUBECLONE,
    name: "Clone Youtube",
    technologyUsed: "Auth, API_sample_requests, Javascript, HTML",
    description: "YouTube clone is a web application or platform that replicates some of the core features and functionality of the popular video-sharing website",
    urls: [
      {
        label: "View Project",
        url: "https://github.com/gsivabalan/first-webcode-task",
      }
    ]
  },
  {
    image: SHORTEN_URL,
    name: "Shorten URL",
    technologyUsed: "JWT, Javascript, Custom middleware, authorization, frontend-backend connectivity, node.js",
    description: "This is achieved by using a redirect which links to the web page that technique on the World Wide Web in which a Uniform Resource Locator may be made substantially shorter and still direct to the long URL",
    urls: [
      {
        label: "Frontend",
        url: "https://github.com/gsivabalan/URLshortener-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/gsivabalan/URLshortener-backend",
      }
    ]
  },
  {
    image: DIET_APP,
    name: "Diet App",
    technologyUsed: "Reactjs, Nodejs, monogoDB",
    description: "web application designed to provide users with personalized dietary recommendations and meal plans based on their individual health and fitness goals.",
    urls: [
      {
        label: "Frontend",
        url: "https://github.com/gsivabalan/Front-end-Diet-suggestion-app",
      },
      {
        label: "Backend",
        url: "https://github.com/gsivabalan/Back-end-Diet-suggestion-app",
      }
    ]
  },
  {
    image: NODE_EXPRESS_JS,
    name: "API for hall booking application",
    technologyUsed: "API methods- GET, POST, PUT, DELETE, Nodejs",
    description: "Hall Listings, Booking Management, Availability Checking, Pricing, and Payment",
    urls: [
      {
        label: "View Project",
        url: "https://github.com/gsivabalan/Node-hallticket",
      }
    ]
  },
];


export const SKILLS = [
  { name: "ReactJs", initialRating: 3 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Redux", initialRating: 3 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Github", "Chrome DevTools", "Npm (Node Package Manager)",  "netlify", "Postman", "Mongodb"]
