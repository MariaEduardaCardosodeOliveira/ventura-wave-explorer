import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const blogPosts = [
  {
    id: 1,
    title: "Navegação Sustentável: O Futuro da Mobilidade Aquática",
    summary: "Descubra como a tecnologia elétrica está revolucionando o mundo náutico e contribuindo para um futuro mais sustentável.",
    image: "/lovable-uploads/4ecac867-4e3b-41a2-a52c-988669e1bc11.png",
    tags: ["Sustentabilidade", "Elétrico"],
    readTime: "5 min",
    link: "/blog/navegacao-sustentavel"
  },
  {
    id: 2,
    title: "Aventuras Off-Road: Guia Completo para Iniciantes",
    summary: "Tudo que você precisa saber para começar suas aventuras em terrenos desafiadores com segurança e diversão.",
    image: "/lovable-uploads/f2adefb4-7c40-4c04-a99d-ffcda84194f2.png",
    tags: ["Adventure", "Dicas"],
    readTime: "7 min",
    link: "/blog/guia-off-road"
  },
  {
    id: 3,
    title: "Manutenção Preventiva: Como Cuidar da Sua Embarcação",
    summary: "Dicas essenciais para manter sua embarcação sempre em perfeito estado e prolongar sua vida útil.",
    image: "/lovable-uploads/794f5ef0-0d7a-4b2a-b0f9-02ec1849d878.png",
    tags: ["Manutenção", "Marine"],
    readTime: "6 min",
    link: "/blog/manutencao-preventiva"
  },
  {
    id: 4,
    title: "Tecnologia Naval: Inovações que Transformam a Navegação",
    summary: "Conheça as mais recentes inovações tecnológicas que estão mudando a experiência de navegar.",
    image: "/src/assets/marine-boat.jpg",
    tags: ["Tecnologia", "Inovação"],
    readTime: "8 min",
    link: "/blog/tecnologia-naval"
  }
];

const BlogHighlightsSlider = () => {
  const [api, setApi] = useState<any>();

  const autoplayPlugin = Autoplay({
    delay: 6000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Destaques do Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e dicas do mundo náutico e adventure
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
          <CarouselContent className="-ml-4">
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <article className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full">
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Tags Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-black/60 text-white backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.summary}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-2"
                        onClick={() => window.location.href = post.link}
                      >
                        Ler mais
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
            <CarouselNext className="relative inset-auto translate-y-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BlogHighlightsSlider;