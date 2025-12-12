import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./skills.css";

const skillsRow1 = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "GitHub",
    icon: "../../../public/assets/githubSvg.png",
  },
  {
    name: "Tailwind CSS",
    icon: "../../../public/assets/tailwindSvg.png",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const skillsRow2 = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "../../../public/assets/expressSvg.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
];

const SkillsMarquee = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="skills" className="skills-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="skills-particles"
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: "#ffc400" },
            links: {
              color: "#ffc400",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: { enable: true, area: 900 },
              value: 70,
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="skills-card">
        <span className="skills-tag">Skills</span>
        <h2 className="skills-title">What I Do</h2>
        <p className="skills-subtitle">
          Technologies I use to build fast, modern, and scalable web
          applications.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee marquee-left">
            {[...skillsRow1, ...skillsRow1].map((skill, i) => (
              <div className="skill-tile" key={skill.name + i}>
                <div className="skill-icon-wrap">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee marquee-right">
            {[...skillsRow2, ...skillsRow2].map((skill, i) => (
              <div className="skill-tile" key={skill.name + i}>
                <div className="skill-icon-wrap">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
