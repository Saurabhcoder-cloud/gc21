import { Link } from 'react-router-dom';

export default function NewsPage() {
  const featuredNews = {
    title: 'Global B2B Trade Reaches Record High in 2024',
    excerpt: 'International B2B e-commerce transactions surpassed $25 trillion, marking a 22% increase from the previous year as digital transformation accelerates across industries.',
    date: 'February 15, 2025',
    category: 'Industry Insights',
    image: 'https://readdy.ai/api/search-image?query=modern%20business%20professionals%20analyzing%20global%20trade%20data%20on%20digital%20screens%20in%20bright%20office%20with%20world%20map%20background&width=1200&height=600&seq=news1&orientation=landscape'
  };

  const newsArticles = [
    {
      id: 1,
      title: 'New Trade Agreement Opens Markets in Southeast Asia',
      excerpt: 'Regional partnership eliminates tariffs on over 10,000 product categories, creating opportunities for small and medium businesses.',
      date: 'February 12, 2025',
      category: 'Trade Policy',
      image: 'https://readdy.ai/api/search-image?query=business%20handshake%20with%20southeast%20asian%20flags%20and%20modern%20office%20background%20professional%20atmosphere&width=800&height=500&seq=news2&orientation=landscape'
    },
    {
      id: 2,
      title: 'AI-Powered Sourcing Tools Transform Procurement',
      excerpt: 'Machine learning algorithms help buyers find optimal suppliers 60% faster while reducing costs by up to 30%.',
      date: 'February 10, 2025',
      category: 'Technology',
      image: 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20technology%20in%20business%20with%20digital%20interfaces%20and%20data%20visualization%20modern%20professional%20setting&width=800&height=500&seq=news3&orientation=landscape'
    },
    {
      id: 3,
      title: 'Sustainable Manufacturing Becomes Industry Standard',
      excerpt: 'Over 75% of verified suppliers now meet international environmental standards as buyers prioritize sustainability.',
      date: 'February 8, 2025',
      category: 'Sustainability',
      image: 'https://readdy.ai/api/search-image?query=green%20sustainable%20manufacturing%20facility%20with%20solar%20panels%20and%20eco-friendly%20production%20modern%20industrial%20setting&width=800&height=500&seq=news4&orientation=landscape'
    },
    {
      id: 4,
      title: 'Cross-Border Payment Solutions Simplify International Trade',
      excerpt: 'New fintech platforms reduce transaction costs by 40% and processing times from days to minutes.',
      date: 'February 5, 2025',
      category: 'Finance',
      image: 'https://readdy.ai/api/search-image?query=digital%20payment%20technology%20with%20global%20currency%20symbols%20and%20secure%20transaction%20interface%20modern%20professional%20design&width=800&height=500&seq=news5&orientation=landscape'
    },
    {
      id: 5,
      title: 'Supply Chain Resilience: Lessons from 2024',
      excerpt: 'Industry leaders share strategies for building robust supply chains in an uncertain global environment.',
      date: 'February 3, 2025',
      category: 'Supply Chain',
      image: 'https://readdy.ai/api/search-image?query=global%20supply%20chain%20network%20with%20shipping%20containers%20and%20logistics%20technology%20modern%20warehouse%20setting&width=800&height=500&seq=news6&orientation=landscape'
    },
    {
      id: 6,
      title: 'Emerging Markets Drive B2B Growth in 2025',
      excerpt: 'Africa and Latin America see 35% increase in B2B transactions as digital infrastructure improves.',
      date: 'February 1, 2025',
      category: 'Market Trends',
      image: 'https://readdy.ai/api/search-image?query=emerging%20markets%20business%20growth%20with%20modern%20city%20skyline%20and%20digital%20technology%20bright%20professional%20atmosphere&width=800&height=500&seq=news7&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">News & Insights</h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Stay updated with the latest trends, news, and insights from the world of B2B trade
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 w-full overflow-hidden">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block">
                  <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mt-4 mb-4 text-slate-900">{featuredNews.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{featuredNews.date}</span>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold whitespace-nowrap transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8 text-emerald-50">Subscribe to our newsletter for weekly insights and updates</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
