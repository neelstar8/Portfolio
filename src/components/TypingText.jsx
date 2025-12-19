import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 300,
  pause = 2000
}) {
  const words = text.split(" ");
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cycle, setCycle] = useState(0); // to restart

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
      // finished typing → wait → reset
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
        setCycle((c) => c + 1);
      }, pause);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, words, speed, pause, cycle]);

  return (
    <p className="typing-text">
      {displayText}
      <span className="cursor">▍</span>
    </p>
  );
}
