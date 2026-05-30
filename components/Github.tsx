"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Star, GitFork, BookOpen } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  visibility: string;
  homepage: string | null;
}

export default function Github() {
    const ref = useRef(null);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // To get all repos including forks, maybe adjust params, but this is default
                const res = await fetch("https://api.github.com/users/sudo-apt-install-Steven/repos?sort=updated&per_page=12");
                if (res.ok) {
                    const data = await res.json();
                    setRepos(data);
                }
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

  return (
    <section id="github" ref={ref} className="w-full min-h-screen bg-[#0d0d0d] py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 relative overflow-hidden flex flex-col justify-start snap-start">
        <div className="max-w-[1920px] mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16 md:mb-20"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-display uppercase px-2 mb-4">
                    Meus <span className="text-[#ff8000]">Repositórios</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
                    Projetos e códigos do meu GitHub, atualizados dinamicamente.
                </p>
            </motion.div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-[#ff8000] border-t-transparent rounded-full animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 projects-grid pb-24">
                    {repos.map((repo, i) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative h-full min-h-[300px] bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer border border-white/5 flex flex-col"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.1, 0.5), duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-[#1a1a1a] group-hover:from-gray-800/80 transition-colors duration-500" />
                            
                            <div className="relative z-10 p-6 flex flex-col flex-grow">
                                <div className="mb-4 flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="text-[#ff8000]" size={18} />
                                        <span className="text-[#ff8000] text-xs font-bold uppercase tracking-wider">
                                            {repo.visibility}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 text-gray-400 text-xs">
                                        <span className="flex items-center gap-1"><Star size={14}/> {repo.stargazers_count}</span>
                                        <span className="flex items-center gap-1"><GitFork size={14}/> {repo.forks_count}</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-1 group-hover:text-[#ff8000] transition-colors">{repo.name}</h3>
                                
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                                    {repo.description || "Nenhuma descrição fornecida para este repositório."}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {repo.language && (
                                            <span className="px-2.5 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded-full border border-white/10 flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-[#ff8000]"></span>
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors duration-300">
                                        <ExternalLink size={18} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute inset-0 border border-[#ff8000]/0 group-hover:border-[#ff8000]/50 transition-colors duration-300 rounded-xl pointer-events-none" />
                        </motion.a>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
}
