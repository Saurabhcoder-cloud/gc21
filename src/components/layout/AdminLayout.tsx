
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuItems = [
    { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/admin/dashboard' },
    { icon: 'ri-user-line', label: 'Buyers', path: '/admin/buyers', badge: 3 },
    { icon: 'ri-store-line', label: 'Suppliers', path: '/admin/suppliers', badge: 5 },
    { icon: 'ri-box-3-line', label: 'Products', path: '/admin/products' },
    { icon: 'ri-folder-line', label: 'Categories', path: '/admin/categories' },
    { icon: 'ri-shopping-bag-line', label: 'Orders', path: '/admin/orders' },
    { icon: 'ri-file-text-line', label: 'Content', path: '/admin/content' },
    { icon: 'ri-customer-service-line', label: 'Support', path: '/admin/support', badge: 8 },
    { icon: 'ri-alert-line', label: 'Disputes', path: '/admin/disputes', badge: 2 },
    { icon: 'ri-bar-chart-box-line', label: 'Analytics', path: '/admin/analytics' },
    { icon: 'ri-settings-3-line', label: 'Settings', path: '/admin/settings' },
  ];

  const notifications = [
    { id: 1, type: 'user', message: 'New supplier registration pending approval', time: '2 min ago', unread: true },
    { id: 2, type: 'alert', message: 'Product flagged for policy violation', time: '15 min ago', unread: true },
    { id: 3, type: 'support', message: 'New support ticket #2847', time: '1 hour ago', unread: false },
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <i className="ri-admin-line text-xl text-white"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Admin Panel
                </h1>
                <p className="text-xs text-gray-500">TradeHub Management</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all whitespace-nowrap">
              <i className="ri-add-line"></i>
              <span className="text-sm font-medium">Quick Action</span>
            </button>

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
                            notif.unread ? 'bg-red-50' : ''
                          }`}
                        >
                          <p className="text-sm text-gray-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-200">
                      <button className="text-sm text-red-600 hover:text-red-700 font-medium whitespace-nowrap">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-3 pl-4 border-l border-gray-200 cursor-pointer"
              >
                <div className="text-right hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-semibold">
                  AU
                </div>
              </button>

              {profileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileMenuOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-2">
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
                        <i className="ri-user-line"></i>
                        <span className="text-sm">My Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
                        <i className="ri-settings-3-line"></i>
                        <span className="text-sm">Settings</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
                        <i className="ri-history-line"></i>
                        <span className="text-sm">Activity Log</span>
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button
                        onClick={() => navigate('/auth/admin-login')}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <i className="ri-logout-box-line"></i>
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 transition-all duration-300 z-30 overflow-y-auto ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-red-50 text-red-600'
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
