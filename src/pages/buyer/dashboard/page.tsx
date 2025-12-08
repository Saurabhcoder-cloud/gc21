import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuyerDashboardPage() {
  const navigate = useNavigate();
  const [buyer] = useState({
    name: 'John Smith',
    company: 'TechCorp Industries',
    country: 'United States',
  });

  const stats = [
    { label: 'Active RFQs', value: '12', icon: 'ri-file-list-3-line', color: 'bg-blue-500', change: '+3 this week' },
    { label: 'Quotes Received', value: '28', icon: 'ri-mail-line', color: 'bg-emerald-500', change: '+8 new' },
    { label: 'Active Orders', value: '5', icon: 'ri-shopping-bag-line', color: 'bg-orange-500', change: '2 shipped' },
    { label: 'Saved Suppliers', value: '34', icon: 'ri-bookmark-line', color: 'bg-purple-500', change: '+2 this month' },
  ];

  const recentRFQs = [
    { id: 'RFQ-2025-001', product: 'Industrial LED Lights', quantity: '5000 units', status: 'Open', quotes: 8, date: '2025-01-15' },
    { id: 'RFQ-2025-002', product: 'Cotton T-Shirts', quantity: '10000 pcs', status: 'Quoted', quotes: 12, date: '2025-01-14' },
    { id: 'RFQ-2025-003', product: 'Laptop Chargers', quantity: '2000 units', status: 'Open', quotes: 5, date: '2025-01-13' },
    { id: 'RFQ-2025-004', product: 'Ceramic Mugs', quantity: '15000 pcs', status: 'Closed', quotes: 15, date: '2025-01-10' },
  ];

  const recentQuotes = [
    { id: 'QT-2025-045', supplier: 'Bright Tech Industries', product: 'Industrial LED Lights', price: '$12.50/unit', status: 'Pending Review', date: '2025-01-15' },
    { id: 'QT-2025-046', supplier: 'Global Textile Co.', product: 'Cotton T-Shirts', price: '$3.20/pc', status: 'Accepted', date: '2025-01-14' },
    { id: 'QT-2025-047', supplier: 'PowerTech Solutions', product: 'Laptop Chargers', price: '$8.90/unit', status: 'Pending Review', date: '2025-01-13' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-700';
      case 'Quoted': return 'bg-emerald-100 text-emerald-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-700';
      case 'Accepted': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Welcome back, {buyer.name}!
        </h1>
        <p className="text-emerald-50 text-lg mb-4">{buyer.company} • {buyer.country}</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate('/buyer/rfq')}
            className="px-6 py-2.5 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line mr-2"></i>
            Create New RFQ
          </button>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 border-2 border-white transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-search-line mr-2"></i>
            Browse Products
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                <i className={`${stat.icon} text-2xl`}></i>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent RFQs */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Recent RFQs
            </h2>
            <p className="text-sm text-gray-500 mt-1">Your latest buying requests</p>
          </div>
          <button
            onClick={() => navigate('/buyer/rfq')}
            className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer"
          >
            View All
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">RFQ ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quotes</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentRFQs.map((rfq) => (
                <tr key={rfq.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{rfq.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{rfq.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{rfq.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(rfq.status)}`}>
                      {rfq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-emerald-600">{rfq.quotes} quotes</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{rfq.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-pointer">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Quotes */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Recent Quotes
            </h2>
            <p className="text-sm text-gray-500 mt-1">Latest quotes from suppliers</p>
          </div>
          <button className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer">
            View All
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
        <div className="p-6 space-y-4">
          {recentQuotes.map((quote) => (
            <div key={quote.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-semibold text-gray-900">{quote.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(quote.status)}`}>
                    {quote.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{quote.product}</h3>
                <p className="text-sm text-gray-600 mb-1">Supplier: {quote.supplier}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Price: <span className="font-semibold text-emerald-600">{quote.price}</span></span>
                  <span>•</span>
                  <span>{quote.date}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
                Review Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
