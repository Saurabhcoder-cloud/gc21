import { Link } from 'react-router-dom';

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Source Smarter with Our B2B Platform</h1>
            <p className="text-xl mb-8 text-gray-200">Connect with verified suppliers worldwide and streamline your procurement process</p>
            <div className="flex gap-4 justify-center">
              <Link to="/auth/register" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
                Start Sourcing
              </Link>
              <Link to="/products" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Buyers Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Verified Suppliers</h3>
              <p className="text-gray-600">All suppliers are thoroughly vetted and verified for quality and reliability</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-price-tag-3-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Competitive Pricing</h3>
              <p className="text-gray-600">Get the best prices through our competitive supplier network</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-truck-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Fast Shipping</h3>
              <p className="text-gray-600">Reliable logistics partners ensure timely delivery worldwide</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is always ready to assist you</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-12">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900">Search & Discover</h3>
                  <p className="text-gray-600 text-lg">Browse millions of products from verified suppliers across 200+ countries</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900">Request Quotes</h3>
                  <p className="text-gray-600 text-lg">Send RFQs to multiple suppliers and compare offers to get the best deal</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900">Secure Payment</h3>
                  <p className="text-gray-600 text-lg">Pay securely with multiple payment options and buyer protection</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900">Track & Receive</h3>
                  <p className="text-gray-600 text-lg">Monitor your shipment in real-time and receive quality products on time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Retail Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"This platform transformed my sourcing process. I found reliable suppliers and reduced costs by 30%."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">E-commerce Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The quality verification and buyer protection gave me confidence to scale my business globally."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">Procurement Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Streamlined our entire procurement workflow. The RFQ system saves us hours every week."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Sourcing?</h2>
          <p className="text-xl mb-8 text-emerald-50">Join thousands of buyers who trust our platform</p>
          <Link to="/auth/register" className="bg-white hover:bg-gray-100 text-emerald-600 px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors inline-block">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
