// Importa o link nest e ícones
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import { LuCroissant } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { RiDrinksLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";

// A Sidebar aceita comandos do pai (Layout)
interface SidebarProps {
  isOpen: boolean; // Está aberta no celular?
  onClose: () => void; // Função para fechar ao clicar no X ou num link
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay escuro (Só aparece no celular quando o menu abre) */}
      {/* Se isOpen for true, mostra o fundo preto. Caso contrário, pointer-events-none para não atrapalhar */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose} // Fecha se clicar fora
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-50 h-screen w-64 bg-brand-cream border-r border-brand-pink/20 flex flex-col p-6 shadow-xl md:shadow-none transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          top-0 left-0
        `}
      >
        {/* Botão de fechar (Só aparece no Mobile) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-brown md:hidden hover:text-brand-pink"
        >
          <FaTimes size={24} />
        </button>

        {/* Logo */}
        <div className="mb-10 text-center mt-8 md:mt-0">
          <div className="flex gap-0.5 justify-center items-center text-4xl text-brand-brown">
            <h1 className=" font-serif text-brand-pink font-bold">CG</h1>
            <VscCoffee />
          </div>
          <p className="text-brand-pink text-base font-medium">Clean Girl</p>
          <p className="text-brand-brown text-sm tracking-widest uppercase mt-1">
            Coffee
          </p>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                onClick={onClose} // Fecha o menu ao clicar
                className="block p-3 rounded-lg bg-brand-pink text-white font-medium shadow-md transition-all hover:opacity-90"
              >
                <div className="flex items-center gap-2">
                  <IoHomeOutline className="text-brand-green" />
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/comidas"
                onClick={onClose}
                className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors font-medium"
              >
                <div className="flex items-center gap-2">
                  <LuCroissant className="text-brand-green" />
                  <p>Comidas</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/bebidas"
                onClick={onClose}
                className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors font-medium"
              >
                <div className="flex items-center gap-2">
                  <RiDrinksLine className="text-brand-green" />
                  <p>Bebidas</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/favoritos"
                onClick={onClose}
                className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors font-medium"
              >
                <div className="flex items-center gap-2">
                  <FaRegHeart className="text-brand-green" />
                  <p>Favoritos</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-4.5 border-t border-brand-brown/10">
          <p className="text-xs text-center text-brand-brown/40">
            © 2026 Clean Girl
          </p>
        </div>
      </aside>
    </>
  );
}
