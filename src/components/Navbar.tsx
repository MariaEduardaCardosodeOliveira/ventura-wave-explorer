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
    { name: "Adventure", href: "/adventure" },
    { name: "Electric", href: "/electric" },
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
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>
              VENTURA
            </span>
          </Link>

          {/* Contact Button & Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild 
              className={cn(
                "hidden md:flex rounded-full px-6 py-2 font-medium transition-all",
                isScrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-slate-900 hover:bg-white/90"
              )}
            >
              <a 
                href="https://wa.me/5511971124225" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Button>
            
            {/* Hamburger menu button */}
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className={cn(
                  "rounded-full w-10 h-10 transition-colors",
                  isScrolled 
                    ? "text-primary hover:bg-primary/10" 
                    : "text-white hover:bg-white/10"
                )}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
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
              <div className="pt-2 md:hidden">
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