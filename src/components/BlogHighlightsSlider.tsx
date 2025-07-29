import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
const blogPosts = [{
  id: 1,
  title: "Navegação Sustentável: O Futuro da Mobilidade Aquática",
  summary: "Descubra como a tecnologia elétrica está revolucionando o mundo náutico e contribuindo para um futuro mais sustentável.",
  image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
  tags: ["Sustentabilidade", "Elétrico"],
  readTime: "5 min",
  link: "/blog/navegacao-sustentavel"
}, {
  id: 2,
  title: "Aventuras Off-Road: Guia Completo para Iniciantes",
  summary: "Tudo que você precisa saber para começar suas aventuras em terrenos desafiadores com segurança e diversão.",
  image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
  tags: ["Adventure", "Dicas"],
  readTime: "7 min",
  link: "/blog/guia-off-road"
}, {
  id: 3,
  title: "Manutenção Preventiva: Como Cuidar da Sua Embarcação",
  summary: "Dicas essenciais para manter sua embarcação sempre em perfeito estado e prolongar sua vida útil.",
  image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
  tags: ["Manutenção", "Marine"],
  readTime: "6 min",
  link: "/blog/manutencao-preventiva"
}, {
  id: 4,
  title: "Tecnologia Naval: Inovações que Transformam a Navegação",
  summary: "Conheça as mais recentes inovações tecnológicas que estão mudando a experiência de navegar.",
  image: "/src/assets/marine-boat.jpg",
  tags: ["Tecnologia", "Inovação"],
  readTime: "8 min",
  link: "/blog/tecnologia-naval"
}];
const BlogHighlightsSlider = () => {
  const [api, setApi] = useState<any>();
  const autoplayPlugin = Autoplay({
    delay: 6000,
    stopOnInteraction: true,
    stopOnMouseEnter: true
  });
  return;
};
export default BlogHighlightsSlider;