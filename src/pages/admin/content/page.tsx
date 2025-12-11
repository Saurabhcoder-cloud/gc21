
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState('banners');

  const banners = [
    { id: 1, title: 'Summer Sale 2025', position: 'Homepage Hero', status: 'Active', image: 'https://readdy.ai/api/search-image?query=summer%20sale%20banner%20promotional%20design%20vibrant%20colors%20modern%20ecommerce%20web%20banner%20clean%20professional%20marketing%20material&width=1200&height=400&seq=banner-001&orientation=landscape', clicks: 1247 },
    { id: 2, title: 'New Arrivals', position: 'Homepage Middle', status: 'Active', image: 'https://readdy.ai/api/search-image?query=new%20arrivals%20banner%20product%20showcase%20modern%20design%20ecommerce%20promotional%20banner%20clean%20professional%20web%20design&width=1200&height=400&seq=banner-002&orientation=landscape', clicks: 892 },
    { id: 3, title: 'Supplier Spotlight', position: 'Sidebar', status: 'Inactive', image: 'https://readdy.ai/api/search-image?query=supplier%20spotlight%20banner%20business%20partnership%20professional%20design%20corporate%20banner%20clean%20modern%20layout&width=600&height=400&seq=banner-003&orientation=landscape', clicks: 234 },
  ];

  const pages = [
    { id: 1, title: 'About Us', slug: '/about', lastUpdated: '2025-01-10', status: 'Published' },
    { id: 2, title: 'Contact Us', slug: '/contact', lastUpdated: '2025-01-08', status: 'Published' },
    { id: 3, title: 'FAQ', slug: '/faq', lastUpdated: '2025-01-05', status: 'Published' },
    { id: 4, title: 'Terms & Conditions', slug: '/terms', lastUpdated: '2024-12-20', status: 'Published' },
    { id: 5, title: 'Privacy Policy', slug: '/privacy', lastUpdated: '2024-12-20', status: 'Published' },
    { id: 6, title: 'Become a Supplier', slug: '/become-supplier', lastUpdated: '2025-01-12', status: 'Draft' },
  ];

  const announcements = [
    { id: 1, title: 'Platform Maintenance Scheduled', type: 'System', target: 'All Users', date: '2025-01-20', status: 'Active' },
    { id: 2, title: 'New Payment Methods Available', type: 'Feature', target: 'Buyers', date: '2025-01-15', status: 'Active' },
    { id: 3, title: 'Verification Process Update', type: 'Policy', target: 'Suppliers', date: '2025-01-10', status: 'Expired' },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Content Management
        </h1>
        <p className="text-gray-600 mt-2">Manage banners, pages, and announcements</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 border border-gray-200 w-fit">
        <button
          onClick={() => setActiveTab('banners')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'banners' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-image-line mr-2"></i>
          Banners
        </button>
        <button
          onClick={() => setActiveTab('pages')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'pages' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-file-text-line mr-2"></i>
          Pages
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'announcements' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-notification-3-line mr-2"></i>
          Announcements
        </button>
      </div>

      {/* Banners Tab */}
      {activeTab === 'banners' && (
        <div>
          <div className="flex justify-end mb-6">
            <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap">
              <i className="ri-add-line"></i>
              <span className="font-semibold">Add Banner</span>
            </button>
          </div>

          <div className="space-y-4">
            {banners.map((banner) => (
              <div key={banner.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="flex">
                  <div className="w-80 h-48 flex-shrink-0 bg-gray-100">
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{banner.title}</h3>
                        <p className="text-sm text-gray-600">Position: {banner.position}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        banner.status === 'Active' ? 'bg-primary-light text-primary-dark' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {banner.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Total Clicks: <span className="font-semibold text-gray-900">{banner.clicks}</span></p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap">
                        <i className="ri-edit-line mr-2"></i>
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-primary-light text-primary-dark rounded-lg hover:bg-primary-light transition-all text-sm font-medium whitespace-nowrap">
                        <i className="ri-eye-line mr-2"></i>
                        Preview
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-sm font-medium whitespace-nowrap">
                        <i className="ri-delete-bin-line mr-2"></i>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pages Tab */}
      {activeTab === 'pages' && (
        <div>
          <div className="flex justify-end mb-6">
            <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap">
              <i className="ri-add-line"></i>
              <span className="font-semibold">Add Page</span>
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Page Title</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">URL Slug</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Last Updated</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{page.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 font-mono">{page.slug}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{page.lastUpdated}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        page.status === 'Published' ? 'bg-primary-light text-primary-dark' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all" title="Edit">
                          <i className="ri-edit-line"></i>
                        </button>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Preview">
                          <i className="ri-eye-line"></i>
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <div>
          <div className="flex justify-end mb-6">
            <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap">
              <i className="ri-add-line"></i>
              <span className="font-semibold">Add Announcement</span>
            </button>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        announcement.status === 'Active' ? 'bg-primary-light text-primary-dark' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {announcement.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <i className="ri-price-tag-3-line"></i>
                        <span>{announcement.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="ri-user-line"></i>
                        <span>{announcement.target}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="ri-calendar-line"></i>
                        <span>{announcement.date}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all" title="Edit">
                      <i className="ri-edit-line"></i>
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
