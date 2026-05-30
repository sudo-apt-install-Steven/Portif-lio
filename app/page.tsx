"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import PowerBI from "@/components/PowerBI";
import Github from "@/components/Github";
import Gitlab from "@/components/Gitlab";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingLines from "@/components/FloatLines";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-[#0a0a0a] text-white selection:bg-[#ff8000] selection:text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <FloatingLines 
          linesGradient={['#ff8000', '#ffffff', '#ff8000']} 
          lineCount={[6]} 
          lineDistance={[5]} 
          animationSpeed={0.8}
        />
      </div>
      
      <AnimatePresence mode="wait">
        {isLoading && (
            <motion.div
                key="loader"
                className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center flex-col gap-4"
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-16 h-16 border-4 border-[#ff8000] border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.span 
                    animate={{ opacity: [0.5, 1, 0.5] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-[#ff8000] uppercase tracking-widest text-sm"
                >
                    Carregando
                </motion.span>
            </motion.div>
        )}
      </AnimatePresence>

      <div className={`${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Hero />
        <PowerBI />
        <Certificates />
        <About />
        <Gitlab />
        <Github />
        <Socials />
        <Footer />
      </div>
    </main>
  );
}
