import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const VenturaMarine = () => {
  const [activeCategory, setActiveCategory] = useState("comfort");

  const comfortModels = [
    {
      name: "V195 Comfort",
      specs: "5,83m • 8 passageiros • 90–150 HP",
      link: "/v195comfort",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop"
    },
    {
      name: "V205 Crossover",
      specs: "6,48m • 9 passageiros • 90–150 HP",
      link: "/v205crossover",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
    },
    {
      name: "V210 Comfort",
      specs: "6,20m • 9 passageiros • 90–150 HP",
      link: "/v210comfort",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      name: "V215 Cabin Comfort",
      specs: "6,80m • 9 passageiros • cabine • 115–175 HP",
      link: "/v215cabincomfort",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42ec?w=400&h=300&fit=crop"
    },
    {
      name: "V230 GII Comfort",
      specs: "7,20m • cabine ampla • 115–200 HP",
      link: "/v230giicomfort",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    },
    {
      name: "V250 Comfort",
      specs: "7,50m • cabine + WC • 200–250 HP",
      link: "/v250comfort",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop"
    },
    {
      name: "V265 Cabin Comfort",
      specs: "7,80m • cabine completa • 200–300 HP",
      link: "/v265cabincomfort",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop"
    }
  ];

  const premiumModels = [
    {
      name: "V220 Surf",
      specs: "6,7m • surf especializado • 200-300 HP",
      link: "/v220surf",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
    },
    {
      name: "V300 Crossover",
      specs: "9,1m • luxo premium • 300-400 HP",
      link: "/v300crossover",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      name: "V300 Day Cruiser",
      specs: "9,1m • day cruiser • 300-400 HP",
      link: "/v300daycruiser",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42ec?w=400&h=300&fit=crop"
    },
    {
      name: "V400 HT",
      specs: "12,2m • hard top • 2x300-400 HP",
      link: "/v400ht",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    },
    {
      name: "V400 Crossover",
      specs: "12,2m • crossover premium • 2x300-400 HP",
      link: "/v400crossover",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop"
    },
    {
      name: "V450 Premium",
      specs: "13,7m • ultra premium • 2x350-450 HP",
      link: "/v450premium",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop"
    },
    {
      name: "V550 Crossover",
      specs: "16,8m • mega crossover • 2x400-600 HP",
      link: "/v550crossover",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
    },
    {
      name: "V550 Flybridge",
      specs: "16,8m • flybridge • 2x400-600 HP",
      link: "/v550flybridge",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    }
  ];

  const pontoonModels = [
    {
      name: "Pontoon 250",
      specs: "7,5m • 16 passageiros • 115–200 HP",
      link: "/pontoon250",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42ec?w=400&h=300&fit=crop"
    },
    {
      name: "Pontoon 320",
      specs: "9,7m • 24 passageiros • 115–300 HP",
      link: "/pontoon320",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    }
  ];

  const ModelCard = ({ model }: { model: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img 
            src={model.image} 
            alt={model.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 text-primary">{model.name}</CardTitle>
        <p className="text-muted-foreground mb-4">{model.specs}</p>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
          onClick={() => window.location.href = model.link}
        >
          Ver mais
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/lovable-uploads/7ddfbb29-23ee-46c0-b84f-3c81101fb12c.png)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            VIVA ESSA EXPERIÊNCIA
            <br />
            <span className="text-accent">NÁUTICA</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Nossa fábrica utiliza o que há de mais moderno e inovador no mundo, para trazer disrupção, tecnologia e requinte a cada embarcação produzida.
            <br className="hidden md:block" />
            Tudo é feito à mão e com muito cuidado por uma equipe altamente capacitada e apaixonada pelo que faz.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="comfort" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="comfort">Linha Comfort</TabsTrigger>
              <TabsTrigger value="premium">Linha Premium</TabsTrigger>
              <TabsTrigger value="pontoon">Pontoon Series</TabsTrigger>
            </TabsList>

            <TabsContent value="comfort" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comfortModels.map((model, index) => (
                  <ModelCard key={index} model={model} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="premium" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumModels.map((model, index) => (
                  <ModelCard key={index} model={model} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pontoon" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pontoonModels.map((model, index) => (
                  <ModelCard key={index} model={model} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda não sabe qual modelo é ideal para você?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Monte sua embarcação e receba uma simulação personalizada.
          </p>
          <Button size="lg" variant="secondary" className="text-primary">
            Monte o Seu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VenturaMarine;