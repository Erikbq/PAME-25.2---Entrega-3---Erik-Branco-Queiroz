"use client"; // <--- A MÁGICA: Este componente roda no navegador

import { useFavorites } from "@/context/FavoritesContext";
import { FaRegStar, FaStar } from "react-icons/fa";

interface FavoriteButtonProps {
  slug: string;
}

export default function FavoriteButton({ slug }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(slug);

  return (
    <button
      onClick={() => toggleFavorite(slug)}
      className={`p-3 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center border ${
        favorite
          ? "bg-yellow-100 text-yellow-500 border-yellow-200"
          : "bg-white text-brand-brown hover:bg-brand-light border-brand-brown/10"
      }`}
      title={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {favorite ? <FaStar size={24} /> : <FaRegStar size={24} />}
    </button>
  );
}
