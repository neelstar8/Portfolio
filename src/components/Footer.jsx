export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #222",
        padding: "30px 0",
        marginTop: "80px",
        textAlign: "center",
        color: "#aaa",
        fontSize: "14px"
      }}
    >
      <p>
        © {new Date().getFullYear()} Neel Gadekar · Built with React.js
      </p>
    </footer>
  );
}
