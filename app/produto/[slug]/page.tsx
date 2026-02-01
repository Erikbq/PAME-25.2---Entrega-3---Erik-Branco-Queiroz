import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import FavoriteButton from "@/components/ui/FavoriteButton"; // <--- 1. Importamos o componente novo

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // OBS: Removemos o useFavorites daqui, pois ele não funciona em Server Component

  return (
    <div className="min-h-screen bg-brand-cream pb-20">
      {/* BOTÃO VOLTAR */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        <Link
          href={product.category === "comida" ? "/comidas" : "/bebidas"}
          className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-pink transition-colors font-medium"
        >
          <FaArrowLeft /> Voltar para o menu
        </Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* FOTO DO PRODUTO */}
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* INFORMAÇÕES */}
        <div className="flex flex-col gap-6 pt-4">
          <div>
            <span className="text-brand-pink font-bold tracking-widest uppercase text-sm">
              {product.category}
            </span>

            {/* CABEÇALHO COM TÍTULO E BOTÃO DE FAVORITO */}
            <div className="flex justify-between items-start mt-2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
                {product.name}
              </h1>

              {/* 2. AQUI ENTRA O BOTÃO ISOLADO */}
              {/* Ele recebe o slug e se vira sozinho para interagir */}
              <FavoriteButton slug={slug} />
            </div>

            <p className="text-2xl font-light text-brand-brown/80 mt-2">
              R$ {product.price}
            </p>
          </div>

          <div className="prose prose-brown">
            <p className="text-lg leading-relaxed text-brand-brown/70">
              {product.fullDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.highlights.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-brand-brown/5 text-brand-brown text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tabela Nutricional */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-brown/10 mt-4">
            <h3 className="font-serif font-bold text-brand-brown mb-4 text-lg">
              Informações Nutricionais
            </h3>
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <p className="text-brand-brown/50">Porção</p>
                <p className="font-medium text-brand-brown">
                  {product.nutritionalInfo.servingSize}
                </p>
              </div>
              <div>
                <p className="text-brand-brown/50">Calorias</p>
                <p className="font-medium text-brand-brown">
                  {product.nutritionalInfo.calories}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-brand-brown/50 mb-1">Alérgicos</p>
                <p className="font-medium text-brand-pink">
                  {product.nutritionalInfo.allergens.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <button className="w-full bg-brand-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-brown/90 transition-transform active:scale-95 shadow-lg mt-4">
            Adicionar ao Pedido
          </button>
        </div>
      </main>
    </div>
  );
}
