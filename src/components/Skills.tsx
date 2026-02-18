"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, ShieldCheck, Palette } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-zinc-600" size={32} />,
    items: ["React.js", "JavaScript (ES6)", "TypeScript", "SASS", "jQuery", "Next.js"]
  },
  {
    category: "Backend & Data",
    icon: <Database className="text-zinc-600" size={32} />,
    items: ["Node.js", "Express.js", "Firebase", "MongoDB", "REST APIs", "Prisma"]
  },
  {
    category: "Design",
    icon: <Palette className="text-zinc-600" size={32} />,
    items: ["Photoshop", "Figma", "UI/UX", "Prototyping", "Responsive Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 bg-zinc-950/20">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 text-secondary">
              <div className="h-[2px] w-12 bg-current" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              Technical <br />
              <span className="text-gradient">Core.</span>
            </h2>
          </motion.div>
          <p className="text-zinc-500 max-w-sm text-lg font-medium leading-tight lg:text-right">
            Mid-level expert in modern full-stack development.
            Passionate about building scalable and beautiful digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[3rem]"
            >
              <div className="mb-8 md:mb-10 p-4 md:p-6 bg-white/[0.03] border border-white/5 w-fit rounded-[1.5rem] md:rounded-[2rem]">
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter">{skillGroup.category}<span className="text-primary italic">.</span></h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    className="px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-2xl text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/10 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
