import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Ventura Marine", href: "/ventura-marine" },
    { name: "Ventura Adventure", href: "/ventura-adventure" },
    { name: "Ventura Electric", href: "/ventura-electric" },
    { name: "Pontoon 250", href: "/pontoon250" },
    { name: "V195 Comfort", href: "/v195comfort" },
    { name: "Monte o Seu", href: "/monte-o-seu" },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/96c487dd-875a-4f88-ba89-069dc9e8d217.png" 
              alt="Ventura Logo" 
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Hamburger menu button */}
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(
                "rounded-full w-12 h-12 transition-colors",
                isScrolled 
                  ? "text-primary hover:bg-primary/10" 
                  : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Desktop Navigation Menu */}
        {isOpen && (
          <div className="pt-4 pb-2 border-t border-white/30 mt-4 bg-slate-900/90 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors text-white hover:text-white/80",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/90"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full rounded-full bg-white text-slate-900 hover:bg-white/90">
                  <a 
                    href="https://wa.me/5511971124225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;