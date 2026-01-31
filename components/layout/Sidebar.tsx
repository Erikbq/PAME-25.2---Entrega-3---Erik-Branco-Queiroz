import Link from "next/link"; // Otimizado para navegação sem recarregar a página

export default function Sidebar() {
  return (
    // <aside> é a tag semântica para barras laterais
    // h-screen: Altura 100% da viewport (tela inteira)
    // w-64: Largura fixa (64 * 0.25rem = 16rem)
    // fixed: Fixa na tela (opcional, mas comum em dashboards)
    // p-6: Padding de 1.5rem em todos os lados
    <aside className="h-screen w-64 bg-brand-cream border-r border-brand-pink/20 flex flex-col p-6">
      {/* 1. Logo / Título */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-serif text-brand-pink font-bold">CG</h1>
        <p className="text-brand-pink text-base">Clean Girl</p>
        <p className="text-brand-brown text-sm">Coffee</p>
      </div>

      {/* 2. Navegação */}
      <nav className="flex-1">
        {" "}
        {/* flex-1 faz ocupar o espaço disponível empurrando o resto */}
        <ul className="space-y-4">
          {" "}
          {/* space-y-4 adiciona margem vertical entre os filhos */}
          {/* Item de Menu */}
          <li>
            <Link
              href="/"
              className="block p-3 rounded-lg bg-brand-pink text-white font-medium transition-colors hover:opacity-90"
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              href="/comidas"
              className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors"
            >
              🥐 Comidas
            </Link>
          </li>
          <li>
            <Link
              href="/bebidas"
              className="block p-3 rounded-lg text-brand-brown hover:bg-brand-pink/10 transition-colors"
            >
              🥤 Bebidas
            </Link>
          </li>
        </ul>
      </nav>

      {/* 3. Footer da Sidebar (Opcional - Redes sociais da imagem) */}
      <div className="mt-auto">
        <p className="text-xs text-brand-brown/60">© 2026 Clean Girl</p>
      </div>
    </aside>
  );
}
