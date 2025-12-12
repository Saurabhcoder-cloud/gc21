
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminAnalyticsPage() {
  const stats = [
    { label: 'Total Revenue', value: '$2.4M', change: '+18%', icon: 'ri-money-dollar-circle-line', color: 'primary' },
    { label: 'Total Orders', value: '8,945', change: '+12%', icon: 'ri-shopping-bag-line', color: 'blue' },
    { label: 'Active Users', value: '4,081', change: '+8%', icon: 'ri-user-line', color: 'purple' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: 'ri-line-chart-line', color: 'orange' },
  ];

  const topProducts = [
    { name: 'Industrial LED Light 100W', category: 'Electronics', sales: 1247, revenue: '$62,350', trend: '+24%' },
    { name: 'Cotton T-Shirt Wholesale', category: 'Apparel', sales: 892, revenue: '$44,600', trend: '+18%' },
    { name: 'Stainless Steel Water Bottle', category: 'Home & Garden', sales: 567, revenue: '$28,350', trend: '+12%' },
    { name: 'Smartphone Case Silicone', category: 'Electronics', sales: 1456, revenue: '$14,560', trend: '+32%' },
  ];

  const topSuppliers = [
    { name: 'Global Manufacturing Ltd.', orders: 145, revenue: '$725,000', rating: 4.8 },
    { name: 'Euro Textile Co.', orders: 89, revenue: '$445,000', rating: 4.6 },
    { name: 'Asia Electronics Inc.', orders: 67, revenue: '$335,000', rating: 4.7 },
    { name: 'Premium Goods Supplier', orders: 45, revenue: '$225,000', rating: 4.5 },
  ];

  const topBuyers = [
    { name: 'TechCorp Industries', orders: 18, spent: '$92,180', country: 'United States' },
    { name: 'Global Retail Ltd.', orders: 15, spent: '$78,450', country: 'United Kingdom' },
    { name: 'Euro Trading GmbH', orders: 12, spent: '$65,230', country: 'Germany' },
    { name: 'Asia Import Co.', orders: 8, spent: '$45,670', country: 'Singapore' },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Analytics & Reports
          </h1>
          <p className="text-gray-600 mt-2">Platform performance metrics and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
          <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap">
            <i className="ri-download-line"></i>
            <span className="font-semibold">Export Report</span>
          </button>
        </div>
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

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <i className="ri-line-chart-line text-5xl text-gray-300 mb-3"></i>
              <p className="text-sm text-gray-500">Chart visualization placeholder</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">User Growth</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <i className="ri-bar-chart-box-line text-5xl text-gray-300 mb-3"></i>
              <p className="text-sm text-gray-500">Chart visualization placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Top Performing Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.sales}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">{product.revenue}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">{product.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Suppliers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Suppliers</h2>
          <div className="space-y-4">
            {topSuppliers.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{supplier.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-600">{supplier.orders} orders</span>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-amber-400 text-xs"></i>
                      <span className="text-xs text-gray-600">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{supplier.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Buyers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Buyers</h2>
          <div className="space-y-4">
            {topBuyers.map((buyer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{buyer.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-600">{buyer.orders} orders</span>
                    <span className="text-xs text-gray-600 flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {buyer.country}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{buyer.spent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
