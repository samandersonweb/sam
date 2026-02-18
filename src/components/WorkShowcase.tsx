"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";

export default function WorkShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video showcase playback error:", err));
    }
  }, [isOpen]);

  const modalPart = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 md:p-12 bg-zinc-950/95 backdrop-blur-3xl"
          onClick={toggleModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden bg-black border border-white/10 shadow-2xl"
          >
            <button
              onClick={toggleModal}
              className="absolute top-8 right-8 z-[1000000] close-circular"
            >
              <X size={24} />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-8 right-8 z-[1000000] w-12 h-12 rounded-full bg-zinc-900/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all shadow-xl"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/work-showcase.mp4"
              loop
              muted={isMuted}
              playsInline
            />

            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                className="h-full bg-primary shadow-[0_0_20px_#7AAACE]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.button
        onClick={toggleModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.85 }}
        className="video-name-trigger group relative z-[50]"
      >
        <Play size={28} className="fill-white transition-colors group-hover:fill-primary ml-1" />
      </motion.button>

      {mounted && typeof document !== 'undefined' ? createPortal(modalPart, document.body) : null}
    </>
  );
}
