
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminDisputesPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDispute, setSelectedDispute] = useState<any>(null);

  const disputes = [
    { id: 'DSP-001', orderId: 'ORD-2025-1823', buyer: 'John Smith', supplier: 'Global Manufacturing Ltd.', amount: '$12,450', reason: 'Product Quality Issue', status: 'Open', created: '2025-01-14', priority: 'High' },
    { id: 'DSP-002', orderId: 'ORD-2025-1756', buyer: 'Maria Garcia', supplier: 'Euro Textile Co.', amount: '$8,230', reason: 'Late Delivery', status: 'Under Review', created: '2025-01-12', priority: 'Medium' },
    { id: 'DSP-003', orderId: 'ORD-2025-1689', buyer: 'David Chen', supplier: 'Asia Electronics Inc.', amount: '$5,670', reason: 'Wrong Product Shipped', status: 'Resolved', created: '2025-01-08', priority: 'High' },
  ];

  const filteredDisputes = disputes.filter(dispute => 
    statusFilter === 'all' || dispute.status.toLowerCase().replace(' ', '-') === statusFilter
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Dispute Management
          </h1>
          <p className="text-gray-600 mt-2">Manage and resolve order disputes between buyers and suppliers</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
        >
          <option value="all">All Status</option>
          <option value="open">Open</option>
          <option value="under-review">Under Review</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <i className="ri-alert-line text-red-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <p className="text-sm text-gray-600">Open Disputes</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-blue-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">1</span>
          </div>
          <p className="text-sm text-gray-600">Under Review</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <i className="ri-check-line text-emerald-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">47</span>
          </div>
          <p className="text-sm text-gray-600">Resolved</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="ri-timer-line text-purple-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">3.2d</span>
          </div>
          <p className="text-sm text-gray-600">Avg Resolution Time</p>
        </div>
      </div>

      {/* Disputes List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Dispute ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Order</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Parties</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Reason</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDisputes.map((dispute) => (
                <tr key={dispute.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-gray-900">{dispute.id}</span>
                    <p className="text-xs text-gray-500 mt-1">{dispute.created}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-blue-600">{dispute.orderId}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-900">
                        <i className="ri-user-line mr-1"></i>
                        {dispute.buyer}
                      </p>
                      <p className="text-sm text-gray-900 mt-1">
                        <i className="ri-store-line mr-1"></i>
                        {dispute.supplier}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{dispute.reason}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{dispute.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      dispute.priority === 'High' ? 'bg-red-100 text-red-700' :
                      dispute.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {dispute.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      dispute.status === 'Open' ? 'bg-red-100 text-red-700' :
                      dispute.status === 'Under Review' ? 'bg-blue-100 text-blue-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {dispute.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedDispute(dispute)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dispute Detail Modal */}
      {selectedDispute && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSelectedDispute(null)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dispute Details</h2>
                    <p className="text-sm text-gray-600 mt-1">Dispute ID: {selectedDispute.id}</p>
                  </div>
                  <button
                    onClick={() => setSelectedDispute(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Order ID</label>
                    <p className="mt-1 font-mono text-blue-600">{selectedDispute.orderId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Amount</label>
                    <p className="mt-1 text-gray-900 font-semibold">{selectedDispute.amount}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Buyer</label>
                    <p className="mt-1 text-gray-900">{selectedDispute.buyer}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Supplier</label>
                    <p className="mt-1 text-gray-900">{selectedDispute.supplier}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Reason</label>
                    <p className="mt-1 text-gray-900">{selectedDispute.reason}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Status</label>
                    <p className="mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedDispute.status === 'Open' ? 'bg-red-100 text-red-700' :
                        selectedDispute.status === 'Under Review' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {selectedDispute.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Dispute Description</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      The buyer has raised a dispute regarding the quality of the received products. According to the buyer, the products do not meet the specifications agreed upon in the order. The buyer has provided photographic evidence and is requesting either a full refund or replacement of the products.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Evidence & Documents</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <i className="ri-image-line text-3xl text-gray-400 mb-2"></i>
                      <p className="text-xs text-gray-600">Product Photo 1</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <i className="ri-image-line text-3xl text-gray-400 mb-2"></i>
                      <p className="text-xs text-gray-600">Product Photo 2</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <i className="ri-file-text-line text-3xl text-gray-400 mb-2"></i>
                      <p className="text-xs text-gray-600">Invoice Copy</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Admin Actions</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap">
                      <i className="ri-eye-line mr-2"></i>
                      View Order Details
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all whitespace-nowrap">
                      <i className="ri-message-3-line mr-2"></i>
                      Contact Buyer
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all whitespace-nowrap">
                      <i className="ri-message-3-line mr-2"></i>
                      Contact Supplier
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <select className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Select Resolution</option>
                      <option>Refund to Buyer</option>
                      <option>Partial Refund</option>
                      <option>Replacement Order</option>
                      <option>Reject Dispute</option>
                    </select>
                    <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                      <i className="ri-check-line mr-2"></i>
                      Resolve Dispute
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
