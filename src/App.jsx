import './App.css'
import NavBar from './component/NavBar'
import Home from './component/Home'
import AboutMe from './component/AboutMe'
import '@fontsource/poppins';
import Projects from './component/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './component/ContactMe'
import Skills from './component/Skills'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </Router>
  )
}

export default App;
