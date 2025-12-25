import "./Navbar.css";
import NavClock from "./NavClock";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      70;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left-wrapper">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="nav-left">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("work")}>Work</li>
          <li onClick={() => scrollToSection("awards")}>Awards</li>
        </ul>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <NavClock />
      </div>

      {/* RIGHT (DESKTOP = ALL, MOBILE = ONLY 2) */}
      <div className="nav-right">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" />
        </a>

        <a
          href="mailto:youremail@gmail.com"
          className="hide-on-mobile"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg" />
        </a>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <span onClick={() => scrollToSection("home")}>Home</span>
          <span onClick={() => scrollToSection("projects")}>Projects</span>
          <span onClick={() => scrollToSection("work")}>Work</span>
          <span onClick={() => scrollToSection("awards")}>Awards</span>

          <div className="mobile-icons">
            <a href="https://github.com/neelstar8">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" />
            </a>
            <a href="https://linkedin.com/in/yourusername">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" />
            </a>
            <a href="mailto:youremail@gmail.com">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
