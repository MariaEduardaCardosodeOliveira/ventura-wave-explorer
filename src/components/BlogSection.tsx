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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blog & Novidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, dicas e tendências do mundo náutico e off-road.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Featured Post */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {featuredPost.date}
                <User className="w-4 h-4 ml-4 mr-2" />
                {featuredPost.author}
              </div>
              <h3 className="text-xl font-bold mb-2">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                Ler mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          
          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h4 className="font-bold mb-2">{post.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Ler mais
                  <ArrowRight className="w-3 h-3 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ver todos os artigos
          </button>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;