import { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectModal.css";


export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("images"); // images | description

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <motion.div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <h3>{project.title}</h3>

        {/* IMAGE SECTION */}
        {activeTab === "images" && (
          <div className="slider">
            <button onClick={prevImage}>‹</button>
            <img
              src={project.images[currentImage]}
              alt={project.title}
            />
            <button onClick={nextImage}>›</button>
          </div>
        )}

        {/* DESCRIPTION SECTION */}
        {activeTab === "description" && (
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="modal-actions">
          <button
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            View Site
          </button>

          <button
            onClick={() =>
              setActiveTab(
                activeTab === "images" ? "description" : "images"
              )
            }
          >
            {activeTab === "images" ? "View Description" : "View Images"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
