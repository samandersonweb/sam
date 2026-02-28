"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ArchitectureScanner() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="relative flex items-center justify-center lg:justify-start py-20">
      <div className="relative z-20 w-full max-w-[280px] md:max-w-[380px] flex items-center justify-center">

        <div className="relative aspect-[1/1.2] w-full rounded-[3rem] md:rounded-[5rem] overflow-hidden glass border-white/10 shadow-2xl z-20">
          <img
            src="/profilepic.jpeg"
            alt="Sam Anderson"
            className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-80" />

          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-primary/60 shadow-[0_0_15px_rgba(122,170,206,0.8)] z-30"
          />

          <motion.div
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[2px] bg-primary/40 shadow-[0_0_15px_rgba(122,170,206,0.6)] z-30"
          />
        </div>

        {isDesktop && (
          <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1000px" }}>
            <motion.div
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateY: [0, -10, 10, 0],
                translateZ: [40, 60, 40]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 border-2 border-primary/20 rounded-[4rem] md:rounded-[6rem] z-40"
              style={{ transformStyle: "preserve-3d" }}
            />

            <motion.div
              animate={{
                rotateX: [0, -5, 5, 0],
                rotateY: [0, 5, -5, 0],
                translateZ: [-40, -20, -40]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-12 border-2 border-white/5 rounded-[5rem] md:rounded-[7.5rem] -z-10"
              style={{ transformStyle: "preserve-3d" }}
            />

            <motion.div
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/60 z-50 rounded-tl-3xl"
            />
            <motion.div
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/60 z-50 rounded-br-3xl"
            />
          </div>
        )}

      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-zinc-950/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <ArchitectureScanner />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10 text-primary">
              <div className="h-[2px] w-12 bg-current" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tighter leading-[0.9] uppercase">
              Architecting <br />
              Complexity into <br />
              <span className="text-gradient font-black">Elegance.</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
              <p>
                I'm a specialist in <span className="text-white">React.JS, Next.js,</span> and <span className="text-white">TypeScript</span> with a heavy focus on <span className="text-white">Pixel Perfect Design</span>.
                I enjoy it a lot when I do code, having already built over 40 responsive websites with a focus
                on clean architecture and design-to-code accuracy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20 pt-10 md:pt-16 border-t border-white/5">
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-tighter uppercase italic leading-none">40<span className="text-primary">+</span></h4>
                <p className="text-zinc-600 font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">Websites Built</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-tighter uppercase italic leading-none">05<span className="text-primary">+</span></h4>
                <p className="text-zinc-600 font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">Core Stack Skills</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
