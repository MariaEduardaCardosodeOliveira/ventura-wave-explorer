import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Eye, Settings, MessageCircle, Flame, Star, Lightbulb, Crown } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    specifications: string;
    image: string;
    hoverImage?: string;
    link: string;
    badge: {
      label: string;
      type: 'bestseller' | 'highlight' | 'launch' | 'premium';
    };
    techSpecs: {
      length: string;
      power: string;
      passengers: string;
      weight: string;
    };
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeConfig = (type: string) => {
    switch (type) {
      case 'bestseller':
        return { icon: Flame, color: 'bg-red-500/90', text: 'text-white' };
      case 'highlight':
        return { icon: Lightbulb, color: 'bg-amber-500/90', text: 'text-white' };
      case 'launch':
        return { icon: Star, color: 'bg-blue-500/90', text: 'text-white' };
      case 'premium':
        return { icon: Crown, color: 'bg-purple-500/90', text: 'text-white' };
      default:
        return { icon: Star, color: 'bg-gray-500/90', text: 'text-white' };
    }
  };

  const badgeConfig = getBadgeConfig(product.badge.type);
  const BadgeIcon = badgeConfig.icon;

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Desktop Card */}
      <div 
        className={`hidden md:block relative bg-card rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform-gpu ${
          isHovered 
            ? 'scale-103 shadow-2xl shadow-primary/20' 
            : 'hover:shadow-xl'
        }`}
        style={{ 
          transformOrigin: 'center top',
          height: '600px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Badge */}
        <div className={`absolute top-4 left-4 ${badgeConfig.color} ${badgeConfig.text} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10 shadow-lg`}>
          <BadgeIcon size={12} />
          {product.badge.label}
        </div>

        {/* Image Container */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} hover`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        {/* Card Content - Flex container */}
        <div className="flex flex-col h-80 p-6">
          {/* Basic Info */}
          <div className="space-y-3 mb-4">
            <h3 className={`text-xl font-bold transition-colors duration-300 ${
              isHovered ? 'text-primary' : 'text-foreground'
            }`}>
              {product.name}
            </h3>
            <p className="text-sm text-primary font-medium">
              {product.category}
            </p>
            <p className="text-sm text-muted-foreground">
              {product.specifications}
            </p>
          </div>

          {/* Expanded Content - Ficha Técnica */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isHovered ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-muted/30 rounded-lg p-3 mb-3">
              <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                <Settings size={14} />
                Ficha Técnica
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Comprimento</span>
                  <span className="font-medium text-foreground">{product.techSpecs.length}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Potência</span>
                  <span className="font-medium text-foreground">{product.techSpecs.power}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Passageiros</span>
                  <span className="font-medium text-foreground">{product.techSpecs.passengers}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Peso</span>
                  <span className="font-medium text-foreground">{product.techSpecs.weight}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-1 mb-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex items-center gap-1 text-xs h-8"
                onClick={() => window.location.href = product.link}
              >
                <Eye size={10} />
                Detalhes
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="flex items-center gap-1 text-xs h-8"
                onClick={() => window.location.href = '/monte-o-seu'}
              >
                <Settings size={10} />
                Monte
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="flex items-center gap-1 text-xs h-8"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <MessageCircle size={10} />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Spacer - Empurra o botão para baixo */}
          <div className="flex-grow"></div>

          {/* Ver Mais Button - SEMPRE no fundo */}
          <Button 
            className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-auto"
            onClick={() => window.location.href = product.link}
          >
            Ver Mais
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Mobile Card */}
      <div className="md:hidden relative bg-card rounded-2xl shadow-lg overflow-hidden">
        {/* Badge */}
        <div className={`absolute top-4 left-4 ${badgeConfig.color} ${badgeConfig.text} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10 shadow-lg`}>
          <BadgeIcon size={12} />
          {product.badge.label}
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
            <p className="text-sm text-primary font-medium">{product.category}</p>
            <p className="text-sm text-muted-foreground">{product.specifications}</p>
          </div>

          {/* Mobile Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                Ver Ficha Técnica
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-4">
                {/* Images */}
                <div className="grid grid-cols-2 gap-2">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
                  {product.hoverImage && (
                    <img src={product.hoverImage} alt={`${product.name} 2`} className="w-full h-32 object-cover rounded-lg" />
                  )}
                </div>
                
                {/* Title and Category */}
                <div>
                  <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                  <p className="text-sm text-primary font-medium">{product.category}</p>
                </div>

                {/* Tech Specs */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Settings size={16} />
                    Ficha Técnica Completa
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Comprimento:</span>
                      <span className="font-medium">{product.techSpecs.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Potência:</span>
                      <span className="font-medium">{product.techSpecs.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Passageiros:</span>
                      <span className="font-medium">{product.techSpecs.passengers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="font-medium">{product.techSpecs.weight}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center gap-1"
                    onClick={() => window.location.href = product.link}
                  >
                    <Eye size={14} />
                    Detalhes
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => window.location.href = '/monte-o-seu'}
                  >
                    <Settings size={14} />
                    Monte
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;