"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Linkedin, Github, CheckCircle2, Zap } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/849e1f62f93639fc0fddfa16ba0a96f2", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-stretch">

          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-zinc-500 font-black uppercase tracking-widest text-sm mb-6 block">Inquiries</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-none">GET IN <br />TOUCH.</h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-zinc-400 mb-8 md:mb-12 max-w-2xl font-medium leading-relaxed"
            >
              <span className="relative inline-block">
                <span className="text-primary font-black">Email me</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary/40"
                />
              </span>{" "}for a quick response, or{" "}
              <span className="relative inline-block">
                <span className="text-primary font-black">schedule a short meeting</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary/40"
                />
              </span>{" "}so we can discuss your goals in detail.
            </motion.div>

            <div className="space-y-6">
              <motion.a
                href="mailto:samandersonweb@yahoo.com"
                whileHover={{ scale: 1.01 }}
                className="group relative flex items-center gap-4 p-6 glass-card rounded-[2rem] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 p-4 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                  <Mail size={22} className="text-white group-hover:text-primary transition-colors" />
                </div>
                <div className="relative z-10 flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-1">Direct Line</span>
                  <span className="text-xl md:text-2xl font-bold text-white tracking-tight break-all">samandersonweb@yahoo.com</span>
                </div>
              </motion.a>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/samanderson99/"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 group relative flex items-center gap-4 p-5 glass-card rounded-3xl"
                >
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <Linkedin size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/samandersonweb"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 group relative flex items-center gap-4 p-5 glass-card rounded-3xl"
                >
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <Github size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form or Success State ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <AnimatePresence mode="wait">

              {submitted ? (
                /* Success Panel */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center h-full text-center gap-8 py-16 border border-white/5 bg-[#050505] relative overflow-hidden"
                >
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

                  {/* Pulsing icon */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 -m-4 rounded-full bg-primary/10"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border border-primary/20 rounded-full"
                    />
                    <div className="relative w-20 h-20 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center">
                      <CheckCircle2 size={36} className="text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5">
                    <Zap size={9} className="text-primary animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Transmission Received</span>
                    <Zap size={9} className="text-primary animate-pulse" />
                  </div>

                  <div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-3">
                      Message <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-600">Sent.</span>
                    </h3>
                    <p className="text-sm text-zinc-500 max-w-xs mx-auto leading-relaxed">
                      I&apos;ll get back to you within <span className="text-white font-black">24 hours.</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-3 w-full border-t border-white/5">
                    {[
                      { label: "Response", value: "< 24hrs" },
                      { label: "Answered", value: "100%" },
                      { label: "Status", value: "Active" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center py-4 border-r border-white/5 last:border-0">
                        <span className="text-lg font-black text-white">{item.value}</span>
                        <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSubmitted(false)}
                    className="group relative px-10 py-4 bg-white border border-white hover:border-primary text-black hover:text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-none overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 z-10 delay-100" />
                    <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 z-10 delay-100" />
                    <span className="relative z-20">Send Another</span>
                  </motion.button>
                </motion.div>
              ) : (
                /* Form Panel */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 md:gap-8 h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-[#050505] border border-white/10 rounded-none p-5 md:p-6 text-white text-xs font-black uppercase tracking-[0.2em] focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-500 placeholder:text-zinc-700 peer"
                      />
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary peer-focus:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(122,170,206,0.6)] pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-[#050505] border border-white/10 rounded-none p-5 md:p-6 text-white text-xs font-black uppercase tracking-[0.2em] focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-500 placeholder:text-zinc-700 peer"
                      />
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary peer-focus:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(122,170,206,0.6)] pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative group flex-1 flex flex-col">
                    <textarea
                      name="message"
                      required
                      placeholder="Your Message..."
                      className="flex-1 w-full bg-[#050505] border border-white/10 rounded-none p-5 md:p-6 text-white text-xs font-black uppercase tracking-[0.2em] focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-500 placeholder:text-zinc-700 peer resize-none min-h-[200px]"
                    />
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent peer-focus:border-primary transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary peer-focus:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(122,170,206,0.6)] pointer-events-none" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: sending ? 1 : 1.02 }}
                    whileTap={{ scale: sending ? 1 : 0.98 }}
                    className="group relative w-full py-6 md:py-8 bg-white border border-white hover:border-primary text-black hover:text-white font-black uppercase tracking-[0.4em] text-xs rounded-none overflow-hidden transition-all duration-500 shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
                    <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                    <div className="relative z-20 flex items-center justify-center gap-5">
                      <span>{sending ? "Transmitting..." : "Request Appointment"}</span>
                      {!sending && (
                        <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                          <ArrowRight size={18} className="absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[250%]" />
                          <ArrowRight size={18} className="absolute -translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                        </div>
                      )}
                    </div>
                  </motion.button>
                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
