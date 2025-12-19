import { useState } from "react";
import "./TechStack.css";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "AI/ML"
];

const techData = [
  { name: "HTML", icon: "html5", category: "Frontend" },
  { name: "CSS", icon: "css3", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },

  { name: "NodeJS", icon: "nodejs", category: "Backend" },
  { name: "Express", icon: "express", category: "Backend" },
  { name: "Java", icon: "java", category: "Backend" },

  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "MySQL", icon: "mysql", category: "Database" },
  { name: "Firebase", icon: "firebase", category: "Database" },

  { name: "Git", icon: "git", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  { name: "Postman", icon: "postman", category: "Tools" },

  { name: "Python", icon: "python", category: "AI/ML" },
  { name: "OpenAI", icon: "openai", category: "AI/ML"  }
];

export default function TechStack() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? techData
      : techData.filter((t) => t.category === active);

  return (
    <section className="techstack">
      <h2>
        My <span>Tech Stack</span>
      </h2>
      <p className="subtitle">
        A comprehensive collection of technologies I’ve mastered through
        projects, internships, and continuous learning.
      </p>

      {/* FILTER PILLS */}
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
      <div className="tech-grid">
        {filtered.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
              alt={tech.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
