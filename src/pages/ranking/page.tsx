import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'suppliers' | 'categories'>('products');

  const topProducts = [
    { rank: 1, name: 'Wireless Bluetooth Earbuds', category: 'Consumer Electronics', orders: 15420, rating: 4.8, trend: 'up' },
    { rank: 2, name: 'Smart Watch Series 8', category: 'Consumer Electronics', orders: 12350, rating: 4.7, trend: 'up' },
    { rank: 3, name: 'Portable Power Bank 20000mAh', category: 'Consumer Electronics', orders: 11280, rating: 4.6, trend: 'same' },
    { rank: 4, name: 'LED Desk Lamp with USB', category: 'Home & Garden', orders: 9840, rating: 4.9, trend: 'up' },
    { rank: 5, name: 'Stainless Steel Water Bottle', category: 'Sports & Entertainment', orders: 8920, rating: 4.5, trend: 'down' },
    { rank: 6, name: 'Yoga Mat Non-Slip', category: 'Sports & Entertainment', orders: 8450, rating: 4.7, trend: 'up' },
    { rank: 7, name: 'Wireless Phone Charger', category: 'Consumer Electronics', orders: 7890, rating: 4.6, trend: 'same' },
    { rank: 8, name: 'Bamboo Cutting Board Set', category: 'Home & Garden', orders: 7320, rating: 4.8, trend: 'up' },
    { rank: 9, name: 'Resistance Bands Set', category: 'Sports & Entertainment', orders: 6950, rating: 4.5, trend: 'down' },
    { rank: 10, name: 'Laptop Stand Adjustable', category: 'Office Supplies', orders: 6540, rating: 4.7, trend: 'up' }
  ];

  const topSuppliers = [
    { rank: 1, name: 'TechGlobal Manufacturing Co.', country: 'China', products: 2450, rating: 4.9, verified: true },
    { rank: 2, name: 'EliteSource Industries', country: 'India', products: 1890, rating: 4.8, verified: true },
    { rank: 3, name: 'PrimeGoods International', country: 'Vietnam', products: 1650, rating: 4.7, verified: true },
    { rank: 4, name: 'QualityFirst Exports', country: 'Turkey', products: 1420, rating: 4.8, verified: true },
    { rank: 5, name: 'MegaTrade Solutions', country: 'Thailand', products: 1280, rating: 4.6, verified: true },
    { rank: 6, name: 'GlobalLink Trading', country: 'South Korea', products: 1150, rating: 4.9, verified: true },
    { rank: 7, name: 'ProSource Manufacturing', country: 'Malaysia', products: 1090, rating: 4.7, verified: true },
    { rank: 8, name: 'DirectFactory Group', country: 'Indonesia', products: 980, rating: 4.5, verified: true },
    { rank: 9, name: 'TopTier Suppliers Ltd', country: 'Pakistan', products: 890, rating: 4.6, verified: true },
    { rank: 10, name: 'BestValue Exports', country: 'Bangladesh', products: 820, rating: 4.8, verified: true }
  ];

  const topCategories = [
    { rank: 1, name: 'Consumer Electronics', products: 45820, suppliers: 3240, growth: '+18%' },
    { rank: 2, name: 'Home & Garden', products: 38950, suppliers: 2890, growth: '+15%' },
    { rank: 3, name: 'Apparel & Accessories', products: 35420, suppliers: 2650, growth: '+12%' },
    { rank: 4, name: 'Sports & Entertainment', products: 28740, suppliers: 2120, growth: '+22%' },
    { rank: 5, name: 'Beauty & Personal Care', products: 24680, suppliers: 1890, growth: '+25%' },
    { rank: 6, name: 'Tools & Hardware', products: 21350, suppliers: 1650, growth: '+10%' },
    { rank: 7, name: 'Toys & Hobbies', products: 19820, suppliers: 1520, growth: '+14%' },
    { rank: 8, name: 'Automotive Parts', products: 17940, suppliers: 1380, growth: '+8%' },
    { rank: 9, name: 'Office Supplies', products: 15680, suppliers: 1240, growth: '+11%' },
    { rank: 10, name: 'Pet Supplies', products: 13520, suppliers: 1090, growth: '+20%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">Top Rankings</h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Discover the most popular products, top-rated suppliers, and trending categories on our platform
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200M+</div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200K+</div>
              <div className="text-gray-600">Verified Suppliers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5,900+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'products'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Top Products
            </button>
            <button
              onClick={() => setActiveTab('suppliers')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'suppliers'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Top Suppliers
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'categories'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Top Categories
            </button>
          </div>

          {/* Top Products */}
          {activeTab === 'products' && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Rank</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Product Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Category</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Orders</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Rating</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topProducts.map((product) => (
                        <tr key={product.rank} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              product.rank <= 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {product.rank}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Link to="/products" className="text-slate-900 hover:text-emerald-600 font-medium">
                              {product.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{product.category}</td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">{product.orders.toLocaleString()}</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <i className="ri-star-fill text-yellow-400"></i>
                              <span className="font-medium text-gray-700">{product.rating}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {product.trend === 'up' && <i className="ri-arrow-up-line text-emerald-500 text-xl"></i>}
                            {product.trend === 'down' && <i className="ri-arrow-down-line text-red-500 text-xl"></i>}
                            {product.trend === 'same' && <i className="ri-subtract-line text-gray-400 text-xl"></i>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Top Suppliers */}
          {activeTab === 'suppliers' && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Rank</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Supplier Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Country</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Products</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Rating</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topSuppliers.map((supplier) => (
                        <tr key={supplier.rank} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              supplier.rank <= 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {supplier.rank}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Link to="/suppliers" className="text-slate-900 hover:text-emerald-600 font-medium">
                              {supplier.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{supplier.country}</td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">{supplier.products.toLocaleString()}</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <i className="ri-star-fill text-yellow-400"></i>
                              <span className="font-medium text-gray-700">{supplier.rating}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {supplier.verified && (
                              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                <i className="ri-verified-badge-fill"></i>
                                Verified
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Top Categories */}
          {activeTab === 'categories' && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Rank</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Category Name</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Products</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Suppliers</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Growth</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {topCategories.map((category) => (
                        <tr key={category.rank} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              category.rank <= 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {category.rank}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Link to="/products" className="text-slate-900 hover:text-emerald-600 font-medium">
                              {category.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">{category.products.toLocaleString()}</td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">{category.suppliers.toLocaleString()}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                              <i className="ri-arrow-up-line"></i>
                              {category.growth}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Be on the Top Rankings?</h2>
          <p className="text-xl mb-8 text-emerald-50">Join our platform and start growing your business today</p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth/register" className="bg-white hover:bg-gray-100 text-emerald-600 px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
              Get Started
            </Link>
            <Link to="/suppliers" className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
              Browse Suppliers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
