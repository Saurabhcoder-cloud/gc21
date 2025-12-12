
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminSupportPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const tickets = [
    { id: 'TKT-2847', user: 'John Smith', userType: 'Buyer', email: 'john@techcorp.com', subject: 'Payment Issue', category: 'Payment', priority: 'High', status: 'Open', created: '2025-01-15 10:30', lastReply: '2 hours ago' },
    { id: 'TKT-2846', user: 'Global Manufacturing Ltd.', userType: 'Supplier', email: 'james@globalmanuf.com', subject: 'Product Approval Delay', category: 'Product', priority: 'Medium', status: 'In Progress', created: '2025-01-15 09:15', lastReply: '4 hours ago' },
    { id: 'TKT-2845', user: 'Maria Garcia', userType: 'Buyer', email: 'maria@eurotrading.de', subject: 'Account Verification', category: 'Account', priority: 'Low', status: 'Resolved', created: '2025-01-14 16:45', lastReply: '1 day ago' },
    { id: 'TKT-2844', user: 'Asia Electronics Inc.', userType: 'Supplier', email: 'li@asiaelectronics.com', subject: 'Cannot Upload Documents', category: 'Technical', priority: 'High', status: 'Open', created: '2025-01-14 14:20', lastReply: '5 hours ago' },
  ];

  const filteredTickets = tickets.filter(ticket => 
    statusFilter === 'all' || ticket.status.toLowerCase().replace(' ', '-') === statusFilter
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Support Tickets
          </h1>
          <p className="text-gray-600 mt-2">Manage customer support requests and inquiries</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <i className="ri-alert-line text-red-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">8</span>
          </div>
          <p className="text-sm text-gray-600">Open Tickets</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-blue-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">5</span>
          </div>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
              <i className="ri-check-line text-primary"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">142</span>
          </div>
          <p className="text-sm text-gray-600">Resolved</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="ri-timer-line text-purple-600"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900">2.4h</span>
          </div>
          <p className="text-sm text-gray-600">Avg Response Time</p>
        </div>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Ticket ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Subject</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-gray-900">{ticket.id}</span>
                    <p className="text-xs text-gray-500 mt-1">{ticket.created}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{ticket.user}</p>
                    <p className="text-xs text-gray-500">{ticket.userType}</p>
                    <p className="text-xs text-gray-500">{ticket.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{ticket.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">Last reply: {ticket.lastReply}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                      ticket.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      ticket.status === 'Open' ? 'bg-red-100 text-red-700' :
                      ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-primary-light text-primary-dark'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedTicket(ticket)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm font-medium whitespace-nowrap"
                    >
                      View & Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setSelectedTicket(null)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTicket.subject}</h2>
                    <p className="text-sm text-gray-600 mt-1">Ticket ID: {selectedTicket.id}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">User</label>
                    <p className="mt-1 text-gray-900">{selectedTicket.user}</p>
                    <p className="text-sm text-gray-600">{selectedTicket.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Status</label>
                    <p className="mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedTicket.status === 'Open' ? 'bg-red-100 text-red-700' :
                        selectedTicket.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-primary-light text-primary-dark'
                      }`}>
                        {selectedTicket.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <p className="mt-1 text-gray-900">{selectedTicket.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Priority</label>
                    <p className="mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedTicket.priority === 'High' ? 'bg-red-100 text-red-700' :
                        selectedTicket.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {selectedTicket.priority}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Conversation</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{selectedTicket.user}</p>
                        <p className="text-xs text-gray-500">{selectedTicket.created}</p>
                      </div>
                      <p className="text-sm text-gray-700">
                        I'm experiencing issues with the payment process. When I try to complete my order, the payment gateway shows an error message. Can you please help me resolve this?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Reply to Ticket</h3>
                  <textarea
                    rows={4}
                    placeholder="Type your response here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm mb-4"
                  ></textarea>
                  <div className="flex items-center justify-between">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                      <option>Change Status</option>
                      <option>Open</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Closed</option>
                    </select>
                    <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                      <i className="ri-send-plane-fill mr-2"></i>
                      Send Reply
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
