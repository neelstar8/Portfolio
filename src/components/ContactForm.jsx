import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "./ContactForm.css";

export default function ContactForm({ onClose }) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMounted(true);

    const escHandler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      {/* HUD EXIT */}
      <div className="hud-close" onClick={onClose}>
        ESC
      </div>

      {/* SCAN EFFECT (VISUAL ONLY) */}
      <div className={`scan-sweep ${mounted ? "run" : ""}`} />

      {/* FORM PANEL */}
      <div
        className={`contact-panel ${mounted ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <h2>CONTACT INTERFACE</h2>
            <p className="subtext">Secure communication channel</p>

            <form onSubmit={handleSubmit}>
              <input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button type="submit">SEND MESSAGE</button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <h2>MESSAGE SENT</h2>
            <p>Transmission successful</p>
            <button onClick={onClose}>CLOSE</button>
          </div>
        )}
      </div>
    </div>
  );
}
