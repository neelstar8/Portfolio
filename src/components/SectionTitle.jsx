export default function SectionTitle({ text }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2
        style={{
          color: "#fff",
          fontSize: "18px",
          letterSpacing: "3px",
          fontWeight: "600",
          textTransform: "uppercase"
        }}
      >
        {text}
      </h2>
    </div>
  );
}
