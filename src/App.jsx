import './App.css'
import Navbar from "./NavBar/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import example from './assets/example.png';
import Technologies from "./pages/Technologies/Technologies.tsx";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";

const projects = [
  { title: 'PROJECT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example},
  { title: 'PROJECT 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
  { title: 'A bit longer title for 3rd project', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
  { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
  { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
  { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
  { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
];

const technologies = [
  { name: 'Html', level: 'Advanced', width: '80%' },
  { name: 'CSS, Sass & Bootstrap', level: 'Advanced', width: '75%' },
  { name: 'JavaScript, TypeScript, JQuery', level: 'Advanced', width: '75%' },
  { name: 'UI design in Figma', level: 'Regular', width: '60%' },
  { name: 'Angular', level: 'Beginner', width: '50%' },
  { name: 'React', level: 'Beginner', width: '45%' },
  { name: 'React Native', level: 'Beginner', width: '40%' },
];

const additionalSkills = [
  'Git', 'Quick learning', 'RWD', 'Wordpress', 'Engagement', 'Teamwork', 'B2 english'
];


function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
    </>
  )
}

export default App
