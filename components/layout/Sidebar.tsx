import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTimes } from "react-icons/fa";

// Definimos que a Sidebar agora aceita comandos do pai (Layout)
interface SidebarProps {
  isOpen: boolean; // Está aberta no celular?
  onClose: () => void; // Função para fechar ao clicar no X ou num link
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* OVERLAY ESCURO (Só aparece no celular quando o menu abre) */}
      {/* Se isOpen for true, mostra o fundo preto. Se não, pointer-events-none para não atrapalhar */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // Fecha se clicar fora
      />

      {/* A SIDEBAR EM SI */}
      <aside
        className={`
          fixed md:relative z-50 h-screen w-64 bg-brand-cream border-r border-brand-pink/20 flex flex-col p-6 shadow-xl md:shadow-none transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          top-0 left-0
        `}
      >
        {/* Botão de FECHAR (Só aparece no Mobile) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-brown md:hidden hover:text-brand-pink"
        >
          <FaTimes size={24} />
        </button>

        {/* 1. Logo */}
        <div className="mb-10 text-center mt-8 md:mt-0">
          <h1 className="text-4xl font-serif text-brand-pink font-bold">CG</h1>
          <p className="text-brand-pink text-base font-medium">Clean Girl</p>
          <p className="text-brand-brown text-sm tracking-widest uppercase mt-1">
            Coffee
          </p>
        </div>

        {/* 2. Menu de Navegação */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                onClick={onClose} // Fecha o menu ao clicar
                className="block p-3 rounded-lg bg-brand-pink text-white font-medium shadow-md transition-all hover:opacity-90"
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                href="/comidas"
                onClick={onClose}
                className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors font-medium"
              >
                🥐 Comidas
              </Link>
            </li>
            <li>
              <Link
                href="/bebidas"
                onClick={onClose}
                className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors font-medium"
              >
                🥤 Bebidas
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. Redes Sociais */}
        <div className="mt-auto pt-6 border-t border-brand-brown/10">
          <div className="flex justify-center gap-4 mb-2">
            <a
              href="#"
              className="text-brand-brown/60 hover:text-brand-pink transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-brand-brown/60 hover:text-brand-pink transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-brand-brown/60 hover:text-brand-pink transition-colors"
            >
              <FaYoutube size={20} />
            </a>
          </div>
          <p className="text-xs text-center text-brand-brown/40">
            © 2026 Clean Girl
          </p>
        </div>
      </aside>
    </>
  );
}
