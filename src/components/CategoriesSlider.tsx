import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Ship, Car, Zap } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Marine",
    icon: Ship,
    image: "/src/assets/marine-boat.jpg",
    borderColor: "border-blue-600",
    hoverColor: "hover:border-blue-400 hover:shadow-blue-400/30",
    link: "/marine"
  },
  {
    id: 2,
    name: "Adventure", 
    icon: Car,
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    borderColor: "border-orange-600",
    hoverColor: "hover:border-orange-400 hover:shadow-orange-400/30",
    link: "/adventure"
  },
  {
    id: 3,
    name: "Electric",
    icon: Zap,
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    borderColor: "border-green-500",
    hoverColor: "hover:border-green-400 hover:shadow-green-400/30",
    link: "/electric"
  }
];

const CategoriesSlider = () => {
  const [api, setApi] = useState<any>();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossas diferentes linhas de produtos premium
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className={`group relative h-80 rounded-2xl overflow-hidden border-2 border-transparent ${category.borderColor} ${category.hoverColor} hover:shadow-2xl transition-all duration-500 cursor-pointer`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark Filter */}
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                      <div className="mb-6">
                        <IconComponent className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.name}
                        </h3>
                      </div>

                      {/* Floating Button */}
                      <Button 
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-6 py-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                        onClick={() => window.location.href = category.link}
                      >
                        Explorar
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
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

export default CategoriesSlider;