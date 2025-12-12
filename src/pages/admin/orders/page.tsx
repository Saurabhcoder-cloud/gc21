
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminOrdersPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    { id: 'ORD-2025-1847', buyer: 'TechCorp Industries', supplier: 'Global Manufacturing Ltd.', product: 'Industrial LED Light 100W', quantity: 500, amount: '$28,500', status: 'Confirmed', date: '2025-01-15' },
    { id: 'ORD-2025-1846', buyer: 'Euro Trading GmbH', supplier: 'Euro Textile Co.', product: 'Cotton T-Shirt Wholesale', quantity: 1000, amount: '$5,500', status: 'Shipped', date: '2025-01-14' },
    { id: 'ORD-2025-1845', buyer: 'Global Retail Ltd.', supplier: 'Asia Electronics Inc.', product: 'Smartphone Case Silicone', quantity: 2000, amount: '$2,400', status: 'Completed', date: '2025-01-12' },
    { id: 'ORD-2025-1844', buyer: 'Asia Import Co.', supplier: 'Premium Goods Supplier', product: 'Stainless Steel Water Bottle', quantity: 300, amount: '$2,100', status: 'Pending', date: '2025-01-10' },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Order Management
          </h1>
          <p className="text-gray-600 mt-2">Monitor and manage all platform orders</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all shadow-lg whitespace-nowrap">
          <i className="ri-download-line"></i>
          <span className="font-semibold">Export Orders</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search by order ID, buyer, or supplier..."
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
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Buyer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Supplier</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Quantity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-gray-900">{order.id}</span>
                    <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{order.buyer}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{order.supplier}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{order.product}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{order.quantity} pcs</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-primary">{order.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Completed' ? 'bg-primary-light text-primary-dark' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'Confirmed' ? 'bg-purple-100 text-purple-700' :
                      order.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all" title="View Details">
                      <i className="ri-eye-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
