"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500 font-black uppercase tracking-widest text-sm mb-6 block">Inquiries</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-none">GET IN <br />TOUCH.</h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 md:mb-12 max-w-md font-medium leading-tight">
              Looking for the right team to push my career forward. Let's build something together.
            </p>

            <div className="space-y-4 md:space-y-6">
              <a href="mailto:samandersonweb@yahoo.com" className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-bold text-white hover:text-primary transition-colors group">
                <span className="p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                  <Mail size={24} />
                </span>
                samandersonweb@yahoo.com
              </a>

              <a href="https://www.linkedin.com/in/samanderson99/" target="_blank" className="flex items-center gap-3 md:gap-4 text-xl md:text-3xl font-bold text-white hover:text-primary transition-colors group">
                <span className="p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                  <Linkedin size={24} />
                </span>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-zinc-900 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-900 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
              />
            </div>
            <textarea
              placeholder="Tell me about your project or team..."
              rows={6}
              className="w-full bg-zinc-900 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-white text-sm md:text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
            />
            <button className="w-full py-4 md:py-6 bg-white text-black font-black uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 text-sm md:text-base">
              Transmit
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
