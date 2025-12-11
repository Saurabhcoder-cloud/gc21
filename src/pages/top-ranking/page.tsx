import Header from '../../components/layout/Header';

export default function TopRankingPage() {
  const topSuppliers = [
    { rank: 1, name: 'TechGlobal Manufacturing Co.', country: 'China', rating: 4.9, orders: 15420, verified: true, image: 'https://readdy.ai/api/search-image?query=modern%20electronics%20manufacturing%20facility%20with%20advanced%20production%20lines%20clean%20organized%20workspace%20high-tech%20equipment%20simple%20background%20professional%20industrial%20setting&width=400&height=300&seq=rank1&orientation=landscape' },
    { rank: 2, name: 'Premium Textiles Ltd.', country: 'India', rating: 4.8, orders: 12350, verified: true, image: 'https://readdy.ai/api/search-image?query=textile%20manufacturing%20facility%20with%20fabric%20rolls%20and%20weaving%20machines%20clean%20organized%20workspace%20colorful%20textiles%20simple%20background%20professional%20industrial%20setting&width=400&height=300&seq=rank2&orientation=landscape' },
    { rank: 3, name: 'Industrial Solutions Inc.', country: 'Germany', rating: 4.9, orders: 11200, verified: true, image: 'https://readdy.ai/api/search-image?query=industrial%20machinery%20manufacturing%20facility%20with%20precision%20equipment%20clean%20organized%20workspace%20modern%20technology%20simple%20background%20professional%20industrial%20setting&width=400&height=300&seq=rank3&orientation=landscape' },
    { rank: 4, name: 'Pacific Trading Group', country: 'Japan', rating: 4.7, orders: 10800, verified: true, image: 'https://readdy.ai/api/search-image?query=modern%20warehouse%20and%20distribution%20center%20with%20organized%20inventory%20clean%20professional%20workspace%20efficient%20logistics%20simple%20background%20industrial%20setting&width=400&height=300&seq=rank4&orientation=landscape' },
    { rank: 5, name: 'Global Parts Supply', country: 'USA', rating: 4.8, orders: 9500, verified: true, image: 'https://readdy.ai/api/search-image?query=automotive%20parts%20warehouse%20with%20organized%20inventory%20shelves%20clean%20professional%20workspace%20quality%20components%20simple%20background%20industrial%20setting&width=400&height=300&seq=rank5&orientation=landscape' },
  ];

  const topProducts = [
    { rank: 1, name: 'LED Solar Street Light', category: 'Lighting', orders: 8500, price: '$125', image: 'https://readdy.ai/api/search-image?query=modern%20LED%20solar%20street%20light%20with%20solar%20panel%20sleek%20design%20outdoor%20lighting%20equipment%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=prod1&orientation=squarish' },
    { rank: 2, name: 'Industrial CNC Machine', category: 'Machinery', orders: 6200, price: '$45,000', image: 'https://readdy.ai/api/search-image?query=industrial%20CNC%20milling%20machine%20precision%20manufacturing%20equipment%20modern%20design%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=prod2&orientation=squarish' },
    { rank: 3, name: 'Wireless Bluetooth Earbuds', category: 'Electronics', orders: 15300, price: '$18', image: 'https://readdy.ai/api/search-image?query=wireless%20bluetooth%20earbuds%20with%20charging%20case%20modern%20sleek%20design%20black%20color%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=prod3&orientation=squarish' },
    { rank: 4, name: 'Stainless Steel Water Bottle', category: 'Home & Garden', orders: 12400, price: '$8', image: 'https://readdy.ai/api/search-image?query=stainless%20steel%20insulated%20water%20bottle%20modern%20design%20metallic%20finish%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=prod4&orientation=squarish' },
    { rank: 5, name: 'Packaging Machine', category: 'Machinery', orders: 4800, price: '$12,500', image: 'https://readdy.ai/api/search-image?query=automatic%20packaging%20machine%20industrial%20equipment%20modern%20design%20stainless%20steel%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=prod5&orientation=squarish' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent-600 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Top Ranking Suppliers & Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the most trusted suppliers and best-selling products on GlobalTrade
            </p>
          </div>
        </div>
      </section>

      {/* Top Suppliers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Top Ranked Suppliers
            </h2>
            <p className="text-lg text-gray-600">
              The most trusted and reliable suppliers based on performance metrics
            </p>
          </div>

          <div className="space-y-6">
            {topSuppliers.map((supplier) => (
              <div key={supplier.rank} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">#{supplier.rank}</span>
                    </div>
                  </div>
                  <div className="w-48 h-32 flex-shrink-0">
                    <img src={supplier.image} alt={supplier.name} className="w-full h-full object-cover object-top rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{supplier.name}</h3>
                      {supplier.verified && (
                        <span className="px-3 py-1 bg-primary-light text-primary-dark text-xs font-semibold rounded-full flex items-center gap-1">
                          <i className="ri-verified-badge-fill"></i>
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line"></i>
                        {supplier.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-star-fill text-yellow-500"></i>
                        {supplier.rating} Rating
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-shopping-bag-line"></i>
                        {supplier.orders.toLocaleString()} Orders
                      </span>
                    </div>
                    <a href={`/supplier/${supplier.rank}`} className="inline-flex items-center gap-2 px-6 py-2 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors cursor-pointer whitespace-nowrap">
                      View Supplier
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Best-Selling Products
            </h2>
            <p className="text-lg text-gray-600">
              The most popular products with highest order volumes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map((product) => (
              <div key={product.rank} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-white">#{product.rank}</span>
                    </div>
                  </div>
                  <div className="w-full h-64">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent-600 mb-2 block">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-accent-600">{product.price}</span>
                    <span className="text-sm text-gray-600">{product.orders.toLocaleString()} orders</span>
                  </div>
                  <a href={`/product/${product.rank}`} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                    View Product
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Want to Be Featured in Top Rankings?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join GlobalTrade as a verified supplier and grow your business
          </p>
          <a href="/become-supplier" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
            Become a Supplier
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
