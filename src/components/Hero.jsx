import { useRef } from "react";
import "./Hero.css";
import profileImg from "../assets/profile12.jpg";
import TypingText from "./TypingText";

export default function Hero() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(10px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;
  };

  return (
    <section id="home" className="hero hero-layout">
      {/* LEFT: CARD */}
      <div
        ref={cardRef}
        className="hero-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-frame">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="name-box">Neel Santosh Gadekar</div>

        <div className="hero-content">
          <h4>AIML ENTHUSIAST</h4>
          <p>
            A curious developer who enjoys turning ideas into clean, functional,
            and meaningful products.
          </p>
        </div>
      </div>

      {/* RIGHT: TYPING TEXT */}
      <div className="hero-side-text">
        <TypingText text="This Is Neel Santosh Gadekar Check My Profile" />
      </div>
    </section>
  );
}
