import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCode,
  FaRocket,
  FaCube,
} from "react-icons/fa";
import { GiAbstract024 } from "react-icons/gi"; // Alternative 3D icon

const projectData = [
  {
    title: "MERN Auth System",
    desc: "Secure authentication system with JWT, OAuth, role-based access, and email verification. Built with React, Node.js, Express & MongoDB.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "#",
    github: "#",
    featured: true,
    stars: 42,
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store with cart, payment integration, admin dashboard, product filters, and real-time inventory management.",
    img: "/public/assets/ecom.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Context API",
    ],
    live: "https://e-commerce-website-nd1c.onrender.com",
    github: "https://github.com/amanverma09/E-Commerce-Website",
    featured: true,
    stars: 58,
  },
  {
    title: "CRM Dashboard",
    desc: "Comprehensive customer relationship management system with analytics, team collaboration, activity tracking, and reporting.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    tags: ["React", "Chart.js", "Firebase", "Material UI", "Socket.io"],
    live: "https://example.com",
    github: "https://github.com",
    featured: false,
    stars: 31,
  },
  {
    title: "Photography Portfolio",
    desc: "A stunning portfolio website for photographers featuring image galleries, client proofing, and blog integration.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&auto=format&fit=crop",
    tags: ["React", "DND Kit", "Framer Motion", "Cloudinary", "Vercel"],
    live: "https://nileshphotoghraphy.netlify.app/",
    github: "https://github.com/amanverma09?tab=repositories",
    featured: true,
    stars: 67,
  },
  {
    title: "Real-time Chat App",
    desc: "Coming soon — this project will be built using Socket.io along with Node.js, React, Express, and MongoDB to deliver smooth and reliable real-time communication.",
    img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=900&auto=format&fit=crop",
    tags: [
      "Socket.io",
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "Node.js",
      "Tailwind",
    ],
    live: "#ComingSoon",
    github: "#ComingSoon",
    featured: false,
    stars: "🫡",
  },
  {
    title: "Driving School Management System",
    desc: "A modern platform for students to book classes, track progress, manage schedules, and access learning resources with ease.",
    img: "/public/assets/drSchool2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    live: "https://thepriyanshidrivingschool.netlify.app/",
    github: "https://github.com/ShivSinghB/Driving-School",
    featured: true,
    stars: 112,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((p) => (filter === "featured" ? p.featured : true));

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />

      {/* Floating 3D Elements - Using available icons */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-500/30 rounded-full flex items-center justify-center"
      >
        <FaCube className="text-purple-400/30 text-2xl" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-blue-500/30 rounded-full flex items-center justify-center"
      >
        <GiAbstract024 className="text-blue-400/30 text-3xl" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <FaCube className="text-5xl text-purple-400 animate-spin-slow" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-900">
                Projects
              </span>
            </h2>
            <FaRocket className="text-5xl text-cyan-400 animate-bounce" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Presenting my standout work, with modern technologies and creative
            problem-solving.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-12"
        >
          {["all", "featured"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize ${
                filter === type
                  ? "bg-gradient-to-r from-white/10 to-yellow-300 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {type} {type === "featured" && "⭐"}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 200 },
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur opacity-0 group-hover:opacity-70 transition-all duration-500" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                    >
                      <FaStar /> Featured
                    </motion.div>
                  )}

                  {/* GitHub Stars */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> {project.stars}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-black-500 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-500/10 text-white rounded-lg font-medium text-sm"
                    >
                      <FaExternalLinkAlt /> View Details
                    </motion.button>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-cyan-400 border border-white/10"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-purple-400 border border-white/10"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Lines */}
              {hoveredIndex === index && (
                <>
                  <motion.div
                    className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"
                    initial={{ opacity: 0, x: -10, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400"
                    initial={{ opacity: 0, x: 10, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"
                    initial={{ opacity: 0, x: -10, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400"
                    initial={{ opacity: 0, x: 10, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-500/10  border border-white/10 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
          >
            <a
              href="https://github.com/amanverma09?tab=repositories"
              target="_blank"
            >
              {" "}
              View All Projects on GitHub →
            </a>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </button>

              <div className="h-64 md:h-80 relative overflow-hidden">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selected.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    {selected.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold flex items-center gap-1">
                        <FaStar /> Featured Project
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-white/80">
                      <FaStar className="text-yellow-400" /> {selected.stars}{" "}
                      stars
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selected.desc}
                </p>

                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selected.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl text-cyan-300 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom animation to tailwind config */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
