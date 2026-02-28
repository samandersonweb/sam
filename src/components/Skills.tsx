"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Palette, Zap, Code2, Layers, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "The Engine",
    description: "Core logic and standard protocols",
    icon: <Cpu className="text-primary" size={24} />,
    skills: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "JavaScript (ES6)", "TypeScript"]
  },
  {
    title: "Application Architecture",
    description: "Building scalable interfaces",
    icon: <Code2 className="text-secondary" size={24} />,
    skills: ["React.js", "Next.js", "Responsive Layouts"]
  },
  {
    title: "Precision & Design",
    description: "Perfect design-to-code bridging",
    icon: <Palette className="text-amber-400" size={24} />,
    skills: ["Figma to HTML", "Pixel Perfect Design", "Design Systems"]
  }
];

interface SkillGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

function SkillCard({ group, idx }: { group: SkillGroup; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-6 md:p-8 glass shadow-2xl rounded-[1.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[1.5rem]" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-current group-hover:scale-110 transition-transform duration-500">
            {group.icon}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-0.5">
              {group.title}<span className="text-primary">.</span>
            </h3>
            <p className="text-[9px] font-medium text-zinc-500 uppercase tracking-widest">{group.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {group.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-zinc-900/80 border border-white/5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Futuristic corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-transparent group-hover:border-primary/20 rounded-tr-[1.5rem] transition-all duration-700" />
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);

  return (
    <section id="skills" ref={containerRef} className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[180px] opacity-20 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10 md:mb-14 gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-primary">
              <Zap size={12} className="animate-pulse" />
              <span className="font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px]">Professional Arsenal</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-3">
              Technical <br />
              <span className="text-gradient">Core.</span>
            </h2>

          </motion.div>

          {/* Animated Tech Stack Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden xl:flex flex-col items-end gap-4"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-1 border-t-2 border-primary/40 rounded-full animate-[spin_3s_linear_infinite]" />
              <Layers className="text-primary/60" size={28} />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 text-right">
              wokring since <br /> 2020
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6 h-fit">
            {skillGroups.map((group, idx) => (
              <SkillCard key={group.title} group={group} idx={idx} />
            ))}
          </div>

          {/* Special Service Block: Appointment Setter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-fit group order-first lg:order-last"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex flex-col p-8 md:p-10 h-full bg-[#0A0A0A] rounded-[2rem] border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Premium Service</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-white">
                  Available as <br />
                  <span className="text-gradient">Appointment <br /> Setter.</span>
                </h3>

                <p className="text-sm md:text-base text-zinc-500 mb-6 max-w-sm leading-relaxed">
                  Extending my dedication and communication skills to help scale your business reach.
                  Reliable, professional, and result-oriented.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Zap size={12} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Availability</span>
                    </div>
                    <p className="text-lg font-black text-white italic">25h<span className="text-primary">+</span> / Week</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <CheckCircle2 size={12} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Rate Model</span>
                    </div>
                    <p className="text-lg font-black text-white italic truncate">Hourly Based</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative mt-6 w-full py-5 bg-white border border-white hover:border-primary text-black hover:text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-none overflow-hidden transition-all duration-500 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
                  <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  <div className="relative z-20 flex items-center justify-center gap-4">
                    <span>Hire Me Now</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
