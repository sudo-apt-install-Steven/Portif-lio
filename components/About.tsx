"use client";

import { motion } from "framer-motion";
import { Check, Code2, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const highlights = [
  "Técnico em Informática pelo IFRO",
  "Experiência com web, APIs e mobile",
  "Interesse em custom ROMs, root e sistemas",
  "Foco em interfaces responsivas e limpas",
];

const techStack = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
];

const timeline = [
  { icon: GraduationCap, title: "Formação técnica", text: "Base sólida em informática, lógica, banco de dados e desenvolvimento." },
  { icon: Code2, title: "Prática constante", text: "Projetos frontend e backend para transformar estudo em aplicação real." },
  { icon: Rocket, title: "Evolução profissional", text: "Aprimorando arquitetura, UI/UX, acessibilidade e performance." },
];

export default function About() {
  return (
    <section id="about" className="section-wrap relative min-h-screen w-full overflow-hidden bg-[#0b0b0b]/90 px-5 py-24 md:px-10 lg:px-20">
      <div className="aurora-orb right-[-10rem] top-20" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#ff8000]/20 blur-3xl" />
          <div className="liquid-card relative rounded-[2rem] p-3">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="/steven-avatar.jpg"
                alt="Steven Tayllon - Desenvolvedor Full Stack"
                width={720}
                height={720}
                priority
                className="aspect-square h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#ff8000]"
          >
            Sobre mim
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transformo estudo em <span className="text-[#ff8000]">experiências digitais</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-3xl text-base leading-8 text-gray-300"
          >
            Sou Steven Tayllon, desenvolvedor Full Stack em formação. Gosto de construir aplicações organizadas, visualmente fortes e funcionais — do backend com APIs e banco de dados até interfaces responsivas com React e Next.js.
          </motion.p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * index }}
                className="liquid-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ff8000]/15 text-[#ff8000]">
                    <Check size={18} />
                  </span>
                  <span className="text-sm font-semibold text-gray-200">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-9">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gray-500">Tech stack</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * index }}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#ff8000]/50"
                >
                  <tech.icon className="text-xl transition-transform group-hover:scale-110" style={{ color: tech.color }} />
                  <span className="text-sm font-semibold text-gray-200">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="liquid-card rounded-3xl p-6"
          >
            <item.icon className="mb-5 text-[#ff8000]" size={30} />
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
