"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

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
    const ref = useRef(null);

  return (
    <section id="projects" ref={ref} className="w-full bg-[#0d0d0d] py-8 px-3 sm:py-12 sm:px-4 md:py-16 md:px-6 lg:py-20 lg:px-8 xl:py-24 xl:px-12 relative overflow-hidden flex flex-col justify-start snap-start">
        <div className="max-w-[1920px] mx-auto w-full">
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-display uppercase text-center px-2"
            >
                Meus <span className="text-[#ff8000]">Projetos</span>
            </motion.h2>

            <div className="grid gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20 projects-grid">
                {projects.map((project, i) => (
                    <motion.a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px] 2xl:min-h-[450px] bg-[#1f1f1f] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 flex flex-col"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: Math.min(i * 0.1, 0.8) }}
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-[#1a1a1a] group-hover:scale-110 transition-transform duration-700" />
                        
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Content */}
                        <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                            <div className="mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 bg-[#ff8000]/20 text-[#ff8000] text-[10px] sm:text-xs font-bold rounded-full inline-block backdrop-blur-md border border-[#ff8000]/20 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                {project.isPrivate && (
                                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 bg-purple-500/20 text-purple-400 text-[10px] sm:text-xs font-bold rounded-full inline-block backdrop-blur-md border border-purple-500/20 uppercase tracking-wider">
                                        Privado
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-2">{project.title}</h3>
                            
                            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-[#2a2a2a] text-gray-300 text-[10px] sm:text-xs rounded border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Link button */}
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[#ff8000] font-medium text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300">
                                <span>Ver no GitHub</span>
                                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                            </div>
                        </div>
                        
                        {/* Orange border glow on hover */}
                        <div className="absolute inset-0 border-2 border-[#ff8000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
}
