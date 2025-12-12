import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaPaintBrush,
  FaShieldAlt,
} from "react-icons/fa";
import { TbBolt, TbHeartCode } from "react-icons/tb";
import ParticleBackground from "../common/ParticleBackground.jsx";
const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Modern Web Development",
      description: "Responsive, scalable websites crafted with perfection.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      delay: 0.1,
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Ultra Fast Performance",
      description: "Speed-optimized builds with buttery-smooth motion.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.45)]",
      delay: 0.2,
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Mobile-Perfect Design",
      description: "100% responsive layouts for all screen sizes.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      delay: 0.3,
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Stunning UI/UX",
      description: "Elegant interfaces with a soft glossy aesthetic.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      delay: 0.4,
    },
    {
      icon: <TbBolt className="text-3xl" />,
      title: "Smooth Animations",
      description: "Calm, fluid & premium animation experience.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.5)]",
      delay: 0.5,
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Stable",
      description: "Reliability and quality guaranteed.",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.45)]",
      delay: 0.6,
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden bg-transparent"
    >
      {/* Canvas particle background (same vibe as footer) */}
      <ParticleBackground height={1000} className="z-0" />

      {/* Soft shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/8 mix-blend-screen pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold  drop-shadow-lg tracking-wide">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}
              Features
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mt-3">
            Clean, glossy, soft and ultra-modern.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: f.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-60 transition-all blur-2xl ${f.glow}`}
              />

              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white mx-auto mb-6 border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {f.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-300 text-center text-sm">
                  {f.description}
                </p>

                <div className="w-full h-px bg-white/10 mt-6" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <TbHeartCode className="text-3xl text-white/80" />
            <span className="text-white text-lg opacity-90">
              Crafted with clean glossy perfection.
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-3 text-white font-semibold rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition shadow-xl"
          >
            Let's Build Premium ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
