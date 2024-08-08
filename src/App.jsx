import './App.css'
import Navbar from "./NavBar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div id="about" style={{ padding: '100vh 0' }}>About Content</div>
      <div id="services" style={{ padding: '100vh 0' }}>Services Content</div>
      <div id="contact" style={{ padding: '100vh 0' }}>Contact Content</div>
    </>
  )
}

export default App
