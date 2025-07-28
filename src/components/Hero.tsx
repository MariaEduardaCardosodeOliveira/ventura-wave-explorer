import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-boat.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-slate-900/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex items-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Main Title */}
          <div className="text-white space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Discover Luxury
              <br />
              <span className="text-5xl lg:text-6xl font-light">at The Sea</span>
            </h1>
            
            <div className="space-y-6">
              <button className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 transition-colors group">
                <span>Explore Our Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="text-white space-y-6 lg:pl-12">
            <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
              Explore breathtaking destinations with our premium yacht rentals. 
              Comfort, elegance, and adventure just a booking away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;