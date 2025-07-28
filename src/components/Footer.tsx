import { Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Marine", href: "#marine" },
    { name: "Adventure", href: "#adventure" },
    { name: "Electric", href: "#electric" },
    { name: "Consórcio", href: "#consorcio" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo Placeholder */}
            <div className="image-placeholder h-16 w-48 bg-primary-foreground/10 border-primary-foreground/20">
              <span className="text-primary-foreground/60">Logo Ventura</span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Navegue com estilo, performance e liberdade. Descubra a linha completa de embarcações, 
              quadriciclos e motos elétricas Ventura.
            </p>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5511971124225" 
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors text-accent-foreground"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>WhatsApp: (11) 97112-4225</p>
              <p>Email: contato@venturaboats.com.br</p>
              <p>Horário: Seg-Sex 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Ventura Boats – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;