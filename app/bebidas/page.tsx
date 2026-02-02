"use client";

import { useState } from "react";
import ProductCard from "@/components/menu/ProductCard";
import FilterBar from "@/components/menu/FilterBar";
import { products } from "@/data/products";

export default function Bebidas() {
  // === ESTADOS ===
  // Removemos o setSearchText
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default",
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 1. DADOS INICIAIS
  const allBebidas = products.filter((item) => item.category === "comida");

  // Extrai tags únicas
  const allTags = Array.from(
    new Set(allBebidas.flatMap((item) => item.highlights)),
  );

  // === 2. LÓGICA DE FILTRAGEM E ORDENAÇÃO ===
  const filteredBebidas = allBebidas
    .filter((item) => {
      // APENAS Filtro de Tag
      // Se tiver tag selecionada, o item precisa ter ela. Se não tiver tag (null), passa tudo.
      if (selectedTag) {
        return item.highlights.includes(selectedTag);
      }
      return true;
    })
    .sort((a, b) => {
      // Ordenação de Preço
      if (sortOrder === "default") return 0;

      const priceA = parseFloat(a.price.replace(",", "."));
      const priceB = parseFloat(b.price.replace(",", "."));

      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">
      {/* CABEÇALHO */}
      <div className="text-center space-y-2 mb-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Nossas Comidas
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Do café da manhã ao lanche da tarde. Ingredientes frescos e preparo
          artesanal.
        </p>
      </div>

      {/* BARRA DE FILTROS (Sem a busca) */}
      <FilterBar
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        availableTags={allTags}
      />

      {/* LISTAGEM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {filteredBebidas.length > 0 ? (
          filteredBebidas.map((item) => (
            <ProductCard
              key={item.id}
              title={item.name}
              description={item.shortDescription}
              price={item.price}
              image={item.image}
              slug={item.slug}
            />
          ))
        ) : (
          // Mensagem caso o filtro de TAG não encontre nada
          <div className="col-span-full text-center py-20 opacity-50">
            <p className="text-xl font-serif text-brand-brown">
              Nenhum item com essa característica.
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-brand-green hover:underline mt-2"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
