import NavButton from './components/NavButton'
import NavBar from './components/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'



function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <NavButton link='/portfolio-website/home'>Home</NavButton>
        <NavButton link='/portfolio-website/about'>About</NavButton>
        <NavButton link='/portfolio-website/skills'>Skills</NavButton>
        <NavButton link='/portfolio-website/projects'>Projects</NavButton>
      </NavBar>
      
      <Routes>
        <Route path="*" element={<Navigate to="/portfolio-website/home"/>}/>
        <Route path='/portfolio-website/home' element={<Home/>}/>
        <Route path='/portfolio-website/about' element={<About/>}/>
        <Route path='/portfolio-website/skills' element={<Skills/>}/>
        <Route path='/portfolio-website/projects' element={<Projects/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
