"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

export default function About() {
  const highlights = [
    "5+ Anos de Experiência Fullstack",
    "Especialista em Next.js & React",
    "UI/UX Design Acessível",
    "Performance Optimization",
  ];

  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  ];

  return (
    <section id="about" className="h-screen w-full flex items-center justify-center bg-[#0f0f0f] py-20 px-6 md:px-20 relative overflow-hidden snap-start snap-always">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-[#ff8000] rotate-3 rounded-2xl opacity-20 blur-xl group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#ff8000]/30 glow-border">
                <Image 
                    src="/avatar.png" 
                    alt="Profile" 
                    width={500} 
                    height={500} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 aspect-square"
                />
            </div>
        </motion.div>

        {/* Content Side */}
        <div className="relative pl-0 md:pl-10">
            {/* Divider Line */}
            <motion.div 
                className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ff8000] to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />

            <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Natan <span className="text-[#ff8000]">Cardoso</span></h2>
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">Desenvolvedor Front-end</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    Transformo ideias complexas em experiências digitais fluidas e impactantes. 
                    Com um olhar apurado para design e uma paixão por código limpo, 
                    crio soluções que não apenas funcionam, mas encantam.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-[#1a1a1a] rounded-lg border border-white/5 hover:border-[#ff8000]/50 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                            <Check className="text-[#ff8000]" size={20} />
                            <span className="text-sm text-gray-300">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8">
                    <p className="text-gray-400 text-sm mb-3 font-mono">Tech Stack</p>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech, index) => (
                            <motion.div 
                                key={index}
                                className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-lg border border-white/5 hover:border-[#ff8000]/50 transition-colors group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                            >
                                <tech.icon className="text-xl transition-colors text-gray-400 group-hover:brightness-125" style={{ color: tech.color }} />
                                <span className="text-sm text-gray-300 font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
