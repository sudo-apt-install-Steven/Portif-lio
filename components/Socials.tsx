"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  FaGithub, 
  FaDiscord, 
  FaSteam, 
  FaXbox, 
  FaWhatsapp 
} from "react-icons/fa";
import { 
  Mail, 
  Phone, 
  ExternalLink, 
  Send, 
  Check, 
  Gamepad, 
  Copy, 
  Layers 
} from "lucide-react";

export default function Socials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copiedSwitch, setCopiedSwitch] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Spotlight effect coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);

  // Dynamic light source coordinates linked to home page Orb rotation (Clockwise)
  const [orbLight, setOrbLight] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    let frameId: number;
    const startTime = Date.now();
    const updateOrbLight = () => {
      const elapsed = (Date.now() - startTime) * 0.001; // in seconds
      // Orbital path mirroring the OGL Orb's dynamic rotation (sentido horário)
      const angle = -elapsed * 0.6; // elegant rotation speed
      const radiusX = 35; // horizontal radius in percent
      const radiusY = 25; // vertical radius in percent
      setOrbLight({
        x: 50 + Math.cos(angle) * radiusX,
        y: 50 + Math.sin(angle) * radiusY
      });
      frameId = requestAnimationFrame(updateOrbLight);
    };
    frameId = requestAnimationFrame(updateOrbLight);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsMouseIn(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("SW-5216-6458-4310");
    setCopiedSwitch(true);
    setTimeout(() => setCopiedSwitch(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section 
      id="socials" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
      className="min-h-screen py-20 w-full flex flex-col justify-start bg-[#08080b] relative overflow-hidden snap-start snap-always border-b border-white/5"
    >
      {/* 1. REAL GLASS OCCLUSION EFFECT (IMAGE 1): Distinct glowing spheres passing behind/outside cards */}
      <motion.div 
        animate={{ 
          x: [0, 50, -40, 0], 
          y: [0, -70, 50, 0],
          scale: [1, 1.25, 0.9, 1] 
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-[120px] h-[120px] rounded-full bg-emerald-400/70 filter blur-[15px] pointer-events-none z-0" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -60, 50, 0], 
          y: [0, 60, -70, 0],
          scale: [1, 0.9, 1.2, 1] 
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[8%] w-[140px] h-[140px] rounded-full bg-purple-500/70 filter blur-[18px] pointer-events-none z-0" 
      />

      <motion.div 
        animate={{ 
          x: [0, 70, -50, 0], 
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 0.95, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/3 w-[110px] h-[110px] rounded-full bg-cyan-400/70 filter blur-[12px] pointer-events-none z-0" 
      />

      <motion.div 
        animate={{ 
          x: [0, -40, 60, 0], 
          y: [0, -50, 60, 0],
          scale: [1, 1.1, 0.85, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-1/3 w-[130px] h-[130px] rounded-full bg-orange-500/70 filter blur-[16px] pointer-events-none z-0" 
      />

      {/* 2. DYNAMIC SPOTLIGHT (CO-ORDINATED WITH HOME WEBGL ORB ANIMATION) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out"
        style={{
          background: `
            radial-gradient(450px circle at ${orbLight.x}% ${orbLight.y}%, rgba(255, 128, 0, 0.12), transparent 70%),
            ${isMouseIn ? `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 128, 0, 0.08), transparent 80%)` : ''}
          `
        }}
      />

      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff8000] animate-pulse shadow-[0_0_8px_#ff8000]" />
            <span className="text-[#ff8000] text-xs font-bold uppercase tracking-widest">Contato & Conexões</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff8000] font-display uppercase px-2 mb-4 leading-tight">
            Entre em <span className="text-[#ff8000]">Contato</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4 leading-relaxed font-light">
            Mande uma mensagem direta ou explore minhas redes de desenvolvimento e entretenimento.
          </p>
        </motion.div>

        {/* 3. CONTACT & SOCIALS GRID (IMAGE 2 LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT COLUMN: Contatos Rápidos (Get in touch style list) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2"
            >
              <span className="w-1 h-4 rounded bg-[#ff8000] shadow-[0_0_8px_#ff8000]" />
              Contatos Diretos
            </motion.h3>

            {/* Email 1: Estudos */}
            <motion.a
              href="mailto:melos.s@estudante.ifro.edu.br"
              className="group relative bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]"
              whileHover={{ 
                x: 6, 
                borderColor: "rgba(255, 128, 0, 0.4)", 
                boxShadow: "0 0 30px rgba(255, 128, 0, 0.15), inset 0 1px 1px rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#ff8000] border border-white/5 group-hover:scale-110 group-hover:bg-[#ff8000]/10 group-hover:border-[#ff8000]/20 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">E-mail (Estudos)</span>
                  <span className="text-white text-sm font-medium break-all pr-2 transition-colors group-hover:text-white">melos.s@estudante.ifro.edu.br</span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0" />
            </motion.a>

            {/* Email 2: Pessoal */}
            <motion.a
              href="mailto:gameleastersss@gmail.com"
              className="group relative bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]"
              whileHover={{ 
                x: 6, 
                borderColor: "rgba(255, 128, 0, 0.4)", 
                boxShadow: "0 0 30px rgba(255, 128, 0, 0.15), inset 0 1px 1px rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#ff8000] border border-white/5 group-hover:scale-110 group-hover:bg-[#ff8000]/10 group-hover:border-[#ff8000]/20 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">E-mail (Pessoal)</span>
                  <span className="text-white text-sm font-medium break-all pr-2 transition-colors group-hover:text-white">gameleastersss@gmail.com</span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0" />
            </motion.a>

            {/* Email 3: Trabalho */}
            <motion.a
              href="mailto:stevenmelos.com@outlook.com"
              className="group relative bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]"
              whileHover={{ 
                x: 6, 
                borderColor: "rgba(255, 128, 0, 0.4)", 
                boxShadow: "0 0 30px rgba(255, 128, 0, 0.15), inset 0 1px 1px rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#ff8000] border border-white/5 group-hover:scale-110 group-hover:bg-[#ff8000]/10 group-hover:border-[#ff8000]/20 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">E-mail (Trabalho)</span>
                  <span className="text-white text-sm font-medium break-all pr-2 transition-colors group-hover:text-white">stevenmelos.com@outlook.com</span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/5565984531349"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.3)]"
              whileHover={{ 
                x: 6, 
                borderColor: "rgba(16, 185, 129, 0.4)", 
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.15), inset 0 1px 1px rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.03] text-emerald-400 border border-white/5 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                  <FaWhatsapp size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
                  <span className="text-white text-sm font-medium transition-colors group-hover:text-white">(+55) 65 98451-1349</span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0" />
            </motion.a>
          </div>

          {/* CENTER: Form de Contato Glassmorphism (IMAGE 2 Contact Form) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2"
            >
              <span className="w-1 h-4 rounded bg-[#ff8000] shadow-[0_0_8px_#ff8000]" />
              Mande uma Mensagem
            </motion.h3>

            <motion.form
              onSubmit={handleFormSubmit}
              className="bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between flex-grow shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Form Success overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#07070a]/95 backdrop-blur-xl flex flex-col items-center justify-center z-20 p-6 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4"
                    >
                      <Check size={32} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Mensagem Enviada!</h4>
                    <p className="text-gray-400 text-sm max-w-xs font-light">Obrigado pelo contato. Responderei o mais breve possível.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-5 flex-grow">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider px-1">Nome</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-black/45 border border-white/[0.08] focus:border-[#ff8000]/50 focus:ring-1 focus:ring-[#ff8000]/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider px-1">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-black/45 border border-white/[0.08] focus:border-[#ff8000]/50 focus:ring-1 focus:ring-[#ff8000]/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider px-1">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full bg-black/45 border border-white/[0.08] focus:border-[#ff8000]/50 focus:ring-1 focus:ring-[#ff8000]/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-700 outline-none resize-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>

              {/* Submit Button (Image 2 Style - Solid White, bold uppercase, orange hover) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full py-4 rounded-xl bg-white hover:bg-[#ff8000] hover:text-white text-black font-extrabold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,128,0,0.35)] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={15} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* RIGHT COLUMN: Bento-grid de Plataformas (Devs & Games) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2"
            >
              <span className="w-1 h-4 rounded bg-[#ff8000] shadow-[0_0_8px_#ff8000]" />
              Redes & Jogos
            </motion.h3>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 flex-grow">
              
              {/* GitHub Card */}
              <motion.a
                href="https://github.com/sudo-apt-install-Steven"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] min-h-[110px]"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.1), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <FaGithub size={18} className="text-white" />
                  </div>
                  <ExternalLink size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-orange-400 transition-colors">GitHub</h4>
                  <span className="text-gray-500 text-[10px] font-mono block truncate">sudo-apt-install-Steven</span>
                </div>
              </motion.a>

              {/* Discord Estudos Card */}
              <motion.a
                href="https://discord.com/users/1409971150196576268"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] min-h-[110px]"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.2), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                    <FaDiscord size={18} className="text-blue-400" />
                  </div>
                  <ExternalLink size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">Discord (Estudos)</h4>
                  <span className="text-gray-500 text-[10px] block font-mono">Ver Perfil</span>
                </div>
              </motion.a>

              {/* Discord Pessoal Card */}
              <motion.a
                href="https://discord.com/users/893640773994696704"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] min-h-[110px]"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(99, 102, 241, 0.4)",
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.2), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
                    <FaDiscord size={18} className="text-indigo-400" />
                  </div>
                  <ExternalLink size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-indigo-400 transition-colors">Discord (Pessoal)</h4>
                  <span className="text-gray-500 text-[10px] block font-mono">Ver Perfil</span>
                </div>
              </motion.a>

              {/* Steam Card */}
              <motion.a
                href="https://steamcommunity.com/profiles/76561199248890905/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] min-h-[110px]"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(6, 182, 212, 0.4)",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.2), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300">
                    <FaSteam size={18} className="text-cyan-400" />
                  </div>
                  <ExternalLink size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">Steam</h4>
                  <span className="text-gray-500 text-[10px] block font-mono truncate">Gameleastersss</span>
                </div>
              </motion.a>

              {/* Xbox Card */}
              <motion.a
                href="https://www.xbox.com/pt-BR/play/user/Acer%20Gaming6820"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] min-h-[110px]"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.2), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                    <FaXbox size={18} className="text-emerald-400" />
                  </div>
                  <ExternalLink size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-emerald-400 transition-colors">Xbox</h4>
                  <span className="text-gray-500 text-[10px] block font-mono truncate">Acer Gaming6820</span>
                </div>
              </motion.a>

              {/* Nintendo Switch Card */}
              <motion.div
                onClick={copyToClipboard}
                className="group bg-[#0f0f13]/40 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] cursor-pointer min-h-[110px] relative select-none"
                whileHover={{ 
                  y: -6,
                  borderColor: copiedSwitch ? "rgba(16, 185, 129, 0.5)" : "rgba(239, 68, 68, 0.4)",
                  boxShadow: copiedSwitch ? "0 0 30px rgba(16, 185, 129, 0.25), inset 0 1px 1px rgba(255,255,255,0.12)" : "0 0 30px rgba(239, 68, 68, 0.2), inset 0 1px 1px rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.03)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
                    <Gamepad size={18} className="text-red-400" />
                  </div>
                  {copiedSwitch ? (
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-0.5 animate-pulse">
                      <Check size={12} /> Copiado!
                    </span>
                  ) : (
                    <Copy size={13} className="text-gray-600 group-hover:text-white transition-colors" />
                  )}
                </div>
                <div className="mt-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">Nintendo Switch</h4>
                  <span className="text-gray-500 text-[9px] sm:text-[10px] font-mono leading-none tracking-tight block">SW-5216-6458-4310</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

