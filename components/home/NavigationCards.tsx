import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string; // O link para onde o card leva (ex: /comidas)
}

export default function NavigationCard({
  title,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      // 'group': Permite controlar a animação da imagem e do texto ao passar o mouse no card inteiro
      className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          // group-hover:scale-110 -> Dá um zoom suave na foto quando passa o mouse
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Camada escura leve para garantir contraste se a foto for clara demais */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
      </div>

      {/* 2. A BARRA INFERIOR (Texto e Seta) */}
      <div className="absolute bottom-0 w-full bg-brand-green/90 backdrop-blur-sm p-4 flex justify-between items-center transition-colors group-hover:bg-brand-pink">
        <span className="text-white font-serif font-bold text-lg tracking-wide">
          {title}
        </span>

        {/* O ícone da seta se move levemente para a direita no hover */}
        <span className="text-white bg-white/20 p-2 rounded-full transition-transform duration-300 group-hover:translate-x-1">
          <FaArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
