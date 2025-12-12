import React from "react";

export default function BackgroundShapes({
  color = "#facc15",
  opacity = 0.15,
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* BIG BLUR CIRCLE */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-3xl animate-float-slow"
        style={{
          background: color,
          opacity: opacity,
          top: "-80px",
          left: "-80px",
        }}
      />

      {/* SMALL BLUR CIRCLE */}
      <div
        className="absolute w-[250px] h-[250px] rounded-full blur-3xl animate-float-reverse"
        style={{
          background: "#06b6d4",
          opacity: opacity,
          bottom: "-60px",
          right: "-60px",
        }}
      />

      {/* FLOATING SHAPES */}
      <svg
        className="absolute w-40 opacity-40 animate-rotate-slow"
        style={{ top: "20%", left: "70%" }}
        viewBox="0 0 200 200"
      >
        <path
          fill={color}
          d="M48.1,-63C61.4,-55.8,70.5,-41.5,74.9,-25.4C79.3,-9.2,79,8.8,72.5,24.3C66,39.7,53.4,52.5,38.8,61.3C24.1,70.2,7.6,75.1,-8.7,76.2C-24.9,77.4,-49.9,74.8,-63.8,62.3C-77.7,49.8,-80.5,27.4,-79.8,6.2C-79.1,-15,-75,-34.9,-63.3,-45.8C-51.6,-56.6,-32.3,-58.3,-15.2,-66.2C1.8,-74.1,18.4,-88.1,32.7,-87.4C47,-86.6,61,-71.2,48.1,-63Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
