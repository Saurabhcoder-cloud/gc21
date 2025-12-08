import { Link } from 'react-router-dom';

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Trust & Safety</h1>
            <p className="text-xl mb-8 text-gray-200">
              Your security is our priority. Learn how we protect buyers and suppliers on our platform
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="https://s.alicdn.com/@img/imgextra/i1/O1CN01L00bAM1TmF3L42KkI_!!6000000002424-2-tps-286-80.png" alt="ID Check" className="max-w-full h-auto" />
              </div>
              <h3 className="font-semibold text-slate-900">ID Verified</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN013pymTh1OIrZGMQ6iO_!!6000000001683-2-tps-93-80.png" alt="PCI DSS" className="max-w-full h-auto" />
              </div>
              <h3 className="font-semibold text-slate-900">PCI DSS Certified</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01CoqZOX1E5uCoNiJIr_!!6000000000301-2-tps-75-80.png" alt="SSL" className="max-w-full h-auto" />
              </div>
              <h3 className="font-semibold text-slate-900">SSL Encrypted</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01xBSIuv1ReKzDOHrTb_!!6000000002136-2-tps-214-80.png" alt="VERISIGN" className="max-w-full h-auto" />
              </div>
              <h3 className="font-semibold text-slate-900">VeriSign Secured</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Supplier Verification Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-file-list-3-line text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Document Verification</h3>
                <p className="text-gray-600">Business licenses, certifications, and legal documents are thoroughly reviewed by our team</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-building-line text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">On-Site Inspection</h3>
                <p className="text-gray-600">Third-party auditors visit facilities to verify production capabilities and quality standards</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Ongoing Monitoring</h3>
                <p className="text-gray-600">Continuous performance tracking and buyer feedback ensure maintained quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Protection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Buyer Protection Program</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Payment Protection</h3>
                    <p className="text-gray-600">Your payment is held securely until you confirm receipt of goods in satisfactory condition</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Quality Assurance</h3>
                    <p className="text-gray-600">Pre-shipment inspection services available to verify product quality before delivery</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">On-Time Delivery</h3>
                    <p className="text-gray-600">Compensation available if shipment is significantly delayed beyond agreed timeline</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-refund-2-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Refund Policy</h3>
                    <p className="text-gray-600">Full refund if products don't match description or fail to meet agreed specifications</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-2-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Dispute Resolution</h3>
                    <p className="text-gray-600">Dedicated mediation team helps resolve conflicts fairly and efficiently</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-lock-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Data Security</h3>
                    <p className="text-gray-600">Bank-level encryption protects your personal and financial information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Trust by Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">99.8%</div>
              <div className="text-gray-600">Successful Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-600">Protected Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Trust Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Certifications</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            <div className="flex items-center justify-center h-20">
              <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01dsw9V61Lbh0D1f9JG_!!6000000001318-2-tps-205-112.png" alt="VISA" className="max-h-full w-auto" />
            </div>
            <div className="flex items-center justify-center h-20">
              <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN01sXbha020agNJcLC4l_!!6000000006866-2-tps-148-112.png" alt="MasterCard" className="max-h-full w-auto" />
            </div>
            <div className="flex items-center justify-center h-20">
              <img src="https://s.alicdn.com/@img/imgextra/i1/O1CN017IIzE71MpGLv2nxMd_!!6000000001483-2-tps-260-112.png" alt="PayPal" className="max-h-full w-auto" />
            </div>
            <div className="flex items-center justify-center h-20">
              <img src="https://s.alicdn.com/@img/imgextra/i1/O1CN01ba6iSo1PHJqZo1Gba_!!6000000001815-2-tps-81-80.png" alt="VISA SECURE" className="max-h-full w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Trade with Confidence</h2>
          <p className="text-xl mb-8 text-emerald-50">Join thousands of businesses who trust our platform</p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth/register" className="bg-white hover:bg-gray-100 text-emerald-600 px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
              Get Started
            </Link>
            <Link to="/contact" className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
