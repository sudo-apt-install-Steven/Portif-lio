import type { Metadata } from "next";
import { Montserrat, Inter, Orbitron } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Portfólio Profissional",
  description: "Portfólio moderno e interativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      <body
        className={`${montserrat.variable} ${inter.variable} ${orbitron.variable} font-sans antialiased bg-[#0a0a0a] text-white selection:bg-[#ff8000] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
