import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const steps = [
    "Establishing secure connection",
    "Initializing UI modules",
    "Rendering interface components",
    "Loading assets",
    "Welcome."
  ];

  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    let stepIndex = 0;

    const stepInterval = setInterval(() => {
      if (stepIndex < steps.length) {
        setVisibleSteps((prev) => [...prev, steps[stepIndex]]);
        stepIndex++;
      }
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          setTimeout(onFinish, 600);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  return (
    <div className="loader-screen">
      <div className="loader-box">
        <div className="loader-text">
          {visibleSteps.map((step, i) => (
            <p key={i}>
              <span>$</span> {step}
            </p>
          ))}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="progress-text">[{progress}%]</div>
      </div>
    </div>
  );
}
