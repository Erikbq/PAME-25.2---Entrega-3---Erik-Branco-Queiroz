"use client"; // Importante: Agora usamos useState, então precisamos disso

import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Ícone do Hambúrguer

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex bg-brand-cream h-screen overflow-hidden`}
      >
        {/* LADO ESQUERDO: Sidebar (Agora com inteligência) */}
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* LADO DIREITO: Conteúdo Principal */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
          {/* BOTÃO MOBILE (Hambúrguer) */}
          {/* Só aparece em telas pequenas (md:hidden) e fica flutuando no topo */}
          <div className="md:hidden p-4 absolute top-0 left-0 z-30">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md text-brand-brown hover:text-brand-pink transition-colors"
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Área de Scroll */}
          <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
            {children}
          </main>

          {/* Rodapé */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
