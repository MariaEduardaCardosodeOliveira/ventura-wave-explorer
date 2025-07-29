import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
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
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Blog em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades, dicas e histórias do mundo Ventura
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {/* Featured Post - Left Column (65%) */}
          <div className="lg:col-span-3 fade-in">
            <article className="card-elegant group">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>15 de Janeiro, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Equipe Ventura</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg line-clamp-3">
                  {featuredPost.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="btn-secondary">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </article>
          </div>

          {/* Recent Posts - Right Column (35%) */}
          <div className="lg:col-span-2">
            <div className="space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent pr-2">
              {recentPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="card-elegant group fade-in"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <span>10 de Janeiro, 2024</span>
                    </div>

                    <h4 className="text-lg font-bold text-primary leading-tight line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <button className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                      Ler mais
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: true,
                stopOnMouseEnter: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <article className={`card-elegant group ${index === 0 ? 'md:col-span-2' : ''}`}>
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <span>Janeiro, 2024</span>
                      </div>

                      <h4 className={`font-bold text-primary leading-tight ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                        {post.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <button className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                        Ler mais
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default BlogHighlightsSlider;