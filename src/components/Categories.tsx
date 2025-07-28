import { ArrowRight, Anchor, Mountain, Zap, Users, Settings, FileText } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "Ventura Marine",
      description: "Embarcações de alta performance para navegação com estilo",
      icon: Anchor,
      image: "Imagem de barco navegando",
      link: "/ventura-marine"
    },
    {
      title: "Ventura Adventure", 
      description: "Quadriciclos para aventuras off-road inesquecíveis",
      icon: Mountain,
      image: "Imagem de quadriciclo em trilha",
      link: "/ventura-adventure"
    },
    {
      title: "Ventura Electric",
      description: "Motos elétricas sustentáveis e tecnológicas",
      icon: Zap,
      image: "Imagem de moto elétrica",
      link: "/ventura-electric"
    },
    {
      title: "Consórcio",
      description: "Realize o sonho da sua embarcação com facilidade",
      icon: Users,
      image: "Ilustração de contrato/gráfico",
      link: "/consorcio"
    },
    {
      title: "Monte o Seu",
      description: "Personalize sua embarcação ou quadriciclo",
      icon: Settings,
      image: "Imagem de customização",
      link: "/monte-o-seu"
    },
    {
      title: "Blog",
      description: "Dicas, novidades e histórias do mundo Ventura",
      icon: FileText,
      image: "Imagem de artigo/marina",
      link: "/blog"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Explore Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra a linha completa Ventura e encontre o produto perfeito para sua aventura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-elegant group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="image-placeholder mb-6 h-48">
                  <div className="text-center">
                    <Icon className="w-12 h-12 mx-auto mb-2 text-accent" />
                    <span>{category.image}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <button className="btn-secondary text-sm group">
                    Explorar
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;