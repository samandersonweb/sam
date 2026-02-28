"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-stretch">
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
              </span> for a quick response, or {" "}
              <span className="relative inline-block">
                <span className="text-primary font-black">schedule a short meeting</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary/40"
                />
              </span> so we can discuss your goals in detail.
            </motion.div>

            <div className="space-y-6">
              {/* Main Contact Action */}
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

              {/* Social Connection Hub */}
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

          <motion.form
            action="https://formsubmit.co/849e1f62f93639fc0fddfa16ba0a96f2"
            method="POST"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:gap-8 h-full"
          >
            {/* Form configuration for FormSubmit.co */}
            <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://samandersonweb.com/success" />

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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full py-6 md:py-8 bg-white border border-white hover:border-primary text-black hover:text-white font-black uppercase tracking-[0.4em] text-xs rounded-none overflow-hidden transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#050505] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />

              {/* Button Action Lines */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-100" />

              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <div className="relative z-20 flex items-center justify-center gap-5">
                <span>Request Appointment</span>
                <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                  <ArrowRight size={18} className="absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[250%]" />
                  <ArrowRight size={18} className="absolute -translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                </div>
              </div>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
