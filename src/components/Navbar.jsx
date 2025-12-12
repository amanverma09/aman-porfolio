import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer">
          <img src="/assets/logoSvg2.png" alt="logo" className="w-12" />
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              onSetActive={() => setActive(item.id)}
              className={`cursor-pointer font-semibold text-lg transition relative
                ${active === item.id ? "text-yellow-400" : "text-white"}
              `}
            >
              {/* UNDERLINE ANIMATION */}
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0"}
                `}
              ></span>
            </ScrollLink>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl
          transition-all duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }
        `}
      >
        <div className="flex justify-end p-5">
          <FiX
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-8 mt-10">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              onSetActive={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
              className={`text-xl cursor-pointer font-semibold transition
                ${active === item.id ? "text-yellow-400" : "text-white"}
              `}
            >
              {item.label}
            </ScrollLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}
