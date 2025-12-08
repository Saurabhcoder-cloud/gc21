import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierCompanyPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [verificationStatus, setVerificationStatus] = useState('verified');

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Company Profile
          </h1>
          <p className="text-gray-600 mt-1">Manage your company information and verification</p>
        </div>

        {/* Verification Status Banner */}
        <div className={`rounded-xl p-6 ${
          verificationStatus === 'verified' 
            ? 'bg-emerald-50 border border-emerald-200' 
            : 'bg-amber-50 border border-amber-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                verificationStatus === 'verified' ? 'bg-emerald-600' : 'bg-amber-600'
              }`}>
                <i className={`${
                  verificationStatus === 'verified' ? 'ri-shield-check-line' : 'ri-time-line'
                } text-3xl text-white`}></i>
              </div>
              <div>
                <h3 className={`text-lg font-bold ${
                  verificationStatus === 'verified' ? 'text-emerald-900' : 'text-amber-900'
                }`}>
                  {verificationStatus === 'verified' ? 'Verified Supplier' : 'Verification Pending'}
                </h3>
                <p className={`text-sm ${
                  verificationStatus === 'verified' ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {verificationStatus === 'verified' 
                    ? 'Your company has been verified. Verified badge is displayed on your profile.'
                    : 'Your documents are under review. This usually takes 2-3 business days.'}
                </p>
              </div>
            </div>
            {verificationStatus === 'verified' && (
              <div className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg">
                <i className="ri-check-line mr-2"></i>
                Verified
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-building-line mr-2"></i>
                Company Profile
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`py-4 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
                  activeTab === 'gallery'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-image-line mr-2"></i>
                Factory Gallery
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`py-4 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
                  activeTab === 'certifications'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-award-line mr-2"></i>
                Certifications
              </button>
            </div>
          </div>

          {/* Company Profile Tab */}
          {activeTab === 'profile' && (
            <div className="p-6 space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <i className="ri-building-line text-5xl text-gray-400"></i>
                </div>
                <div className="flex-1">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm whitespace-nowrap">
                    <i className="ri-upload-2-line mr-2"></i>
                    Upload Logo
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Recommended size: 400x400px</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                  <input
                    type="text"
                    defaultValue="Acme Manufacturing Co., Ltd."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Business Type *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Manufacturer</option>
                    <option>Trading Company</option>
                    <option>Wholesaler</option>
                    <option>Distributor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Year Established *</label>
                  <input
                    type="number"
                    defaultValue="2010"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Employees</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>101-500</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-100</option>
                    <option>501-1000</option>
                    <option>1000+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Website</label>
                  <input
                    type="url"
                    defaultValue="https://www.acmemanufacturing.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Description *</label>
                  <textarea
                    rows={5}
                    defaultValue="Acme Manufacturing is a leading manufacturer of industrial lighting solutions and electronic components. With over 14 years of experience, we serve clients worldwide with high-quality products and excellent service."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    maxLength={500}
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Main Products</label>
                  <input
                    type="text"
                    defaultValue="LED Lights, Bluetooth Speakers, Smart Home Devices, USB Cables"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Country *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>China</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>Germany</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">City *</label>
                  <input
                    type="text"
                    defaultValue="Shenzhen"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Address *</label>
                  <input
                    type="text"
                    defaultValue="Building 5, Industrial Park, Nanshan District"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                  <i className="ri-save-line mr-2"></i>
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Factory Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Showcase your factory, production lines, and facilities</p>
                <button className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all text-sm whitespace-nowrap">
                  <i className="ri-upload-2-line mr-2"></i>
                  Upload Images
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="relative group">
                    <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={`https://readdy.ai/api/search-image?query=modern%20manufacturing%20factory%20floor%20with%20production%20equipment%20assembly%20lines%20and%20workers%20in%20clean%20industrial%20environment%20professional%20photography&width=300&height=300&seq=factory${idx}&orientation=squarish`}
                        alt={`Factory ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all rounded-lg flex items-center justify-center space-x-2">
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all">
                        <i className="ri-eye-line"></i>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 hover:bg-red-50 transition-all">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Upload your quality certifications and business documents</p>
                <button className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all text-sm whitespace-nowrap">
                  <i className="ri-upload-2-line mr-2"></i>
                  Upload Document
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'ISO 9001:2015 Certificate', type: 'Quality Management', status: 'verified', date: '2023-05-15' },
                  { name: 'CE Certification', type: 'Product Safety', status: 'verified', date: '2023-06-20' },
                  { name: 'Business License', type: 'Legal Document', status: 'verified', date: '2023-01-10' },
                  { name: 'FDA Registration', type: 'Regulatory', status: 'pending', date: '2024-01-15' },
                ].map((cert, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-file-text-line text-2xl text-emerald-600"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{cert.name}</h3>
                        <p className="text-xs text-gray-600">{cert.type}</p>
                        <p className="text-xs text-gray-500 mt-1">Uploaded: {cert.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.status === 'verified' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {cert.status}
                      </span>
                      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-lg transition-all">
                        <i className="ri-download-line"></i>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </SupplierLayout>
  );
}
