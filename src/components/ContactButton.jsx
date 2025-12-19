import "./ContactButton.css";

export default function ContactButton({ onClick }) {
  return (
    <button className="contact-button" onClick={onClick}>
      <span>Contact</span>
    </button>
  );
}
