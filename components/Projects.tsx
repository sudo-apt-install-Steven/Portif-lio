"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "E-Commerce Pro", category: "Fullstack", image: "/project1.jpg" },
  { title: "Finance Dashboard", category: "Frontend", image: "/project2.jpg" },
  { title: "AI Generator", category: "AI/ML", image: "/project3.jpg" },
];

export default function Projects() {
    const ref = useRef(null);


  return (
    <section id="projects" ref={ref} className="h-screen w-full bg-[#0d0d0d] py-20 px-6 relative overflow-hidden flex flex-col justify-center snap-start snap-always">
        <div className="max-w-7xl mx-auto w-full">
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-20 font-display uppercase"
            >
                Projetos <span className="text-[#ff8000]">Selecionados</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="group relative h-[450px] bg-[#1f1f1f] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-[#1a1a1a] group-hover:scale-110 transition-transform duration-700" />
                        
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                            <span className="px-3 py-1 bg-[#ff8000]/20 text-[#ff8000] text-xs font-bold rounded-full mb-4 inline-block backdrop-blur-md border border-[#ff8000]/20 uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2">
                                Ver detalhes <div className="h-[1px] w-10 bg-[#ff8000]" />
                            </p>
                        </div>
                        
                        {/* Orange border glow on hover */}
                        <div className="absolute inset-0 border-2 border-[#ff8000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
