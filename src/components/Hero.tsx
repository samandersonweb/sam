"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Linkedin, Github } from "lucide-react";
import WorkShowcase from "./WorkShowcase";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-grid pt-48 lg:pt-0">
      <div className="container-wide relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-12 xl:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Boutique Intro Badge */}
              <div className="flex items-center gap-6 mb-12">
                <div className="px-5 py-2 rounded-full glass border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] text-falcon-sm tracking-[0.2em] leading-none">
                    Boutique Digital Architect
                  </span>
                </div>
                <div className="hidden md:block h-[1px] w-12 bg-zinc-800" />
              </div>

              {/* Sophisticated Layered Typography - Now with spinning trigger next to name */}
              <h1 className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase mb-12 md:mb-16">
                <span className="flex items-start justify-between w-full relative">
                  <span>Sam</span>
                  <div className="lg:hidden relative -top-[5vw] scale-75 pr-[5vw]">
                    <WorkShowcase />
                  </div>
                </span>
                <span className="text-gradient italic relative inline-block">
                  Anderson
                </span>
              </h1>

              {/* Architectural Grid Split */}
              <div className="flex flex-col xl:flex-row xl:items-start gap-12 md:gap-24 relative">
                {/* Side Vertical Rule */}
                <div className="hidden xl:block absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 to-transparent" />

                <div className="flex flex-col gap-8 flex-1">
                  <p className="text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-xl font-medium leading-[1.15] tracking-tight">
                    Crafting <span className="text-white">high-fidelity</span> digital products where architectural precision meets <span className="text-gradient italic font-black">creative soul.</span>
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-falcon-sm tracking-[0.3em]">
                    React.js <span className="text-zinc-800 font-sans not-italic">/</span> Next.js <span className="text-zinc-800 font-sans not-italic">/</span> TypeScript <span className="text-zinc-800 font-sans not-italic">/</span> UI Engine
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 mt-4 md:mt-0">
                  <a href="#projects" className="btn-premium flex items-center gap-6 group px-10 py-6">
                    EXPLORE WORK
                    <div className="relative overflow-hidden w-6 h-6">
                      <ArrowDownRight size={24} className="group-hover:translate-x-full group-hover:-translate-y-full transition-all duration-500" />
                      <ArrowDownRight size={24} className="absolute inset-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/samanderson99/" target="_blank" className="p-5 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-white text-zinc-400 hover:text-black transition-all duration-500">
                      <Linkedin size={22} />
                    </a>
                    <a href="https://github.com/samandersonweb" target="_blank" className="p-5 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-white text-zinc-400 hover:text-black transition-all duration-500">
                      <Github size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Standard Background Watermark */}
      <div className="absolute bottom-[-5%] right-[-2%] text-[20vw] font-sans font-black text-primary/[0.01] leading-none select-none pointer-events-none uppercase tracking-tighter">
        react.expert
      </div>

      {/* Technical Focus Element */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black tracking-[0.8em] uppercase text-zinc-800 -rotate-90 origin-center translate-y-[-60px]">Scroll</span>
        <div className="h-20 w-[1px] bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
