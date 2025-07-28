import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Users, Gauge, Ruler, Anchor, Settings, Ship, Wrench, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Pontoon250 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "Pontoon 250",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento para o ${formData.model}.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5511971124225?text=${message}`, '_blank');
  };

  const specifications = [
    { icon: Ruler, label: "Comprimento Total", value: "7,5m" },
    { icon: Ruler, label: "Boca Máxima", value: "2,5m" },
    { icon: Ruler, label: "Borda Livre na proa", value: "1,38m" },
    { icon: Ruler, label: "Borda Livre na popa", value: "0,82m" },
    { icon: Ship, label: "Calado vazio", value: "0,39m" },
    { icon: Ship, label: "Calado carregado", value: "0,5m" },
    { icon: Gauge, label: "Peso sem motor", value: "1.375kg" },
    { icon: Users, label: "Passageiros dia", value: "16" },
    { icon: Gauge, label: "Tanque de Combustível", value: "120l" },
    { icon: Settings, label: "Motorização mínima", value: "115hp" },
    { icon: Settings, label: "Motorização máxima", value: "200hp" },
    { icon: Anchor, label: "Número de flutuadores", value: "3" }
  ];

  const standardItems = [
    "1 Volante",
    "1 Caixa de direção", 
    "1 Cabo de direção",
    "1 Chave geral",
    "1 Bateria 110 AMP",
    "2 Cabos de bateria",
    "2 Terminais de bateria"
  ];

  const optionalItems = [
    "Bússola",
    "Buzina de corneta simples ou embutida",
    "Capota",
    "Sistema de som (CD Player, alto-falantes, antena)",
    "Sistema de direção hidráulica",
    "GPS 7\"",
    "Ventura System + Easy Connect"
  ];

  const premiumKits = [
    "Kit Churrasqueira",
    "Kit Eletrônicos", 
    "Kit EVA",
    "Kit Salvatagem",
    "Kit Teka"
  ];

  const serviceOptionals = [
    "Carreta rodo encalhe",
    "Lona de cobertura",
    "Targa em inox"
  ];

  const videos = [
    "https://www.youtube.com/embed/lfCB890cLXM",
    "https://www.youtube.com/embed/fYxgskUMhaA", 
    "https://www.youtube.com/embed/JBfw5RJI0gQ",
    "https://www.youtube.com/embed/YNHrAVUT2TA"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42ec?w=1920&h=1080&fit=crop)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            PONTOON 250
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Estabilidade única, com estilo e inovação.
          </p>
          
          <p className="text-lg md:text-xl opacity-90">
            A qualidade Ventura que você já conhece, agora nos Pontoons.
          </p>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Ruler className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">7,5m</h3>
                <p className="text-muted-foreground">Comprimento Total</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">16</h3>
                <p className="text-muted-foreground">Passageiros (Dia)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-primary mb-2">115-200 HP</h3>
                <p className="text-muted-foreground">Motorização</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Características do Casco
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <spec.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">{spec.label}</p>
                    <p className="text-2xl font-bold">{spec.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Items */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Montagem Básica
          </h2>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Wrench className="w-6 h-6 mr-2" />
                Itens de Série
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {standardItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Optional Items */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Opcionais e Kits
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Opcionais Sugeridos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {optionalItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Kits Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {premiumKits.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Opcionais de Serviço</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceOptionals.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Galeria de Imagens
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1,2,3,4,5,6,7,8].map((index) => (
              <div key={index} className="aspect-square bg-muted rounded-lg flex items-center justify-center group hover:bg-muted/80 transition-colors cursor-pointer">
                <Camera className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-6">
            Imagens reais serão adicionadas no editor
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Vídeos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="aspect-video">
                <iframe
                  src={video}
                  title={`Pontoon 250 Video ${index + 1}`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl opacity-90">
              Preencha os dados e receba uma proposta personalizada no WhatsApp
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-primary">Telefone (com DDD)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-primary">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="model" className="text-primary">Modelo</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    disabled
                    className="bg-muted"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-primary">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTAs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline">
              Monte o Seu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Link to="/ventura-marine">
              <Button size="lg" variant="outline">
                Ver outros modelos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/ventura-marine">
              <Button size="lg" variant="secondary">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar para Ventura Marine
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pontoon250;