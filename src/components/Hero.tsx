import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-boat.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-slate-900/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full">
        {/* Upper Right - Description */}
        <div className="absolute top-32 right-6 max-w-md">
          <p className="text-white text-lg font-light leading-relaxed opacity-90">
            Navegue pelos mares com estilo e conforto. Nossas embarcações 
            combinam tecnologia de ponta com design elegante para proporcionar 
            experiências náuticas inesquecíveis.
          </p>
        </div>

        {/* Bottom Left - Main Title */}
        <div className="absolute bottom-32 left-6">
          <div className="text-white space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              Ventura Marine
              <br />
              <span className="text-5xl lg:text-6xl font-light">Sua Aventura Começa Aqui</span>
            </h1>
            
            <div className="space-y-6">
              <button className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 transition-colors group">
                <span>Conheça Nossa Coleção</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;