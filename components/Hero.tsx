"use client";

import { motion } from "framer-motion";
import Orb from "./Orb";

export default function Hero() {
  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden snap-start snap-always">
      <Orb
        hoverIntensity={2}
        rotateOnHover
        hue={0}
        forceHoverState={false}
        backgroundColor="#000000"
      />
      
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-orbitron font-black text-white tracking-widest relative z-20"
          style={{
            textShadow: "0 0 40px rgba(255, 128, 0, 0.4)",
          }}
        >
          STEVEN TAYLLON
        </motion.h1>

        {/* Glow behind text */}
        <motion.div 
            className="absolute inset-0 bg-[#ff8000] blur-[100px] opacity-20 z-10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        />

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xl text-gray-400 font-light tracking-widest uppercase z-20"
        >
            Desenvolvedor Full Stack
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            </div>
        </div>
      </motion.div>
    </section>
  );
}
