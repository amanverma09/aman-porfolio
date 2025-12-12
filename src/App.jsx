import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import IntroLoader from "./components/common/Interloder";
import ParticlesCode from "./components/common/ParticlesCode";
// import Features from "./components/sections/Features";
import DarkVeil from "./components/common/DarkVeil";
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
            }}
          >
            <DarkVeil
              hueShift={30}
              speed={0.3}
              noiseIntensity={0.02}
              warpAmount={0.1}
            />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            <ParticlesCode />
            <Hero />
            <About />
            {/* <Features /> */}
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
