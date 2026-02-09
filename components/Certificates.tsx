"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="w-full bg-[#0a0a0a] py-8 px-3 sm:py-12 sm:px-4 md:py-16 md:px-6 lg:py-20 lg:px-8 xl:py-24 xl:px-12 relative overflow-hidden flex flex-col justify-start snap-start">
        <div className="max-w-[1920px] mx-auto w-full">
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-display uppercase text-center px-2"
            >
                Meus <span className="text-[#ff8000]">Certificados</span>
            </motion.h2>

            <div className="flex flex-col items-center justify-center gap-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
                <motion.a
                    href="https://drive.google.com/drive/folders/1iQVx9WJPhlhyE4dUFxUPPPKVCnVpVagE?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full max-w-2xl min-h-[200px] sm:min-h-[240px] md:min-h-[280px] bg-[#1f1f1f] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 flex flex-col"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                >
                    {/* Background gradient - azul */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950 group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center flex-grow text-center">
                        <div className="mb-4 sm:mb-6">
                            <Award size={48} className="text-blue-400 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Certificados e Conquistas
                        </h3>
                        
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed">
                            Acesse minha pasta no Google Drive com todos os certificados de cursos, workshops e eventos que participei
                        </p>
                        
                        {/* Link button */}
                        <div className="flex items-center gap-2 text-blue-400 font-medium text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                            <span>Ver Certificados no Drive</span>
                            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        </div>
                    </div>
                    
                    {/* Blue border glow on hover */}
                    <div className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </motion.a>
            </div>
        </div>
    </section>
  );
}
