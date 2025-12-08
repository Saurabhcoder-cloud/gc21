import { useState } from 'react';

export default function DisputesPage() {
  const [formData, setFormData] = useState({
    orderNumber: '',
    disputeType: '',
    amount: '',
    description: '',
    evidence: null as File[] | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dispute submitted:', formData);
    alert('Your dispute has been submitted. Our team will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Submit a Dispute</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              If you have an issue with your order, we're here to help. Submit a dispute and our resolution team will work to find a fair solution.
            </p>
          </div>
        </div>
      </section>

      {/* Dispute Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dispute Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Order Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.orderNumber}
                  onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                  placeholder="ORD-123456789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Dispute Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.disputeType}
                  onChange={(e) => setFormData({ ...formData, disputeType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                >
                  <option value="">Select dispute type</option>
                  <option value="not-received">Product Not Received</option>
                  <option value="not-described">Product Not as Described</option>
                  <option value="damaged">Damaged or Defective</option>
                  <option value="wrong-item">Wrong Item Received</option>
                  <option value="quality">Quality Issues</option>
                  <option value="refund">Refund Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Dispute Amount (USD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  step="0.01"
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
                  placeholder="Please describe the issue in detail..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  maxLength={500}
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">{formData.description.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Evidence <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <i className="ri-image-line text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600 mb-2">Upload photos or documents</p>
                  <p className="text-sm text-gray-500 mb-4">Photos of the product, packaging, or shipping label</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={(e) => setFormData({ ...formData, evidence: e.target.files ? Array.from(e.target.files) : null })}
                    className="hidden"
                    id="evidence-upload"
                  />
                  <label htmlFor="evidence-upload" className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-pointer whitespace-nowrap">
                    Upload Evidence
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Submit Dispute
              </button>
            </form>
          </div>

          {/* Process Info */}
          <div className="mt-12 bg-primary-50 rounded-xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution Process</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Submit Dispute</h4>
                  <p className="text-gray-600">Provide order details and evidence</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Review</h4>
                  <p className="text-gray-600">Our team reviews within 24 hours</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mediation</h4>
                  <p className="text-gray-600">We work with both parties to find a solution</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Resolution</h4>
                  <p className="text-gray-600">Final decision within 5-7 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}