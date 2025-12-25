import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";
import TechStack from "./components/TechStack";
import ContactButton from "./components/ContactButton";
import ContactForm from "./components/ContactForm";
import WorkTimeline from "./components/WorkTimeline";


function App() {
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <CursorFollower />

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="app">
          <Navbar />
          <Hero />

          <SectionTitle text="Technologies I Know" />
          <TechStack />

          <TechMarquee />
          <Projects />
          <WorkTimeline />

          <Footer />

          {/* FLOATING CONTACT */}
          <ContactButton onClick={() => setShowContact(true)} />
          {showContact && (
            <ContactForm onClose={() => setShowContact(false)} />
          )}
        </div>
      )}
    </>
  );
}


export default App;
