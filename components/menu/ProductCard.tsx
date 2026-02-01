"use client"; // Obrigatório para interatividade

import Image from "next/image";
import Button from "../ui/Button";
import { FaCartPlus, FaRegStar, FaStar } from "react-icons/fa"; // Importe a estrela cheia (FaStar)
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext"; // Importe nosso hook

interface ProductProps {
  title: string;
  description: string;
  price: string;
  image: string;
  slug: string;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  slug,
}: ProductProps) {
  // Acessa a memória global
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(slug); // true ou false

  return (
    <Link href={`/produto/${slug}`}>
      <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-brown/5 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-brand-brown shadow-sm">
            R$ {price}
          </div>

          {/* O BOTÃO MÁGICO */}
          <button
            onClick={(e) => {
              e.preventDefault(); // 1. NÃO VÁ PARA A PÁGINA DE DETALHES
              e.stopPropagation(); // 2. PARE O CLIQUE AQUI
              toggleFavorite(slug); // 3. LIGUE/DESLIGUE O FAVORITO
            }}
            className={`absolute top-2 left-2 p-2 rounded-full shadow-sm transition-colors z-10 ${
              favorite
                ? "bg-yellow-100 text-yellow-500" // Amarelo se for favorito
                : "bg-white/90 text-brand-brown hover:bg-yellow-50 hover:text-yellow-400" // Branco se não for
            }`}
          >
            {/* Se favorito: Estrela Cheia. Se não: Estrela Borda */}
            {favorite ? <FaStar size={20} /> : <FaRegStar size={20} />}
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-serif font-bold text-brand-brown mb-1">
            {title}
          </h3>
          <p className="text-brand-brown/60 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="mt-auto">
            {/* Prevenção extra para o botão de adicionar */}
            <div onClick={(e) => e.preventDefault()}>
              <Button variant="primary" className="w-full">
                <FaCartPlus /> Adicionar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
