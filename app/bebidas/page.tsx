import ProductCard from "@/components/menu/ProductCard";
import { products } from "@/data/products";

export default function Comidas() {
  // Aramazena somente os itens com a categoria bebida
  const listaComidas = products.filter((item) => item.category === "bebida");

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Nossas Bebidas
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Cafés especiais selecionados, chás aromáticos e bebidas geladas
          refrescantes. A pausa perfeita para o seu dia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {/* Renderizando a lista filtrada */}
        {listaComidas.map((item) => (
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
