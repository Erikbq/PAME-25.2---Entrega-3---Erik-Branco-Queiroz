export interface Product {
  id: number;
  slug: string; // O ID do link (ex: "croissant-amendoas")
  name: string;
  category: "comida" | "bebida"; // Para você filtrar ou mudar ícones
  price: string;
  image: string;
  shortDescription: string; // Aparece no Card
  fullDescription: string; // Aparece na Página de Detalhes
  nutritionalInfo: {
    calories: string;
    servingSize: string; // Ex: "1 unidade" ou "240ml"
    allergens: string[]; // Ex: ["Glúten", "Leite"]
  };
  highlights: string[]; // Informações importantes (ex: "Vegano", "Sem Açúcar")
}

export const products: Product[] = [
  // === COMIDAS ===
  {
    id: 1,
    slug: "croissant-amendoas",
    name: "Croissant de Amêndoas",
    category: "comida",
    price: "22,00",
    image: "/almond_croissant.jpg", // Certifique-se que o nome do arquivo bate com o da pasta public
    shortDescription:
      "Massa folhada legítima, recheada com creme e coberta com amêndoas tostadas.",
    fullDescription:
      "Nosso clássico croissant francês, assado diariamente para garantir a crocância perfeita. Recheado generosamente com creme frangipane artesanal e finalizado com lâminas de amêndoas tostadas e açúcar de confeiteiro.",
    nutritionalInfo: {
      calories: "380 kcal",
      servingSize: "1 unidade (120g)",
      allergens: ["Glúten", "Lactose", "Amêndoas", "Ovo"],
    },
    highlights: ["Artesanal", "Best Seller"],
  },
  {
    id: 2,
    slug: "avocado-toast",
    name: "Avocado Toast",
    category: "comida",
    price: "28,90",
    image: "/avocado_toast.jpg",
    shortDescription:
      "Pão de fermentação natural, avocado temperado e ovo poché.",
    fullDescription:
      "Uma fatia grossa de pão levain tostado na manteiga, coberta com pasta rústica de avocado temperada com limão siciliano, pimenta calabresa e azeite extra virgem. Finalizada com um ovo poché de gema mole e gergelim negro.",
    nutritionalInfo: {
      calories: "320 kcal",
      servingSize: "1 unidade",
      allergens: ["Glúten", "Ovo"],
    },
    highlights: ["Vegetariano", "Opção Saudável"],
  },
  {
    id: 3,
    slug: "bowl-frutas",
    name: "Bowl de Frutas da Estação",
    category: "comida",
    price: "19,50",
    image: "/fruit_bowl.jpg",
    shortDescription: "Mix refrescante de frutas, iogurte grego e granola.",
    fullDescription:
      "Seleção fresca de morangos, mirtilos, banana e manga. Servido sobre uma base cremosa de iogurte grego natural (sem açúcar) e coberto com nossa granola artesanal crocante e um fio de mel orgânico.",
    nutritionalInfo: {
      calories: "210 kcal",
      servingSize: "300g",
      allergens: ["Lactose", "Mel"],
    },
    highlights: ["Fitness", "Sem Glúten", "Vegetariano"],
  },
  {
    id: 4,
    slug: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "comida",
    price: "16,00",
    image: "/cinnamon_roll.jpg",
    shortDescription:
      "Enroladinho de canela macio com cobertura de cream cheese frosting.",
    fullDescription:
      "O legítimo estilo americano: massa brioche super macia, recheio generoso de manteiga, açúcar mascavo e canela do Ceilão. Assado até dourar e coberto ainda quente com nosso frosting especial de cream cheese que derrete nas dobras.",
    nutritionalInfo: {
      calories: "450 kcal",
      servingSize: "1 unidade",
      allergens: ["Glúten", "Lactose", "Ovo", "Canela"],
    },
    highlights: ["Doce", "Mata a Fome", "Servido Quente"],
  },
  {
    id: 5,
    slug: "quiche-lorraine",
    name: "Quiche de Lorraine",
    category: "comida",
    price: "24,00",
    image: "/quiche_lorraine.jpg",
    shortDescription:
      "Massa podre que derrete na boca, recheio de gruyère e bacon.",
    fullDescription:
      "Um clássico da culinária francesa. Nossa massa brisée (podre) é feita com manteiga extra, garantindo uma textura que desmancha. O recheio é um custard sedoso de ovos e creme de leite, repleto de queijo Gruyère autêntico e cubos de bacon defumado crocante.",
    nutritionalInfo: {
      calories: "320 kcal",
      servingSize: "1 fatia",
      allergens: ["Glúten", "Lactose", "Ovo", "Porco"],
    },
    highlights: ["Salgado", "Almoço Leve", "Francês"],
  },
  {
    id: 6,
    slug: "cheesecake-frutas-vermelhas",
    name: "Cheesecake de Frutas Vermelhas",
    category: "comida",
    price: "21,90",
    image: "/cheesecake.jpg",
    shortDescription:
      "Base de biscoito amanteigado, creme de queijo denso e calda rústica.",
    fullDescription:
      "Estilo New York: alto, denso e cremoso, assado em banho-maria. A base crocante de biscoito equilibra a riqueza do creme de cream cheese. Servido com uma calda rústica feita na casa com morangos e mirtilos inteiros, trazendo a acidez perfeita.",
    nutritionalInfo: {
      calories: "410 kcal",
      servingSize: "1 fatia",
      allergens: ["Glúten", "Lactose", "Ovo"],
    },
    highlights: ["Sobremesa", "Frutado", "Vegetariano"],
  },

  // === BEBIDAS ===
  {
    id: 101,
    slug: "cappuccino-italiano",
    name: "Cappuccino Italiano",
    category: "bebida",
    price: "14,00",
    image: "/cappuccino_italiano_xicara.jpg",
    shortDescription: "Espresso encorpado, leite vaporizado e crema aveludada.",
    fullDescription:
      "A receita clássica italiana: 1/3 de espresso duplo, 1/3 de leite vaporizado e 1/3 de espuma de leite densa e brilhante. Polvilhado levemente com cacau 100% alcalino.",
    nutritionalInfo: {
      calories: "110 kcal",
      servingSize: "200ml",
      allergens: ["Lactose"],
    },
    highlights: ["Clássico", "Sem Açúcar"],
  },
  {
    id: 102,
    slug: "iced-vanilla-latte",
    name: "Iced Vanilla Latte",
    category: "bebida",
    price: "18,50",
    image: "/iced_vanilla_latte.jpg",
    shortDescription: "Espresso duplo, gelo, leite e xarope de baunilha.",
    fullDescription:
      "A bebida perfeita para dias quentes. Combinamos nosso blend exclusivo de café (torra média) com muito gelo, leite fresco e um xarope de baunilha feito na casa com favas reais de Madagascar.",
    nutritionalInfo: {
      calories: "180 kcal",
      servingSize: "400ml",
      allergens: ["Lactose"],
    },
    highlights: ["Refrescante", "Doce"],
  },
  {
    id: 103,
    slug: "matcha-latte",
    name: "Matcha Latte Ceremonial",
    category: "bebida",
    price: "22,00",
    image: "/matcha_latte.jpg",
    shortDescription: "Chá verde japonês cerimonial com leite de aveia.",
    fullDescription:
      "Usamos Matcha de grau cerimonial importado de Kyoto. Rico em antioxidantes e L-teanina, oferece energia focada sem a ansiedade do café. Preparado tradicionalmente com chasen (batedor de bambu) e leite de aveia cremoso.",
    nutritionalInfo: {
      calories: "140 kcal",
      servingSize: "300ml",
      allergens: ["Aveia"],
    },
    highlights: ["Vegano", "Superfood", "Antioxidante"],
  },
  {
    id: 104,
    slug: "espresso-tonic",
    name: "Espresso Tonic",
    category: "bebida",
    price: "16,00",
    image: "/espresso_tonic.jpg",
    shortDescription:
      "A refrescância da água tônica combinada com a intensidade de um espresso duplo e limão.",
    fullDescription:
      "Uma experiência sensorial complexa e refrescante. O amargor do quinino da água tônica realça as notas frutadas do nosso espresso duplo, criando uma bebida efervescente. Servido com muito gelo e uma fatia de limão siciliano para despertar o paladar.",
    nutritionalInfo: {
      calories: "85 kcal",
      servingSize: "350ml",
      allergens: ["Quinino"],
    },
    highlights: ["Vegano", "Refrescante", "Energético"],
  },
  {
    id: 105,
    slug: "chocolate-quente-belga",
    name: "Chocolate Quente Belga",
    category: "bebida",
    price: "19,00",
    image: "/hot_chocolate.jpg",
    shortDescription: "Blend cremoso de cacau 70% e chocolate ao leite belga.",
    fullDescription:
      "Não usamos achocolatado, usamos chocolate de verdade. Derretemos pastilhas de chocolate belga Callebaut em leite integral vaporizado até atingir uma textura densa e aveludada. Finalizado com uma nuvem de chantilly fresco batido na hora.",
    nutritionalInfo: {
      calories: "340 kcal",
      servingSize: "240ml",
      allergens: ["Lactose", "Soja"],
    },
    highlights: ["Comfort Food", "Doce", "Inverno"],
  },
  {
    id: 106,
    slug: "caramel-macchiato",
    name: "Caramel Macchiato",
    category: "bebida",
    price: "20,00",
    image: "/caramel_macchiato.jpg",
    shortDescription:
      "Leite vaporizado 'manchado' com espresso e calda de caramelo salgado.",
    fullDescription:
      "Uma bebida em camadas visualmente linda. Base de xarope de baunilha, leite vaporizado cremoso e o espresso derramado por cima ('macchiato' significa manchado). O toque final é nossa assinatura: fios de caramelo salgado artesanal no topo.",
    nutritionalInfo: {
      calories: "250 kcal",
      servingSize: "300ml",
      allergens: ["Lactose"],
    },
    highlights: ["Doce", "Visual", "Best Seller"],
  },
];

// Você passa o slug (ex: "matcha-latte") e ela te devolve o produto completo.
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
