import { useState } from 'react';

export default function BuyerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Smith',
    email: 'john.smith@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Industries',
    country: 'United States',
    city: 'San Francisco',
    state: 'California',
    zipCode: '94102',
    businessType: 'Manufacturer',
    industry: 'Electronics & Technology',
    employeeCount: '500-1000',
    annualRevenue: '$10M - $50M',
    website: 'www.techcorp.com',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My Profile
          </h1>
          <p className="text-gray-600 mt-1">Manage your personal information</p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-edit-line mr-2"></i>
            Edit Profile
          </button>
        ) : (
          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all whitespace-nowrap cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-save-line mr-2"></i>
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Profile Picture */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Profile Picture</h2>
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            JS
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-3">Upload a professional photo to help suppliers recognize you</p>
            <button className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg font-medium hover:bg-emerald-100 transition-all whitespace-nowrap cursor-pointer">
              <i className="ri-upload-2-line mr-2"></i>
              Upload Photo
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.company}</p>
            )}
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Location Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
            {isEditing ? (
              <select
                value={profile.country}
                onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>India</option>
                <option>China</option>
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.country}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">State/Province</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.state}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP/Postal Code</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.zipCode}
                onChange={(e) => setProfile({ ...profile, zipCode: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.zipCode}</p>
            )}
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Business Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Business Type</label>
            {isEditing ? (
              <select
                value={profile.businessType}
                onChange={(e) => setProfile({ ...profile, businessType: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                <option>Manufacturer</option>
                <option>Distributor</option>
                <option>Retailer</option>
                <option>Wholesaler</option>
                <option>Trading Company</option>
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.businessType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.industry}
                onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.industry}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Employee Count</label>
            {isEditing ? (
              <select
                value={profile.employeeCount}
                onChange={(e) => setProfile({ ...profile, employeeCount: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500-1000</option>
                <option>1000+</option>
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.employeeCount}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Revenue</label>
            {isEditing ? (
              <select
                value={profile.annualRevenue}
                onChange={(e) => setProfile({ ...profile, annualRevenue: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              >
                <option>&lt; $1M</option>
                <option>$1M - $10M</option>
                <option>$10M - $50M</option>
                <option>$50M - $100M</option>
                <option>&gt; $100M</option>
              </select>
            ) : (
              <p className="text-gray-900 py-2.5">{profile.annualRevenue}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
            {isEditing ? (
              <input
                type="url"
                value={profile.website}
                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            ) : (
              <p className="text-gray-900 py-2.5">{profile.website}</p>
            )}
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Security Settings</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="ri-lock-password-line text-xl text-gray-600"></i>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Change Password</p>
                <p className="text-sm text-gray-500">Update your password regularly for security</p>
              </div>
            </div>
            <i className="ri-arrow-right-s-line text-xl text-gray-400"></i>
          </button>

          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-all cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="ri-shield-check-line text-xl text-gray-600"></i>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Not Enabled</span>
          </button>
        </div>
      </div>
    </div>
  );
}
