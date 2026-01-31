import ProductCard from "@/components/menu/ProductCard";

export default function Comidas() {
  // 1. LISTA DE DADOS (Simulando seu banco de dados)
  // Assim fica fácil adicionar ou remover pratos sem mexer no HTML
  const pratos = [
    {
      id: 1,
      title: "Croissant de Amêndoas",
      description:
        "Massa folhada francesa legítima, recheada com creme frangipane e lâminas de amêndoas tostadas.",
      price: "22,00",
      image:
        "/almond_croassant.jpg", // Imagem temporária
    },
    {
      id: 2,
      title: "Avocado Toast",
      description:
        "Pão de fermentação natural tostado, pasta de avocado temperada, ovo poché e gergelim negro.",
      price: "28,90",
      image:
        "/avocado_toast_ovo.jpg",
    },
    {
      id: 3,
      title: "Bowl de Frutas da Estação",
      description:
        "Mix refrescante de frutas selecionadas, iogurte grego natural, granola artesanal e mel orgânico.",
      price: "19,50",
      image:
        "/fruit_bowl.jpg",
    },
    {
      id: 4,
      title: "Cinnamon Roll",
      description:
        "Enroladinho de canela macio com cobertura de cream cheese frosting. Servido quentinho.",
      price: "16,00",
      image:
        "/cinnamon_roll.jpg",
    },
    {
      id: 5,
      title: "Quiche de Lorraine",
      description:
        "Massa podre que derrete na boca, recheio cremoso de queijo gruyère e bacon crocante.",
      price: "24,00",
      image:
        "/quiche_lorraine.jpg",
    },
    {
      id: 6,
      title: "Cheesecake de Frutas Vermelhas",
      description:
        "Base de biscoito amanteigado, creme de queijo denso e calda rústica de morango e mirtilo.",
      price: "21,90",
      image:
        "/cheesecake.jpg",
    
    },
  ];

  return (
    // Container Principal centralizado
    <div className="w-full max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      {/* CABEÇALHO DA PÁGINA */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
          Nossas Comidas
        </h1>
        <p className="text-brand-brown/60 text-lg max-w-2xl mx-auto font-light">
          Do café da manhã ao lanche da tarde. Ingredientes frescos, preparo
          artesanal e muito carinho em cada detalhe.
        </p>
      </div>

      {/* GRID DE PRODUTOS */}
      {/* gap-8 dá mais respiro entre os cards do que gap-4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {/* Aqui usamos o .map para criar os cards automaticamente baseados na lista acima */}
        {pratos.map((item) => (
          <ProductCard
            key={item.id} // O React precisa dessa chave única
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
