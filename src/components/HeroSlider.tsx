import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Ship, Car, Zap, Settings } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    title: "Do mar à trilha —",
    subtitle: "Design de ponta e performance em cada detalhe.",
    button1: "Ver Modelos",
    button2: "Monte o Seu",
    category: "marine",
    icon: Ship,
    tooltip: "Linha Marine",
    decorativeShape: "waves"
  },
  {
    id: 2,
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    title: "Desbrave qualquer terreno",
    subtitle: "Aventura, força e controle em cada curva.",
    button1: "Ver Linha Adventure",
    button2: "Monte o Seu",
    category: "adventure",
    icon: Car,
    tooltip: "Linha Adventure",
    decorativeShape: "mountains"
  },
  {
    id: 3,
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    title: "Performance limpa, emoção pura",
    subtitle: "Mobilidade elétrica com adrenalina e inovação.",
    button1: "Conheça a Linha Elétrica",
    button2: "Saiba Mais",
    category: "electric",
    icon: Zap,
    tooltip: "Linha Electric",
    decorativeShape: "lightning"
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
        className="w-full h-screen"
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-screen">
              <div className="relative h-screen w-full group">
                {/* Background Image with Parallax */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content with Animations */}
                <div className="relative z-10 h-screen flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                      <div className="space-y-8 text-white animate-fadeInUp">
                        <div className="space-y-6">
                          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-[700] font-poppins leading-tight tracking-tight text-white">
                            {slide.title}
                          </h1>
                          <p className="text-base lg:text-lg xl:text-xl font-[300] font-inter leading-relaxed text-white/90 max-w-2xl">
                            {slide.subtitle}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <Button 
                            size="lg"
                            className="group bg-gradient-to-r from-blue-900 to-red-600 text-white border-0 hover:from-blue-800 hover:to-red-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 font-semibold px-8 py-3 text-base rounded-full relative overflow-hidden"
                          >
                            <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                            Ver Modelos
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          </Button>
                          <Button 
                            variant="outline"
                            size="lg"
                            className="group border-2 border-blue-900 text-white bg-white hover:bg-blue-900 hover:text-white hover:border-blue-800 transition-all duration-300 font-semibold px-8 py-3 text-base rounded-full"
                          >
                            <Settings className="w-4 h-4 mr-2 transition-transform group-hover:rotate-45" />
                            Monte o Seu
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
          <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/40 hover:scale-110 hover:shadow-lg transition-all duration-300 backdrop-blur-md">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
          <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/40 hover:scale-110 hover:shadow-lg transition-all duration-300 backdrop-blur-md">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg shadow-white/50"
                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-6 bg-black/30 backdrop-blur-md rounded-full px-6 py-3">
            {slides.map((slide, index) => {
              const IconComponent = slide.icon;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white text-slate-900 scale-110 shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                  }`}
                  title={slide.tooltip}
                >
                  <IconComponent className="w-6 h-6" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                      {slide.tooltip}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;