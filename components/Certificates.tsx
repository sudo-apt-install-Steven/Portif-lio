"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certificatePoints = ["Cursos e workshops", "Aprendizado contínuo", "Evolução documentada"];

export default function Certificates() {
  return (
    <section id="certificates" className="section-wrap relative w-full overflow-hidden bg-[#090909] px-5 py-24 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#ff8000]">Certificados</p>
          <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Conhecimento validado e <span className="text-[#ff8000]">em expansão</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Reuni meus certificados em uma pasta pública para facilitar a visualização da minha trajetória de estudos, eventos e capacitações.
          </p>
        </motion.div>

        <motion.a
          href="https://drive.google.com/drive/folders/1iQVx9WJPhlhyE4dUFxUPPPKVCnVpVagE?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-card group relative rounded-[2rem] p-8 md:p-10"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
        >
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative z-10">
            <div className="mb-7 grid h-20 w-20 place-items-center rounded-3xl border border-blue-300/20 bg-blue-400/10 text-blue-300 shadow-[0_0_42px_rgba(96,165,250,0.2)]">
              <Award size={40} />
            </div>
            <h3 className="text-2xl font-black text-white md:text-4xl">Certificados e Conquistas</h3>
            <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
              Acesse a pasta com certificados de cursos, workshops e eventos que fazem parte da minha jornada como desenvolvedor.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {certificatePoints.map((point) => (
                <span key={point} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs font-bold text-gray-300">
                  <ShieldCheck size={16} className="text-blue-300" /> {point}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition group-hover:translate-x-1">
              Ver no Drive <ExternalLink size={17} />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
