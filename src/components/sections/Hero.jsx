import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* --- BACKGROUND GRADIENT --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a]"></div>

      {/* --- PARTICLE DOT GRID --- */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* --- FLYING CIRCLES --- */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-20 left-20 w-24 h-24 bg-green-500/30 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 right-24 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"
      ></motion.div>

      {/* --- LIGHT RING BEHIND HEADING --- */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/3 w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-3xl"
      ></motion.div>

      {/* --- NAME --- */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        Aman{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Bhamuriya
        </span>
      </motion.h1>

      {/* --- SUB HEADING --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl relative z-10"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 font-bold">
          Full-Stack Web Developer -
        </span>{" "}
        I build high-performance, clean & modern web apps.
      </motion.p>

      {/* --- BUTTONS --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#contact"
          className="px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 shadow-xl transition relative z-10"
        >
          Hire Me
        </a>

        <a
          href="/public/assets/myresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl font-semibold border border-gray-400 text-white hover:bg-white/10 backdrop-blur-xl transition"
        >
          View Resume
        </a>

      </motion.div>

      {/* --- FLOATING SMALL PARTICLES --- */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}
    </section>
  );
}
