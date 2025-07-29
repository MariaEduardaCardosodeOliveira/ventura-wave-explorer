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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, dicas e tendências do mundo náutico
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article - Takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <FileText className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar Articles */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;