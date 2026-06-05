"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
              {portfolioData.about}
            </p>
            <div className="flex gap-4">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-indigo-500/50 text-indigo-400 rounded-full text-sm hover:bg-indigo-500/10 transition-all duration-200"
              >
                GitHub
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/10 text-[#a0a0a0] rounded-full text-sm hover:border-white/30 hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {/* Education */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-2">
                Education
              </p>
              <p className="text-white font-medium">
                BSc in Artificial Intelligence
              </p>
              <p className="text-[#606060] text-sm mt-1">
                Currently pursuing — Specializing in AI
              </p>
            </div>

            {/* Passion */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-2">
                Passion
              </p>
              <p className="text-white font-medium">
                NLP & Multilingual Development
              </p>
              <p className="text-[#606060] text-sm mt-1">
                Building systems that understand and communicate across
                languages
              </p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <p className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-2">
                Location
              </p>
              <p className="text-white font-medium">{portfolioData.location}</p>
              <p className="text-[#606060] text-sm mt-1">
                Open to remote opportunities worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
