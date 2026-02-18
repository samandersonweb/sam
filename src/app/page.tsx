"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Work" },
  { id: "react", label: "React" },
  { id: "website", label: "Website" },
  { id: "blogs", label: "Blogs" },
  { id: "ecommerce", label: "E-Commerce" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-zinc-50 selection:bg-primary/30">
      <Navbar />

      <div className="lg:pl-24 bg-background">
        <Hero />

        <About />

        <section id="projects" className="py-24 md:py-40 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="flex flex-col xl:flex-row justify-between xl:items-end mb-24 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <span className="text-zinc-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Case Studies</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 uppercase">Projects<span className="text-primary italic">.</span></h2>
              </motion.div>

              <div className="flex flex-wrap gap-2 p-2 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] h-fit w-full md:w-fit">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.id
                      ? "bg-white text-black shadow-lg"
                      : "text-zinc-500 hover:text-white"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 xl:grid-cols-2 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
        </section>

        <Skills />
        <GithubActivity />
        <Contact />

      </div>
    </main>
  );
}
