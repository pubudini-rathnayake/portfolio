"use client";

import { motion } from "framer-motion";

export default function PixelCharacter() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-32 h-32 md:w-48 md:h-48"
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Antenna */}
        <rect x="15" y="1" width="2" height="3" fill="#06b6d4" />
        <rect x="14" y="0" width="4" height="2" fill="#06b6d4" />
        <rect x="15" y="1" width="2" height="1" fill="#ffffff" opacity="0.6" />

        {/* Head */}
        <rect x="9" y="4" width="14" height="12" fill="#1e3a5f" />
        <rect x="10" y="5" width="12" height="10" fill="#1e40af" />

        {/* Head shine */}
        <rect x="11" y="6" width="4" height="2" fill="#3b82f6" opacity="0.5" />

        {/* Eyes */}
        <rect x="11" y="8" width="3" height="3" fill="#06b6d4" />
        <rect x="18" y="8" width="3" height="3" fill="#06b6d4" />

        {/* Eye glow */}
        <rect x="11" y="8" width="3" height="3" fill="#ffffff" opacity="0.3" />
        <rect x="18" y="8" width="3" height="3" fill="#ffffff" opacity="0.3" />
        <rect x="12" y="9" width="1" height="1" fill="#ffffff" />
        <rect x="19" y="9" width="1" height="1" fill="#ffffff" />

        {/* Mouth */}
        <rect x="13" y="13" width="6" height="1" fill="#06b6d4" />
        <rect x="12" y="14" width="1" height="1" fill="#06b6d4" />
        <rect x="19" y="14" width="1" height="1" fill="#06b6d4" />

        {/* Neck */}
        <rect x="14" y="16" width="4" height="2" fill="#1e3a5f" />

        {/* Body */}
        <rect x="8" y="18" width="16" height="10" fill="#1e3a5f" />
        <rect x="9" y="19" width="14" height="8" fill="#1e40af" />

        {/* Chest panel */}
        <rect x="12" y="20" width="8" height="5" fill="#1e3a5f" />
        <rect x="13" y="21" width="2" height="2" fill="#06b6d4" opacity="0.8" />
        <rect x="16" y="21" width="2" height="2" fill="#3b82f6" opacity="0.8" />
        <rect x="13" y="23" width="5" height="1" fill="#06b6d4" opacity="0.5" />

        {/* Body shine */}
        <rect x="10" y="20" width="3" height="2" fill="#3b82f6" opacity="0.3" />

        {/* Left Arm */}
        <rect x="4" y="18" width="4" height="8" fill="#1e3a5f" />
        <rect x="5" y="19" width="2" height="6" fill="#1e40af" />
        <rect x="4" y="26" width="4" height="2" fill="#06b6d4" />

        {/* Right Arm */}
        <rect x="24" y="18" width="4" height="8" fill="#1e3a5f" />
        <rect x="25" y="19" width="2" height="6" fill="#1e40af" />
        <rect x="24" y="26" width="4" height="2" fill="#06b6d4" />

        {/* Legs */}
        <rect x="10" y="28" width="5" height="4" fill="#1e3a5f" />
        <rect x="17" y="28" width="5" height="4" fill="#1e3a5f" />
        <rect x="11" y="29" width="3" height="2" fill="#1e40af" />
        <rect x="18" y="29" width="3" height="2" fill="#1e40af" />

        {/* Feet */}
        <rect x="9" y="31" width="7" height="1" fill="#06b6d4" />
        <rect x="16" y="31" width="7" height="1" fill="#06b6d4" />
      </svg>

      {/* Glow effect under character */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-blue-500/20 rounded-full blur-md" />
    </motion.div>
  );
}
