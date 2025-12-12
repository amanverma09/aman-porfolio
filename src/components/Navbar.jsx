import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <>
      {/* FLOATING NAVBAR */}
      <nav
        className="
        fixed left-1/2 -translate-x-1/2 top-5 z-50 
        w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%]
        bg-gradient-to-r from-[#E1BC37cc] via-[#151235cc] to-[#000000cc]
        backdrop-blur-xl border border-white/10
        rounded-[40px] px-6 py-3 shadow-[0_0_25px_rgba(0,0,0,0.3)]
        flex items-center justify-between
      "
      >
        <img src="/assets/logoSvg2.png" className="w-10 sm:w-12" />

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-60}
              onSetActive={() => setActive(item.id)}
              className="text-white font-semibold relative cursor-pointer"
            >
              {item.label}
              <span
                className={`
                  absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px]
                  bg-yellow-400 rounded-full transition-all duration-300
                  ${active === item.id ? "w-1/2" : "w-0"}
                `}
              ></span>
            </ScrollLink>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setMobileOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* MOBILE POPUP MENU */}
      {mobileOpen && (
        <div
          className="
          fixed inset-0 z-[60] flex items-center justify-center
          bg-black/60 backdrop-blur-sm
          animate-fadeIn
        "
        >
          {/* Glass Bubble Panel */}
          <div
            className="
            w-[80%] p-6 rounded-3xl
            bg-gradient-to-br from-[#E1BC37ee] via-[#151235ee] to-[#000000ee]
            shadow-2xl border border-white/10
            animate-scaleIn
          "
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <FiX
                className="text-white text-3xl cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />
            </div>

            {/* NAV LINKS */}
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setMobileOpen(false)}
                  onSetActive={() => setActive(item.id)}
                  className="text-white text-xl font-semibold"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn .3s ease forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-scaleIn {
            animation: scaleIn .3s ease forwards;
          }
          @keyframes scaleIn {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
}
