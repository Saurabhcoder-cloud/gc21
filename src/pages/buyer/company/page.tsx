
import { useState } from 'react';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function CompanyProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Billing',
      name: 'TechCorp Industries HQ',
      address: '123 Business Avenue, Suite 500',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Shipping',
      name: 'TechCorp Warehouse',
      address: '456 Industrial Park Road',
      city: 'Newark',
      state: 'NJ',
      zip: '07102',
      country: 'United States',
      isDefault: false,
    },
  ]);

  const [companyData, setCompanyData] = useState({
    name: 'TechCorp Industries',
    logo: '',
    website: 'www.techcorp.com',
    industry: 'Electronics',
    taxNumber: 'US-123456789',
    companySize: '51-200',
    yearEstablished: '2010',
    description: 'Leading technology solutions provider specializing in enterprise hardware and software procurement.',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <BuyerLayout>
      <div className="max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Profile</h1>
          <p className="text-gray-600">Manage your company information and business details</p>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Company Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  <i className="ri-edit-line mr-2"></i>
                  Edit
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start space-x-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-primary-light rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-4xl text-primary"></i>
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark cursor-pointer">
                    <i className="ri-camera-line text-sm"></i>
                  </button>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyData.name}
                  onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Website
                </label>
                <input
                  type="text"
                  value={companyData.website}
                  onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Industry
                </label>
                <select
                  value={companyData.industry}
                  onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Textiles">Textiles & Apparel</option>
                  <option value="Machinery">Machinery</option>
                  <option value="Chemicals">Chemicals</option>
                  <option value="Food">Food & Beverage</option>
                  <option value="Construction">Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tax/VAT Number
                </label>
                <input
                  type="text"
                  value={companyData.taxNumber}
                  onChange={(e) => setCompanyData({ ...companyData, taxNumber: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Size
                </label>
                <select
                  value={companyData.companySize}
                  onChange={(e) => setCompanyData({ ...companyData, companySize: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                >
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Year Established
                </label>
                <input
                  type="text"
                  value={companyData.yearEstablished}
                  onChange={(e) => setCompanyData({ ...companyData, yearEstablished: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Description
                </label>
                <textarea
                  value={companyData.description}
                  onChange={(e) => setCompanyData({ ...companyData, description: e.target.value })}
                  disabled={!isEditing}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600 resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">{companyData.description.length}/500 characters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Preferences</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Currency
                </label>
                <select
                  value={companyData.preferredCurrency}
                  onChange={(e) => setCompanyData({ ...companyData, preferredCurrency: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CNY">CNY - Chinese Yuan</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Language
                </label>
                <select
                  value={companyData.preferredLanguage}
                  onChange={(e) => setCompanyData({ ...companyData, preferredLanguage: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-600"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Addresses</h2>
              <button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                <i className="ri-add-line mr-2"></i>
                Add Address
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {addresses.map((address) => (
                <div key={address.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-primary-light text-primary-dark text-xs font-semibold rounded-full">
                        {address.type}
                      </span>
                      {address.isDefault && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-primary cursor-pointer">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="text-gray-400 hover:text-red-600 cursor-pointer">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{address.name}</h3>
                  <p className="text-sm text-gray-600">{address.address}</p>
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p className="text-sm text-gray-600">{address.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
