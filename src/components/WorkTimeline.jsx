import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./WorkTimeline.css";

const data = [
  {
    year: "2023",
    side: "right",
    title: "Started Coding Journey",
    subtitle: "at Vidyalankar Polytechnic",
    description:
      "Began my tech journey by learning C programming alongside HTML, CSS, and JavaScript, laying a solid foundation in problem-solving and web technologies.",
  },
  {
    year: "2023",
    side: "left",
    title: "My First Hackthon",
    subtitle: "Chat application",
    description:
      "Built a real-time chat application during my first hackathon, enabling seamless user communication and collaboration in a fast-paced team environment.",
  },
  {
    year: "2024",
    side: "right",
    title: "Android App Developer Intern",
    subtitle: "at V2vEdtech LLP",
    description:
      "Interned at V2V EdTech as an Android App Developer, where I built and improved application features while gaining strong practical knowledge of Android development and real-world workflows.",
  },
  {
    year: "2025",
    side: "left",
    title: "AI & ML",
    subtitle: "Exploring",
    description:
      "Diving into the world of Artificial Intelligence and Machine Learning, experimenting with models, data, and algorithms to understand intelligent systems.",
  },
];

/* 🔥 Animation variants */
const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WorkTimeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(windowHeight - containerTop, 0),
        containerRef.current.offsetHeight
      );

      setHeight(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="timeline-section" id="work" ref={containerRef}>
      <h2 className="timeline-title">Work & Journey</h2>

      <div className="timeline-wrapper">
        {/* Static line */}
        <div className="timeline-line" />

        {/* Animated progress line */}
        <div
          className="timeline-line-progress"
          style={{ height }}
          ref={lineRef}
        />

        {data.map((item, i) => (
          <div className={`timeline-item ${item.side}`} key={i}>
            <div className="timeline-dot" style={{ top: i * 180 + 60 }} />

            {/* 🔥 Animated Card */}
            <motion.div
              className="timeline-card"
              variants={item.side === "left" ? leftVariant : rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
              <p>{item.description}</p>
              <small>{item.year}</small>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
