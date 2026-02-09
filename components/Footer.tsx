"use client";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer id="footer" className="h-screen flex flex-col justify-center w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2a] text-white px-6 relative border-t border-white/5 snap-start snap-always">
        <div className="max-w-7xl mx-auto w-full mb-20">
            {/* Info Section */}
            <div className="max-w-4xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-center gap-4 text-gray-300 group">
                        <div className="p-3 rounded-full bg-[#1a1a1a] text-[#ff8000] group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <span className="font-light">melos.s@estudante.ifro.edu.br</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 group">
                        <div className="p-3 rounded-full bg-[#1a1a1a] text-[#ff8000] group-hover:scale-110 transition-transform">
                            <MapPin size={20} />
                        </div>
                        <span className="font-light">Vilhena, RO, Brasil</span>
                    </div>
                </div>

                {/* Mensagem sobre projetos Python */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 md:p-8"
                >
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                        <span className="text-[#ff8000] font-semibold">Nota:</span> Desculpe pela ausência de projetos em Python no GitHub. 
                        Na época em que desenvolvi esses projetos, ainda não utilizava o GitHub para versionamento. 
                        Alguns desses projetos estão disponíveis no{' '}
                        <a 
                            href="https://git.academico.vilhena.ifro.edu.br/fabrica-ii-2b/pizzariatop-react/-/tree/34f5800c1cc52592a8834414d2bbe00b653ea696"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-1"
                        >
                            GitLab
                            <ExternalLink size={14} className="inline" />
                        </a>
                        .
                    </p>
                </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 mb-12">
                {['Home', 'Sobre', 'Projetos', 'Certificados', 'Contato'].map((item) => (
                    <a key={item} href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#ff8000] transition-colors group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8000] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-lg">{item}</span>
                    </a>
                ))}
            </nav>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Steven Tayllon. Todos os direitos reservados.</p>
            
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
