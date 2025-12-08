import Header from '../../components/layout/Header';

export default function SupplierHubPage() {
  const features = [
    { icon: 'ri-store-3-line', title: 'Online Storefront', description: 'Create your professional supplier profile and showcase products' },
    { icon: 'ri-line-chart-line', title: 'Sales Analytics', description: 'Track performance with detailed insights and reports' },
    { icon: 'ri-mail-line', title: 'Lead Management', description: 'Manage inquiries and RFQs from qualified buyers' },
    { icon: 'ri-verified-badge-line', title: 'Verification Services', description: 'Get verified status to build trust and credibility' },
    { icon: 'ri-advertisement-line', title: 'Marketing Tools', description: 'Promote your products with featured listings and ads' },
    { icon: 'ri-global-line', title: 'Global Reach', description: 'Connect with buyers from 180+ countries worldwide' },
  ];

  const benefits = [
    { number: '5M+', label: 'Active Buyers' },
    { number: '180+', label: 'Countries' },
    { number: '10K+', label: 'Daily Inquiries' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent-600 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Supplier Hub
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Grow your business by connecting with millions of buyers worldwide
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/become-supplier" className="px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
                Become a Supplier
              </a>
              <a href="/auth/login" className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-accent-600 transition-all cursor-pointer whitespace-nowrap">
                Supplier Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent-600 mb-2">{benefit.number}</div>
                <div className="text-base text-gray-600">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Supplier Tools & Services
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed in B2B e-commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-accent-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Sell Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How to Sell on GlobalTrade
            </h2>
            <p className="text-lg text-gray-600">
              Start selling to global buyers in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Register', description: 'Create your supplier account and complete verification process' },
              { step: '02', title: 'List Products', description: 'Upload your product catalog with detailed descriptions and images' },
              { step: '03', title: 'Receive Inquiries', description: 'Get RFQs from qualified buyers and send competitive quotes' },
              { step: '04', title: 'Fulfill Orders', description: 'Process orders, arrange shipping, and grow your business' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Supplier Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how suppliers are growing their business with GlobalTrade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'TechGlobal Manufacturing', growth: '300%', quote: 'GlobalTrade helped us reach buyers we never could have found on our own', country: 'China' },
              { name: 'Premium Textiles Ltd.', growth: '250%', quote: 'The verification process gave us credibility and increased our conversion rate', country: 'India' },
              { name: 'Industrial Solutions Inc.', growth: '400%', quote: 'We receive high-quality inquiries daily from serious buyers worldwide', country: 'Germany' },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="text-4xl font-bold text-accent-600 mb-4">{story.growth}</div>
                <div className="text-sm text-gray-600 mb-4">Sales Growth</div>
                <p className="text-base text-gray-700 italic mb-6">"{story.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-600">{story.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Supplier Resources
            </h2>
            <p className="text-lg text-gray-600">
              Tools and guides to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/help" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-accent-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seller's Guide</h3>
              <p className="text-base text-gray-600 mb-4">Learn best practices for B2B selling and product optimization</p>
              <span className="text-accent-600 font-semibold flex items-center gap-2">
                Read Guide <i className="ri-arrow-right-line"></i>
              </span>
            </a>

            <a href="/pricing" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-price-tag-3-line text-accent-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Membership Plans</h3>
              <p className="text-base text-gray-600 mb-4">Explore supplier packages and premium features</p>
              <span className="text-accent-600 font-semibold flex items-center gap-2">
                View Plans <i className="ri-arrow-right-line"></i>
              </span>
            </a>

            <a href="/help" className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-accent-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supplier Support</h3>
              <p className="text-base text-gray-600 mb-4">Get help from our dedicated supplier success team</p>
              <span className="text-accent-600 font-semibold flex items-center gap-2">
                Get Support <i className="ri-arrow-right-line"></i>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of suppliers who are successfully selling on GlobalTrade
          </p>
          <a href="/become-supplier" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
            Start Selling Today
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
