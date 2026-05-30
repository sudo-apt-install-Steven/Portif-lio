"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, TrendingUp, BookOpen, Calendar, Layout, Maximize2 } from "lucide-react";

const reports = [
  {
    id: "historico",
    title: "Histórico Escolar Insights",
    desc: "Entenda as pontuações e frequências dos alunos de maneira rápida e preditiva.",
    src: "https://app.powerbi.com/reportEmbed?reportId=2fec79cf-9419-4732-8898-5f79902105a2&autoAuth=true&ctid=71efa34d-a921-4300-9d81-cc6ec9be17a4",
    icon: BookOpen
  },
  {
    id: "vendas",
    title: "Business & Vendas",
    desc: "Demonstração de lucratividade. Painel de Clientes, Produtos e Vendas detalhados por região.",
    src: "https://app.powerbi.com/reportEmbed?reportId=efecea76-a52b-4629-8555-4cba8ca52997&autoAuth=true&ctid=71efa34d-a921-4300-9d81-cc6ec9be17a4",
    icon: TrendingUp
  },
  {
    id: "enem",
    title: "Simulado ENEM",
    desc: "A melhor perspectiva analítica dos resultados de atividade de aprovação e prova.",
    src: "https://app.powerbi.com/reportEmbed?reportId=deb7cc8f-efff-46f5-9f8a-02b626b94b6d&autoAuth=true&ctid=71efa34d-a921-4300-9d81-cc6ec9be17a4",
    icon: Layout
  },
  {
    id: "aulas",
    title: "Painel de Aulas",
    desc: "Dashboard gerencial listando todas as distribuições de aulas com foco total em UX.",
    src: "https://app.powerbi.com/reportEmbed?reportId=eb15504f-aa10-4423-a8ac-8512089dba9f&autoAuth=true&ctid=71efa34d-a921-4300-9d81-cc6ec9be17a4",
    icon: Calendar
  },
  {
    id: "atividades",
    title: "Atividades Complexas",
    desc: "Resumo extenso focado em precisões de resposta com gráfico wide.",
    src: "https://app.powerbi.com/reportEmbed?reportId=7aa2df7e-69e3-4dda-b750-ecaa65536043&autoAuth=true&ctid=71efa34d-a921-4300-9d81-cc6ec9be17a4",
    icon: BarChart2
  }
];

export default function PowerBI() {
  const ref = useRef(null);
  const [activeReport, setActiveReport] = useState(reports[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section id="powerbi" ref={ref} className="w-full min-h-screen bg-[#0a0a0a] py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 relative overflow-hidden flex flex-col justify-start snap-start">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1920px] mx-auto w-full h-full flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 font-display uppercase px-2 mb-4">
                    Dashboards <span className="text-white">PowerBI</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
                    Análise de dados interativa e relatórios inteligentes projetados com foco em UX/UI.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-grow h-full max-h-[1000px]">
                {/* Sidebar Navigation */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar pb-4 lg:pb-0"
                >
                    <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0 pr-4 lg:pr-0">
                        {reports.map((report) => {
                            const isActive = activeReport.id === report.id;
                            const Icon = report.icon;
                            return (
                                <button
                                    key={report.id}
                                    onClick={() => setActiveReport(report)}
                                    className={`relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                                        isActive 
                                            ? "bg-yellow-500/10 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]" 
                                            : "bg-[#1a1a1a] border-white/5 hover:bg-white/5 hover:border-white/10"
                                    }`}
                                >
                                    <div className={`p-2 rounded-lg ${isActive ? "bg-yellow-500/20 text-yellow-400" : "bg-white/5 text-gray-400"}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`font-bold text-sm sm:text-base line-clamp-1 ${isActive ? "text-yellow-400" : "text-white"}`}>
                                            {report.title}
                                        </span>
                                        <span className="text-xs text-gray-500 line-clamp-1 hidden lg:block">
                                            {report.desc}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Display Area */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`relative w-full lg:w-3/4 xl:w-4/5 bg-[#111] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl ${
                        isFullscreen ? "fixed inset-0 z-[100] lg:w-full xl:w-full h-screen rounded-none border-none" : "min-h-[400px] sm:min-h-[500px] lg:min-h-0 lg:h-auto"
                    }`}
                >
                    {/* Header */}
                    <div className="h-14 sm:h-16 bg-[#1a1a1a] border-b border-white/5 flex items-center justify-between px-4 sm:px-6">
                        <div>
                            <h3 className="text-white font-bold text-sm sm:text-lg">{activeReport.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">{activeReport.desc}</p>
                        </div>
                        <button 
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors"
                            aria-label="Toggle Fullscreen"
                        >
                            <Maximize2 size={18} />
                        </button>
                    </div>

                    {/* Iframe Container */}
                    <div className="relative flex-grow w-full bg-black">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeReport.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <iframe
                                    title={activeReport.title}
                                    className="w-full h-full border-none"
                                    src={activeReport.src}
                                    allowFullScreen={true}
                                ></iframe>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
