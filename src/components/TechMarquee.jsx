import "./TechMarquee.css";

const companies = [
  { name: "Google", icon: "google" },
  { name: "Apple", icon: "apple" },

  { name: "Meta", icon: "facebook" },
  { name: "Netflix", icon: "netflix" },
  

  { name: "Tesla", icon: "tesla" },
  { name: "NVIDIA", icon: "nvidia" },
  { name: "Uber", icon: "uber", src: "simple" }
];


export default function TechMarquee() {
  return (

    <section className="tech-marquee">

      <h3 className="marquee-title">Dream Companies</h3>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...companies, ...companies].map((c, i) => (
            <div className="marquee-card" key={i}>
              <img
  src={
    c.src === "devicon"
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${c.icon}/${c.icon}-original.svg`
      : `https://cdn.simpleicons.org/${c.icon}`
  }
  alt={c.name}
/>

              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
