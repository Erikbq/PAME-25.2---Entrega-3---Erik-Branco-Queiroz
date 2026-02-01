"use client"; // Necessário para ler o contexto

import ProductCard from "@/components/menu/ProductCard";
import { products } from "@/data/products";
import { useFavorites } from "@/context/FavoritesContext";

export default function Favoritos() {
  const { favorites } = useFavorites(); // Pega a lista ["slug1", "slug2"]

  // Filtra: "Me dê os produtos cujo slug está na lista de favoritos"
  const listaFavoritos = products.filter((item) =>
    favorites.includes(item.slug),
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Seus Favoritos
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Todos os seus queridinhos em um só lugar.
        </p>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          {listaFavoritos.length > 0
            ? "Seus itens selecionados aparecerão aqui:"
            : "Você ainda não marcou nenhum favorito."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {listaFavoritos.map((item) => (
          <ProductCard
            key={item.id}
            title={item.name}
            description={item.shortDescription}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}
