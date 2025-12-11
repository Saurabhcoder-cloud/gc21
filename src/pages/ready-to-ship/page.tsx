import { useState } from 'react';

export default function ReadyToShipPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Machinery', 'Textiles', 'Home & Garden', 'Automotive'];

  const products = [
    { id: 1, name: 'LED Flood Light 100W', category: 'Electronics', price: '$45', moq: '10 pieces', stock: 5000, shipping: '3-5 days', image: 'https://readdy.ai/api/search-image?query=LED%20flood%20light%20100W%20outdoor%20lighting%20equipment%20modern%20design%20black%20housing%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship1&orientation=squarish' },
    { id: 2, name: 'Hydraulic Press Machine', category: 'Machinery', price: '$8,500', moq: '1 unit', stock: 25, shipping: '7-10 days', image: 'https://readdy.ai/api/search-image?query=hydraulic%20press%20machine%20industrial%20equipment%20blue%20and%20gray%20color%20modern%20design%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship2&orientation=squarish' },
    { id: 3, name: 'Cotton T-Shirts Bulk', category: 'Textiles', price: '$3.50', moq: '500 pieces', stock: 50000, shipping: '5-7 days', image: 'https://readdy.ai/api/search-image?query=stack%20of%20folded%20cotton%20t-shirts%20various%20colors%20neatly%20arranged%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship3&orientation=squarish' },
    { id: 4, name: 'Garden Tool Set', category: 'Home & Garden', price: '$28', moq: '50 sets', stock: 2000, shipping: '4-6 days', image: 'https://readdy.ai/api/search-image?query=garden%20tool%20set%20with%20shovel%20rake%20and%20trowel%20organized%20display%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship4&orientation=squarish' },
    { id: 5, name: 'Car Air Filter', category: 'Automotive', price: '$12', moq: '100 pieces', stock: 10000, shipping: '3-5 days', image: 'https://readdy.ai/api/search-image?query=automotive%20air%20filter%20cylindrical%20shape%20white%20and%20blue%20color%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship5&orientation=squarish' },
    { id: 6, name: 'Wireless Mouse', category: 'Electronics', price: '$6.50', moq: '200 pieces', stock: 15000, shipping: '2-4 days', image: 'https://readdy.ai/api/search-image?query=wireless%20computer%20mouse%20modern%20ergonomic%20design%20black%20color%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship6&orientation=squarish' },
    { id: 7, name: 'Conveyor Belt System', category: 'Machinery', price: '$3,200', moq: '1 unit', stock: 15, shipping: '10-15 days', image: 'https://readdy.ai/api/search-image?query=industrial%20conveyor%20belt%20system%20stainless%20steel%20modern%20design%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship7&orientation=squarish' },
    { id: 8, name: 'Denim Jeans Wholesale', category: 'Textiles', price: '$15', moq: '300 pieces', stock: 30000, shipping: '5-7 days', image: 'https://readdy.ai/api/search-image?query=stack%20of%20folded%20denim%20jeans%20blue%20color%20neatly%20arranged%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship8&orientation=squarish' },
    { id: 9, name: 'LED Desk Lamp', category: 'Home & Garden', price: '$18', moq: '100 pieces', stock: 5000, shipping: '3-5 days', image: 'https://readdy.ai/api/search-image?query=modern%20LED%20desk%20lamp%20adjustable%20arm%20white%20and%20silver%20color%20simple%20clean%20white%20background%20professional%20product%20photography&width=300&height=300&seq=ship9&orientation=squarish' },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Ship Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              In-stock products available for immediate shipment with fast delivery
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-box-3-line text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">In Stock</h3>
                <p className="text-sm text-gray-600">Ready inventory</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-rocket-line text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Fast Shipping</h3>
                <p className="text-sm text-gray-600">2-15 days delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-line text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Quality Assured</h3>
                <p className="text-sm text-gray-600">Verified products</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-price-tag-3-line text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">Low MOQ</h3>
                <p className="text-sm text-gray-600">Flexible quantities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      IN STOCK
                    </span>
                  </div>
                  <div className="w-full h-64">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-teal-600 mb-2 block">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-xl font-bold text-teal-600">{product.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">MOQ:</span>
                      <span className="font-semibold text-gray-900">{product.moq}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Stock:</span>
                      <span className="font-semibold text-gray-900">{product.stock.toLocaleString()} available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-semibold text-gray-900">{product.shipping}</span>
                    </div>
                  </div>
                  <a href={`/product/${product.id}`} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                    Order Now
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Need Custom Products?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Submit an RFQ and get quotes from verified suppliers
          </p>
          <a href="/buyer/rfq" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
            Submit RFQ
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
