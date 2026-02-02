"use client"; // Precisa carregar no navegador por ter atualização instantânea

// Importações de estado atual, componentes FilteBar e ProductCards e o banco de dados
import { useState } from "react";
import ProductCard from "@/components/menu/ProductCard";
import FilterBar from "@/components/menu/FilterBar";
import { products } from "@/data/products";

export default function Bebidas() {
  // Define os estados possíveis para sortOrder e o estado inicial como default
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default",
  );
  // Define os estados possíveis para selectTag e o estado inicial como null
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Dados iniciais
  const allBebidas = products.filter((item) => item.category === "bebida");

  // Extrai tags únicas
  const allTags = Array.from(
    new Set(allBebidas.flatMap((item) => item.highlights)),
  );

  // Lógica de filtragem e ordenação 
  const filteredBebidas = allBebidas
    .filter((item) => {
      // Apenas filtro de Tag
      // Se tiver tag selecionada, o item precisa ter ela. Se não tiver tag (null), passa tudo.
      if (selectedTag) {
        return item.highlights.includes(selectedTag);
      }
      return true;
    })
    .sort((a, b) => {
      // Ordenação de Preço
      if (sortOrder === "default") return 0;

      // Troca a vírgula por ponto para poder transformar em float
      const priceA = parseFloat(a.price.replace(",", "."));
      const priceB = parseFloat(b.price.replace(",", "."));

      // Retorna na ordem correta
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">
      {/* Cabeçalho */}
      <div className="text-center space-y-2 mb-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Nossas Bebidas
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Cafés especiais selecionados, chás aromáticos e bebidas geladas
          refrescantes. A pausa perfeita para o seu dia.
        </p>
      </div>

      {/* Barra de filtros */}
      <FilterBar
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        availableTags={allTags}
      />

      {/* Lista de tags */}
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
            {/* Botão para limpar filtros */}
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
