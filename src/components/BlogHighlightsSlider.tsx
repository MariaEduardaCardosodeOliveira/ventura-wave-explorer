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
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Blog em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e dicas do mundo náutico
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[autoplayPlugin]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg shadow-md overflow-hidden h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm">
                        Ler mais
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
export default BlogHighlightsSlider;