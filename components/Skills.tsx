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
      </div>
    </section>
  );
}
