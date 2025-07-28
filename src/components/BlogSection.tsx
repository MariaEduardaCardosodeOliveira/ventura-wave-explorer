import { ArrowRight, Calendar, User, FileText } from "lucide-react";

const BlogSection = () => {
  const featuredPost = {
    title: "Como escolher sua primeira embarcação",
    excerpt: "Guia completo para iniciantes no mundo náutico. Descubra os principais fatores a considerar na hora de escolher sua primeira embarcação.",
    date: "15 de Janeiro, 2024",
    author: "Equipe Ventura"
  };

  const posts = [
    {
      title: "Manutenção preventiva: dicas essenciais",
      excerpt: "Mantenha sua embarcação sempre em perfeito estado com nossas dicas de manutenção.",
      date: "10 de Janeiro, 2024"
    },
    {
      title: "Aventuras off-road: destinos imperdíveis",
      excerpt: "Conheça os melhores destinos para explorar com seu quadriciclo Ventura Adventure.",
      date: "5 de Janeiro, 2024"
    }
  ];

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2 fade-in">
            <article className="card-elegant h-full">
              {/* Featured Image Placeholder */}
              <div className="image-placeholder h-64 mb-6">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-2 text-accent" />
                  <span>Imagem do artigo em destaque</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>

                <button className="btn-secondary">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article 
                key={index} 
                className="card-elegant fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Post Image Placeholder */}
                <div className="image-placeholder h-32 mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>

                  <h4 className="text-lg font-semibold text-primary leading-tight">
                    {post.title}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <button className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                    Ler mais
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}

            {/* View All Button */}
            <button className="btn-primary w-full justify-center">
              Ler mais no Blog
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;