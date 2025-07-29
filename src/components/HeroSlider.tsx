import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    title: "Do mar à trilha —",
    subtitle: "Design de ponta e performance em cada detalhe.",
    button1: "Ver Modelos",
    button2: "Monte o Seu",
    category: "marine"
  },
  {
    id: 2,
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    title: "Desbrave qualquer terreno",
    subtitle: "Aventura, força e controle em cada curva.",
    button1: "Ver Linha Adventure",
    button2: "Monte o Seu",
    category: "adventure"
  },
  {
    id: 3,
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    title: "Performance limpa, emoção pura",
    subtitle: "Mobilidade elétrica com adrenalina e inovação.",
    button1: "Conheça a Linha Elétrica",
    button2: "Saiba Mais",
    category: "electric"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl">
                      <div className="space-y-6 text-white">
                        <div className="space-y-4">
                          <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                            {slide.title}
                          </h1>
                          <p className="text-xl lg:text-2xl font-light leading-relaxed opacity-90">
                            {slide.subtitle}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <Button 
                            size="lg"
                            className="bg-white text-slate-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg rounded-full"
                          >
                            {slide.button1}
                          </Button>
                          <Button 
                            variant="outline"
                            size="lg"
                            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg rounded-full"
                          >
                            {slide.button2}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
          <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;