import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SupplierDashboardPage() {
  const navigate = useNavigate();
  const [supplier] = useState({
    name: 'Acme Manufacturing',
    isPaidSupplier: true, // Change to false to test free supplier view
    membershipTier: 'Premium',
    country: 'China',
  });

  const stats = [
    { label: 'Total Products', value: '248', icon: 'ri-box-3-line', color: 'bg-blue-500', change: '+12 this month' },
    { label: 'New Inquiries', value: '34', icon: 'ri-file-list-3-line', color: 'bg-emerald-500', change: '+8 today' },
    { label: 'Active Orders', value: '18', icon: 'ri-shopping-bag-3-line', color: 'bg-orange-500', change: '5 pending' },
    { label: 'Total Revenue', value: '$124K', icon: 'ri-money-dollar-circle-line', color: 'bg-purple-500', change: '+15% this month' },
  ];

  const recentInquiries = [
    { id: 'RFQ-2025-001', buyer: 'TechCorp Inc.', product: 'Industrial LED Lights', quantity: '5000 units', country: 'United States', date: '2025-01-15', status: 'New' },
    { id: 'RFQ-2025-002', buyer: 'Global Retail Co.', product: 'Cotton T-Shirts', quantity: '10000 pcs', country: 'United Kingdom', date: '2025-01-14', status: 'Quoted' },
    { id: 'RFQ-2025-003', buyer: 'PowerTech Solutions', product: 'Laptop Chargers', quantity: '2000 units', country: 'Canada', date: '2025-01-13', status: 'New' },
  ];

  const recentOrders = [
    { id: 'ORD-2847', buyer: 'TechCorp Inc.', product: 'USB Cables', amount: '$4,250', status: 'Processing', date: '2025-01-15' },
    { id: 'ORD-2846', buyer: 'Global Retail Co.', product: 'Phone Cases', amount: '$8,900', status: 'Shipped', date: '2025-01-14' },
    { id: 'ORD-2845', buyer: 'PowerTech Solutions', product: 'Chargers', amount: '$3,200', status: 'Delivered', date: '2025-01-12' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Quoted': return 'bg-emerald-100 text-emerald-700';
      case 'Processing': return 'bg-yellow-100 text-yellow-700';
      case 'Shipped': return 'bg-purple-100 text-purple-700';
      case 'Delivered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Welcome, {supplier.name}!
            </h1>
            <p className="text-emerald-50 text-lg mb-4">{supplier.country}</p>
            <div className="flex items-center space-x-3">
              {supplier.isPaidSupplier ? (
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg font-bold text-sm flex items-center">
                  <i className="ri-vip-crown-fill mr-2"></i>
                  {supplier.membershipTier} Supplier
                </span>
              ) : (
                <span className="px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm">
                  Free Supplier
                </span>
              )}
              <span className="px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm flex items-center">
                <i className="ri-shield-check-fill mr-2"></i>
                Verified
              </span>
            </div>
          </div>
          <div className="text-right">
            {!supplier.isPaidSupplier && (
              <button className="px-6 py-3 bg-yellow-400 text-yellow-900 rounded-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer">
                <i className="ri-vip-crown-line mr-2"></i>
                Upgrade to Premium
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Upgrade Banner for Free Suppliers */}
      {!supplier.isPaidSupplier && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="ri-lock-line mr-2 text-yellow-600"></i>
                Unlock Full Buyer Contact Details
              </h3>
              <p className="text-gray-700 mb-4">
                As a free supplier, you can see buyer inquiries but contact details (phone & email) are hidden. 
                Upgrade to Premium to unlock full buyer information and increase your sales opportunities!
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-gray-700">
                  <i className="ri-check-line text-emerald-600 mr-2"></i>
                  View full buyer contact details (phone & email)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <i className="ri-check-line text-emerald-600 mr-2"></i>
                  Priority placement in search results
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <i className="ri-check-line text-emerald-600 mr-2"></i>
                  Unlimited quote submissions
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <i className="ri-check-line text-emerald-600 mr-2"></i>
                  Advanced analytics and insights
                </li>
              </ul>
              <button
                onClick={() => navigate('/pricing')}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
              >
                View Pricing Plans
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
            <div className="ml-6">
              <div className="w-32 h-32 bg-yellow-200 rounded-full flex items-center justify-center">
                <i className="ri-vip-crown-fill text-6xl text-yellow-600"></i>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* Recent Inquiries */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Recent Buyer Inquiries
            </h2>
            <p className="text-sm text-gray-500 mt-1">Latest RFQs matching your products</p>
          </div>
          <button
            onClick={() => navigate('/supplier/inquiries')}
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Buyer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Country</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{inquiry.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{inquiry.buyer}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{inquiry.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{inquiry.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{inquiry.country}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{inquiry.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => navigate('/supplier/inquiries')}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-pointer"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Recent Orders
            </h2>
            <p className="text-sm text-gray-500 mt-1">Your latest order activity</p>
          </div>
          <button
            onClick={() => navigate('/supplier/orders')}
            className="px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer"
          >
            View All
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
        <div className="p-6 space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{order.product}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Buyer: {order.buyer}</span>
                  <span>•</span>
                  <span>Amount: <span className="font-semibold text-emerald-600">{order.amount}</span></span>
                  <span>•</span>
                  <span>{order.date}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
                Manage Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
