import React from "react";
import { motion } from "framer-motion";
import profile from "../../../public/assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 pt-32 relative overflow-hidden"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/10 to-purple-900/10" />

      {/* Floating Gradient Orbs - Optimized */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 relative z-10">
        {/* LEFT - Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative group"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />

          {/* Floating Shadow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />

          {/* Main Image Container */}
          <div className="relative w-80 h-90 md:w-96 md:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl shadow-black/30">
            {/* Image with Enhanced Effects */}
            <motion.img
              src={profile}
              alt="Aman Bhamuriya - Creative Frontend Developer & UI/UX Designer"
              className="w-full h-half object-cover scale-105 group-hover:scale-110 transition-all duration-700"
              whileHover={{ scale: 1.08 }}
              loading="lazy"
              decoding="async"
              width={400}
              height={600}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Reflective Shine */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent opacity-30" />
          </div>

          {/* Floating Tech Badges */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -bottom-3 -left-3 bg-gradient-to-r from-cyan-500 to-cyan-500/10 text-white px-5 py-2 rounded-xl font-bold shadow-xl shadow-blue-500/30"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">💻</span> Developer
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-3 -right-3 bg-gradient-to-r from-white/10 to-yellow-300 text-white px-5 py-2 rounded-xl font-bold shadow-xl shadow-purple-500/30"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">🎨</span> Creative
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT - Enhanced Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex-1 max-w-2xl"
        >
          {/* Header with Enhanced Effects */}
          <div className="relative mb-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Experiences
              </span>
            </motion.h2>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "280px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-yellow-500 to-orange-900 rounded-full"
            />
          </div>

          {/* Content Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">
                    Innovative Development
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    I specialize in building{" "}
                    <span className="text-yellow-600 font-semibold">
                      cutting-edge web applications
                    </span>{" "}
                    using modern technologies like React, Next.js, and
                    TypeScript. Every line of code is crafted for performance
                    and scalability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">✨</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    Creating{" "}
                    <span className="text-blue-600 font-semibold">
                      visually stunning interfaces
                    </span>{" "}
                    that provide seamless user experiences. From concept to
                    execution, every pixel is placed with purpose and precision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    Backend Architecture
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    Building{" "}
                    <span className="text-green-600 font-semibold">
                      speed and efficiency
                    </span>{" "}
                    robust server-side systems with scalable infrastructure,
                    efficient databases, and secure APIs. From logic to
                    deployment, every line of code ensures reliability,
                    performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <h4 className="text-white text-lg font-semibold mb-4">
              Technologies I Work With:
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML & CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Java & Spring Boot",
                "Tailwind CSS",
                "Git & GitHub",
                "SQL",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-3xl opacity-30"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 text-3xl opacity-30"
      >
        ✨
      </motion.div>
    </section>
  );
};

export default About;
