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
import Experience from "./pages/Experience";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <HashRouter>
      <header>
        <NavBar>
          <NavButton link="/home">Home</NavButton>
          <NavButton link="/projects">Projects</NavButton>
          <NavButton link="/experience">Experience</NavButton>
        </NavBar>
      </header>

      <Pages />
    </HashRouter>
  );
}

export default App;
