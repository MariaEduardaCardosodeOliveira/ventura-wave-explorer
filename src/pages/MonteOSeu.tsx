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
      models: ["V195 Comfort", "V235 Premium", "V255 Luxury", "V275 Sport", "V295 Executive", "V315 Deluxe", "V185 Classic", "V205 Family", "V225 Adventure"]
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

      {/* Product Selection */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Escolha seu Modelo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecione o modelo que deseja configurar
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm">
                  <IconComponent className="w-4 h-4" />
                  <span>{category.title}</span>
                </div>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => 
              category.models.map((model, index) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={`${category.id}-${index}`}
                    className="card-elegant group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                    onClick={() => navigate(`/monte-o-seu/${category.id}/${model.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <div className="relative">
                      <div className={`h-48 ${category.color} flex items-center justify-center relative overflow-hidden`}>
                        <IconComponent className="w-16 h-16 text-white/20 absolute" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="relative z-10 text-center text-white">
                          <IconComponent className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm font-medium">{category.subtitle}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                          {category.title}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                        {model}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {"★".repeat(5)}
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">4.8</span>
                        </div>
                        
                        <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Configurar
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo intuitivo e rápido para criar seu produto personalizado
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Escolher Modelo", 
                  desc: "Navegue pelos modelos disponíveis e selecione o que mais combina com você",
                  icon: "🎯"
                },
                { 
                  step: "2", 
                  title: "Personalizar", 
                  desc: "Escolha cores, acabamentos, acessórios e personalize cada detalhe",
                  icon: "🎨"
                },
                { 
                  step: "3", 
                  title: "Forma de Pagamento", 
                  desc: "Selecione a opção de pagamento que melhor se adequa ao seu perfil",
                  icon: "💳"
                },
                { 
                  step: "4", 
                  title: "Seus Dados", 
                  desc: "Preencha suas informações para finalizar o processo",
                  icon: "📝"
                },
                { 
                  step: "5", 
                  title: "Orçamento Pronto", 
                  desc: "Receba instantaneamente por email e WhatsApp seu orçamento detalhado",
                  icon: "✅"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <Card className="card-elegant p-6 text-center h-full group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-background/80 backdrop-blur-sm">
                    <div className="relative">
                      {/* Step Number */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                  
                  {/* Connector Arrow */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent relative">
                        <ArrowRight className="w-4 h-4 text-primary absolute -right-2 -top-1.5" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Todo o processo leva menos de 5 minutos
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Processo 100% online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Orçamento em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Sem compromisso</span>
              </div>
            </div>
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