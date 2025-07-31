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
              src={location.pathname === "/ventura-marine" 
                ? "/lovable-uploads/4aeb06cc-2e94-4ab2-8505-f51f55c614e6.png"
                : "/lovable-uploads/96c487dd-875a-4f88-ba89-069dc9e8d217.png"
              } 
              alt="Ventura Logo" 
              className="h-16 w-auto transition-all duration-300"
            />
          </Link>

          {/* Hamburger menu button */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(
                "rounded-full !w-10 !h-10 transition-colors p-0 flex items-center justify-center",
                isScrolled 
                  ? "text-primary hover:bg-primary/10" 
                  : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="!w-8 !h-8" /> : <Menu className="!w-8 !h-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Desktop Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="grid gap-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group relative flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-105",
                      isActive(item.href)
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 text-white border border-primary/20"
                        : "text-white/90 hover:bg-white/5 hover:text-white"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-xl transition-all duration-300" />
                    <span className="relative z-10">{item.name}</span>
                    <div className={cn(
                      "ml-auto w-2 h-2 rounded-full transition-all duration-300",
                      isActive(item.href) ? "bg-primary" : "bg-transparent group-hover:bg-white/30"
                    )} />
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <Button asChild className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300">
                  <a 
                    href="https://wa.me/5511971124225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Contact Us</span>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
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