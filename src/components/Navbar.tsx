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
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl rounded-xl border border-gray-200/50 shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button asChild className="w-full rounded-lg">
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