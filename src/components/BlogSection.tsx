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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Ventura</h2>
          <p className="text-lg text-gray-600">
            Dicas, novidades e conteúdo exclusivo do mundo náutico
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Posts Recentes</h4>
            <div className="space-y-4">
              {posts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">{post.title}</h5>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Ler mais
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;