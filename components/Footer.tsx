"use client";

import { ArrowUp, ExternalLink, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Certificados", href: "#certificates" },
  { label: "Contato", href: "#socials" },
];

export default function Footer() {
  return (
    <footer id="footer" className="section-wrap relative w-full overflow-hidden border-t border-white/10 bg-[#070707] px-5 py-20 text-white md:px-10 lg:px-20">
      <div className="aurora-orb bottom-[-12rem] right-[-8rem]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#ff8000]">Contato</p>
            <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              Obrigado por visitar meu portfólio.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
              Estou sempre evoluindo e aberto a conversas sobre tecnologia, projetos acadêmicos e oportunidades para aprender construindo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="mailto:melos.s@estudante.ifro.edu.br" className="liquid-card flex items-center gap-4 rounded-2xl p-4 text-gray-300 transition hover:text-white">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff8000]/15 text-[#ff8000]"><Mail size={20} /></span>
                <span className="break-all text-sm font-semibold">melos.s@estudante.ifro.edu.br</span>
              </a>
              <div className="liquid-card flex items-center gap-4 rounded-2xl p-4 text-gray-300">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff8000]/15 text-[#ff8000]"><MapPin size={20} /></span>
                <span className="text-sm font-semibold">Vilhena, RO, Brasil</span>
              </div>
            </div>
          </div>

          <div className="liquid-card rounded-[2rem] p-6 md:p-8">
            <h3 className="text-xl font-black text-white">Nota sobre projetos Python</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Alguns projetos em Python foram desenvolvidos antes do uso constante do GitHub para versionamento. Parte desse histórico está disponível no GitLab acadêmico.
            </p>
            <a
              href="https://git.academico.vilhena.ifro.edu.br/fabrica-ii-2b/pizzariatop-react/-/tree/34f5800c1cc52592a8834414d2bbe00b653ea696"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-5 py-3 text-sm font-bold text-blue-300 transition hover:bg-blue-400 hover:text-black"
            >
              Ver GitLab <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-3" aria-label="Links do rodapé">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-[#ff8000]/50 hover:text-[#ff8000]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-5 md:justify-end">
            <p className="text-sm text-gray-500">© 2026 Steven Tayllon. Todos os direitos reservados.</p>
            <a href="#hero" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ff8000] text-black transition hover:-translate-y-1" aria-label="Voltar ao topo">
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
