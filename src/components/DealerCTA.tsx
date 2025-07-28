import { ArrowRight, MapPin, Handshake, TrendingUp } from "lucide-react";

const DealerCTA = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 fade-in">
          {/* Icon */}
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-10 h-10 text-accent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Seja um Dealer
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Quer representar a Ventura na sua região? Faça parte da nossa rede de parceiros e compartilhe a paixão pela navegação e aventura.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="space-y-3">
              <Handshake className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-semibold text-primary">Parceria Sólida</h4>
              <p className="text-sm text-muted-foreground">Suporte completo e treinamento especializado</p>
            </div>
            
            <div className="space-y-3">
              <TrendingUp className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-semibold text-primary">Crescimento</h4>
              <p className="text-sm text-muted-foreground">Mercado em expansão com alta demanda</p>
            </div>
            
            <div className="space-y-3">
              <MapPin className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-semibold text-primary">Território Exclusivo</h4>
              <p className="text-sm text-muted-foreground">Representação exclusiva na sua região</p>
            </div>
          </div>

          <button className="btn-primary text-lg px-8 py-4">
            Quero ser um dealer
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealerCTA;