import project1img1 from "../assets/project1img1.jpg";
import project1img2 from "../assets/project1img2.jpg";
import project1img3 from "../assets/project1img3.jpg";

import project2img1 from "../assets/project2img1.png";
import project2img2 from "../assets/project2img2.jpg";
import project2img3 from "../assets/project2img3.jpg";
import project2img4 from "../assets/project2img4.jpg";

import project3img1 from "../assets/project3img1.png";
import project3img2 from "../assets/project3img2.png";
import project3img3 from "../assets/project3img3.png";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

const projectsData = [
  {
    title: "Code Guard",
    description:
      "CodeGuard is an AI-driven platform that instantly detects code plagiarism by analyzing structural and logical similarities. Built for educators, reviewers, and teams to ensure originality and code integrity.",
    images: [project1img1, project1img2, project1img3],
  },
  {
    title: "Suraksha Coast",
    description:
      "A coastal safety app that provides real-time beach status using oceanic and meteorological data through INCOIS integration, offering safety alerts, live emergency location sharing, and interactive maps to ensure secure and informed coastal tourism.",
    images: [project2img1, project2img2, project2img3, project2img4],
  },
  {
    title: "SomAIya – AI Campus Assistant",
    description:
      "SomAIya is an AI-powered campus assistant built for Somaiya University that works like a personalized ChatGPT. Students can ask questions about campus life, academics, facilities, events, and procedures and instantly get accurate answers—eliminating the need to search multiple websites or portals.",
    images: [project3img1, project3img2, project3img3],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Reveal>
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <button onClick={() => setActiveProject(project)}>
                View Project
              </button>
            </motion.div>
          ))}
        </div>

        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </section>
    </Reveal>
  );
}
