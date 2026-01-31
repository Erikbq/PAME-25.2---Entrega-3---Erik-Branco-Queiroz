import ProductCard from "@/components/menu/ProductCard";

export default function Bebidas() {
  // 1. LISTA DE DADOS (Simulando seu banco de dados)
  const bebidas = [
    {
      id: 1,
      title: "Cappuccino Italiano",
      description:
        "O clássico equilíbrio entre espresso encorpado, leite vaporizado e crema aveludada. Finalizado com cacau.",
      price: "14,00",
      image: "/cappuccino_italiano_xicara.jpg",
    },
    {
      id: 2,
      title: "Iced Vanilla Latte",
      description:
        "Espresso duplo servido sobre gelo, leite fresco e um toque artesanal de xarope de baunilha de Madagascar.",
      price: "18,50",
      image: "/iced_vanilla_latte.jpg",
    },
    {
      id: 3,
      title: "Matcha Latte Ceremonial",
      description:
        "Chá verde japonês de grau cerimonial, rico em antioxidantes, batido delicadamente com leite de aveia.",
      price: "22,00",
      image: "/matcha_latte.jpg",
    },
    {
      id: 4,
      title: "Espresso Tonic",
      description:
        "A refrescância da água tônica combinada com a intensidade de um espresso duplo e uma fatia de limão siciliano.",
      price: "16,00",
      image: "/espresso_tonic.jpg",
    },
    {
      id: 5,
      title: "Chocolate Quente Belga",
      description:
        "Blend cremoso de cacau 70% e chocolate ao leite belga. Acompanha chantilly fresco da casa.",
      price: "19,00",
      image: "/hot_chocolate.jpg",
    },
    {
      id: 6,
      title: "Caramel Macchiato",
      description:
        "Leite vaporizado 'manchado' com espresso e finalizado com nossa calda de caramelo salgado artesanal.",
      price: "20,00",
      image: "/caramel_macchiato.jpg",
    },
  ];

  return (
    // Container Principal centralizado
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      {/* CABEÇALHO DA PÁGINA */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Nossas Bebidas
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Cafés especiais selecionados, chás aromáticos e bebidas geladas
          refrescantes. A pausa perfeita para o seu dia.
        </p>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {bebidas.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
