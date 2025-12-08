import { useState } from 'react';

export default function RFQServicePage() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    targetPrice: '',
    description: '',
    companyName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RFQ submitted:', formData);
    alert('Your RFQ has been submitted successfully! Suppliers will contact you soon.');
  };

  const benefits = [
    { icon: 'ri-time-line', title: 'Fast Response', description: 'Get quotes from multiple suppliers within 24 hours' },
    { icon: 'ri-price-tag-3-line', title: 'Competitive Pricing', description: 'Compare quotes and negotiate the best prices' },
    { icon: 'ri-shield-check-line', title: 'Verified Suppliers', description: 'Receive quotes only from verified and trusted suppliers' },
    { icon: 'ri-global-line', title: 'Global Reach', description: 'Access suppliers from 180+ countries worldwide' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Request for Quotation (RFQ)
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Submit your requirements and receive competitive quotes from verified suppliers
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${benefit.icon} text-cyan-600 text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Submit Your RFQ
              </h2>
              <p className="text-base text-gray-600">
                Fill in the details below and we'll connect you with suitable suppliers
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      placeholder="e.g., LED Solar Street Light"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Textiles">Textiles</option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Construction">Construction</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Quantity Needed *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g., 1000 pieces"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Target Price (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.targetPrice}
                      onChange={(e) => setFormData({ ...formData, targetPrice: e.target.value })}
                      placeholder="e.g., $50 per unit"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Detailed Requirements *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your requirements in detail: specifications, quality standards, packaging, delivery timeline, etc."
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">Maximum 500 characters</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan-600 text-white text-base font-semibold rounded-lg hover:bg-cyan-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Submit RFQ
                </button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  By submitting, you agree to receive quotes from verified suppliers
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How RFQ Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple process to get quotes from multiple suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit RFQ', description: 'Fill in your product requirements and contact details' },
              { step: '02', title: 'Supplier Matching', description: 'We match your RFQ with relevant verified suppliers' },
              { step: '03', title: 'Receive Quotes', description: 'Get competitive quotes within 24-48 hours' },
              { step: '04', title: 'Compare & Choose', description: 'Review quotes and select the best supplier' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Already Have an Account?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Sign in to manage your RFQs and track quotes
          </p>
          <a href="/auth/login" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
            Sign In
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
