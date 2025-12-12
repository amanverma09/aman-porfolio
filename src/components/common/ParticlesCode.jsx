import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// This component uses character particles (code symbols). It's tuned to be lightweight.
export default function ParticlesCode() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      background: { color: "transparent" },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: false },
        },
        modes: { repulse: { distance: 100 } },
      },
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: ["#9f7aea", "#06b6d4", "#f59e0b"] },
        opacity: { value: 0.8 },
        size: { value: { min: 6, max: 14 } },
        move: {
          enable: true,
          speed: 1.2,
          direction: "bottom",
          outModes: { default: "out" },
        },
        shape: {
          type: "char",
          character: {
            value: ["<", "/>", "{", "}", "();", "const", "=>", "//"],
            font: "Verdana",
            style: "",
            weight: "400",
            fill: true,
          },
        },
      },
    }),
    []
  );

  // Mobile optimization: reduce particles by screen width
  const style = { position: "fixed", inset: 0, zIndex: -1 };

  return (
    <div aria-hidden style={style}>
      <Particles id="coding-particles" init={particlesInit} options={options} />
    </div>
  );
}
