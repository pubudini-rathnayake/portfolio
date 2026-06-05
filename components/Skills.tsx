"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const skillCategories = [
  {
    label: "Languages",
    key: "languages" as const,
    icon: "🗣️",
  },
  {
    label: "Frontend",
    key: "frontend" as const,
    icon: "🎨",
  },
  {
    label: "Backend",
    key: "backend" as const,
    icon: "⚙️",
  },
  {
    label: "AI & NLP",
    key: "ai_nlp" as const,
    icon: "🧠",
  },
  {
    label: "Tools",
    key: "tools" as const,
    icon: "🛠️",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
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
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <p className="text-white font-medium">{category.label}</p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full border border-white/10 text-[#a0a0a0] bg-white/5 group-hover:border-indigo-500/20 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-white font-semibold text-xl mb-6">
            Languages & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {portfolioData.languages.map((lang) => (
              <div
                key={lang.name}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium">{lang.name}</p>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-indigo-500/20 text-indigo-400 bg-indigo-500/5">
                    {lang.level}
                  </span>
                </div>
                {lang.cert && (
                  <p className="text-[#606060] text-sm">{lang.cert}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
