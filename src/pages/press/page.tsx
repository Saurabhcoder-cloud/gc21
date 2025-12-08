export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Latest news, press releases, and media resources from Global Connection 21.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Recent announcements and updates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">Featured</span>
              <p className="text-primary-100 mb-3">January 15, 2025</p>
              <h3 className="text-3xl font-bold mb-4">Global Connection 21 Reaches 5 Million Users Milestone</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Platform celebrates major growth milestone as businesses worldwide embrace digital B2B trade solutions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all cursor-pointer">
                Read More <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="space-y-6">
              {[
                { date: 'January 10, 2025', title: 'New AI-Powered Supplier Matching Feature Launched', category: 'Product Update' },
                { date: 'January 5, 2025', title: 'Partnership Announced with Leading Logistics Provider', category: 'Partnership' },
                { date: 'December 28, 2024', title: 'Q4 2024 Platform Performance Report Released', category: 'Report' }
              ].map((news, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{news.category}</span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Releases</h2>
            <p className="text-xl text-gray-600">Official company announcements</p>
          </div>

          <div className="space-y-4">
            {[
              { date: 'Jan 15, 2025', title: 'Global Connection 21 Announces Series C Funding Round of $150M', downloads: 245 },
              { date: 'Dec 20, 2024', title: 'Year in Review: 2024 Platform Growth and Achievements', downloads: 189 },
              { date: 'Nov 30, 2024', title: 'Expansion into Latin American Markets Announced', downloads: 156 },
              { date: 'Nov 10, 2024', title: 'New Trade Assurance Features Enhance Buyer Protection', downloads: 203 },
              { date: 'Oct 25, 2024', title: 'Global Connection 21 Wins Best B2B Platform Award', downloads: 178 }
            ].map((release, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-2">{release.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600 text-sm">{release.downloads} downloads</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                      Read
                    </a>
                    <a href="#" className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap cursor-pointer">
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-xl text-gray-600">Brand assets and resources for media</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-image-line', title: 'Brand Assets', desc: 'Logos, colors, and brand guidelines', size: '12 MB' },
              { icon: 'ri-file-text-line', title: 'Company Fact Sheet', desc: 'Key facts and statistics', size: '2 MB' },
              { icon: 'ri-user-line', title: 'Executive Bios', desc: 'Leadership team profiles', size: '5 MB' },
              { icon: 'ri-camera-line', title: 'Press Photos', desc: 'High-resolution images', size: '45 MB' },
              { icon: 'ri-bar-chart-box-line', title: 'Infographics', desc: 'Visual data and statistics', size: '8 MB' },
              { icon: 'ri-video-line', title: 'Video Assets', desc: 'Company videos and demos', size: '120 MB' }
            ].map((asset, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${asset.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{asset.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{asset.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{asset.size}</span>
                  <a href="#" className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:gap-2 transition-all cursor-pointer">
                    Download <i className="ri-download-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
              Download Complete Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Media Inquiries</h2>
          <p className="text-xl text-primary-100 mb-8">
            For press inquiries, interviews, or additional information
          </p>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <p className="text-primary-100 mb-2">Email</p>
                <a href="mailto:press@globalconnection21.com" className="text-xl font-semibold hover:text-primary-100 transition-colors cursor-pointer">
                  press@globalconnection21.com
                </a>
              </div>
              <div>
                <p className="text-primary-100 mb-2">Phone</p>
                <a href="tel:+1-555-0123" className="text-xl font-semibold hover:text-primary-100 transition-colors cursor-pointer">
                  +1 (555) 012-3456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}