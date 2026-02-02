"use client"; // Este componente roda no navegador por possuir interação

// Importes para comunicação e extração de estado
import { createContext, useContext, useState, ReactNode } from "react";

// Define o que será compartilhado
interface FavoritesContextType {
  favorites: string[]; // Lista de slugs (ex: ["cappuccino", "croissant"])
  toggleFavorite: (slug: string) => void; // Função para adicionar/remover
  isFavorite: (slug: string) => boolean; // Função para checar se é favorito
}

// Cria o canal de comunicação com valor inicial de undefined
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // Cria a lista
  // Começa vazia e só vive enquanto a página não for recarregada
  const [favorites, setFavorites] = useState<string[]>([]);

  // Função para adicionar ou remover
  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      // Se já tem, tira. Se não tem, coloca.
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  // Verifica se o item está na lista
  const isFavorite = (slug: string) => favorites.includes(slug);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook para usar nos componentes
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error(
      "useFavorites deve ser usado dentro de um FavoritesProvider",
    );
  return context;
}
