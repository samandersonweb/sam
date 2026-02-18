"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail, Cpu, ExternalLink } from "lucide-react";
import Link from "next/link";
import WorkShowcase from "./WorkShowcase";

const navLinks = [
  { name: "Home", href: "#home", icon: <Home size={20} /> },
  { name: "About", href: "#about", icon: <User size={20} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
  { name: "Skills", href: "#skills", icon: <Cpu size={20} /> },
  { name: "Activity", href: "#github", icon: <ExternalLink size={20} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "github", "contact"];

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact");
        return;
      }

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed left-0 top-0 h-screen w-24 hidden lg:flex flex-col items-center justify-between py-12 z-50 border-r border-white/5 bg-zinc-950/20 backdrop-blur-3xl">
        <div />

        <div className="flex flex-col gap-10">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group p-4"
              >
                <div
                  className={`transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-zinc-500 group-hover:text-white"
                    }`}
                >
                  {link.icon}
                </div>

                <span className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded pointer-events-none tracking-widest">
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(122,170,206,0.6)]"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        <div className="pb-12 flex flex-col items-center gap-8">
          <div className="scale-[0.6] origin-center -mb-4">
            <WorkShowcase />
          </div>
        </div>
      </nav>

      <nav className="fixed top-0 left-0 right-0 lg:hidden h-20 flex items-center justify-between px-6 z-[60] bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="group">
          <motion.p className="text-xl font-black tracking-tighter text-white">
            SAM<span className="text-zinc-600 transition-colors group-hover:text-primary">.ANDERSON</span>
          </motion.p>
        </Link>
        <button
          className="relative z-[70] p-2 text-white bg-white/5 rounded-xl border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[61] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[400px] z-[62] lg:hidden bg-zinc-950 flex flex-col p-8 pt-32 shadow-2xl border-l border-white/5"
            >
              <div className="space-y-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-4xl font-black tracking-tighter uppercase transition-all flex items-center gap-6 ${activeSection === link.href.replace("#", "")
                        ? "text-primary italic translate-x-4"
                        : "text-zinc-600 hover:text-white"
                        }`}
                    >
                      <span className="text-[10px] font-bold tracking-widest text-zinc-800">0{idx + 1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 mb-12 flex flex-col items-center">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-6 text-center">Featured Showcase</p>
                <div className="scale-90">
                  <WorkShowcase />
                </div>
              </div>
              <div className="mt-auto pt-12 border-t border-white/5" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
