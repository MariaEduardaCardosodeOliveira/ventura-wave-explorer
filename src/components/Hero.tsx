import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-boat.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Navegue com Estilo,
          <br />
          <span className="text-accent">Performance</span> e Liberdade
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 max-w-2xl mx-auto">
          Alta tecnologia, personalização e sofisticação nas águas e nas trilhas.
        </p>

        <button className="btn-hero group">
          Conheça nossos modelos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;