"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "certificates", label: "Certificados" },
  { id: "socials", label: "Redes" },
  { id: "footer", label: "Contato" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = useCallback((targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.25, 0.5, 0.75] }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-[#080808]/70 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:px-5"
      >
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-3 text-left"
            aria-label="Voltar para o início"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff8000] font-orbitron text-sm font-black text-black shadow-[0_0_24px_rgba(255,128,0,0.45)] transition-transform group-hover:scale-105">
              ST
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-bold leading-none text-white">Steven Tayllon</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#ff8000]">Full Stack</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeSection === id ? "text-black" : "text-gray-300 hover:text-white"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-[#ff8000]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
              aria-label="Menu mobile"
            >
              <div className="grid gap-2 pt-4">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      activeSection === id ? "bg-[#ff8000] text-black" : "bg-white/5 text-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {activeSection !== "hero" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            onClick={() => scrollToSection("hero")}
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-[#ff8000]/40 bg-[#101010]/80 text-[#ff8000] shadow-lg shadow-black/50 backdrop-blur-xl transition hover:bg-[#ff8000] hover:text-black md:bottom-8 md:right-8"
            aria-label="Voltar ao topo"
            whileHover={{ y: -4 }}
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
