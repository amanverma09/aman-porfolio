import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 1: Show after 1 second
    setTimeout(() => setStep(1), 1000);

    // Step 2: Show after 3 seconds (2 seconds of step 1)
    setTimeout(() => setStep(2), 3000);

    // Step 3: Show after 5 seconds (2 seconds of step 2)
    setTimeout(() => setStep(3), 5000);

    // Finish after 7 seconds total (2 seconds of step 3)
    setTimeout(() => onFinish(), 7000);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-black to-blue-900 overflow-hidden z-[9999] flex items-center justify-center">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Text Display - Ek step mein ek hi line */}
        <div className="h-24 flex items-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Hello There 👋
                </h1>
                <p className="text-lg text-gray-300">
                  Let me introduce myself...
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  I'm Aman Bhamuriya
                </h1>
                <p className="text-lg text-gray-300 mt-2">
                  Full Stack Developer
                </p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Welcome! ✨
                </h1>
                <p className="text-lg text-gray-300">
                  Ready to explore my portfolio?
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Simple Loading Animation */}
        <div className="w-64">
          {/* <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{
                width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div> */}
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-sm text-gray-400 mt-2 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {step === 1 && "Getting ready..."}
            {step === 2 && "Almost there..."}
            {step === 3 && "Loading complete!"}
          </motion.p>
        </div>

        {/* Simple Progress Indicators */}
        <div className="flex gap-3 mt-4">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              className={`w-3 h-3 rounded-full ${
                step >= num
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-white/30"
              }`}
              animate={step === num ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, repeat: 1 }}
            />
          ))}
        </div>

        {/* Final Sparkle Effect */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2"
          >
            {["✨", "🌟", "💫"].map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-2xl"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bottom Hint */}
      <motion.div
        className="absolute bottom-8 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Made with ❤️ by Aman
      </motion.div>
    </div>
  );
}
