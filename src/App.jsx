import './App.css'
import NavBar from './component/NavBar'
import Home from './component/Home'
import AboutMe from './component/AboutMe'
import Projects from './component/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;
