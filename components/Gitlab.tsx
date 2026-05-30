"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GitBranch, Lock, Unlock, ExternalLink, Globe, Code, Calendar } from "lucide-react";

interface Project {
  id: number;
  name: string;
  path_with_namespace: string;
  description: string;
  web_url: string;
  star_count: number;
  forks_count: number;
  visibility: string;
  last_activity_at: string;
  deploy_url: string | null;
  techs: string[];
}

export default function Gitlab() {
    const ref = useRef(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/gitlab");
                if (res.ok) {
                    const data = await res.json();
                    setProjects(data.projects || []);
                }
            } catch (error) {
                console.error("Error fetching GitLab projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Format date nicely
    const formatDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });
        } catch {
            return dateStr;
        }
    };

  return (
    <section id="gitlab" ref={ref} className="w-full min-h-screen bg-[#09090c] py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 relative overflow-hidden flex flex-col justify-start snap-start border-y border-white/5">
        
        {/* Glowing atmospheric elements */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1920px] mx-auto w-full relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16 md:mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-purple-300 text-xs font-semibold uppercase tracking-wider">GitLab Institucional</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-400 font-display uppercase px-2 mb-4 leading-tight">
                    Projetos <span className="text-purple-400">PizzariaTop</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 leading-relaxed">
                    Integração em tempo real com os repositórios hospedados no GitLab do IFRO, apresentando o ecossistema completo de desenvolvimento.
                </p>
            </motion.div>

            {loading ? (
                <div className="flex flex-col justify-center items-center h-80 gap-4">
                    <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-purple-300 text-sm tracking-wider uppercase animate-pulse">Conectando ao GitLab...</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pb-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="group relative bg-[#121217]/40 backdrop-blur-xl rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Accent Glow inside card on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                                {/* Header of Card */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                            <GitBranch className="text-purple-400" size={18} />
                                        </div>
                                        <span className="text-gray-400 text-xs font-mono truncate max-w-[150px] sm:max-w-[200px]">
                                            {project.path_with_namespace.split("/")[0]}
                                        </span>
                                    </div>
                                    
                                    {/* Visibility indicator */}
                                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                        project.visibility === "public" 
                                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    }`}>
                                        {project.visibility === "public" ? (
                                            <>
                                                <Unlock size={12} />
                                                Público
                                            </>
                                        ) : (
                                            <>
                                                <Lock size={12} />
                                                Privado
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Body */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techs.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="px-2.5 py-0.5 rounded-full bg-[#1b1b22] text-gray-300 text-[11px] font-medium border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Metadata */}
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium pt-4 border-t border-white/5 mt-auto">
                                    <Calendar size={13} className="text-purple-500/50" />
                                    <span>Atualizado em:</span>
                                    <span className="text-gray-400">{formatDate(project.last_activity_at)}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="px-6 py-4 bg-[#14141a]/60 border-t border-white/5 flex gap-3 relative z-10">
                                <a
                                    href={project.web_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-600/10 text-white text-xs font-semibold border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                                >
                                    <Code size={14} />
                                    Código Fonte
                                </a>
                                {project.deploy_url && (
                                    <a
                                        href={project.deploy_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
                                    >
                                        <Globe size={14} />
                                        Acessar Deploy
                                        <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-400 rounded-full m-1 animate-ping" />
                                    </a>
                                )}
                            </div>

                            {/* Card Border Glow */}
                            <div className="absolute inset-0 border border-white/5 group-hover:border-purple-500/30 transition-colors duration-300 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
}
