
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminSuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [verificationFilter, setVerificationFilter] = useState('all');
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const suppliers = [
    { id: 'SUP-001', name: 'Global Manufacturing Ltd.', contact: 'James Wilson', email: 'james@globalmanuf.com', country: 'China', type: 'Manufacturer', joined: '2024-08-15', status: 'Active', verification: 'Verified', products: 145, orders: 89, rating: 4.8 },
    { id: 'SUP-002', name: 'Euro Textile Co.', contact: 'Anna Schmidt', email: 'anna@eurotextile.com', country: 'Germany', type: 'Trading Company', joined: '2024-09-20', status: 'Active', verification: 'Verified', products: 78, orders: 45, rating: 4.6 },
    { id: 'SUP-003', name: 'Asia Electronics Inc.', contact: 'Li Wei', email: 'li@asiaelectronics.com', country: 'Taiwan', type: 'Manufacturer', joined: '2025-01-10', status: 'Active', verification: 'Pending', products: 23, orders: 0, rating: 0 },
    { id: 'SUP-004', name: 'Premium Goods Supplier', contact: 'Mohammed Ali', email: 'mohammed@premiumgoods.com', country: 'UAE', type: 'Wholesaler', joined: '2024-11-05', status: 'Suspended', verification: 'Unverified', products: 56, orders: 12, rating: 3.2 },
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || supplier.status.toLowerCase() === statusFilter;
    const matchesVerification = verificationFilter === 'all' || supplier.verification.toLowerCase() === verificationFilter;
    return matchesSearch && matchesStatus && matchesVerification;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Supplier Management
          </h1>
          <p className="text-gray-600 mt-2">Manage supplier accounts, verifications, and activities</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          <span className="font-semibold">Create Supplier</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search by name, contact, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>
          <select
            value={verificationFilter}
            onChange={(e) => setVerificationFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="all">All Verification</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="unverified">Unverified</option>
          </select>
        </div>
      </div>

      {/* Suppliers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Supplier ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Company & Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Business Info</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Performance</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Verification</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSuppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-gray-900">{supplier.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{supplier.name}</p>
                      <p className="text-sm text-gray-600">{supplier.contact}</p>
                      <p className="text-xs text-gray-500">{supplier.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-900">{supplier.type}</p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <i className="ri-map-pin-line mr-1"></i>
                        {supplier.country}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Joined: {supplier.joined}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-900">{supplier.products} Products</p>
                      <p className="text-sm text-gray-900">{supplier.orders} Orders</p>
                      {supplier.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <i className="ri-star-fill text-amber-400 text-sm"></i>
                          <span className="text-sm font-semibold text-gray-900">{supplier.rating}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      supplier.verification === 'Verified' ? 'bg-emerald-100 text-emerald-700' :
                      supplier.verification === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {supplier.verification}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      supplier.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {supplier.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedSupplier(supplier)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        title="View Details"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Verify"
                      >
                        <i className="ri-shield-check-line"></i>
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Suspend"
                      >
                        <i className="ri-forbid-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supplier Detail Modal */}
      {selectedSupplier && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSelectedSupplier(null)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Supplier Details</h2>
                  <button
                    onClick={() => setSelectedSupplier(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Supplier ID</label>
                    <p className="mt-1 font-mono text-gray-900">{selectedSupplier.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Verification Status</label>
                    <p className="mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedSupplier.verification === 'Verified' ? 'bg-emerald-100 text-emerald-700' :
                        selectedSupplier.verification === 'Pending' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {selectedSupplier.verification}
                      </span>
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Company Name</label>
                    <p className="mt-1 text-gray-900">{selectedSupplier.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Contact Person</label>
                    <p className="mt-1 text-gray-900">{selectedSupplier.contact}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <p className="mt-1 text-gray-900">{selectedSupplier.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Business Type</label>
                    <p className="mt-1 text-gray-900">{selectedSupplier.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Country</label>
                    <p className="mt-1 text-gray-900">{selectedSupplier.country}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Account Status</label>
                    <p className="mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedSupplier.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {selectedSupplier.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Total Products</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{selectedSupplier.products}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{selectedSupplier.orders}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-2xl font-bold text-amber-600 mt-1">{selectedSupplier.rating || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Admin Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                      <i className="ri-shield-check-line mr-2"></i>
                      Verify Supplier
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap">
                      <i className="ri-vip-crown-line mr-2"></i>
                      Set as Premium
                    </button>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all whitespace-nowrap">
                      <i className="ri-forbid-line mr-2"></i>
                      Suspend Account
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all whitespace-nowrap">
                      <i className="ri-lock-password-line mr-2"></i>
                      Reset Password
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all whitespace-nowrap">
                      <i className="ri-file-list-line mr-2"></i>
                      View Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Create Supplier Modal */}
      {showCreateModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowCreateModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Create New Supplier</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Manufacturer</option>
                      <option>Trading Company</option>
                      <option>Wholesaler</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>China</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Verification Status</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Unverified</option>
                      <option>Pending</option>
                      <option>Verified</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                    Create Supplier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
