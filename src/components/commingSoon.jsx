import React from "react";
import { motion } from "framer-motion";

// Minimal "Coming Soon" fullscreen component
// Black & White — no email, no countdown

export default function ComingSoonHelmet() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Soft moving gradient glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1.6 }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <div className="absolute w-[40rem] h-[40rem] rounded-full bg-white blur-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Floating Helmet Icon Animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [-10, 10, -10], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="z-10"
      >
        <svg viewBox="0 0 600 480" className="w-64 h-64 drop-shadow-2xl">
          <g transform="translate(40,20)">
            <path d="M120 60 C40 60 10 140 10 220 C10 340 120 420 280 420 C440 420 550 340 550 220 C550 140 520 60 440 60 Z" fill="#111" stroke="#fff" strokeWidth="6" />
            <path d="M90 200 C150 140 360 140 460 200 C410 180 210 180 90 200 Z" fill="#fff" opacity="0.96" />
            <path d="M150 320 C180 360 380 360 410 320" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-24 w-full text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider uppercase">Coming Soon</h1>
        <p className="mt-3 text-sm md:text-base text-gray-300 tracking-widest">HV HELMETS</p>
      </motion.div>

    </div>
  );
}
