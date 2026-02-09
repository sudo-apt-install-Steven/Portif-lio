"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre Mim" },
  { id: "projects", label: "Projetos" },
  { id: "certificates", label: "Certificados" },
  { id: "socials", label: "Redes Sociais" },
  { id: "footer", label: "Contato" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef<number>(0);

  // Handle Resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Custom Smooth Scroll Helper
  const smoothScrollTo = useCallback((targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing: easeInOutCubic
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

  // Scroll Logic - Scroll livre com throttle apenas para snap entre seções
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow native scroll on mobile/touch devices - SEMPRE
      if (window.innerWidth < 768) return;

      // Se já está scrollando programaticamente, não interceptar
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Verificar se está na seção Projects - SEMPRE permitir scroll livre
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const scrollY = window.scrollY || window.pageYOffset;
        const projectsTop = projectsSection.offsetTop;
        const projectsHeight = projectsSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const isInProjects = scrollY >= projectsTop - 100 && 
                            scrollY < projectsTop + projectsHeight - viewportHeight + 100;
        
        // Se estiver dentro da seção Projects, SEMPRE permitir scroll livre
        if (isInProjects) {
          return; // Não interceptar, deixar scroll nativo funcionar
        }
      }

      // Para outras seções, verificar se está nas bordas antes de aplicar snap
      const currentSection = document.getElementById(activeSection);
      if (currentSection) {
        const scrollY = window.scrollY || window.pageYOffset;
        const sectionTop = currentSection.offsetTop;
        const sectionBottom = sectionTop + currentSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        const atTop = scrollY <= sectionTop + 150;
        const atBottom = scrollY + viewportHeight >= sectionBottom - 150;
        
        // Throttle: permitir apenas 1 snap scroll a cada 1.5 segundos
        const now = Date.now();
        const timeSinceLastScroll = now - lastScrollTime.current;
        
        // Só interceptar se estiver nas bordas E throttle permitir
        if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
          if (timeSinceLastScroll >= 1500) {
            e.preventDefault();
            
            const currentIndex = sections.findIndex((s) => s.id === activeSection);
            const direction = e.deltaY > 0 ? 1 : -1;
            const nextIndex = currentIndex + direction;

            if (nextIndex >= 0 && nextIndex < sections.length) {
              lastScrollTime.current = now;
              smoothScrollTo(sections[nextIndex].id);
            }
          } else {
            // Throttle ativo - permitir scroll livre mas não snap
            return;
          }
        }
        // Se não estiver nas bordas, permitir scroll livre
      }
    };

    // Add non-passive listener to be able to preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, isScrolling, smoothScrollTo]);

  // Intersection Observer - Corrigido com dependências estáveis
  useEffect(() => {
    if (isScrolling) return; // Não atualizar durante scroll programático

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrolling]); // Dependência estável

  // Keyboard Navigation - Com throttle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if(isScrolling || (now - lastScrollTime.current) < 1500) return; // Throttle

      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      let targetId: string | null = null;

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        if (currentIndex < sections.length - 1) targetId = sections[currentIndex + 1].id;
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (currentIndex > 0) targetId = sections[currentIndex - 1].id;
      } else if (e.key === "Home") {
         e.preventDefault();
         targetId = sections[0].id;
      } else if (e.key === "End") {
         e.preventDefault();
         targetId = sections[sections.length - 1].id;
      }

      if (targetId) {
        lastScrollTime.current = now;
        setIsScrolling(true);
        smoothScrollTo(targetId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, isScrolling, smoothScrollTo]);

  const scrollToTop = useCallback(() => {
    const now = Date.now();
    if ((now - lastScrollTime.current) < 1500) return; // Throttle
    
    lastScrollTime.current = now;
    setIsScrolling(true);
    smoothScrollTo("hero");
  }, [smoothScrollTo]);

  return (
    <>
      {/* Side Navigation Dots */}
      <nav 
        className={`fixed z-50 flex ${
          isMobile 
            ? "bottom-0 left-0 right-0 h-16 justify-center items-center bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/10 gap-6" 
            : "right-8 top-1/2 -translate-y-1/2 flex-col gap-5"
        }`}
        role="navigation"
        aria-label="Paginação principal"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => smoothScrollTo(id)}
            className="group relative flex items-center justify-center p-2"
            aria-label={`Navegar para seção ${label}`}
            aria-current={activeSection === id ? "true" : undefined}
          >
            {/* Tooltip (Desktop only) */}
            {!isMobile && (
              <span className="absolute right-full mr-4 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#ff8000]/20">
                {label}
              </span>
            )}
            
            {/* Dot */}
            <div
              className={`rounded-full transition-all duration-300 ease-out ${
                activeSection === id
                  ? "w-3 h-3 bg-[#ff8000] scale-125"
                  : "w-2 h-2 border-2 border-[#ff8000] bg-transparent group-hover:scale-125"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {activeSection !== "hero" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-[#1a1a1a] rounded-full border border-[#ff8000] text-[#ff8000] shadow-lg shadow-black/50 hover:bg-[#ff8000] hover:text-white transition-all hidden md:flex"
            aria-label="Voltar ao topo"
            whileHover={{ y: -5 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
