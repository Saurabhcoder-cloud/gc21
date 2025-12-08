export default function TradeAssurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Trade Assurance</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Protect your orders from payment to delivery with our comprehensive trade protection service. Shop with confidence knowing your transactions are secure.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Trade Assurance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection for your international trade transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Your payment is protected until you confirm receipt of your order in the agreed condition.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-truck-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Time Shipment</h3>
              <p className="text-gray-600 leading-relaxed">
                Guaranteed delivery by the agreed date or receive compensation for delays.
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-award-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Products must meet the quality standards specified in your order agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to secure your trade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Place Order', desc: 'Select Trade Assurance when placing your order', icon: 'ri-shopping-cart-line' },
              { step: '2', title: 'Make Payment', desc: 'Your payment is held securely in escrow', icon: 'ri-secure-payment-line' },
              { step: '3', title: 'Track Shipment', desc: 'Monitor your order from production to delivery', icon: 'ri-map-pin-line' },
              { step: '4', title: 'Confirm Receipt', desc: 'Release payment once you receive your order', icon: 'ri-checkbox-circle-line' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Trade with Confidence?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of buyers who trust Trade Assurance for their international purchases
          </p>
          <a href="/auth/register" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}