import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minMOQ, setMinMOQ] = useState('');
  const [supplierCountry, setSupplierCountry] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Industrial LED Flood Light 200W High Efficiency',
      image: 'https://readdy.ai/api/search-image?query=professional%20industrial%20LED%20flood%20light%20200W%20mounted%20on%20white%20wall%20in%20modern%20factory%20warehouse%20with%20bright%20illumination%20clean%20white%20background%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist1&orientation=squarish',
      price: '$45.00 - $52.00',
      moq: '100 pieces',
      supplier: 'Bright Tech Industries',
      location: 'Shenzhen, China',
      verified: true,
      rating: 4.8,
      orders: 2450
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirts Wholesale Premium Quality',
      image: 'https://readdy.ai/api/search-image?query=stack%20of%20premium%20organic%20cotton%20t-shirts%20in%20various%20colors%20neatly%20folded%20on%20white%20surface%20minimalist%20clean%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist2&orientation=squarish',
      price: '$3.50 - $5.20',
      moq: '500 pieces',
      supplier: 'Global Textile Co.',
      location: 'Mumbai, India',
      verified: true,
      rating: 4.9,
      orders: 3200
    },
    {
      id: 3,
      name: 'Stainless Steel Water Bottles Insulated 500ml',
      image: 'https://readdy.ai/api/search-image?query=sleek%20stainless%20steel%20water%20bottles%20in%20metallic%20silver%20finish%20standing%20upright%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist3&orientation=squarish',
      price: '$2.80 - $4.50',
      moq: '1000 pieces',
      supplier: 'EcoLife Manufacturing',
      location: 'Guangzhou, China',
      verified: true,
      rating: 4.7,
      orders: 1890
    },
    {
      id: 4,
      name: 'Wireless Bluetooth Earbuds TWS 5.0 Premium Sound',
      image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20earbuds%20with%20charging%20case%20in%20matte%20black%20finish%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist4&orientation=squarish',
      price: '$8.50 - $12.00',
      moq: '200 pieces',
      supplier: 'AudioTech Solutions',
      location: 'Seoul, South Korea',
      verified: true,
      rating: 4.6,
      orders: 1560
    },
    {
      id: 5,
      name: 'Bamboo Cutting Board Set Kitchen Essential',
      image: 'https://readdy.ai/api/search-image?query=premium%20bamboo%20cutting%20boards%20in%20different%20sizes%20stacked%20neatly%20on%20white%20surface%20natural%20wood%20texture%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist5&orientation=squarish',
      price: '$6.20 - $9.80',
      moq: '300 pieces',
      supplier: 'Natural Home Goods',
      location: 'Hanoi, Vietnam',
      verified: true,
      rating: 4.8,
      orders: 980
    },
    {
      id: 6,
      name: 'Solar Panel 300W Monocrystalline High Efficiency',
      image: 'https://readdy.ai/api/search-image?query=modern%20solar%20panel%20with%20blue%20monocrystalline%20cells%20in%20aluminum%20frame%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist6&orientation=squarish',
      price: '$85.00 - $95.00',
      moq: '50 pieces',
      supplier: 'Green Energy Systems',
      location: 'California, USA',
      verified: true,
      rating: 4.9,
      orders: 750
    },
    {
      id: 7,
      name: 'Ceramic Coffee Mug Set Elegant Design 12oz',
      image: 'https://readdy.ai/api/search-image?query=elegant%20ceramic%20coffee%20mugs%20in%20pastel%20colors%20arranged%20in%20a%20row%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist7&orientation=squarish',
      price: '$1.80 - $3.20',
      moq: '1000 pieces',
      supplier: 'Pottery Masters Ltd',
      location: 'Jingdezhen, China',
      verified: true,
      rating: 4.7,
      orders: 2100
    },
    {
      id: 8,
      name: 'Yoga Mat Premium Non-Slip Exercise Fitness',
      image: 'https://readdy.ai/api/search-image?query=rolled%20premium%20yoga%20mat%20in%20teal%20color%20standing%20upright%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist8&orientation=squarish',
      price: '$4.50 - $7.80',
      moq: '200 pieces',
      supplier: 'FitLife Sports',
      location: 'Taipei, Taiwan',
      verified: true,
      rating: 4.8,
      orders: 1340
    },
    {
      id: 9,
      name: 'Smart Watch Fitness Tracker Heart Rate Monitor',
      image: 'https://readdy.ai/api/search-image?query=modern%20smart%20watch%20with%20black%20band%20and%20colorful%20display%20screen%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist9&orientation=squarish',
      price: '$15.00 - $22.00',
      moq: '100 pieces',
      supplier: 'WearTech Electronics',
      location: 'Shenzhen, China',
      verified: true,
      rating: 4.7,
      orders: 1820
    },
    {
      id: 10,
      name: 'Portable Power Bank 20000mAh Fast Charging',
      image: 'https://readdy.ai/api/search-image?query=sleek%20portable%20power%20bank%20in%20black%20aluminum%20finish%20with%20LED%20indicators%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist10&orientation=squarish',
      price: '$12.00 - $18.00',
      moq: '200 pieces',
      supplier: 'PowerMax Tech',
      location: 'Guangzhou, China',
      verified: true,
      rating: 4.8,
      orders: 2650
    },
    {
      id: 11,
      name: 'Leather Laptop Bag Business Professional 15 inch',
      image: 'https://readdy.ai/api/search-image?query=elegant%20brown%20leather%20laptop%20bag%20with%20metal%20buckles%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist11&orientation=squarish',
      price: '$25.00 - $35.00',
      moq: '100 pieces',
      supplier: 'Luxury Leather Goods',
      location: 'Florence, Italy',
      verified: true,
      rating: 4.9,
      orders: 890
    },
    {
      id: 12,
      name: 'Air Purifier HEPA Filter Home Office Desktop',
      image: 'https://readdy.ai/api/search-image?query=modern%20white%20air%20purifier%20with%20sleek%20cylindrical%20design%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prodlist12&orientation=squarish',
      price: '$35.00 - $48.00',
      moq: '50 pieces',
      supplier: 'CleanAir Technologies',
      location: 'Tokyo, Japan',
      verified: true,
      rating: 4.8,
      orders: 1120
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Product Marketplace
            </h1>
            <p className="text-gray-600">Discover quality products from verified suppliers worldwide</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="textiles">Textiles</option>
                    <option value="home">Home & Garden</option>
                    <option value="machinery">Machinery</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range (USD)</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* MOQ Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Minimum Order Quantity</h3>
                  <input
                    type="text"
                    value={minMOQ}
                    onChange={(e) => setMinMOQ(e.target.value)}
                    placeholder="Enter MOQ"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Supplier Country */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Supplier Location</h3>
                  <select
                    value={supplierCountry}
                    onChange={(e) => setSupplierCountry(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="all">All Countries</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="vietnam">Vietnam</option>
                  </select>
                </div>

                {/* Verified Suppliers */}
                <div className="mb-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                    <span className="text-sm text-gray-700">Verified Suppliers Only</span>
                  </label>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Minimum Rating</h3>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="rating" className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500" />
                        <div className="flex items-center">
                          <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                          <span className="text-sm text-gray-700">{rating} & up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all text-sm whitespace-nowrap">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowFilters(true)}
                      className="lg:hidden px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm whitespace-nowrap"
                    >
                      <i className="ri-filter-line mr-2"></i>
                      Filters
                    </button>
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">{products.length}</strong> products found
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="orders">Most Orders</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    data-product-shop
                  >
                    <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.verified && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                          <i className="ri-verified-badge-fill"></i>
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-bold text-emerald-600">{product.price}</span>
                        <div className="flex items-center space-x-1">
                          <i className="ri-star-fill text-yellow-400 text-sm"></i>
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">MOQ: {product.moq}</p>
                      <p className="text-xs text-gray-500 mb-3">{product.orders} orders</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate">{product.supplier}</p>
                          <p className="text-xs text-gray-500 flex items-center">
                            <i className="ri-map-pin-line mr-1"></i>
                            {product.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium whitespace-nowrap">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap">4</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}