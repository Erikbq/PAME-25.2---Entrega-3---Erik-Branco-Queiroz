import "./globals.css";
import { Inter } from "next/font/google"; // Fonte padrão
import Sidebar from "../components/layout/Sidebar"; // @ é um atalho para a pasta src
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* flex: Transforma o body em um container flexível (linha por padrão).
        Isso coloca a Sidebar AO LADO do conteúdo (children).
      */}
      <body className={`${inter.className} flex bg-brand-cream h-screen`}>
        {/* Componente fixo */}
        <Sidebar />

        <div className="flex flex-col h-screen w-full">
          {/* main: Onde o conteúdo das páginas (page.tsx) será renderizado.
            flex-1: Ocupa todo o espaço restante da largura.
            h-screen & overflow-y-auto: Permite scroll apenas no conteúdo, sidebar fica fixa.
          */}
          <main className="flex-1 h-screen overflow-y-auto p-8">
            {children}
          </main>

          {/* Componente fixo */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
