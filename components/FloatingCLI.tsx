"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

type Line = {
  type: "input" | "output" | "error" | "system";
  text: string;
};

const commands: Record<string, () => string[]> = {
  whoami: () => [
    `👩‍💻 ${portfolioData.name}`,
    `📌 ${portfolioData.title}`,
    `🎓 ${portfolioData.subtitle}`,
    `📍 ${portfolioData.location}`,
  ],
  skills: () => [
    "🗣️  Languages  : " + portfolioData.skills.languages.join(", "),
    "🎨  Frontend   : " + portfolioData.skills.frontend.join(", "),
    "⚙️   Backend    : " + portfolioData.skills.backend.join(", "),
    "🧠  AI & NLP   : " + portfolioData.skills.ai_nlp.join(", "),
    "🛠️   Tools      : " + portfolioData.skills.tools.join(", "),
  ],
  projects: () =>
    portfolioData.projects.map(
      (p, i) => `${i + 1}. ${p.title} — ${p.tags.join(", ")}`,
    ),
  contact: () => [
    `✉️  Email    : ${portfolioData.email}`,
    `🐙  GitHub   : ${portfolioData.github}`,
    `💼  LinkedIn : ${portfolioData.linkedin}`,
  ],
  education: () => [
    "🎓 BSc (Hons) Information Technology",
    "📌 Specialization: Artificial Intelligence",
    "🏫 SLIIT — Sri Lanka Institute of Information Technology",
    "📅 Currently in Year 3",
  ],
  languages: () =>
    portfolioData.languages.map(
      (l) => `🌐 ${l.name} — ${l.level}${l.cert ? " | " + l.cert : ""}`,
    ),
  help: () => [
    "Available commands:",
    "  whoami      — who is Pubudini?",
    "  skills      — technical skills",
    "  projects    — portfolio projects",
    "  contact     — get in touch",
    "  education   — academic background",
    "  languages   — spoken languages",
    "  clear       — clear terminal",
    "  help        — show this menu",
  ],
  clear: () => [],
};

export default function FloatingCLI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { type: "system", text: "Welcome to Pubudini's terminal 👾" },
    { type: "system", text: 'Type "help" to see available commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (!trimmed) return;

    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const newLines: Line[] = [
      ...lines,
      { type: "input", text: `> ${trimmed}` },
    ];

    if (trimmed === "clear") {
      setLines([
        { type: "system", text: 'Type "help" to see available commands.' },
      ]);
      setInput("");
      return;
    }

    if (commands[trimmed]) {
      const output = commands[trimmed]();
      output.forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({
        type: "error",
        text: `Command not found: "${trimmed}". Type "help" for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : history[newIndex]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#020817] border border-blue-500/50 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 hover:border-blue-400 hover:shadow-blue-400/30 transition-all duration-200"
      >
        <span className="text-lg">{isOpen ? "✕" : ">_"}</span>
      </motion.button>

      {/* CLI Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[340px] md:w-[420px] rounded-2xl border border-blue-500/20 bg-[#020817]/95 backdrop-blur-md shadow-2xl shadow-blue-500/10 overflow-hidden"
          >
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-blue-500/10 bg-blue-500/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-blue-400/70 font-mono">
                pubudini@portfolio ~ $
              </span>
            </div>

            {/* Output Area */}
            <div className="h-64 overflow-y-auto px-4 py-3 font-mono text-xs space-y-1">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === "input"
                      ? "text-cyan-400"
                      : line.type === "error"
                        ? "text-red-400"
                        : line.type === "system"
                          ? "text-blue-400/70"
                          : "text-[#e2e8f0]"
                  }
                >
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-blue-500/10 bg-blue-500/5">
              <span className="text-cyan-400 font-mono text-xs">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-xs font-mono text-[#e2e8f0] placeholder-blue-400/30 focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
