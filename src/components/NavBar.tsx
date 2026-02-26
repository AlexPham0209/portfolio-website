import { useEffect, useState } from "react"

export default function NavBar({ children }: { children?: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>Alex Pham</li>
        
        <li>
          <a href="Alexander-Pham-Resume.pdf">
            <img src="resume.png"></img>
          </a>
        </li>

        <li>      
          <a href="https://github.com/AlexPham0209">
            <img src="github.png"></img>
          </a>
        </li>

      </ul>

      <ul className="navbar-right">
        {children != null && children}
      </ul>

      <button className="navbar-menu">
        <img src="hamburger.png"/>
      </button>
    </nav>
  );
}
