import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Ventura Marine", href: "/ventura-marine" },
    { name: "Adventure", href: "/adventure" },
    { name: "Electric", href: "/electric" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              VENTURA
            </span>
          </Link>

          {/* Contact Button & Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild 
              className="hidden md:flex rounded-full px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium border border-white/20"
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
                className="rounded-full w-10 h-10 text-white hover:bg-white/20"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile/Desktop Navigation Menu */}
        {isOpen && (
          <div className="pt-4 pb-2 border-t border-white/20 mt-4">
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
                      : "text-white/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 md:hidden">
                <Button asChild className="w-full rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/20">
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