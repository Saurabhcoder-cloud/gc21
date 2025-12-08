import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TradeShowsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'past'>('all');

  const tradeShows = [
    {
      id: 1,
      name: 'Global Electronics Expo 2025',
      category: 'Consumer Electronics',
      date: 'March 15-18, 2025',
      location: 'Las Vegas, USA',
      exhibitors: 2500,
      visitors: 85000,
      status: 'upcoming',
      image: 'https://readdy.ai/api/search-image?query=modern%20electronics%20trade%20show%20exhibition%20hall%20with%20bright%20displays%20and%20technology%20booths%20professional%20business%20atmosphere&width=800&height=500&seq=tradeshow1&orientation=landscape'
    },
    {
      id: 2,
      name: 'International Textile & Apparel Fair',
      category: 'Apparel & Accessories',
      date: 'April 22-25, 2025',
      location: 'Shanghai, China',
      exhibitors: 3200,
      visitors: 120000,
      status: 'upcoming',
      image: 'https://readdy.ai/api/search-image?query=textile%20and%20fashion%20trade%20show%20with%20fabric%20displays%20and%20clothing%20exhibitions%20modern%20professional%20setting&width=800&height=500&seq=tradeshow2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Home & Garden Innovation Summit',
      category: 'Home & Garden',
      date: 'May 10-13, 2025',
      location: 'Frankfurt, Germany',
      exhibitors: 1800,
      visitors: 65000,
      status: 'upcoming',
      image: 'https://readdy.ai/api/search-image?query=home%20and%20garden%20trade%20show%20with%20furniture%20and%20decor%20displays%20bright%20modern%20exhibition%20space&width=800&height=500&seq=tradeshow3&orientation=landscape'
    },
    {
      id: 4,
      name: 'Asia Pacific Manufacturing Expo',
      category: 'Industrial Machinery',
      date: 'February 20-23, 2025',
      location: 'Singapore',
      exhibitors: 2100,
      visitors: 75000,
      status: 'ongoing',
      image: 'https://readdy.ai/api/search-image?query=industrial%20machinery%20trade%20show%20with%20manufacturing%20equipment%20and%20technology%20displays%20professional%20exhibition%20hall&width=800&height=500&seq=tradeshow4&orientation=landscape'
    },
    {
      id: 5,
      name: 'Beauty & Cosmetics World',
      category: 'Beauty & Personal Care',
      date: 'June 5-8, 2025',
      location: 'Paris, France',
      exhibitors: 1500,
      visitors: 55000,
      status: 'upcoming',
      image: 'https://readdy.ai/api/search-image?query=beauty%20and%20cosmetics%20trade%20show%20with%20elegant%20product%20displays%20and%20modern%20exhibition%20booths%20luxury%20atmosphere&width=800&height=500&seq=tradeshow5&orientation=landscape'
    },
    {
      id: 6,
      name: 'Automotive Parts & Accessories Expo',
      category: 'Automotive',
      date: 'January 15-18, 2025',
      location: 'Detroit, USA',
      exhibitors: 1900,
      visitors: 68000,
      status: 'past',
      image: 'https://readdy.ai/api/search-image?query=automotive%20trade%20show%20with%20car%20parts%20and%20accessories%20displays%20modern%20professional%20exhibition%20space&width=800&height=500&seq=tradeshow6&orientation=landscape'
    }
  ];

  const filteredShows = activeFilter === 'all' 
    ? tradeShows 
    : tradeShows.filter(show => show.status === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Global Trade Shows & Exhibitions</h1>
            <p className="text-xl mb-8 text-gray-200">
              Connect with suppliers and buyers at the world's leading B2B trade shows
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/auth/register" className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
                Register for Events
              </Link>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-md font-semibold whitespace-nowrap transition-colors border-2 border-white/30">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-primary-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Annual Trade Shows</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-primary-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Exhibitors</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-primary-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
              <div className="text-gray-600">Visitors Annually</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-primary-100">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'upcoming'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveFilter('ongoing')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'ongoing'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveFilter('past')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'past'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Trade Shows Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredShows.map((show) => (
              <div key={show.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 hover:border-primary-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                      show.status === 'upcoming' ? 'bg-primary-500 text-white' :
                      show.status === 'ongoing' ? 'bg-orange-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2">{show.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{show.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="ri-calendar-line text-primary-500"></i>
                      <span className="text-sm">{show.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="ri-map-pin-line text-primary-500"></i>
                      <span className="text-sm">{show.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold text-slate-900">{show.exhibitors.toLocaleString()}</div>
                      <div className="text-gray-600">Exhibitors</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{show.visitors.toLocaleString()}</div>
                      <div className="text-gray-600">Visitors</div>
                    </div>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-md font-semibold whitespace-nowrap transition-colors">
                    {show.status === 'past' ? 'View Details' : 'Register Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Attend Trade Shows?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-team-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Network with Industry Leaders</h3>
              <p className="text-gray-600">Meet face-to-face with suppliers, buyers, and industry experts from around the world</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Discover New Products</h3>
              <p className="text-gray-600">Explore the latest innovations and trends in your industry before they hit the market</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-handshake-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Build Business Relationships</h3>
              <p className="text-gray-600">Establish long-term partnerships and negotiate deals directly with decision-makers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Network?</h2>
          <p className="text-xl mb-8 text-primary-50">Register for upcoming trade shows and grow your business</p>
          <Link to="/auth/register" className="bg-white hover:bg-gray-100 text-primary-600 px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
