import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h3>Neel Santosh Gadekar</h3>
          <p>AI / ML Enthusiast · Full-Stack · Android Developer</p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#awards">Awards</a>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="mailto:yourmail@gmail.com">Email</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Neel Gadekar</span>
        <span>Built with React · Designed with ❤️</span>
      </div>
    </footer>
  );
}
