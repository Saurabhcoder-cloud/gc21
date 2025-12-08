export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Logistics Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Streamline your global shipping with our comprehensive logistics solutions. From freight forwarding to customs clearance, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Logistics Services</h2>
            <p className="text-xl text-gray-600">End-to-end shipping solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-ship-line',
                title: 'Sea Freight',
                desc: 'Cost-effective ocean shipping for large volume orders with full container and LCL options.'
              },
              {
                icon: 'ri-plane-line',
                title: 'Air Freight',
                desc: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.'
              },
              {
                icon: 'ri-truck-line',
                title: 'Ground Transport',
                desc: 'Efficient land transportation and last-mile delivery to your doorstep.'
              },
              {
                icon: 'ri-file-list-3-line',
                title: 'Customs Clearance',
                desc: 'Expert handling of customs documentation and compliance requirements.'
              },
              {
                icon: 'ri-building-2-line',
                title: 'Warehousing',
                desc: 'Secure storage facilities with inventory management and distribution services.'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Cargo Insurance',
                desc: 'Comprehensive insurance coverage to protect your shipments during transit.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-primary-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Logistics?</h2>
              <div className="space-y-6">
                {[
                  { icon: 'ri-global-line', title: 'Global Network', desc: 'Partnerships with carriers in 200+ countries' },
                  { icon: 'ri-money-dollar-circle-line', title: 'Competitive Rates', desc: 'Best shipping rates through volume discounts' },
                  { icon: 'ri-map-pin-time-line', title: 'Real-Time Tracking', desc: 'Track your shipments 24/7 with live updates' },
                  { icon: 'ri-customer-service-2-line', title: 'Expert Support', desc: 'Dedicated logistics specialists for your account' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-12 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Quote</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input type="text" placeholder="Origin Country" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input type="text" placeholder="Destination Country" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600">
                  <option>Shipping Method</option>
                  <option>Sea Freight</option>
                  <option>Air Freight</option>
                  <option>Ground Transport</option>
                </select>
                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Ship Globally?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let our logistics experts handle your international shipping needs
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}