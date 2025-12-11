import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierAnalyticsPage() {
  const stats = [
    { label: 'Total Views', value: '45.2K', change: '+12.5%', trend: 'up', icon: 'ri-eye-line', color: 'blue' },
    { label: 'Total Inquiries', value: '1,247', change: '+8.3%', trend: 'up', icon: 'ri-file-list-3-line', color: 'primary' },
    { label: 'Conversion Rate', value: '24.5%', change: '+3.2%', trend: 'up', icon: 'ri-arrow-up-circle-line', color: 'purple' },
    { label: 'Avg Response Time', value: '2.3h', change: '-15%', trend: 'down', icon: 'ri-time-line', color: 'amber' },
  ];

  const topProducts = [
    { name: 'Industrial LED Lights', views: 8547, inquiries: 145, orders: 42, revenue: '$52,500' },
    { name: 'Wireless Bluetooth Speaker', views: 6234, inquiries: 118, orders: 35, revenue: '$30,800' },
    { name: 'Smart Home Motion Sensor', views: 5891, inquiries: 98, orders: 28, revenue: '$16,240' },
    { name: 'USB-C Fast Charging Cable', views: 4523, inquiries: 87, orders: 31, revenue: '$9,920' },
  ];

  const recentActivity = [
    { type: 'view', message: 'Your product "Industrial LED Lights" was viewed 45 times', time: '2 hours ago' },
    { type: 'inquiry', message: 'New inquiry received from TechCorp Inc.', time: '3 hours ago' },
    { type: 'order', message: 'Order #ORD-2847 confirmed', time: '5 hours ago' },
    { type: 'review', message: 'New 5-star review on "Bluetooth Speaker"', time: '1 day ago' },
  ];

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Track your performance and insights</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-2xl text-${stat.color}-600`}></i>
                </div>
                <span className={`text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-primary' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Products */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Top Performing Products</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Inquiries</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Orders</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topProducts.map((product, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{product.views.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{product.inquiries}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-700">{product.orders}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-primary">{product.revenue}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'view' ? 'bg-blue-100' :
                    activity.type === 'inquiry' ? 'bg-primary-light' :
                    activity.type === 'order' ? 'bg-purple-100' :
                    'bg-amber-100'
                  }`}>
                    <i className={`${
                      activity.type === 'view' ? 'ri-eye-line text-blue-600' :
                      activity.type === 'inquiry' ? 'ri-file-list-3-line text-primary' :
                      activity.type === 'order' ? 'ri-shopping-bag-3-line text-purple-600' :
                      'ri-star-line text-amber-600'
                    }`}></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Views & Inquiries Trend</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue by Product Category</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
