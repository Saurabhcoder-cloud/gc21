import { useState } from 'react';

export default function ReportAbusePage() {
  const [formData, setFormData] = useState({
    reportType: '',
    url: '',
    description: '',
    email: '',
    attachments: null as File[] | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    alert('Thank you for your report. Our team will review it within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Report Abuse</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Help us maintain a safe and trustworthy marketplace by reporting suspicious activities, fraudulent listings, or policy violations.
            </p>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Submit a Report</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Type of Abuse <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.reportType}
                  onChange={(e) => setFormData({ ...formData, reportType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  <option value="">Select a type</option>
                  <option value="fraud">Fraudulent Listing</option>
                  <option value="counterfeit">Counterfeit Products</option>
                  <option value="scam">Scam or Phishing</option>
                  <option value="intellectual">Intellectual Property Violation</option>
                  <option value="harassment">Harassment or Abuse</option>
                  <option value="spam">Spam or Misleading Content</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  URL or Reference <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://example.com/product/123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Detailed Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                  placeholder="Please provide as much detail as possible about the issue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  maxLength={500}
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">{formData.description.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Supporting Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <i className="ri-upload-cloud-line text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600 mb-2">Upload screenshots or documents</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={(e) => setFormData({ ...formData, attachments: e.target.files ? Array.from(e.target.files) : null })}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-pointer whitespace-nowrap">
                    Choose Files
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Submit Report
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <i className="ri-time-line text-2xl text-primary-600 mb-3"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">We review all reports within 24-48 hours</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <i className="ri-lock-line text-2xl text-primary-600 mb-3"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Confidential</h3>
              <p className="text-gray-600">Your report is kept strictly confidential</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}