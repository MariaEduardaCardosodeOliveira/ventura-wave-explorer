import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Star, Lightbulb, Crown } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const productModels = [
  {
    id: 1,
    name: "Pontoon 250",
    category: "Pontoon Series",
    categoryType: "marine",
    specifications: "8.5m • 12 pessoas • 300HP",
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    hoverImage: "/src/assets/hero-boat.jpg",
    link: "/pontoon-250",
    tag: {
      label: "Mais Vendido",
      icon: Flame,
      color: "bg-red-500/90"
    }
  },
  {
    id: 2,
    name: "V195 Comfort",
    category: "Runabout Series", 
    categoryType: "marine",
    specifications: "5.8m • 8 pessoas • 200HP",
    image: "/src/assets/marine-boat.jpg",
    hoverImage: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    link: "/v195-comfort",
    tag: {
      label: "Destaque do Mês",
      icon: Lightbulb,
      color: "bg-amber-500/90"
    }
  },
  {
    id: 3,
    name: "Adventure UTV",
    category: "Adventure Series",
    categoryType: "adventure",
    specifications: "4x4 • 800cc • Todo Terreno",
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    hoverImage: "/src/assets/adventure-utv.jpg",
    link: "/adventure-utv",
    tag: {
      label: "Lançamento",
      icon: Star,
      color: "bg-blue-500/90"
    }
  },
  {
    id: 4,
    name: "Electric JetSki",
    category: "Electric Series",
    categoryType: "electric",
    specifications: "100% Elétrico • 50km/h • 2h autonomia",
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    hoverImage: "/src/assets/electric-jetski.jpg",
    link: "/electric-jetski",
    tag: {
      label: "Premium",
      icon: Crown,
      color: "bg-purple-500/90"
    }
  }
];

const getCategoryBackground = (categoryType: string) => {
  switch (categoryType) {
    case 'marine':
      return 'bg-gradient-to-br from-blue-900 via-blue-600 to-white';
    case 'adventure':
      return 'bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] relative before:absolute before:inset-0 before:bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] before:opacity-30';
    case 'electric':
      return 'bg-gradient-to-br from-white via-green-100 to-lime-400';
    default:
      return 'bg-card';
  }
};

const ProductModelsSlider = () => {
  const [api, setApi] = useState<any>();

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mais Vendidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa linha completa de embarcações e veículos premium
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[autoplayPlugin]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {productModels.map((model) => (
              <CarouselItem key={model.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-[1.03] transform-gpu">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Tag de Destaque */}
                    <div className={`absolute top-4 right-4 ${model.tag.color} backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10 shadow-lg animate-pulse hover:animate-none transition-all duration-300`}>
                      <model.tag.icon size={12} />
                      {model.tag.label}
                    </div>

                    {/* Default Image */}
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    {/* Hover Image */}
                    <img
                      src={model.hoverImage}
                      alt={`${model.name} hover`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-700"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-2 group-hover:translate-y-0">
                      Premium Quality
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {model.category}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {model.specifications}
                      </p>
                    </div>

                    <Button 
                      className="mt-4 w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      onClick={() => window.location.href = model.link}
                    >
                      Ver Mais
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
            <CarouselNext className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductModelsSlider;