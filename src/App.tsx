import NavButton from './components/NavButton'
import NavBar from './components/NavBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import { AnimatePresence } from 'motion/react'



function App() {
  return (
    <HashRouter>
      <NavBar>
        <NavButton link='/home'>Home</NavButton>
        <NavButton link='/about'>About</NavButton>
        <NavButton link='/skills'>Skills</NavButton>
        <NavButton link='/projects'>Projects</NavButton>
      </NavBar>
      
      <AnimatePresence mode='wait'>
        <div className='mt-30'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
        </div>
      </AnimatePresence>
      
    </HashRouter>
  )
}

export default App
