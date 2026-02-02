"use client"; // Este componente roda no navegador. Por isso o client

// Importa o canal de comunicação e ícones
import { useFavorites } from "@/context/FavoritesContext";
import { FaRegStar, FaStar } from "react-icons/fa";

// Define o parâmetro e tipo do objeto
interface FavoriteButtonProps {
  slug: string;
}

// Define oque pasar e para oque
export default function FavoriteButton({ slug }: FavoriteButtonProps) {
  {/* Variável de controle e acesso da memória global*/}
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
