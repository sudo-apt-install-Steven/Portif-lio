"use client";

import About from "@/components/About";
import Certificates from "@/components/Certificates";
import CustomCursor from "@/components/CustomCursor";
import FloatingLines from "@/components/FloatLines";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Socials from "@/components/Socials";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateCursorGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateCursorGlow, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursorGlow);
  }, []);

  return (
    <main className="site-shell relative bg-[#070707] text-white selection:bg-[#ff8000] selection:text-black overflow-x-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 hidden lg:block" aria-hidden="true">
        <FloatingLines
          lineCount={[6, 9, 6]}
          lineDistance={[7, 8, 7]}
          animationSpeed={0.55}
          interactive={false}
          parallax={false}
          linesGradient={["#ff8000", "#fff2dc", "#ff8000"]}
          mixBlendMode="screen"
        />
      </div>

      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[80] bg-[#070707] flex items-center justify-center flex-col gap-5"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="relative h-20 w-20 rounded-full border border-[#ff8000]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ff8000] shadow-[0_0_28px_#ff8000]" />
            </motion.div>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="text-[#ff8000] uppercase tracking-[0.5em] text-xs font-bold"
            >
              Inicializando
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <div aria-hidden={isLoading} className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Socials />
        <Footer />
      </div>
    </main>
  );
}
