import { ArrowRight, Calendar, User, FileText } from "lucide-react";
const BlogSection = () => {
  const featuredPost = {
    title: "Como escolher sua primeira embarcação",
    excerpt: "Guia completo para iniciantes no mundo náutico. Descubra os principais fatores a considerar na hora de escolher sua primeira embarcação.",
    date: "15 de Janeiro, 2024",
    author: "Equipe Ventura"
  };
  const posts = [{
    title: "Manutenção preventiva: dicas essenciais",
    excerpt: "Mantenha sua embarcação sempre em perfeito estado com nossas dicas de manutenção.",
    date: "10 de Janeiro, 2024"
  }, {
    title: "Aventuras off-road: destinos imperdíveis",
    excerpt: "Conheça os melhores destinos para explorar com seu quadriciclo Ventura Adventure.",
    date: "5 de Janeiro, 2024"
  }];
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog & Novidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, dicas e tendências do mundo náutico e off-road.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogSection;