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
            <div className="relative h-96 lg:h-[500px]">
              {/* Barco Image Placeholder - Top Left */}
              <div className="absolute top-0 left-0 w-64 h-40 lg:w-80 lg:h-48">
                <div className="image-placeholder h-full bg-primary-foreground/10 border-primary-foreground/20 rounded-lg">
                  <div className="text-center text-primary-foreground/60 flex flex-col items-center justify-center h-full">
                    <Settings className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-xs">Imagem de barco customizado</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl">
                  <Palette className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Quadriciclo Image Placeholder - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-64 h-40 lg:w-80 lg:h-48">
                <div className="image-placeholder h-full bg-primary-foreground/10 border-primary-foreground/20 rounded-lg">
                  <div className="text-center text-primary-foreground/60 flex flex-col items-center justify-center h-full">
                    <Settings className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-xs">Imagem de quadriciclo customizado</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary-foreground" />
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