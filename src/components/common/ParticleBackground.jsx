import React, { useCallback } from "react";

const ParticleBackground = ({ height = 600, className = "" }) => {
  const canvasRef = useCallback(
    (node) => {
      if (!node) return;

      const canvas = node;
      const ctx = canvas.getContext("2d");
      let particles = [];
      let animationFrameId;

      const setSize = () => {
        canvas.width = canvas.offsetWidth || window.innerWidth;
        canvas.height = height;
      };

      setSize();

      class Particle {
        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + Math.random() * 100;
          this.size = Math.random() * 3 + 1;
          this.speedY = Math.random() * 1 + 0.4;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.opacity = Math.random() * 0.3 + 0.1;
          this.hue = Math.random() * 60 + 40; // yellow–orange tones
        }

        update() {
          this.y -= this.speedY;
          this.x += this.speedX;
          this.opacity -= 0.002;

          if (this.y < -20 || this.opacity <= 0) {
            this.reset();
          }
        }

        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      const initParticles = () => {
        particles = [];
        const density = (canvas.width * height) / 15000; // responsive density
        const count = Math.max(40, Math.floor(density));
        for (let i = 0; i < count; i++) {
          particles.push(new Particle());
        }
      };

      const animate = () => {
        ctx.fillStyle = "rgba(5, 5, 5, 0.25)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      initParticles();
      animate();

      const handleResize = () => {
        setSize();
        initParticles();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
      };
    },
    [height]
  );

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full pointer-events-none ${className}`}
    />
  );
};

export default ParticleBackground;
