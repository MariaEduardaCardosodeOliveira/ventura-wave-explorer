import HeroSlider from "@/components/HeroSlider";
import ProductModelsSlider from "@/components/ProductModelsSlider";
import CategoriesSlider from "@/components/CategoriesSlider";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import BlogHighlightsSlider from "@/components/BlogHighlightsSlider";
import BlogSection from "@/components/BlogSection";
import CustomizationCTA from "@/components/CustomizationCTA";
import DealerCTA from "@/components/DealerCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Test Content */}
      <div className="p-8 bg-red-500 text-white">
        <h1>TESTE - App está funcionando</h1>
      </div>
      
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Product Models Slider */}
      {/* <ProductModelsSlider /> */}
      
      {/* Categories Slider */}
      {/* <CategoriesSlider /> */}
      
      {/* Categories Section */}
      <Categories />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Blog Highlights Slider */}
      {/* <BlogHighlightsSlider /> */}
      
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
