"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden relative">

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/20" />

      <div className="container-wide relative z-10 text-center">
        {/* Animated Check Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-center justify-center mb-12"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 border border-primary/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 border-t-2 border-primary/30 rounded-full"
          />

          <div className="relative w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <CheckCircle2 size={44} className="text-primary" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Pulsing outer glow */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute w-36 h-36 rounded-full bg-primary/10"
          />
        </motion.div>

        {/* Status tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-primary/20 bg-primary/5 mb-6"
        >
          <Zap size={10} className="text-primary animate-pulse" />
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Transmission Received</span>
          <Zap size={10} className="text-primary animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-6"
        >
          Message <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-600">
            Sent.
          </span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto mb-16 leading-relaxed font-medium"
        >
          Your message is on its way. I&apos;ll get back to you shortly — usually within <span className="text-white font-black">24 hours.</span>
        </motion.p>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-16 max-w-xl mx-auto border border-white/5"
        >
          {[
            { label: "Response Time", value: "< 24hrs" },
            { label: "Emails Answered", value: "100%" },
            { label: "Status", value: "Active" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center py-5 px-6 border-b sm:border-b-0 sm:border-r border-white/5 last:border-0 w-full"
            >
              <span className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">{item.value}</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Link href="https://samandersonweb.com" target="_blank">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-5 px-12 py-6 bg-white border border-white hover:border-primary text-black hover:text-white font-black uppercase tracking-[0.4em] text-xs rounded-none overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
              <span className="relative z-20">Return to Portfolio</span>
              <div className="relative z-20 w-5 h-5 flex items-center justify-center overflow-hidden">
                <ArrowRight size={18} className="absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[250%]" />
                <ArrowRight size={18} className="absolute -translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              </div>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
