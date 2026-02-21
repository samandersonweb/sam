"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col glass-card rounded-[2.5rem] overflow-hidden hover:bg-zinc-900/60 transition-all duration-700"
    >
      <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.8rem]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="p-10 pt-6 flex flex-col flex-grow">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">{project.title}</h3>
            <div className="flex gap-3 shrink-0">
              <a href={project.code} className="p-3 border border-white/5 rounded-2xl hover:bg-white/5 transition-all text-zinc-500 hover:text-white">
                <Github size={20} />
              </a>
              <a href={project.link} className="p-3 bg-white text-black rounded-2xl hover:bg-zinc-200 transition-all">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-zinc-500 text-base md:text-lg mb-8 leading-relaxed font-medium line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-auto">
          <div className="p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-3xl">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 md:mb-3 block">Impact</span>
            <p className="text-zinc-200 font-bold text-xs md:text-sm leading-tight italic line-clamp-2">"{project.results}"</p>
          </div>
          <div className="p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-3xl flex flex-col justify-center">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2 md:mb-3 block">Stack</span>
            <div className="flex flex-wrap gap-2 text-zinc-400">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
