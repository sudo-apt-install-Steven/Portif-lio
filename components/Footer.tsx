"use client";
import { motion } from "framer-motion";
import { Send, ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer id="footer" className="h-screen flex flex-col justify-center w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2a] text-white px-6 relative border-t border-white/5 snap-start snap-always">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            {/* Left Column: Form */}
            <div>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-bold font-display mb-8"
                >
                    Vamos criar algo <span className="text-[#ff8000]">incrível</span> juntos?
                </motion.h2>
                
                <form className="space-y-6 max-w-md">
                    <div className="group relative">
                        <input 
                            type="text" 
                            placeholder="Seu Nome" 
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-white focus:outline-none focus:border-[#ff8000] transition-colors placeholder:text-gray-600 font-light"
                        />
                    </div>
                    <div className="group relative">
                        <input 
                            type="email" 
                            placeholder="Seu Email" 
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-white focus:outline-none focus:border-[#ff8000] transition-colors placeholder:text-gray-600 font-light"
                        />
                    </div>
                    <div className="group relative">
                        <textarea 
                            placeholder="Sobre o projeto..." 
                            rows={4}
                            className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-white focus:outline-none focus:border-[#ff8000] transition-colors placeholder:text-gray-600 resize-none font-light"
                        />
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 bg-[#ff8000] text-black px-8 py-4 rounded-full font-bold hover:bg-[#ff9933] transition-colors mt-8 uppercase tracking-wide text-sm"
                        type="button"
                    >
                        <span>Enviar Mensagem</span>
                        <Send size={18} />
                    </motion.button>
                </form>
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col justify-between">
                <div>
                     <nav className="grid grid-cols-2 gap-4 mb-12">
                        {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                            <a key={item} href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#ff8000] transition-colors group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8000] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-lg">{item}</span>
                            </a>
                        ))}
                     </nav>

                     <div className="space-y-8">
                        <div className="flex items-center gap-4 text-gray-300 group">
                            <div className="p-3 rounded-full bg-[#1a1a1a] text-[#ff8000] group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <span className="font-light">contato@portfolio.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 group">
                            <div className="p-3 rounded-full bg-[#1a1a1a] text-[#ff8000] group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <span className="font-light">São Paulo, Brasil</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Portfólio. Todos os direitos reservados.</p>
            
            <button 
                onClick={scrollToTop}
                className="p-3 rounded-full bg-[#1a1a1a] text-gray-400 hover:bg-[#ff8000] hover:text-black transition-all group shadow-lg shadow-black/50"
            >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    </footer>
  );
}
