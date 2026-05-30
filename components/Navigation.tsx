"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Home, BarChart2, Award, User, GitBranch, Github } from "lucide-react";

const sections = [
  { id: "hero", label: "Início", icon: Home },
  { id: "powerbi", label: "PowerBI", icon: BarChart2 },
  { id: "certificates", label: "Certificados", icon: Award },
  { id: "about", label: "Sobre Mim", icon: User },
  { id: "gitlab", label: "GitLab", icon: GitBranch },
  { id: "github", label: "GitHub", icon: Github },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const smoothScrollTo = useCallback((targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 550;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    requestAnimationFrame(animation);
  }, []);

  // Update active section based on scroll
  useEffect(() => {
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToTop = useCallback(() => {
    const now = Date.now();
    if ((now - lastScrollTime.current) < 800) return;
    
    lastScrollTime.current = now;
    setIsScrolling(true);
    smoothScrollTo("hero");
  }, [smoothScrollTo]);

  return (
    <>
      {/* Floating Pill Navigation */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,128,0,0.1)] flex items-center gap-1 sm:gap-2 w-max max-w-[95vw] overflow-x-auto no-scrollbar"
        role="navigation"
        aria-label="Navegação principal"
      >
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => smoothScrollTo(id)}
              onMouseEnter={() => setIsHovered(id)}
              onMouseLeave={() => setIsHovered(null)}
              className={`relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              aria-label={`Navegar para seção ${label}`}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-[#ff8000]/20 to-[#ff8000]/10 border border-[#ff8000]/30 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Hover Particles Effect */}
              {isHovered === id && !isActive && (
                <motion.div
                  layoutId="hover-pill"
                  className="absolute inset-0 bg-white/5 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <Icon size={isMobile ? 18 : 20} className="relative z-10" />
              {(!isMobile || isActive) && (
                <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
                  {label}
                </span>
              )}
              
              {/* Tiny active dot indicator for mobile */}
              {isMobile && isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff8000] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {activeSection !== "hero" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 sm:bottom-8 sm:right-8 z-40 p-3 bg-[#1a1a1a]/80 backdrop-blur-md rounded-full border border-[#ff8000]/50 text-[#ff8000] shadow-[0_0_15px_rgba(255,128,0,0.2)] hover:bg-[#ff8000] hover:text-white hover:shadow-[0_0_20px_rgba(255,128,0,0.5)] transition-all duration-300 flex"
            aria-label="Voltar ao topo"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
