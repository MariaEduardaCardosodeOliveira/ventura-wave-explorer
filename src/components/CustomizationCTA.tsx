import { ArrowRight, Palette, Settings } from "lucide-react";

const CustomizationCTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Monte sua embarcação ou quadriciclo 
                <span className="text-accent"> agora mesmo</span>
              </h2>
              
              <p className="text-xl opacity-90 leading-relaxed">
                Personalize cor, acabamento e acessórios. Receba um orçamento direto no WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cores personalizadas</h4>
                    <p className="text-sm opacity-80">Escolha a cor perfeita</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Acessórios exclusivos</h4>
                    <p className="text-sm opacity-80">Adicione funcionalidades</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-hero bg-accent hover:bg-accent/90">
              Começar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Element */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-[450px] lg:h-[600px]">
              {/* Barco Image - Top Left */}
              <div className="absolute top-0 left-0 w-80 h-52 lg:w-96 lg:h-64 hover-scale">
                <img 
                  src="/lovable-uploads/2b55ab1d-d1fa-46ab-ba89-63ee0543a77b.png"
                  alt="Barco customizado"
                  className="w-full h-full object-cover rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300"
                />
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Palette className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>

              {/* Quadriciclo Image - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-80 h-52 lg:w-96 lg:h-64 hover-scale">
                <img 
                  src="/lovable-uploads/7d002674-ece2-4cd0-90b2-ff2774204eb2.png"
                  alt="Quadriciclo customizado"
                  className="w-full h-full object-cover rounded-xl border-2 border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300"
                />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-primary-foreground/30 to-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-foreground/30">
                  <Settings className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationCTA;