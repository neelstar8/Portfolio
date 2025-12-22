import { useState } from "react";
import "./Projects.css";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % project.images.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h3>{project.title}</h3>

        <div className="slider">
          <button onClick={prev}>‹</button>

          <img
            src={project.images[index]}
            alt="Project screenshot"
          />

          <button onClick={next}>›</button>
        </div>
      </div>
    </div>
  );
}
