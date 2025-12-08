import Header from '../../components/layout/Header';

export default function GlobalLogisticsPage() {
  const services = [
    { icon: 'ri-ship-line', title: 'Sea Freight', description: 'Cost-effective ocean shipping for large volume cargo with full container and LCL options' },
    { icon: 'ri-plane-line', title: 'Air Freight', description: 'Fast air cargo services for time-sensitive shipments with door-to-door delivery' },
    { icon: 'ri-truck-line', title: 'Land Transport', description: 'Reliable ground transportation and cross-border trucking services' },
    { icon: 'ri-building-line', title: 'Warehousing', description: 'Secure storage facilities with inventory management and distribution services' },
    { icon: 'ri-file-list-3-line', title: 'Customs Clearance', description: 'Expert customs brokerage and documentation handling for smooth clearance' },
    { icon: 'ri-shield-check-line', title: 'Cargo Insurance', description: 'Comprehensive insurance coverage to protect your shipments' },
  ];

  const features = [
    { icon: 'ri-global-line', title: 'Global Network', description: '180+ countries coverage with local expertise' },
    { icon: 'ri-time-line', title: 'Real-time Tracking', description: 'Track your shipments 24/7 with live updates' },
    { icon: 'ri-price-tag-3-line', title: 'Competitive Rates', description: 'Best shipping rates with transparent pricing' },
    { icon: 'ri-customer-service-2-line', title: '24/7 Support', description: 'Dedicated logistics team always available' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Global Logistics Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Seamless international shipping and logistics services for your B2B trade
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
              Get a Quote
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Logistics Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive shipping solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-primary-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
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
              Why Choose Our Logistics
            </h2>
            <p className="text-lg text-gray-600">
              Reliable, efficient, and cost-effective shipping solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-primary-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple and transparent shipping process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Quote', description: 'Submit your shipping requirements and get instant quotes' },
              { step: '02', title: 'Book Shipment', description: 'Choose your preferred service and confirm booking' },
              { step: '03', title: 'Track Cargo', description: 'Monitor your shipment in real-time with live tracking' },
              { step: '04', title: 'Receive Delivery', description: 'Get your cargo delivered safely to destination' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Ship Your Products?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get competitive shipping quotes and start moving your cargo today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
              Request Quote
            </a>
            <a href="/help" className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all cursor-pointer whitespace-nowrap">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
