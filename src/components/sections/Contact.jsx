import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id_here",
        "template_id_here",
        form.current,
        "public_key_here"
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          form.current.reset();
        },
        () => alert("Failed to send message!")
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-transparent"
    >
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-yellow-300 text-4xl opacity-40 select-none"
          style={{ top: `${10 + i * 6}%`, left: `${(i * 13) % 100}%` }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity }}
        >
          o
        </motion.span>
      ))}

      {/* Emojis */}
      <motion.div
        className="absolute left-8 top-20 text-5xl opacity-50"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💌
      </motion.div>

      <motion.div
        className="absolute right-10 bottom-20 text-6xl opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💛
      </motion.div>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-extrabold mb-14 text-gray-400"
      >
        Contact <span className="text-yellow-600 drop-shadow-lg">Me</span>
      </motion.h2>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-300">
            Let's Create Something
            <span className="text-pink-500"> Beautiful</span>{" "}
            <span className="text-yellow-500">Together</span> ✨
          </h3>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I build{" "}
            <span className="text-blue-600 font-semibold">
              modern & animated websites
            </span>{" "}
            that perform fast and look stunning. Drop a message -{" "}
            <span className="text-green-600 font-semibold">
              I reply within minutes!
            </span>
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:your-email@gmail.com"
              className="flex items-center gap-3 text-yellow-600 hover:text-yellow-700 transition font-medium"
            >
              <FaEnvelope size={22} /> amanbhamuriya9752@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/aman-bhamuriya/"
              target="_blank"
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition font-medium"
            >
              <FaLinkedin size={26} /> Connect on LinkedIn
            </a>

            <a
              href="https://wa.me/9752745428"
              target="_blank"
              className="flex items-center gap-3 text-green-600 hover:text-green-700 transition font-semibold"
            >
              <FaWhatsapp size={26} /> Message on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT (FORM) */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-black/20 p-10 rounded-2xl shadow-2xl border border-white/30"
        >
          <div className="grid gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="px-4 py-3 border rounded-lg shadow-sm focus:outline-yellow-400 bg-black/40"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="px-4 py-3 border rounded-lg shadow-sm focus:outline-yellow-400 bg-black/40"
            />

            <textarea
              name="message"
              required
              placeholder="Write your message..."
              className="px-4 py-3 border rounded-lg shadow-sm focus:outline-yellow-400 h-32 bg-black/40"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-cyan-500/10 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition cursor-pointer"
            >
              Send Message ✨
            </button>

            {sent && (
              <p className="text-green-600 font-medium text-center text-lg">
                Message Sent Successfully ✔
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
