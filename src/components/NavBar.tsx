import { useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu";

export default function NavBar({ children }: { children?: React.ReactNode }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="header">
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

        <button className="hamburger-menu-button" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
          <img src="hamburger.png"/>
        </button>
      </nav>

      {hamburgerOpen && <HamburgerMenu/>}
    </div>
      
  );
}
