
import { useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          System Settings
        </h1>
        <p className="text-gray-600 mt-2">Configure platform settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 border border-gray-200 w-fit">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'general' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-settings-3-line mr-2"></i>
          General
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'email' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-mail-line mr-2"></i>
          Email
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'security' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-shield-check-line mr-2"></i>
          Security
        </button>
        <button
          onClick={() => setActiveTab('roles')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === 'roles' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <i className="ri-user-settings-line mr-2"></i>
          Roles
        </button>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Site Name</label>
              <input type="text" defaultValue="TradeHub" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Site Logo</label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <i className="ri-image-line text-2xl text-gray-400"></i>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap">
                  Upload Logo
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email</label>
              <input type="email" defaultValue="admin@tradehub.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Support Phone</label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Default Currency</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                  <option>CNY - Chinese Yuan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Default Language</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Settings */}
      {activeTab === 'email' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Email Notification Templates</h2>
          <div className="space-y-4">
            {[
              { name: 'User Registration', description: 'Welcome email sent to new users' },
              { name: 'Order Confirmation', description: 'Sent when an order is placed' },
              { name: 'Order Shipped', description: 'Sent when an order is shipped' },
              { name: 'Password Reset', description: 'Sent when user requests password reset' },
              { name: 'Supplier Verification', description: 'Sent when supplier is verified' },
            ].map((template, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-all">
                <div>
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap">
                  <i className="ri-edit-line mr-2"></i>
                  Edit Template
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Account Lockout</h3>
                <p className="text-sm text-gray-600 mt-1">Lock account after failed login attempts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Failed Login Attempts</label>
              <input type="number" defaultValue="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Lockout Duration (minutes)</label>
              <input type="number" defaultValue="30" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Activity Logging</h3>
                <p className="text-sm text-gray-600 mt-1">Log all admin actions for audit trail</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            <div className="flex justify-end pt-4">
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
                Save Security Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Roles & Permissions */}
      {activeTab === 'roles' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Admin Roles & Permissions</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap">
              <i className="ri-add-line"></i>
              <span className="font-semibold">Add Role</span>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Super Admin', users: 2, permissions: 'Full Access', color: 'red' },
              { name: 'User Manager', users: 3, permissions: 'Manage Buyers & Suppliers', color: 'blue' },
              { name: 'Content Manager', users: 2, permissions: 'Manage Content & Pages', color: 'purple' },
              { name: 'Support Agent', users: 5, permissions: 'Handle Support Tickets', color: 'emerald' },
            ].map((role, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-red-500 transition-all">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${role.color}-100 rounded-lg flex items-center justify-center`}>
                    <i className={`ri-shield-user-line text-xl text-${role.color}-600`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{role.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{role.permissions}</p>
                    <p className="text-xs text-gray-500 mt-1">{role.users} users assigned</p>
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
            ))}
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
