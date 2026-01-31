import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface CategoryDayCardProps {
  title: string; // Ex: "Item do Dia"
  description: string; // Ex: "Cappuccino Avelã"
  image: string;
  href: string;
}

export default function DayItemCard({
  title,
  image,
  description,
  href,
}: CategoryDayCardProps) {
  return (
    // CONTAINER PRINCIPAL (Flex Row = Lado a Lado)
    <div className="group relative flex h-64 w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-brown/40">
      {/* 1. LADO ESQUERDO: IMAGEM (Ocupa 45% da largura) */}
      <div className="relative w-[45%] h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill // Preenche o pai (div w-[45%])
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay sutil para dar acabamento na foto */}
        <div className="absolute inset-0 bg-brand-brown/5 mix-blend-multiply" />
      </div>

      {/* 2. LADO DIREITO: CONTEÚDO (Ocupa o resto) */}
      <div className="flex-1 flex flex-col justify-center p-6 bg-brand-light">
        {/* Título Pequeno (Label) */}
        <span className="text-xs font-bold text-brand-green uppercase tracking-widest mb-2">
          {title}
        </span>

        {/* Descrição Maior (Nome do Prato) */}
        <h3 className="text-2xl font-serif text-brand-brown font-bold leading-tight mb-4">
          {description}
        </h3>

        {/* Botão "Ver Mais" */}
        {/* mt-auto empurra o botão para baixo se sobrar espaço, mas aqui usamos gap */}
        <div className="mt-auto">
          <Link href={href}>
            <button className="flex items-center gap-2 text-sm font-medium text-brand-brown hover:text-brand-pink transition-colors group-hover:translate-x-1 duration-300">
              Ver detalhes
              <span className="bg-brand-green/20 p-1.5 rounded-full text-brand-green hover:bg-brand-pink/20 hover:text-brand-pink transition-colors">
                <FaArrowRight size={10} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
