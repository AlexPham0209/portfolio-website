import NavButton from './components/NavButton'
import NavBar from './components/NavBar'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import { AnimatePresence } from 'motion/react'

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='*' element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </AnimatePresence>
  );
}
function App() {
  return (
    <HashRouter>
      <NavBar>
        <NavButton link='/home'>Home</NavButton>
        <NavButton link='/about'>About</NavButton>
        <NavButton link='/skills'>Skills</NavButton>
        <NavButton link='/projects'>Projects</NavButton>
      </NavBar>
      
      <Pages/>
    </HashRouter>
  )
}

export default App
