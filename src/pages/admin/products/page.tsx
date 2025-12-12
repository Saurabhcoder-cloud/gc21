
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    { id: 'PRD-001', name: 'Industrial LED Light 100W', supplier: 'Global Manufacturing Ltd.', supplierId: 'SUP-001', category: 'Electronics', price: '$45-$65', moq: '100 pcs', status: 'Active', featured: true, views: 1247, inquiries: 34, image: 'https://readdy.ai/api/search-image?query=industrial%20led%20light%20fixture%20100w%20commercial%20lighting%20equipment%20modern%20design%20white%20background%20product%20photography%20professional%20quality%20clean%20simple%20minimal&width=400&height=400&seq=prod-001&orientation=squarish' },
    { id: 'PRD-002', name: 'Cotton T-Shirt Wholesale', supplier: 'Euro Textile Co.', supplierId: 'SUP-002', category: 'Apparel', price: '$3-$8', moq: '500 pcs', status: 'Active', featured: false, views: 892, inquiries: 28, image: 'https://readdy.ai/api/search-image?query=plain%20cotton%20tshirt%20white%20basic%20apparel%20clothing%20wholesale%20product%20simple%20background%20clean%20professional%20photography%20minimal%20design&width=400&height=400&seq=prod-002&orientation=squarish' },
    { id: 'PRD-003', name: 'Smartphone Case Silicone', supplier: 'Asia Electronics Inc.', supplierId: 'SUP-003', category: 'Electronics', price: '$0.5-$2', moq: '1000 pcs', status: 'Pending', featured: false, views: 234, inquiries: 5, image: 'https://readdy.ai/api/search-image?query=silicone%20smartphone%20case%20protective%20cover%20mobile%20phone%20accessory%20colorful%20modern%20design%20white%20background%20product%20shot%20clean%20minimal&width=400&height=400&seq=prod-003&orientation=squarish' },
    { id: 'PRD-004', name: 'Stainless Steel Water Bottle', supplier: 'Premium Goods Supplier', supplierId: 'SUP-004', category: 'Home & Garden', price: '$5-$12', moq: '200 pcs', status: 'Inactive', featured: false, views: 567, inquiries: 12, image: 'https://readdy.ai/api/search-image?query=stainless%20steel%20water%20bottle%20insulated%20thermos%20flask%20modern%20design%20metallic%20finish%20white%20background%20product%20photography%20clean%20minimal&width=400&height=400&seq=prod-004&orientation=squarish' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || product.status.toLowerCase() === statusFilter;
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Product Management
          </h1>
          <p className="text-gray-600 mt-2">Manage all products, approvals, and featured listings</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all shadow-lg whitespace-nowrap">
            <i className="ri-download-line"></i>
            <span className="font-semibold">Export</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search by product name or supplier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="all">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Apparel">Apparel</option>
            <option value="Home & Garden">Home & Garden</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending Approval</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
            <div className="flex">
              <div className="w-48 h-48 flex-shrink-0 bg-gray-100 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    <i className="ri-star-fill mr-1"></i>
                    Featured
                  </div>
                )}
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  product.status === 'Active' ? 'bg-primary-light text-primary-dark' :
                  product.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {product.status}
                </span>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <i className="ri-store-line mr-1"></i>
                    {product.supplier}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">{product.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Price Range</p>
                    <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">MOQ</p>
                    <p className="text-sm font-semibold text-gray-900">{product.moq}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Views</p>
                    <p className="text-sm font-semibold text-gray-900">{product.views}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Inquiries</p>
                    <p className="text-sm font-semibold text-primary">{product.inquiries}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap"
                  >
                    <i className="ri-eye-line mr-1"></i>
                    View
                  </button>
                  <button className="px-3 py-2 bg-primary-light text-primary-dark rounded-lg hover:bg-primary-light transition-all text-sm font-medium whitespace-nowrap">
                    <i className="ri-check-line"></i>
                  </button>
                  <button className="px-3 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-all text-sm font-medium whitespace-nowrap">
                    <i className="ri-star-line"></i>
                  </button>
                  <button className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-sm font-medium whitespace-nowrap">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSelectedProduct(null)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-6 mb-6">
                  <div className="w-64 h-64 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                    <p className="text-gray-600 mb-4">Product ID: {selectedProduct.id}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Supplier</label>
                        <p className="mt-1 text-gray-900">{selectedProduct.supplier}</p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Category</label>
                        <p className="mt-1 text-gray-900">{selectedProduct.category}</p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Price Range</label>
                        <p className="mt-1 text-gray-900">{selectedProduct.price}</p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">MOQ</label>
                        <p className="mt-1 text-gray-900">{selectedProduct.moq}</p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Status</label>
                        <p className="mt-1">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            selectedProduct.status === 'Active' ? 'bg-primary-light text-primary-dark' :
                            selectedProduct.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {selectedProduct.status}
                          </span>
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700">Featured</label>
                        <p className="mt-1 text-gray-900">{selectedProduct.featured ? 'Yes' : 'No'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Total Views</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{selectedProduct.views}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Inquiries</p>
                      <p className="text-2xl font-bold text-primary mt-1">{selectedProduct.inquiries}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Conversion</p>
                      <p className="text-2xl font-bold text-blue-600 mt-1">2.7%</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Admin Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                      <i className="ri-check-line mr-2"></i>
                      Approve Product
                    </button>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all whitespace-nowrap">
                      <i className="ri-star-line mr-2"></i>
                      Feature on Homepage
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap">
                      <i className="ri-edit-line mr-2"></i>
                      Edit Product
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all whitespace-nowrap">
                      <i className="ri-eye-off-line mr-2"></i>
                      Hide Product
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                      <i className="ri-delete-bin-line mr-2"></i>
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
