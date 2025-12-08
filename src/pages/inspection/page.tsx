export default function InspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Inspection Solutions</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Ensure product quality and compliance with our professional third-party inspection services. Verify your orders before shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inspection Services</h2>
            <p className="text-xl text-gray-600">Comprehensive quality control at every stage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-search-eye-line',
                title: 'Pre-Production Inspection',
                desc: 'Verify raw materials and components before manufacturing begins to prevent quality issues.'
              },
              {
                icon: 'ri-settings-3-line',
                title: 'During Production Inspection',
                desc: 'Monitor production progress and quality control processes at critical manufacturing stages.'
              },
              {
                icon: 'ri-checkbox-circle-line',
                title: 'Pre-Shipment Inspection',
                desc: 'Final quality check of finished products before they leave the factory.'
              },
              {
                icon: 'ri-box-3-line',
                title: 'Container Loading Inspection',
                desc: 'Supervise loading process to ensure proper handling and prevent damage during transit.'
              },
              {
                icon: 'ri-test-tube-line',
                title: 'Product Testing',
                desc: 'Laboratory testing for safety, performance, and compliance with international standards.'
              },
              {
                icon: 'ri-building-line',
                title: 'Factory Audit',
                desc: 'Comprehensive evaluation of supplier facilities, processes, and quality management systems.'
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple and transparent inspection process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Book Inspection', desc: 'Schedule your inspection online', icon: 'ri-calendar-check-line' },
              { step: '2', title: 'Inspector Assigned', desc: 'Qualified inspector visits factory', icon: 'ri-user-search-line' },
              { step: '3', title: 'Quality Check', desc: 'Thorough inspection performed', icon: 'ri-file-list-3-line' },
              { step: '4', title: 'Detailed Report', desc: 'Receive comprehensive report', icon: 'ri-file-text-line' }
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

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-50 rounded-2xl p-12 border border-primary-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Inspect?</h3>
              <div className="space-y-6">
                {[
                  'Reduce risk of receiving defective products',
                  'Ensure compliance with regulations and standards',
                  'Verify product specifications and quantities',
                  'Identify issues before shipment',
                  'Build trust with suppliers',
                  'Save costs on returns and replacements'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-2xl text-primary-600 flex-shrink-0"></i>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Inspectors</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our network of certified inspectors has extensive experience across all major industries and product categories.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Certified Inspectors', value: '500+' },
                  { label: 'Countries Covered', value: '50+' },
                  { label: 'Inspections Completed', value: '100K+' },
                  { label: 'Average Report Time', value: '24hrs' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-700 font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Ensure Quality?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book an inspection today and protect your business from quality issues
          </p>
          <a href="/auth/register" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Book Inspection Now
          </a>
        </div>
      </section>
    </div>
  );
}