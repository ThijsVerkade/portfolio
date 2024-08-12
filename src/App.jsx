import './App.css'
import Navbar from "./componets/Navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet";
import Footer from "./componets/Footer/Footer.tsx";

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
    <Footer/>
</>
)
}

export default App
