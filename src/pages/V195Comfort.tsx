import { useState } from "react";
import { ArrowRight, Users, Fuel, Gauge, Ruler, ChevronRight, Star, Ship, Anchor, Settings2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const V195Comfort = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento para o V195 Comfort.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5511971124225?text=${message}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
    });
  };

  const caracteristicasTecnicas = [
    { label: "Comprimento Máximo", value: "5,83m" },
    { label: "Boca", value: "2,35m" },
    { label: "Calado vazio", value: "0,32m" },
    { label: "Peso sem motorização", value: "570kg" },
    { label: "Capacidade", value: "8 pessoas ou 630kg" },
    { label: "Tanque de combustível", value: "60L" },
    { label: "Tanque de água", value: "28L" },
    { label: "Motorização (popa)", value: "90–150 HP" },
  ];

  const itensDeSerie = [
    "Banco giratório do piloto",
    "Bocal de abastecimento externo",
    "Caixa térmica tipo Iglu",
    "Cunhos de amarração em aço inox",
    "Escada de popa em aço inox retrátil e embutida",
    "Faixa em gel coat",
    "Mastro com luz de alcançado",
    "Mastro para Ski/Wake",
    "Paiol de âncora",
    "Para-brisa de vidro com fechamento central",
    "Passagem lateral de embarque",
    "Pia com cuba, torneira e lixeira"
  ];

  const diferenciais = [
    "Solário de proa",
    "Passarela de popa",
    "Predisposição para autofalantes na popa",
    "Costado alto que garante mais segurança",
    "Maior boca da categoria"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            V195 Comfort
          </h1>
          
          <h2 className="text-3xl md:text-4xl mb-6 text-accent font-light">
            A volta do ícone
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto">
            Símbolo de confiabilidade e diversão na água, conquistando navegadores por onde passa.
          </p>

          <Button className="btn-hero group">
            Solicitar orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Destaques Rápidos */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="card-elegant text-center p-6">
              <Ruler className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Comprimento</h3>
              <p className="text-2xl font-bold text-primary">5,83m</p>
            </Card>
            
            <Card className="card-elegant text-center p-6">
              <Users className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Passageiros</h3>
              <p className="text-2xl font-bold text-primary">8/0</p>
              <p className="text-sm text-muted-foreground">Dia/Noite</p>
            </Card>
            
            <Card className="card-elegant text-center p-6">
              <Gauge className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Motorização</h3>
              <p className="text-2xl font-bold text-primary">90-150 HP</p>
            </Card>
            
            <Card className="card-elegant text-center p-6">
              <Fuel className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Combustível</h3>
              <p className="text-2xl font-bold text-primary">60L</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Características Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especificações detalhadas do V195 Comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caracteristicasTecnicas.map((item, index) => (
              <Card key={index} className="card-elegant p-6">
                <h3 className="font-semibold text-primary mb-2">{item.label}</h3>
                <p className="text-2xl font-bold text-accent">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itens de Série */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Itens de Série
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Equipamentos e acabamentos que já vêm inclusos no seu V195 Comfort
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {itensDeSerie.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Único da Categoria
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            O V195 Comfort é a única embarcação da categoria com estes diferenciais
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 p-6 text-center">
                <Star className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="font-semibold text-primary-foreground">{diferencial}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Galeria
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça todos os detalhes do V195 Comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-150037559209${index}-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Veja em Ação
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary/10">
              <iframe
                src="https://www.youtube.com/embed/KHYbg-XHIZo"
                title="V195 Comfort em ação"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato e receba uma proposta personalizada para o V195 Comfort
            </p>

            <Card className="card-elegant p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome *</label>
                    <Input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone *</label>
                    <Input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-6">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-actions finais */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Próximos Passos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button variant="secondary" size="lg" className="h-16 text-lg">
              <Settings2 className="w-6 h-6 mr-2" />
              Monte o Seu
            </Button>
            
            <Button variant="outline" size="lg" className="h-16 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Ship className="w-6 h-6 mr-2" />
              Ver outros modelos
            </Button>
            
            <Button variant="ghost" size="lg" className="h-16 text-lg text-primary-foreground hover:bg-primary-foreground/10">
              <Anchor className="w-6 h-6 mr-2" />
              Voltar para Ventura Marine
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default V195Comfort;