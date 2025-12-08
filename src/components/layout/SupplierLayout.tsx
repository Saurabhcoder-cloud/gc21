import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SupplierLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const menuItems = [
    { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/supplier/dashboard' },
    { icon: 'ri-box-3-line', label: 'Products', path: '/supplier/products' },
    { icon: 'ri-file-list-3-line', label: 'Inquiries', path: '/supplier/inquiries' },
    { icon: 'ri-shopping-bag-3-line', label: 'Orders', path: '/supplier/orders' },
    { icon: 'ri-message-3-line', label: 'Messages', path: '/supplier/messages', badge: 5 },
    { icon: 'ri-building-line', label: 'Company Profile', path: '/supplier/company' },
    { icon: 'ri-bar-chart-box-line', label: 'Analytics', path: '/supplier/analytics' },
    { icon: 'ri-star-line', label: 'Reviews', path: '/supplier/reviews' },
  ];

  const notifications = [
    { id: 1, type: 'inquiry', message: 'New inquiry from TechCorp Inc.', time: '5 min ago', unread: true },
    { id: 2, type: 'order', message: 'Order #ORD-2847 confirmed', time: '1 hour ago', unread: true },
    { id: 3, type: 'message', message: 'New message from buyer', time: '2 hours ago', unread: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              GlobalTrade
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all relative cursor-pointer"
              >
                <i className="ri-notification-3-line text-xl"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setNotificationsOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notif => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                            notif.unread ? 'bg-emerald-50' : ''
                          }`}
                        >
                          <p className="text-sm text-gray-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-200">
                      <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Acme Manufacturing</p>
                <p className="text-xs text-gray-500">Verified Supplier</p>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                AM
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 transition-all duration-300 z-30 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              {sidebarOpen && (
                <>
                  <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={() => navigate('/auth/login')}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all cursor-pointer"
          >
            <i className="ri-logout-box-line text-xl"></i>
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
