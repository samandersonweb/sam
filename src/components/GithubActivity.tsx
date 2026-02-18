"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink } from "lucide-react";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  const username = "samandersonweb";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="github" className="py-24 md:py-40 relative overflow-hidden bg-zinc-950/40">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-10 text-primary">
            <div className="h-[2px] w-12 bg-current" />
            <span className="font-black uppercase tracking-[0.4em] text-[10px]">Open Source</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
            GitHub <span className="text-gradient">Activity.</span>
          </h2>

          {/* Profile & Graph Card */}
          <div className="w-full glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] flex flex-col items-center gap-12 border border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-[2rem] md:rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Circular Profile Pic */}
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-white/10 shadow-2xl relative z-20 group">
                <img
                  src="/profilepic.jpeg"
                  alt="Sam Anderson"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </div>

              {/* Spinning Architectural Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-primary/20 border-dashed z-10"
              />

              {/* Dynamic Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
            </motion.div>

            {/* Calendar Graph */}
            <div className="w-full overflow-hidden flex justify-center py-4 px-2">
              <div className="github-calendar-wrapper w-full max-w-full overflow-x-auto scrollbar-hide flex justify-center min-h-[150px]">
                {mounted ? (
                  <GitHubCalendar
                    username={username}
                    year={2023}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    theme={{
                      light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    labels={{
                      totalCount: "{{count}} contributions in 2023",
                    }}
                  />
                ) : (
                  <div className="w-full h-32 animate-pulse bg-white/5 rounded-xl flex items-center justify-center">
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Loading Graph...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats / CTA */}
            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                className="btn-premium flex items-center gap-4 group px-8 py-4"
              >
                VIEW ON GITHUB
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
    </section>
  );
}
