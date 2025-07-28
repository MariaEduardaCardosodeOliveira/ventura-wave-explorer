import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Plus } from "lucide-react";

interface ProductCustomizationProps {
  model: string;
  category: string;
  onConfigurationChange: (config: any) => void;
}

export const ProductCustomization = ({
  model,
  category,
  onConfigurationChange
}: ProductCustomizationProps) => {
  const [selectedColor, setSelectedColor] = useState("branco");
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  
  const colors = [
    { id: "branco", name: "Branco", hex: "#ffffff", special: false },
    { id: "azul", name: "Azul Marinho", hex: "#1e3a8a", special: true },
    { id: "vermelho", name: "Vermelho", hex: "#dc2626", special: true },
    { id: "preto", name: "Preto", hex: "#000000", special: false },
    { id: "verde", name: "Verde", hex: "#059669", special: true }
  ];

  const accessories = [
    { id: "guincho", name: "Guincho Elétrico", price: 2500 },
    { id: "retrovisor", name: "Retrovisor", price: 450 },
    { id: "parabrisa", name: "Parabrisa", price: 1200 },
    { id: "toldo", name: "Toldo", price: 800 },
    { id: "som", name: "Sistema de Som", price: 1500 }
  ];

  const specifications = {
    "Pontoon 250": {
      comprimento: "7.50m",
      largura: "2.44m",
      capacidade: "12 pessoas",
      motor: "115 HP",
      peso: "950kg"
    },
    "V195 Comfort": {
      comprimento: "5.85m",
      largura: "2.40m", 
      capacidade: "8 pessoas",
      motor: "90 HP",
      peso: "750kg"
    }
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    onConfigurationChange({
      color: colorId,
      accessories: selectedAccessories
    });
  };

  const toggleAccessory = (accessoryId: string) => {
    const newAccessories = selectedAccessories.includes(accessoryId)
      ? selectedAccessories.filter(id => id !== accessoryId)
      : [...selectedAccessories, accessoryId];
    
    setSelectedAccessories(newAccessories);
    onConfigurationChange({
      color: selectedColor,
      accessories: newAccessories
    });
  };

  const currentColor = colors.find(c => c.id === selectedColor);
  const totalAccessoriesPrice = selectedAccessories.reduce((total, id) => {
    const accessory = accessories.find(a => a.id === id);
    return total + (accessory?.price || 0);
  }, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Visualization */}
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <img
                src={`/lovable-uploads/${model.toLowerCase().replace(/\s+/g, '-')}-${selectedColor}.jpg`}
                alt={`${model} em ${currentColor?.name}`}
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-sm">
                Visualização com faixa lateral em {currentColor?.name}
                {currentColor?.special && " (Cor Especial)"}
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-2">{model}</h2>
            <p className="text-muted-foreground">
              Configure seu {model} com acabamentos personalizados
            </p>
          </CardContent>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Especificações Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(specifications[model as keyof typeof specifications] || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customization Options */}
      <div className="space-y-6">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="accessories">Acessórios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="colors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cores Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedColor === color.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleColorSelect(color.id)}
                    >
                      <div
                        className="w-full h-16 rounded-md mb-2 border-2 border-border"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-center">
                        <p className="font-medium text-sm">{color.name}</p>
                        {color.special && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Especial
                          </Badge>
                        )}
                      </div>
                      {selectedColor === color.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="accessories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Acessórios Opcionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessories.map((accessory) => (
                    <div
                      key={accessory.id}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                        selectedAccessories.includes(accessory.id)
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                    >
                      <div>
                        <h4 className="font-medium">{accessory.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          + R$ {accessory.price.toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <Button
                        variant={selectedAccessories.includes(accessory.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleAccessory(accessory.id)}
                      >
                        {selectedAccessories.includes(accessory.id) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
                
                {totalAccessoriesPrice > 0 && (
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total em Acessórios:</span>
                      <span className="text-lg font-bold text-primary">
                        R$ {totalAccessoriesPrice.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};