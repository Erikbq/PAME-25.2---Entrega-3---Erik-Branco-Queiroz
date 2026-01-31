import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string; // O link para onde o card leva (ex: /comidas)
}

export default function DayItemCard({
  title,
  image,
  description,
  href,
}: CategoryCardProps) {
  return (
    <div
      // 'group': Permite controlar a animação da imagem e do texto ao passar o mouse no card inteiro
      className="group relative flex px-2 py-2border h-64 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Imagem de fundo */}
        <Image
          src={image}
          alt={title}
          fill
          // group-hover:scale-110 -> Dá um zoom suave na foto quando passa o mouse
          className="w-25% object-cover transition-transform duration-700 group-hover:scale-110"
        />

      {/* 2. A BARRA INFERIOR (Texto e Seta) */}
      <div className="w-full h-full flex flex-col justify-center items-baseline transition-colors group-hover:bg-brand-pink">
        <span className="text-white font-serif font-bold text-lg tracking-wide">
          {title}
        </span>

        {/* O ícone da seta se move levemente para a direita no hover */}
        <span className="text-white bg-white/20 p-2 rounded-full transition-transform duration-300 group-hover:translate-x-1">
          {description}
        </span>

        <button>
            
        </button>
      </div>
    </div>
  );
}
