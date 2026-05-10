"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Sparkles } from "lucide-react";
import Orb from "./Orb";

const stats = [
  { value: "3+", label: "anos estudando" },
  { value: "9", label: "projetos publicados" },
  { value: "Full", label: "stack mindset" },
];

export default function Hero() {
  return (
    <section id="hero" className="section-wrap min-h-screen w-full flex items-center justify-center relative overflow-hidden px-5 pt-28 pb-16">
      <div className="aurora-orb left-[-8rem] top-24" aria-hidden="true" />
      <div className="aurora-orb bottom-[-8rem] right-[-6rem] [animation-delay:2s]" aria-hidden="true" />

      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <Orb hoverIntensity={1.6} rotateOnHover hue={18} forceHoverState={false} backgroundColor="#070707" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff8000]/25 bg-[#ff8000]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#ffb36b] lg:mx-0"
          >
            <Sparkles size={15} /> Portfolio Profissional
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-orbitron text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ textShadow: "0 0 48px rgba(255, 128, 0, 0.28)" }}
          >
            Steven <span className="block text-shimmer">Tayllon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0"
          >
            Desenvolvedor Full Stack em formação, criando interfaces modernas, APIs organizadas e experiências digitais com performance, responsividade e personalidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href="#projects" className="group rounded-full bg-[#ff8000] px-7 py-3 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_0_36px_rgba(255,128,0,0.36)] transition hover:-translate-y-1 hover:bg-[#ff9933]">
              Ver projetos
            </a>
            <a href="mailto:melos.s@estudante.ifro.edu.br" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#ff8000]/50 hover:text-[#ffb36b]">
              <Mail size={17} /> Contato
            </a>
            <a href="https://github.com/sudo-apt-install-Steven" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#ff8000]/50 hover:text-[#ffb36b]">
              <Github size={17} /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="liquid-card mx-auto w-full max-w-md rounded-[2rem] p-5"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
            <div className="mb-8 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-xs text-gray-500">portfolio.tsx</span>
            </div>
            <pre className="overflow-hidden whitespace-pre-wrap text-sm leading-7 text-gray-300">
              <code>{`const Steven = {
  role: "Full Stack Developer",
  stack: ["Next.js", "React", "Node", "MySQL"],
  focus: "Criar produtos bonitos e úteis",
  status: "Disponível para evoluir"
};`}</code>
            </pre>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="text-xl font-black text-[#ff8000]">{item.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-white/70 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        Scroll <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
