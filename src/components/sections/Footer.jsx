// import React, { useState, useEffect, useCallback } from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";

// const Footer = () => {
//   const [showTopBtn, setShowTopBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowTopBtn(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Particle canvas ref
//   const canvasRef = useCallback((node) => {
//     if (!node) return;

//     const canvas = node;
//     const ctx = canvas.getContext("2d");
//     let particles = [];
//     let animationFrameId;

//     canvas.width = window.innerWidth;
//     canvas.height = 400;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = canvas.height + Math.random() * 100;
//         this.size = Math.random() * 4 + 1;
//         this.speedY = Math.random() * 1 + 0.5;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.opacity = Math.random() * 0.3 + 0.1;
//         this.hue = Math.random() * 60 + 20; // Yellow-orange tones
//       }

//       update() {
//         this.y -= this.speedY;
//         this.x += this.speedX;
//         this.opacity -= 0.002;
//         if (this.y < 0 || this.opacity <= 0) {
//           this.y = canvas.height + Math.random() * 50;
//           this.opacity = Math.random() * 0.3 + 0.1;
//         }
//       }

//       draw() {
//         ctx.save();
//         ctx.globalAlpha = this.opacity;
//         ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     const initParticles = () => {
//       particles = [];
//       for (let i = 0; i < 80; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const animate = () => {
//       ctx.fillStyle = "rgba(17, 24, 39, 0.1)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     initParticles();
//     animate();

//     const resizeHandler = () => {
//       canvas.width = window.innerWidth;
//       initParticles();
//     };
//     window.addEventListener("resize", resizeHandler);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("resize", resizeHandler);
//     };
//   }, []);

//   return (
//     <footer className="bg-gradient-to-t from-black via-gray-900 to-transparent relative overflow-hidden py-4">
//       {/* Particle Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none z-0"
//         style={{ top: 0 }}
//       />

//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//         {/* Hero Text */}
//         <div className="mb-8">
//           <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2 animate-pulse">
//             Let's Connect!
//           </h3>
//           <p className="text-xl text-yellow-200/80 font-medium">
//             Ready to build something amazing together?
//           </p>
//         </div>

//         {/* DAMDAAR SOCIAL ICONS */}
//         <div className="flex justify-center gap-5 mb-4">
//           {[
//             {
//               href: "https://github.com",
//               icon: <FaGithub size={20} />,
//               label: "GitHub",
//             },
//             {
//               href: "https://linkedin.com",
//               icon: <FaLinkedin size={20} />,
//               label: "LinkedIn",
//             },
//             {
//               href: "https://twitter.com",
//               icon: <FaTwitter size={20} />,
//               label: "Twitter/X",
//             },
//           ].map(({ href, icon, label }, index) => (
//             <a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               className="group relative p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500
//                          hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-yellow-500/25
//                          hover:border-yellow-400 transform-gpu"
//               style={{
//                 animationDelay: `${index * 200}ms`,
//                 animation: "slideInUp 0.6s ease forwards",
//               }}
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10 animate-ping-slow"></span>
//               {icon}
//             </a>
//           ))}
//         </div>

//         {/* COPYRIGHT */}
//         <p className="text-gray-400 text-lg font-medium tracking-wider animate-fadeIn">
//           © {new Date().getFullYear()} Aman Bhamuriya.
//           <span className="text-yellow-400 font-bold ml-2">Made with ❤️</span>
//         </p>
//       </div>

//       {/* UPGRADED SCROLL TO TOP */}
//       {showTopBtn && (
//         <button
//           onClick={() => scroll.scrollToTop({ smooth: true, duration: 800 })}
//           className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500
//                      rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-125 hover:rotate-180
//                      transition-all duration-500 border-4 border-white/20 backdrop-blur-sm z-50 animate-bounce-slow"
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp className="text-black font-bold mx-auto" size={20} />
//           <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500 rounded-3xl opacity-75 blur-xl animate-ping"></div>
//         </button>
//       )}
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect, useCallback } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced Particle canvas ref - Chai steam + icons
  const canvasRef = useCallback((node) => {
    if (!node) return;

    const canvas = node;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let steamParticles = [];
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    // Main glowing particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 4 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.hue = Math.random() * 60 + 20;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.002;
        if (this.y < 0 || this.opacity <= 0) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Chai steam particles (wavy, infinite)
    class SteamParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = -Math.random() * 0.8 - 0.3;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.life = 1.0;
        this.maxLife = 1.0;
        this.size = Math.random() * 3 + 1;
        this.wave = Math.random() * Math.PI * 2;
      }
      update() {
        this.y += this.vy;
        this.x += this.vx + Math.sin(this.wave) * 0.5;
        this.wave += 0.2;
        this.vy *= 0.98;
        this.life -= 0.015;
        if (this.life <= 0) return false;
        return true;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.6;
        ctx.fillStyle = "rgba(255, 255, 200, 0.8)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(255, 255, 200, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      steamParticles = [];
      for (let i = 0; i < 80; i++) particles.push(new Particle());
    };

    // Create chai steam continuously
    const createSteam = () => {
      if (Math.random() < 0.4) {
        steamParticles.push(
          new SteamParticle(canvas.width * 0.3, canvas.height * 0.7)
        );
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(17, 24, 39, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Chai cup (static)
      ctx.save();
      ctx.fillStyle = "#8B4513";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#D2691E";
      // Cup body
      ctx.beginPath();
      ctx.ellipse(
        canvas.width * 0.28,
        canvas.height * 0.75,
        25,
        35,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();
      // Handle
      ctx.beginPath();
      ctx.arc(
        canvas.width * 0.28 + 35,
        canvas.height * 0.72,
        8,
        0,
        Math.PI * 0.7
      );
      ctx.lineTo(canvas.width * 0.28 + 42, canvas.height * 0.75);
      ctx.fill();
      ctx.restore();

      // Main particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Steam particles
      createSteam();
      for (let i = steamParticles.length - 1; i >= 0; i--) {
        if (!steamParticles[i].update()) {
          steamParticles.splice(i, 1);
        } else {
          steamParticles[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      initParticles();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-transparent relative overflow-hidden py-4">
      {/* Particle Canvas with Chai Steam */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ top: 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Text - CENTERED */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-800 bg-clip-text text-transparent mb-2 animate-pulse">
            <span className="text-white">Let's</span> Connect!
          </h3>
          <p className="text-xl text-yellow-200/80 font-medium">
            Ready to build something amazing together?
          </p>
        </div>

        {/* FLYING SOCIAL ICONS - LEFT ALIGNED, INFINITE */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 max-w-md mx-auto md:ml-12">
          {[
            {
              href: "https://github.com",
              icon: <FaGithub size={20} />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com",
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
            },
            {
              href: "https://twitter.com",
              icon: <FaTwitter size={20} />,
              label: "Twitter/X",
            },
            {
              href: "https://instagram.com",
              icon: <FaInstagram size={20} />,
              label: "Instagram",
            },
            {
              href: "https://wa.me/919876543210",
              icon: <FaWhatsapp size={20} />,
              label: "WhatsApp",
            },
          ].map(({ href, icon, label }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-1000 
                         hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-yellow-500/25 
                         hover:border-yellow-400 transform-gpu opacity-70 hover:opacity-100 infinite-loop"
              style={{ animationDelay: `${index * 400}ms` }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10 animate-ping-slow"></span>
              {icon}
            </a>
          ))}
        </div>

        {/* COPYRIGHT - CENTERED */}
        <p className="text-gray-400 text-lg font-medium tracking-wider animate-fadeIn text-center">
          © {new Date().getFullYear()} Aman Bhamuriya.
          <span className="text-yellow-400 font-bold ml-2">Made with ❤️</span>
        </p>
      </div>

      {/* Scroll button same */}
      {showTopBtn && (
        <button
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 800 })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500 
                     rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transform 
                     transition-all duration-500 border-4 border-white/20 backdrop-blur-sm z-50 animate-bounce-slow"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-black font-bold mx-auto" size={20} />
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500 rounded-3xl opacity-75 blur-xl animate-ping"></div>
        </button>
      )}
    </footer>
  );
};

export default Footer;
