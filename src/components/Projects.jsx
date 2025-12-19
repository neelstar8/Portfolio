export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "40px" }}>
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          padding: "0 80px"
        }}
      >
        <div className="card">
          <h3>Project One</h3>
          <p>Short description of what this project does.</p>
        </div>

        <div className="card">
          <h3>Project Two</h3>
          <p>Short description of what this project does.</p>
        </div>

        <div className="card">
          <h3>Project Three</h3>
          <p>Short description of what this project does.</p>
        </div>
      </div>
    </section>
  );
}
