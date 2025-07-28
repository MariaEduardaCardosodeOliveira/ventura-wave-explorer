import { useState } from "react";
import { ArrowRight, Ship, Car, Zap, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type ProductCategory = "barcos" | "quadriciclos" | "pontoons" | "bikes-eletricas";

const MonteOSeu = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: "barcos" as ProductCategory,
      title: "Barcos",
      subtitle: "Linha Marine",
      description: "Configure seu barco ideal com acabamentos personalizados",
      icon: Ship,
      color: "bg-primary",
      models: ["V195 Comfort", "V235 Premium", "V255 Luxury"]
    },
    {
      id: "quadriciclos" as ProductCategory,
      title: "Quadriciclos",
      subtitle: "Linha Adventure",
      description: "Monte seu ATV/UTV para aventuras off-road",
      icon: Car,
      color: "bg-orange-500",
      models: ["ATV 200", "UTV 300", "Governamental"]
    },
    {
      id: "pontoons" as ProductCategory,
      title: "Pontoons",
      subtitle: "Série Pontoon",
      description: "Personalize sua embarcação para lazer em família",
      icon: Waves,
      color: "bg-blue-500",
      models: ["Pontoon 250", "Pontoon 300", "Pontoon 350"]
    },
    {
      id: "bikes-eletricas" as ProductCategory,
      title: "Bikes Elétricas",
      subtitle: "Linha Electric",
      description: "Configure sua bike elétrica com tecnologia avançada",
      icon: Zap,
      color: "bg-green-500",
      models: ["Brat", "Grunt Evo", "Orca"]
    }
  ];

  const handleCategorySelect = (category: ProductCategory) => {
    setSelectedCategory(category);
    // Navigate to model selection step
    navigate(`/monte-o-seu/${category}`);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Monte o Seu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Configure seu produto ideal com acabamentos personalizados, 
            cores exclusivas e acessórios opcionais
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Configuração em tempo real</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Orçamento instantâneo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Envio automático por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Escolha sua Categoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecione o tipo de produto que deseja configurar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="card-elegant group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {category.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-accent mb-2">
                      {category.subtitle}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Modelos disponíveis:</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {category.models.map((model, index) => (
                          <span key={index} className="text-xs bg-secondary/50 px-2 py-1 rounded">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Configurar
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Processo simples em 5 etapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Escolher Modelo", desc: "Selecione o modelo ideal" },
              { step: "2", title: "Personalizar", desc: "Cores, acabamentos e acessórios" },
              { step: "3", title: "Pagamento", desc: "Escolha a forma de pagamento" },
              { step: "4", title: "Seus Dados", desc: "Informações pessoais" },
              { step: "5", title: "Orçamento", desc: "Receba por email e WhatsApp" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block w-full h-0.5 bg-primary/20 mt-6 relative">
                    <ArrowRight className="w-4 h-4 text-primary absolute right-0 top-1/2 translate-y-2 translate-x-2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Configure seu produto ideal em poucos minutos e receba um orçamento personalizado
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
          >
            Escolher Categoria
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MonteOSeu;