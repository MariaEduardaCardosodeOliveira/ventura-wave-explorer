import HeroSlider from "@/components/HeroSlider";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CustomizationCTA from "@/components/CustomizationCTA";
import DealerCTA from "@/components/DealerCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Categories Section */}
      <Categories />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Customization CTA */}
      <CustomizationCTA />
      
      {/* Dealer CTA */}
      <DealerCTA />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
