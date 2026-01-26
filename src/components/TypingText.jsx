import { useEffect, useState } from "react";
import "./TypingText.css";
export default function TypingText({
  text,
  speed = 300,
  pause = 2000,
}) {
  const words = text.split(" ");
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) =>
          prev ? prev + " " + words[index] : words[index]
        );
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
        setCycle((c) => c + 1);
      }, pause);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, speed, pause, cycle]);

  return (
    <div className="typing-wrapper">
      <p className="typing-text">
        {displayText}
        <span className="cursor">▍</span>
      </p>

      {/* DOWNLOAD RESUME BUTTON */}
   <a
  href="/Neel_Gadekar_Resume.pdf"
  download="Neel_Gadekar_Resume.pdf"
  className="resume-btn-tech"
>
  <span>Download Resume</span>
</a>



    </div>
  );
}
