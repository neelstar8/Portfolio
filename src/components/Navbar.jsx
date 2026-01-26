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
          <li onClick={() => scrollToSection("home")}>
            <span className="nav-tab active">Home</span>
          </li>

          <li onClick={() => scrollToSection("projects")}>
            <span className="nav-tab">Projects</span>
          </li>

          <li onClick={() => scrollToSection("work")}>
            <span className="nav-tab">Work</span>
          </li>

          <li onClick={() => scrollToSection("awards")}>
            <span className="nav-tab">Awards</span>
          </li>
        </ul>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <NavClock />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <a
          href="https://github.com/neelstar8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
            alt="GitHub"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/neel-gadekar-018248243/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </a>

        <a
          href="mailto:neelgadekar9@gmail.com"
          className="hide-on-mobile"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg"
            alt="Gmail"
          />
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
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                alt="GitHub"
              />
            </a>

            <a href="https://www.linkedin.com/in/neel-gadekar-018248243/">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>

            <a href="mailto:neelgadekar9@gmail.com">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg"
                alt="Gmail"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
