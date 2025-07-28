import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511971124225"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
                      bg-gray-800 text-white text-sm px-3 py-2 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity
                      whitespace-nowrap pointer-events-none">
        Fale conosco!
        <div className="absolute left-full top-1/2 -translate-y-1/2 
                        border-4 border-transparent border-l-gray-800"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;