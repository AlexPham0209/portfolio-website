import NavButton from "./components/NavButton";
import NavBar from "./components/NavBar";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
// import About from './pages/About'
import Projects from "./pages/Projects";
import { AnimatePresence } from "motion/react";
import Contact from "./pages/Contact";
import Competitions from "./pages/Competitions";
import Jobs from "./pages/Jobs";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <HashRouter>
      <NavBar>
        <NavButton link="/home">Home</NavButton>
        <NavButton link="/jobs">Jobs</NavButton>
        <NavButton link="/competitions">Competitions</NavButton>
        <NavButton link="/projects">Projects</NavButton>
        <NavButton link="/contact">Contact</NavButton>
      </NavBar>

      <Pages />
    </HashRouter>
  );
}

export default App;
