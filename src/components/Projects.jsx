import project1img1 from "../assets/project1img1.jpg";
import project1img2 from "../assets/project1img2.jpg";
import project1img3 from "../assets/project1img3.jpg";
import project2img1 from "../assets/project2img1.jpg";
import project2img2 from "../assets/project2img2.jpg";
import project2img3 from "../assets/project2img3.jpg";
import project2img4 from "../assets/project2img4.jpg";


import { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const projectsData = [
  {
    title: "Code Guard",
    description:
      "CodeGuard is an AI-driven platform that instantly detects code plagiarism by analyzing structural and logical similarities. Built for educators, reviewers, and teams to ensure originality and code integrity.",
    images: [
      project1img1,
      project1img2,
      project1img3,
    ],
  },
  {
    title: "Suraksha Coast",
    description:
      "A coastal safety app that provides real-time beach status using oceanic and meteorological data through INCOIS integration, offering safety alerts, live emergency location sharing, and interactive maps to ensure secure and informed coastal tourism.",
    images: [
      project2img1,
      project2img2,
      project2img3,
      project2img4,
    ],
  },
  {
    title: "Project Three",
    description:
      "A feature-rich project demonstrating frontend logic, UI design, and interaction.",
    images: [
      "/projects/project3-1.png",
      "/projects/project3-2.png",
      "/projects/project3-3.png",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.images[0]}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <button onClick={() => setActiveProject(project)}>
              View Project
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
