import { useState } from "react";
import { motion } from "framer-motion";
import "./TechStack.css";
import Reveal from "./Reveal";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "AI/ML",
];

const techData = [
  { name: "HTML", icon: "html5", category: "Frontend" },
  { name: "CSS", icon: "css3", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },

  { name: "NodeJS", icon: "nodejs", category: "Backend" },
  { name: "Express", icon: "express", category: "Backend" },
  { name: "Java", icon: "java", category: "Backend" },
  { name: "REST API", icon: "fastapi", category: "Backend" },

  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "MySQL", icon: "mysql", category: "Database" },
  { name: "Firebase", icon: "firebase", category: "Database" },

  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "Postman", icon: "postman", category: "Tools" },

  { name: "Python", icon: "python", category: "AI/ML" },
];

export default function TechStack() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? techData
      : techData.filter(
          (t) =>
            t.category.toLowerCase() === active.toLowerCase()
        );

  return (
    <Reveal>
      <section className="techstack">
        <h2>
          My <span>Tech Stack</span>
        </h2>

        <p className="subtitle">
          A comprehensive collection of technologies I’ve mastered through
          projects, internships, and continuous learning.
        </p>

        {/* FILTERS */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          className="tech-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length > 0 ? (
            filtered.map((tech) => (
              <motion.div
                key={tech.name}
                className="tech-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.12 }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  loading="lazy"
                />
              </motion.div>
            ))
          ) : (
            <p className="empty-text">No technologies found</p>
          )}
        </motion.div>
      </section>
    </Reveal>
  );
}
