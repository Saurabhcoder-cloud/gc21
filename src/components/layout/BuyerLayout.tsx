import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BuyerLayoutProps {
  children: React.ReactNode;
}

export default function BuyerLayout({ children }: BuyerLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuItems = [
    { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/buyer/dashboard' },
    { icon: 'ri-question-answer-line', label: 'My RFQs', path: '/buyer/rfq' },
    { icon: 'ri-shopping-bag-line', label: 'Orders', path: '/buyer/orders' },
    { icon: 'ri-bookmark-line', label: 'Inquiry List', path: '/buyer/inquiry-list' },
    { icon: 'ri-message-3-line', label: 'Messages', path: '/buyer/messages', badge: 5 },
    { icon: 'ri-user-line', label: 'My Profile', path: '/buyer/profile' },
    { icon: 'ri-building-line', label: 'Company Profile', path: '/buyer/company' },
  ];

  const notifications = [
    { id: 1, type: 'quote', message: 'New quote received from Bright Tech Industries', time: '5 min ago', unread: true },
    { id: 2, type: 'order', message: 'Order ORD-2025-002 has been shipped', time: '1 hour ago', unread: true },
    { id: 3, type: 'message', message: 'New message from Global Textile Co.', time: '2 hours ago', unread: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <i className="ri-menu-line text-xl"></i>
              </button>
              <a href="/" className="text-2xl font-bold text-emerald-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                TradeHub
              </a>
              <span className="hidden sm:block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Buyer
              </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/products')}
                className="hidden md:flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
              >
                <i className="ri-search-line"></i>
                <span className="text-sm font-medium">Search Products</span>
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
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
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                              notif.unread ? 'bg-emerald-50' : ''
                            }`}
                          >
                            <p className="text-sm text-gray-900 mb-1">{notif.message}</p>
                            <p className="text-xs text-gray-500">{notif.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 border-t border-gray-200 text-center">
                        <a href="/buyer/notifications" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                          View All Notifications
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* User Menu */}
              <div className="relative flex items-center space-x-3 pl-3 border-l border-gray-200">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-semibold text-gray-900">John Smith</p>
                  <p className="text-xs text-gray-500">TechCorp Industries</p>
                </div>
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-emerald-700 transition-all"
                >
                  JS
                </button>

                {/* Profile Dropdown Menu */}
                {profileMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileMenuOpen(false)}
                    ></div>
                    <div className="absolute right-0 top-12 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      <div className="p-4 border-b border-gray-200">
                        <p className="text-sm font-semibold text-gray-900">John Smith</p>
                        <p className="text-xs text-gray-500">john.smith@techcorp.com</p>
                        <p className="text-xs text-gray-500 mt-1">TechCorp Industries</p>
                      </div>
                      <div className="py-2">
                        <a
                          href="/buyer/profile"
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <i className="ri-user-line text-lg"></i>
                          <span className="text-sm">My Profile</span>
                        </a>
                        <a
                          href="/buyer/company"
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <i className="ri-building-line text-lg"></i>
                          <span className="text-sm">Company Profile</span>
                        </a>
                        <a
                          href="/buyer/orders"
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <i className="ri-shopping-bag-line text-lg"></i>
                          <span className="text-sm">My Orders</span>
                        </a>
                        <a
                          href="/buyer/messages"
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <i className="ri-message-3-line text-lg"></i>
                          <span className="text-sm">Messages</span>
                          <span className="ml-auto px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                            5
                          </span>
                        </a>
                        <div className="border-t border-gray-200 my-2"></div>
                        <a
                          href="/help"
                          className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          <i className="ri-question-line text-lg"></i>
                          <span className="text-sm">Help Center</span>
                        </a>
                        <button
                          onClick={() => {
                            setProfileMenuOpen(false);
                            navigate('/');
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-all"
                        >
                          <i className="ri-logout-box-line text-lg"></i>
                          <span className="text-sm font-medium">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } pt-16 lg:pt-0`}
        >
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  location.pathname === item.path
                    ? 'bg-emerald-50 text-emerald-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${item.icon} text-xl`}></i>
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              <i className="ri-logout-box-line text-xl"></i>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
