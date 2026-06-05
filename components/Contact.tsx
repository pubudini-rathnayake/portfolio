"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              I&apos;m currently open to new opportunities — whether it&apos;s a full-time
              role, freelance project, or just a interesting conversation about
              NLP and multilingual AI. My inbox is always open!
            </p>

            {/* Contact Links */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                  ✉
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-[#606060] text-sm">
                    {portfolioData.email}
                  </p>
                </div>
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                  ⌨
                </div>
                <div>
                  <p className="text-white text-sm font-medium">GitHub</p>
                  <p className="text-[#606060] text-sm">
                    github.com/pubudini-rathnayake
                  </p>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                  in
                </div>
                <div>
                  <p className="text-white text-sm font-medium">LinkedIn</p>
                  <p className="text-[#606060] text-sm">
                    linkedin.com/in/pubudini-rathnayake
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5"
          >
            <h3 className="text-white font-semibold text-lg mb-6">
              Send a Message
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[#606060] text-sm mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#404040] focus:outline-none focus:border-indigo-500/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-[#606060] text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#404040] focus:outline-none focus:border-indigo-500/50 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-[#606060] text-sm mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#404040] focus:outline-none focus:border-indigo-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              <a
                href={`mailto:${portfolioData.email}`}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-center"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#404040] text-sm">
            © 2026 {portfolioData.name}. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-[#404040] text-sm">Designed & developed with 🤍</p>
        </motion.div>
      </div>
    </section>
  );
}
