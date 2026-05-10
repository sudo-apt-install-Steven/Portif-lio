"use client";

import { motion } from "framer-motion";
import { GitBranch, Github, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, link: "https://github.com/sudo-apt-install-Steven", label: "Repositórios e códigos" },
  { name: "E-mail", icon: Mail, link: "mailto:melos.s@estudante.ifro.edu.br", label: "Contato profissional" },
  { name: "GitLab", icon: GitBranch, link: "https://git.academico.vilhena.ifro.edu.br/fabrica-ii-2b/pizzariatop-react/-/tree/34f5800c1cc52592a8834414d2bbe00b653ea696", label: "Projetos acadêmicos" },
];

export default function Socials() {
  return (
    <section id="socials" className="section-wrap relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#080808] px-5 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#ff8000]"
        >
          Connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-black text-white sm:text-5xl lg:text-6xl"
        >
          Vamos construir algo <span className="text-[#ff8000]">juntos</span>?
        </motion.h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {socials.map((social, index) => (
            <motion.a
              href={social.link}
              key={social.name}
              target={social.link.startsWith("http") ? "_blank" : undefined}
              rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="liquid-card group rounded-[1.8rem] p-8 text-left"
              whileHover={{ y: -10, rotateZ: index % 2 === 0 ? 1 : -1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-[#ff8000]/15 text-[#ff8000] transition group-hover:bg-[#ff8000] group-hover:text-black">
                <social.icon size={30} />
              </div>
              <h3 className="text-2xl font-black text-white">{social.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{social.label}</p>
              <span className="mt-7 inline-block text-sm font-bold text-[#ff8000] transition group-hover:translate-x-2">Acessar →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
