import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingCLI from "@/components/FloatingCLI";

export default function Home() {
  return (
    <main className="grid-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingCLI />
    </main>
  );
}
