"use client"; // client por ter interação do usuário

// Importações de ícone
import { FaSortAmountDown, FaSortAmountUp, FaFilter } from "react-icons/fa";

// Define os parâmetros e tipos do objeto
interface FilterBarProps {
  sortOrder: "asc" | "desc" | "default";
  onSortChange: (order: "asc" | "desc" | "default") => void;
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  availableTags: string[]; // Ex: ["Vegano", "Sem Glúten"]
}

// Define oque passar e para quem
export default function FilterBar({
  sortOrder,
  onSortChange,
  selectedTag,
  onTagChange,
  availableTags,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      {/* Botão de ordenação de preço */}
      <button
        onClick={() => {
          // Definição do ciclo: Default -> Menor Preço -> Maior Preço -> Default
          if (sortOrder === "default") onSortChange("asc");
          else if (sortOrder === "asc") onSortChange("desc");
          else onSortChange("default");
        }}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all font-medium text-sm ${
          sortOrder !== "default"
            ? "bg-brand-brown text-white border-brand-brown shadow-md"
            : "bg-white text-brand-brown border-brand-brown/10 hover:border-brand-brown/30"
        }`}
      >
        {/* Ícones da ordenação */}
        {sortOrder === "asc" && <FaSortAmountDown />}
        {sortOrder === "desc" && <FaSortAmountUp />}
        {sortOrder === "default" && <FaFilter />}

        {/* Texto da ordenação */}
        {sortOrder === "asc"
          ? "Menor Preço"
          : sortOrder === "desc"
            ? "Maior Preço"
            : "Ordenar"}
      </button>

      {/* Divisória visual */}
      <div className="w-px h-8 bg-brand-brown/10 mx-1 hidden sm:block"></div>

      {/* Filtros rápidos (TAGS) */}
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar flex-1">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(selectedTag === tag ? null : tag)}
            className={`px-4 py-2.5 rounded-xl border transition-all whitespace-nowrap font-medium text-sm ${
              selectedTag === tag
                ? "bg-brand-green text-white border-brand-green shadow-sm"
                : "bg-white text-brand-brown/70 border-brand-brown/10 hover:border-brand-brown/30 hover:bg-brand-light/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
