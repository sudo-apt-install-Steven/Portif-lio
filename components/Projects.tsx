"use client";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  { 
    title: "API Policlínica", 
    category: "Backend", 
    description: "API REST para listar contatos de médicos com integração MySQL. Permite busca por nome e especialidade.",
    link: "https://github.com/sudo-apt-install-Steven/API_Policlinica",
    technologies: ["Node.js", "Express", "MySQL"],
    isPrivate: false
  },
  { 
    title: "API Suprema", 
    category: "Backend", 
    description: "API REST com serviços de cadastro, busca e exclusão. Desenvolvida com Express e MySQL.",
    link: "https://github.com/sudo-apt-install-Steven/API_Suprema",
    technologies: ["Node.js", "Express", "MySQL"],
    isPrivate: false
  },
  { 
    title: "BackEnd", 
    category: "Backend", 
    description: "Repositório com múltiplas APIs e exercícios práticos de backend, incluindo APIs de UFs, banco de dados e calculadoras.",
    link: "https://github.com/sudo-apt-install-Steven/BackEnd",
    technologies: ["Node.js", "Express", "MySQL"],
    isPrivate: false
  },
  { 
    title: "APIs Banco de Dados", 
    category: "Backend", 
    description: "API REST para gerenciamento de campeonatos com integração MySQL. Sistema completo de backend para gestão de dados.",
    link: "https://github.com/sudo-apt-install-Steven/APIs_BancoDeDados",
    technologies: ["Node.js", "Express", "MySQL"],
    isPrivate: true
  },
  { 
    title: "Clínica", 
    category: "Frontend", 
    description: "Aplicação web frontend desenvolvida com Next.js e React para sistema de clínica.",
    link: "https://github.com/sudo-apt-install-Steven/Clinica",
    technologies: ["Next.js", "React", "JavaScript"],
    isPrivate: false
  },
  { 
    title: "Silksong", 
    category: "Frontend", 
    description: "Projeto frontend desenvolvido com Next.js e React. Aplicação web moderna e responsiva.",
    link: "https://github.com/sudo-apt-install-Steven/silksong",
    technologies: ["Next.js", "React", "JavaScript"],
    isPrivate: true
  },
  { 
    title: "Front-End 2", 
    category: "Frontend", 
    description: "Projeto frontend com Next.js contendo atividades práticas, componentes reutilizáveis e páginas de produtos, localidades e mensagens.",
    link: "https://github.com/sudo-apt-install-Steven/Front-End-2",
    technologies: ["Next.js", "React", "HTML", "CSS"],
    isPrivate: true
  },
  { 
    title: "Front-End 1", 
    category: "Frontend", 
    description: "Projeto frontend com HTML, CSS e JavaScript. Contém atividades do 1º e 2º bimestre incluindo sites, portfólio e exemplos de FlexBox.",
    link: "https://github.com/sudo-apt-install-Steven/Front-End-1",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: true
  },
  { 
    title: "Teste Atividades", 
    category: "Backend", 
    description: "Repositório com exercícios práticos de backend em JavaScript. Atividades de aprendizado e prática de programação.",
    link: "https://github.com/sudo-apt-install-Steven/teste-atividades",
    technologies: ["JavaScript", "Node.js"],
    isPrivate: true
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrap relative w-full overflow-hidden bg-[#0d0d0d]/95 px-5 py-24 md:px-10 lg:px-20">
        <div className="aurora-orb left-[-12rem] top-1/3" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl">
            <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-auto mb-14 max-w-3xl text-center"
            >
                <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#ff8000]">Projetos</p>
                <h2 className="font-display text-3xl font-black text-white sm:text-5xl lg:text-6xl">
                    Soluções <span className="text-[#ff8000]">web</span> e APIs
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-400">
                    Uma seleção de trabalhos e repositórios que mostram evolução em frontend, backend, banco de dados e integração de sistemas.
                </p>
            </motion.div>

            <div className="projects-grid gap-5 md:gap-6">
                {projects.map((project, i) => (
                    <motion.a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-card group relative min-h-[310px] rounded-[1.6rem] cursor-pointer border border-white/10 flex flex-col"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: Math.min(i * 0.1, 0.8) }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,128,0,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute right-5 top-5 text-white/10 transition group-hover:text-[#ff8000]/30"><FolderGit2 size={54} /></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-grow flex-col p-6 md:p-7">
                            <div className="mb-5 flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-[#ff8000]/25 bg-[#ff8000]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#ffb36b] backdrop-blur-md">
                                    {project.category}
                                </span>
                                {project.isPrivate && (
                                    <span className="rounded-full border border-purple-400/25 bg-purple-500/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-purple-300 backdrop-blur-md">
                                        Privado
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="mb-3 line-clamp-2 text-2xl font-black text-white">{project.title}</h3>
                            
                            <p className="mb-6 line-clamp-4 flex-grow text-sm leading-7 text-gray-400">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span 
                                        key={idx}
                                        className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-semibold text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Link button */}
                            <div className="flex items-center gap-2 text-sm font-bold text-[#ff8000] transition-transform duration-300 group-hover:translate-x-2">
                                <span>Ver no GitHub</span>
                                <ExternalLink size={16} />
                            </div>
                        </div>
                        
                        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-[#ff8000]/0 transition duration-300 group-hover:border-[#ff8000]/70" />
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
}
