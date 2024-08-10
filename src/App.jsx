import './App.css'
import Navbar from "./NavBar/Navbar.tsx";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>Portfolio</title>
      <meta name="description"
            content="Portfolio of software engineer, web developer, and full-stack developer, Thijs Verkade."/>
    </Helmet>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <p>&copy; 2024 IT-Solutions by Thijs. All rights reserved.</p>
    </footer>
</>
)
}

export default App
