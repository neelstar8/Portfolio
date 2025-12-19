import "./Navbar.css";
import NavClock from "./NavClock";


export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 70; // adjust if needed
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      {/* LEFT MENU (SCROLL) */}
      <ul className="nav-left">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("work")}>Work</li>
        <li onClick={() => scrollToSection("awards")}>Awards</li>
      </ul>
       <NavClock />

      {/* RIGHT ICONS (EXTERNAL LINKS) */}
      <div className="nav-right">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
            alt="GitHub"
          />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </a>

        <a href="mailto:youremail@gmail.com" title="Email">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg"
            alt="Email"
          />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/readthedocs.svg"
            alt="Resume"
          />
        </a>
      </div>
    </nav>
  );
}
