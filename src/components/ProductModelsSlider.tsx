import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Flame, Star, Lightbulb, Crown, Eye, Settings, MessageCircle, Weight, Users, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
const productModels = [{
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
  },
  techSpecs: {
    length: "8,5m",
    passengers: "12",
    maxPower: "300HP",
    weight: "1375kg",
    fuel: "Gasolina",
    draft: "0,6m"
  }
}, {
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
  },
  techSpecs: {
    length: "5,8m",
    passengers: "8",
    maxPower: "200HP",
    weight: "1120kg",
    fuel: "Gasolina",
    draft: "0,5m"
  }
}, {
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
  },
  techSpecs: {
    length: "3,2m",
    passengers: "4",
    maxPower: "800cc",
    weight: "680kg",
    fuel: "Gasolina",
    draft: "4x4"
  }
}, {
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
  },
  techSpecs: {
    length: "3,5m",
    passengers: "2",
    maxPower: "Elétrico",
    weight: "320kg",
    fuel: "Bateria",
    draft: "2h autonomia"
  }
}];

// Component para Card Expandível
const ExpandableCard = ({
  model
}: {
  model: typeof productModels[0];
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className={`group relative bg-card rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform-gpu ${isHovered ? 'scale-105 shadow-2xl shadow-primary/30 z-50' : 'hover:shadow-xl hover:shadow-primary/20 z-10'}`} style={{
    transformOrigin: 'center center',
    overflow: isHovered ? 'visible' : 'hidden'
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {/* Tag de Destaque */}
        <div className={`absolute top-4 right-4 ${model.tag.color} backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10 shadow-lg`}>
          <model.tag.icon size={12} />
          {model.tag.label}
        </div>

        {/* Default Image */}
        <img src={model.image} alt={model.name} className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        {/* Hover Image */}
        <img src={model.hoverImage} alt={`${model.name} hover`} className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'}`} />
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 ${isHovered ? 'from-black/50' : ''}`}></div>
      </div>

      {/* Basic Content */}
      <div className="p-6">
        <div className="space-y-3">
          <h3 className={`text-xl font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
            {model.name}
          </h3>
          <p className="text-sm text-primary font-medium">
            {model.category}
          </p>
          <p className="text-sm text-muted-foreground">
            {model.specifications}
          </p>
        </div>

        {/* Desktop: Expanded Content on Hover */}
        <div className={`hidden md:block transition-all duration-300 ease-in-out ${isHovered ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {/* Tech Specs */}
          <div className="bg-muted/30 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Settings size={16} />
              Ficha Técnica
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Comprimento:</span>
                <span className="font-medium">{model.techSpecs.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Passageiros:</span>
                <span className="font-medium">{model.techSpecs.passengers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Potência:</span>
                <span className="font-medium">{model.techSpecs.maxPower}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Peso:</span>
                <span className="font-medium">{model.techSpecs.weight}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-0.5">
            <Button size="sm" variant="outline" className="flex items-center justify-center gap-1 text-xs flex-1 min-w-0" onClick={() => window.location.href = model.link}>
              <Eye size={12} />
              Ver
            </Button>
            <Button size="sm" variant="outline" className="flex items-center justify-center gap-1 text-xs flex-1 min-w-0" onClick={() => window.location.href = `/monte-o-seu/${model.categoryType}/${model.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Settings size={12} />
              Montar
            </Button>
            <Button size="sm" variant="outline" className="flex items-center justify-center gap-1 text-xs flex-1 min-w-0" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
              <MessageCircle size={12} />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile: Dialog Trigger */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="md:hidden mt-4 w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Ver Mais
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <div className="space-y-4">
              {/* Images */}
              <div className="grid grid-cols-2 gap-2">
                <img src={model.image} alt={model.name} className="w-full h-32 object-cover rounded-lg" />
                <img src={model.hoverImage} alt={`${model.name} 2`} className="w-full h-32 object-cover rounded-lg" />
              </div>
              
              {/* Title and Category */}
              <div>
                <h3 className="text-xl font-bold text-foreground">{model.name}</h3>
                <p className="text-sm text-primary font-medium">{model.category}</p>
              </div>

              {/* Tech Specs */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Settings size={16} />
                  Ficha Técnica Completa
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Comprimento:</span>
                    <span className="font-medium">{model.techSpecs.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passageiros:</span>
                    <span className="font-medium">{model.techSpecs.passengers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Potência Máx:</span>
                    <span className="font-medium">{model.techSpecs.maxPower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peso:</span>
                    <span className="font-medium">{model.techSpecs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Combustível:</span>
                    <span className="font-medium">{model.techSpecs.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Calado:</span>
                    <span className="font-medium">{model.techSpecs.draft}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => window.location.href = model.link}>
                  <Eye size={14} />
                  Ver Detalhes
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => window.location.href = '/monte-o-seu'}>
                  <Settings size={14} />
                  Monte o Seu
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                  <MessageCircle size={14} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Desktop: Standard Button (always visible) */}
        <Button className="hidden md:block mt-4 w-full transition-all duration-300 group/btn" 
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '8px',
                 padding: '14px 24px',
                 backgroundColor: '#00294d',
                 color: 'white',
                 fontSize: '16px',
                 fontWeight: '600',
                 borderRadius: '999px',
                 minHeight: '44px',
                 border: 'none'
               }}
               onClick={() => window.location.href = model.link}>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" style={{ color: 'white' }} />
          Ver Mais
        </Button>
      </div>
    </div>;
};
const ProductModelsSlider = () => {
  const [api, setApi] = useState<any>();
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true
  });
  return <section className="py-12 bg-background min-h-[800px] overflow-visible">
      <div className="container mx-auto px-6 overflow-visible">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mais Vendidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa linha completa de embarcações e veículos premium
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full overflow-visible" plugins={[autoplayPlugin]} opts={{
        align: "start",
        loop: true
      }}>
          <CarouselContent className="-ml-6 px-6">
            {productModels.map(model => <CarouselItem key={model.id} className="pl-6 md:basis-1/2 lg:basis-1/3 relative">
                <ExpandableCard model={model} />
              </CarouselItem>)}
          </CarouselContent>

          <div className="flex justify-center mt-16 gap-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
            <CarouselNext className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>;
};
export default ProductModelsSlider;