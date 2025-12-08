import { useNavigate } from 'react-router-dom';

export default function BecomeSupplierPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20manufacturing%20facility%20with%20automated%20production%20lines%20and%20quality%20control%20systems%20bright%20industrial%20workspace%20with%20workers%20and%20machinery%20representing%20global%20B2B%20commerce%20professional%20corporate%20photography%20high%20quality&width=1920&height=1080&seq=supplier-hero&orientation=landscape"
            alt="Become a Supplier"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Grow Your Business<br />with Global Connection 21
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Connect with millions of buyers worldwide and expand your market reach
          </p>
          <button
            onClick={() => navigate('/auth/supplier-register')}
            className="px-10 py-4 bg-primary-600 text-white text-lg font-medium rounded-lg hover:bg-primary-700 transition-all whitespace-nowrap shadow-lg"
          >
            Start Selling Today
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Sell on Global Connection 21?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful suppliers growing their business on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-global-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Access 5+ million active buyers from 180+ countries actively searching for products like yours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Badge</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Build trust with buyers through our verification program and stand out from competitors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grow Sales</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Increase your revenue with powerful tools, analytics, and marketing features.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Get help from our expert team whenever you need it, 24/7 support available.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lock-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Protect your transactions with our secure payment system and trade assurance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-dashboard-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Management</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Manage products, orders, and inquiries from one powerful dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four simple steps to start selling on Global Connection 21
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Register</h3>
              <p className="text-sm text-gray-600">
                Create your supplier account with basic company information
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Get Verified</h3>
              <p className="text-sm text-gray-600">
                Submit documents for verification to build buyer trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">List Products</h3>
              <p className="text-sm text-gray-600">
                Upload your product catalog with images and details
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Start Selling</h3>
              <p className="text-sm text-gray-600">
                Receive inquiries and start fulfilling orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from suppliers who have grown their business with Global Connection 21
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'TechVision Electronics',
                location: 'Shenzhen, China',
                quote: 'Global Connection 21 helped us reach buyers in 45 countries. Our sales increased by 300% in the first year.',
                growth: '+300% Sales',
                image: 'https://readdy.ai/api/search-image?query=modern%20electronics%20manufacturing%20facility%20with%20circuit%20boards%20and%20quality%20control%20clean%20professional%20workspace%20high%20quality&width=400&height=300&seq=success1&orientation=landscape'
              },
              {
                name: 'Global Textile Co.',
                location: 'Mumbai, India',
                quote: 'The verification badge gave us instant credibility. We now work with major brands worldwide.',
                growth: '45 Countries',
                image: 'https://readdy.ai/api/search-image?query=textile%20manufacturing%20facility%20with%20fabric%20rolls%20and%20weaving%20machines%20bright%20clean%20workspace%20high%20quality&width=400&height=300&seq=success2&orientation=landscape'
              },
              {
                name: 'EcoPackaging Solutions',
                location: 'Bangkok, Thailand',
                quote: 'The platform is easy to use and the support team is amazing. Highly recommended for exporters.',
                growth: '5-Star Rating',
                image: 'https://readdy.ai/api/search-image?query=eco-friendly%20packaging%20production%20facility%20with%20sustainable%20materials%20clean%20modern%20workspace%20high%20quality&width=400&height=300&seq=success3&orientation=landscape'
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-primary-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="w-full h-48">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.location}</p>
                    </div>
                    <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {story.growth}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic leading-relaxed">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-600 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Up to 10 products</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary-100 text-primary-700 font-medium rounded-lg hover:bg-primary-200 transition-all whitespace-nowrap">
                Get Started
              </button>
            </div>

            <div className="bg-primary-600 rounded-xl p-8 shadow-lg transform scale-105">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Professional</h3>
                <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded-full">Popular</span>
              </div>
              <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-white/80 font-normal">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-white">
                  <i className="ri-check-line mr-2 mt-0.5"></i>
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start text-sm text-white">
                  <i className="ri-check-line mr-2 mt-0.5"></i>
                  <span>Verified badge</span>
                </li>
                <li className="flex items-start text-sm text-white">
                  <i className="ri-check-line mr-2 mt-0.5"></i>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start text-sm text-white">
                  <i className="ri-check-line mr-2 mt-0.5"></i>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="ri-check-line text-primary-600 mr-2 mt-0.5"></i>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary-100 text-primary-700 font-medium rounded-lg hover:bg-primary-200 transition-all whitespace-nowrap">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/pricing" className="text-primary-600 hover:text-primary-700 font-medium cursor-pointer">
              View detailed pricing →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 150,000+ suppliers already selling on Global Connection 21
          </p>
          <button
            onClick={() => navigate('/auth/supplier-register')}
            className="px-10 py-4 bg-white text-primary-600 text-lg font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap shadow-lg"
          >
            Register Now - It's Free
          </button>
        </div>
      </section>
    </div>
  );
}
