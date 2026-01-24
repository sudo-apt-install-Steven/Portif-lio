"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const socials = [
  { name: "GitHub", icon: FaGithub, link: "https://github.com/sudo-apt-install-Steven" },
];

export default function Socials() {
  return (
    <section id="socials" className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden snap-start snap-always">
      <h2 className="text-4xl md:text-6xl font-black mb-20 text-center font-display uppercase tracking-wider relative z-20">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white/20 text-xl md:text-2xl mb-2 tracking-widest">Connect</span>
        <span className="text-white">Redes </span>
        <span className="text-[#ff8000]">Sociais</span>
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 relative z-10">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#ff8000] to-transparent -z-10 hidden md:block opacity-30" />

        {socials.map((social, index) => (
            <motion.a
                href={social.link}
                key={index}
                className="w-32 h-32 md:w-40 md:h-40 bg-[#2a2a2a] rounded-2xl flex flex-col items-center justify-center border border-white/5 relative group backdrop-blur-sm"
                whileHover={{ y: -20, scale: 1.1, rotateZ: (index % 2 === 0 ? 1 : -1) * 2.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8000] to-[#ff9933] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="absolute -inset-1 bg-[#ff8000] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                <social.icon 
                    size={32} 
                    className="text-white relative z-10 group-hover:scale-125 transition-transform duration-300" 
                />
                <span className="mt-4 text-xs font-bold text-gray-400 group-hover:text-white relative z-10 uppercase tracking-wider">{social.name}</span>
            </motion.a>
        ))}
      </div>
    </section>
  )
}
