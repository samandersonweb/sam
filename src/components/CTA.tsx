"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3rem] p-16 md:p-24 overflow-hidden text-center group"
        >
          {/* Background Highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              READY TO <span className="text-gradient">SCALE?</span>
            </h2>
            <p className="text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
              Let's build something that sets you apart. High performance,
              impeccable design, and unmatched stability.
            </p>

            <button className="btn-premium px-12 py-6 text-xl flex items-center gap-3 mx-auto">
              SECURE A SESSION
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </motion.div>
      </div>
    </section>
  );
}
