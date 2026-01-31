import Image from "next/image";
import Button from "../ui/Button"; // Importamos nosso botão
import { FaCartPlus } from "react-icons/fa"; // Ícone do carrinho

interface ProductProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
}: ProductProps) {
  return (
    // A Caixa Externa: Fundo branco, borda arredondada e sombra suave
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-brown/5 flex flex-col h-full">
      {/* 1. Área da Imagem (com zoom suave ao passar o mouse) */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge opcional de "Menu do Dia" */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-brand-brown shadow-sm">
          R$ {price}
        </div>
      </div>

      {/* 2. Informações */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-brand-brown mb-1">
          {title}
        </h3>
        <p className="text-brand-brown/60 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* 3. Ação (Botão fica no final) */}
        <div className="mt-auto">
          <Button variant="primary" className="w-full">
            <FaCartPlus /> Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
