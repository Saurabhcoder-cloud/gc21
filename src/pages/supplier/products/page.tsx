import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierProductsPage() {
  const [view, setView] = useState<'grid' | 'list'>('list');
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 'PRD-001',
      image: 'https://readdy.ai/api/search-image?query=modern%20industrial%20LED%20light%20fixture%20with%20sleek%20aluminum%20housing%20and%20bright%20white%20illumination%20against%20clean%20white%20background%20professional%20product%20photography&width=200&height=200&seq=p1&orientation=squarish',
      title: 'Industrial LED Lights 50W',
      category: 'Lighting',
      priceRange: '$10.50 - $15.00',
      moq: '500 units',
      stock: 'In Stock',
      views: 2847,
      inquiries: 45,
      status: 'active',
    },
    {
      id: 'PRD-002',
      image: 'https://readdy.ai/api/search-image?query=compact%20wireless%20bluetooth%20speaker%20with%20modern%20design%20black%20finish%20and%20metallic%20accents%20on%20white%20background%20professional%20product%20photography&width=200&height=200&seq=p2&orientation=squarish',
      title: 'Wireless Bluetooth Speaker',
      category: 'Electronics',
      priceRange: '$6.80 - $9.50',
      moq: '1000 units',
      stock: 'In Stock',
      views: 2156,
      inquiries: 38,
      status: 'active',
    },
    {
      id: 'PRD-003',
      image: 'https://readdy.ai/api/search-image?query=small%20white%20smart%20home%20motion%20sensor%20with%20minimalist%20design%20and%20LED%20indicator%20on%20clean%20white%20background%20professional%20product%20photography&width=200&height=200&seq=p3&orientation=squarish',
      title: 'Smart Home Motion Sensor',
      category: 'Smart Home',
      priceRange: '$4.20 - $6.50',
      moq: '2000 units',
      stock: 'Low Stock',
      views: 1923,
      inquiries: 32,
      status: 'active',
    },
    {
      id: 'PRD-004',
      image: 'https://readdy.ai/api/search-image?query=premium%20USB-C%20charging%20cable%20with%20braided%20nylon%20design%20and%20metal%20connectors%20coiled%20on%20white%20background%20professional%20product%20photography&width=200&height=200&seq=p4&orientation=squarish',
      title: 'USB-C Fast Charging Cable 2M',
      category: 'Accessories',
      priceRange: '$2.50 - $4.00',
      moq: '5000 units',
      stock: 'In Stock',
      views: 1654,
      inquiries: 28,
      status: 'active',
    },
    {
      id: 'PRD-005',
      image: 'https://readdy.ai/api/search-image?query=wireless%20computer%20mouse%20with%20ergonomic%20design%20matte%20black%20finish%20and%20RGB%20lighting%20on%20white%20background%20professional%20product%20photography&width=200&height=200&seq=p5&orientation=squarish',
      title: 'Wireless Gaming Mouse RGB',
      category: 'Computer Peripherals',
      priceRange: '$8.00 - $12.00',
      moq: '1000 units',
      stock: 'In Stock',
      views: 1432,
      inquiries: 24,
      status: 'draft',
    },
  ];

  const filteredProducts = products.filter(p => {
    if (filterStatus !== 'all' && p.status !== filterStatus) return false;
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Product Catalog
            </h1>
            <p className="text-gray-600 mt-1">Manage your product listings</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
          >
            <i className="ri-add-line mr-2"></i>
            Add New Product
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView('list')}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  view === 'list' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <i className="ri-list-check text-xl"></i>
              </button>
              <button
                onClick={() => setView('grid')}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  view === 'grid' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <i className="ri-grid-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Products List View */}
        {view === 'list' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Product</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Price Range</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">MOQ</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Stock</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Performance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{product.title}</p>
                          <p className="text-xs text-gray-500">{product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{product.priceRange}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{product.moq}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.stock === 'In Stock' ? 'bg-primary-light text-primary-dark' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-600">
                          <i className="ri-eye-line mr-1"></i>
                          {product.views} views
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <i className="ri-file-list-3-line mr-1"></i>
                          {product.inquiries} inquiries
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'active' ? 'bg-primary-light text-primary-dark' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                          <i className="ri-edit-line"></i>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                          <i className="ri-eye-line"></i>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Products Grid View */}
        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${
                    product.status === 'active' ? 'bg-primary-light text-primary-dark' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.id}</p>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-xs text-gray-600 mb-3">{product.category}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-gray-900">{product.priceRange}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">MOQ:</span>
                      <span className="text-gray-900">{product.moq}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b border-gray-100">
                    <span><i className="ri-eye-line mr-1"></i>{product.views}</span>
                    <span><i className="ri-file-list-3-line mr-1"></i>{product.inquiries}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                      Edit
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all">
                      <i className="ri-more-2-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">This will redirect to the full product creation form</p>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                >
                  Go to Product Form
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SupplierLayout>
  );
}
