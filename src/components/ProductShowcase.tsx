import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Pontoon 250",
    category: "Pontoon Series",
    specifications: "8.5m • 12 pessoas • 300HP",
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    hoverImage: "/src/assets/hero-boat.jpg",
    link: "/pontoon-250",
    badge: {
      label: "Mais Vendido",
      type: "bestseller" as const
    },
    techSpecs: {
      length: "8,5m",
      power: "300HP",
      passengers: "12 pessoas",
      weight: "1375kg"
    }
  },
  {
    id: 2,
    name: "V195 Comfort",
    category: "Runabout Series", 
    specifications: "5.8m • 8 pessoas • 200HP",
    image: "/src/assets/marine-boat.jpg",
    hoverImage: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    link: "/v195-comfort",
    badge: {
      label: "Destaque do Mês",
      type: "highlight" as const
    },
    techSpecs: {
      length: "5,8m",
      power: "200HP",
      passengers: "8 pessoas",
      weight: "1120kg"
    }
  },
  {
    id: 3,
    name: "Adventure UTV",
    category: "Adventure Series",
    specifications: "4x4 • 800cc • Todo Terreno",
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    hoverImage: "/src/assets/adventure-utv.jpg",
    link: "/adventure-utv",
    badge: {
      label: "Lançamento",
      type: "launch" as const
    },
    techSpecs: {
      length: "3,2m",
      power: "800cc",
      passengers: "4 pessoas",
      weight: "680kg"
    }
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-background overflow-visible min-h-[900px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa linha completa de embarcações e veículos premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;