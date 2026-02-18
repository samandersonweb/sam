"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-zinc-950/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative flex items-center justify-center lg:justify-start group"
          >
            {/* The "Gallery" Frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              {/* Main Image Mask */}
              <div className="relative w-[300px] md:w-[380px] aspect-[1/1.2] rounded-[4rem] md:rounded-[6rem] overflow-hidden glass border-white/5 shadow-2xl">
                <img
                  src="/profilepic.jpeg"
                  alt="Sam Anderson"
                  className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Architectural Outline */}
              <motion.div
                animate={{ rotate: 180, scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-primary/20 rounded-[5rem] md:rounded-[7rem] pointer-events-none z-10"
              />
            </motion.div>

            {/* Premium Light Burst */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />

            {/* Minimal Decorative Text */}
            <div className="absolute -left-12 top-1/2 -rotate-90 hidden xl:block">
              <span className="text-[10px] font-black tracking-[0.8em] text-zinc-800 uppercase">Architecture / Precision</span>
            </div>
          </motion.div>

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

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tighter leading-[0.9] uppercase">
              Architecting <br />
              Complexity into <br />
              <span className="text-gradient font-black">Elegance.</span>
            </h2>

            <div className="space-y-6 md:space-y-10 text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
              <p>
                I'm a mid-level expert in <span className="text-white">React.JS, Next.js, Express.JS,</span> and <span className="text-white">TypeScript</span>.
                I enjoy it a lot when I do code, having already built over 40 responsive websites with a focus
                on clean architecture and user experience.
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
