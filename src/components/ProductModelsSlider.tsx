import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const productModels = [
  {
    id: 1,
    name: "Pontoon 250",
    category: "Pontoon Series",
    specifications: "8.5m • 12 pessoas • 300HP",
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    link: "/pontoon-250"
  },
  {
    id: 2,
    name: "V195 Comfort",
    category: "Runabout Series", 
    specifications: "5.8m • 8 pessoas • 200HP",
    image: "/src/assets/marine-boat.jpg",
    link: "/v195-comfort"
  },
  {
    id: 3,
    name: "Adventure UTV",
    category: "Adventure Series",
    specifications: "4x4 • 800cc • Todo Terreno",
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    link: "/adventure-utv"
  },
  {
    id: 4,
    name: "Electric JetSki",
    category: "Electric Series",
    specifications: "100% Elétrico • 50km/h • 2h autonomia",
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    link: "/electric-jetski"
  }
];

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
            Nossos Modelos
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
                <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
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