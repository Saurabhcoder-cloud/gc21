
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Buyers', value: '2,847', change: '+12%', icon: 'ri-user-line', color: 'primary' },
    { label: 'Total Suppliers', value: '1,234', change: '+8%', icon: 'ri-store-line', color: 'blue' },
    { label: 'Active Products', value: '15,678', change: '+24%', icon: 'ri-box-3-line', color: 'purple' },
    { label: 'Total Orders', value: '8,945', change: '+18%', icon: 'ri-shopping-bag-line', color: 'orange' },
  ];

  const pendingActions = [
    { type: 'Supplier Verifications', count: 5, icon: 'ri-shield-check-line', color: 'blue', path: '/admin/suppliers' },
    { type: 'Product Approvals', count: 12, icon: 'ri-checkbox-circle-line', color: 'purple', path: '/admin/products' },
    { type: 'Support Tickets', count: 8, icon: 'ri-customer-service-line', color: 'primary', path: '/admin/support' },
    { type: 'Disputes', count: 2, icon: 'ri-alert-line', color: 'red', path: '/admin/disputes' },
  ];

  const recentActivity = [
    { id: 1, type: 'user', message: 'New buyer registered: TechCorp Industries', time: '5 min ago', icon: 'ri-user-add-line' },
    { id: 2, type: 'supplier', message: 'Supplier verified: Global Manufacturing Ltd.', time: '15 min ago', icon: 'ri-shield-check-line' },
    { id: 3, type: 'product', message: 'Product added: Industrial LED Lights', time: '32 min ago', icon: 'ri-box-3-line' },
    { id: 4, type: 'order', message: 'Order placed: ORD-2025-1847', time: '1 hour ago', icon: 'ri-shopping-bag-line' },
    { id: 5, type: 'support', message: 'Support ticket created: #2847', time: '2 hours ago', icon: 'ri-customer-service-line' },
  ];

  const recentRegistrations = [
    { id: 1, name: 'TechCorp Industries', type: 'Buyer', email: 'contact@techcorp.com', country: 'United States', date: '2025-01-15', status: 'Active' },
    { id: 2, name: 'Global Textile Co.', type: 'Supplier', email: 'info@globaltextile.com', country: 'India', date: '2025-01-15', status: 'Pending' },
    { id: 3, name: 'Euro Trading GmbH', type: 'Buyer', email: 'sales@eurotrading.de', country: 'Germany', date: '2025-01-14', status: 'Active' },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                <i className={`${stat.icon} text-2xl text-${stat.color}-600`}></i>
              </div>
              <span className="text-sm font-semibold text-primary">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Pending Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Pending Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pendingActions.map((action, index) => (
            <a
              key={index}
              href={action.path}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-${action.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${action.color}-200 transition-all`}>
                  <i className={`${action.icon} text-xl text-${action.color}-600`}></i>
                </div>
                <span className="text-2xl font-bold text-gray-900">{action.count}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{action.type}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-all">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${activity.icon} text-gray-600`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all whitespace-nowrap">
            View All Activity
          </button>
        </div>

        {/* Recent Registrations */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Registrations</h2>
          <div className="space-y-4">
            {recentRegistrations.map((reg) => (
              <div key={reg.id} className="p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{reg.name}</h3>
                    <p className="text-xs text-gray-500">{reg.email}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    reg.status === 'Active' ? 'bg-primary-light text-primary-dark' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {reg.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center space-x-1">
                    <i className="ri-user-line"></i>
                    <span>{reg.type}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="ri-map-pin-line"></i>
                    <span>{reg.country}</span>
                  </span>
                  <span>{reg.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all whitespace-nowrap">
            View All Registrations
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
