export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Sourcing Insights</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Stay ahead with market intelligence, industry trends, and data-driven insights to make smarter sourcing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Market Insights</h2>
            <p className="text-xl text-gray-600">Data-driven intelligence for better sourcing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Trending</span>
                <span className="text-primary-100">2 days ago</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Q1 2025 Electronics Sourcing Report</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Comprehensive analysis of electronics market trends, pricing dynamics, and supplier landscape for the first quarter.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all cursor-pointer">
                Read Full Report <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Textile Industry Price Index', category: 'Market Data', time: '1 week ago' },
                { title: 'Top 10 Emerging Suppliers in Asia', category: 'Supplier Analysis', time: '2 weeks ago' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{item.category}</span>
                    <span className="text-gray-500 text-sm">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-line-chart-line', title: 'Market Trends', count: '45 Reports' },
              { icon: 'ri-money-dollar-circle-line', title: 'Price Analysis', count: '32 Reports' },
              { icon: 'ri-building-line', title: 'Supplier Insights', count: '28 Reports' },
              { icon: 'ri-global-line', title: 'Regional Analysis', count: '38 Reports' },
              { icon: 'ri-bar-chart-box-line', title: 'Industry Reports', count: '52 Reports' },
              { icon: 'ri-lightbulb-line', title: 'Best Practices', count: '41 Reports' },
              { icon: 'ri-shield-check-line', title: 'Compliance Guides', count: '19 Reports' },
              { icon: 'ri-calendar-event-line', title: 'Seasonal Trends', count: '24 Reports' }
            ].map((cat, idx) => (
              <a key={idx} href="#" className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${cat.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.count}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sourcing Tools</h2>
            <p className="text-xl text-gray-600">Powerful tools to optimize your sourcing strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-calculator-line',
                title: 'Cost Calculator',
                desc: 'Calculate total landed costs including shipping, duties, and taxes.'
              },
              {
                icon: 'ri-scales-3-line',
                title: 'Supplier Comparison',
                desc: 'Compare multiple suppliers side-by-side on key metrics.'
              },
              {
                icon: 'ri-pie-chart-line',
                title: 'Market Dashboard',
                desc: 'Real-time market data and pricing trends visualization.'
              }
            ].map((tool, idx) => (
              <div key={idx} className="bg-primary-50 rounded-2xl border border-primary-100 p-8 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${tool.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tool.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                  Try Tool <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Informed</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to receive weekly sourcing insights and market updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}