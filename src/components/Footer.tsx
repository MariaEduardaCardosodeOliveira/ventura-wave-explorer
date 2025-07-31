import { Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Marine", href: "/ventura-marine" },
    { name: "Adventure", href: "/ventura-adventure" },
    { name: "Electric", href: "/ventura-electric" },
    { name: "Pontoon 250", href: "/pontoon250" },
    { name: "V195 Comfort", href: "/v195comfort" },
    { name: "Monte o Seu", href: "/monte-o-seu" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/96c487dd-875a-4f88-ba89-069dc9e8d217.png" 
                alt="Ventura Logo" 
                className="h-12 w-auto"
              />
              <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
                Navegue com estilo, performance e liberdade. Descubra a linha completa Ventura.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5511971124225" 
                className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-green-500/30 hover:scale-110 transition-all duration-300 border border-green-500/20"
              >
                <Phone className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-white font-semibold text-lg">Navegação</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-semibold text-lg">Contato</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium">(11) 97112-4225</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">contato@venturaboats.com.br</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Horário</p>
                <p className="text-white font-medium">Seg-Sex 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Ventura Boats. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;