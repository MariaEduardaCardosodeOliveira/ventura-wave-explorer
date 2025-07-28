import { ArrowRight, Award, Users, Wrench } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Quem Somos
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Quando você adquire um produto da Ventura, você está investindo em mais do que apenas uma embarcação ou um veículo off-road. Você está escolhendo uma experiência completa de liberdade, aventura e sofisticação.
                </p>
                <p>
                  Nossa paixão é transformar momentos ordinários em experiências extraordinárias, oferecendo produtos que combinam tecnologia de ponta, design inovador e a mais alta qualidade de construção.
                </p>
                <p>
                  Há mais de uma década no mercado, a Ventura se consolidou como referência em embarcações, quadriciclos e motos elétricas, sempre priorizando a satisfação e segurança dos nossos clientes.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-1">Qualidade Premium</h4>
                <p className="text-sm text-muted-foreground">Materiais de primeira linha</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-1">Suporte Completo</h4>
                <p className="text-sm text-muted-foreground">Equipe especializada</p>
              </div>
              <div className="text-center">
                <Wrench className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-1">Personalização</h4>
                <p className="text-sm text-muted-foreground">Produtos sob medida</p>
              </div>
            </div>

            <button className="btn-primary">
              Conheça nossa história
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/852baeb5-f7de-4dde-92be-0b7fca1788d9.png" 
              alt="Fábrica Ventura Boats - Vista aérea das instalações" 
              className="h-96 lg:h-[500px] w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;