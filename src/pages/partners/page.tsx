export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Partner Program</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join our partner ecosystem and grow your business with exclusive benefits, resources, and support from Global Connection 21.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Choose the partnership that fits your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-store-line',
                title: 'Reseller Partner',
                desc: 'Sell our platform services to your clients and earn competitive commissions.',
                benefits: ['30% commission', 'Marketing materials', 'Sales training', 'Dedicated support']
              },
              {
                icon: 'ri-links-line',
                title: 'Technology Partner',
                desc: 'Integrate your solutions with our platform and reach millions of users.',
                benefits: ['API access', 'Co-marketing', 'Technical support', 'Partner directory listing']
              },
              {
                icon: 'ri-service-line',
                title: 'Service Partner',
                desc: 'Provide complementary services to our buyer and supplier community.',
                benefits: ['Lead generation', 'Brand exposure', 'Revenue sharing', 'Joint webinars']
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${type.icon} text-3xl text-primary-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.desc}</p>
                <ul className="space-y-3 mb-6">
                  {type.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-2 text-gray-700">
                      <i className="ri-checkbox-circle-fill text-primary-600"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="#apply" className="inline-block w-full text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Benefits</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-money-dollar-circle-line', title: 'Revenue Growth', desc: 'Earn recurring revenue through our partnership' },
              { icon: 'ri-team-line', title: 'Dedicated Support', desc: 'Personal partner manager for your success' },
              { icon: 'ri-megaphone-line', title: 'Marketing Resources', desc: 'Co-branded materials and campaigns' },
              { icon: 'ri-graduation-cap-line', title: 'Training & Certification', desc: 'Comprehensive partner training programs' },
              { icon: 'ri-trophy-line', title: 'Incentives & Rewards', desc: 'Performance-based bonuses and recognition' },
              { icon: 'ri-global-line', title: 'Global Reach', desc: 'Access to our worldwide customer base' },
              { icon: 'ri-tools-line', title: 'Partner Portal', desc: 'Tools and resources at your fingertips' },
              { icon: 'ri-calendar-event-line', title: 'Exclusive Events', desc: 'Partner summits and networking events' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-600">See how our partners are thriving</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { company: 'TechFlow Solutions', growth: '250%', quote: 'Partnering with Global Connection 21 has transformed our business model.' },
              { company: 'Global Logistics Pro', growth: '180%', quote: 'The partner program exceeded all our expectations in the first year.' },
              { company: 'Quality Inspect Inc', growth: '320%', quote: 'Best decision we made was becoming a service partner.' }
            ].map((story, idx) => (
              <div key={idx} className="bg-primary-50 rounded-2xl border border-primary-100 p-8">
                <div className="text-4xl font-bold text-primary-600 mb-4">{story.growth}</div>
                <p className="text-gray-600 mb-4">Revenue Growth</p>
                <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                <p className="font-bold text-gray-900">{story.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Apply to Become a Partner</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Company Name *" required className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input type="text" placeholder="Your Name *" required className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address *" required className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input type="tel" placeholder="Phone Number *" required className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" />
              </div>
              <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600">
                <option value="">Select Partnership Type *</option>
                <option>Reseller Partner</option>
                <option>Technology Partner</option>
                <option>Service Partner</option>
              </select>
              <textarea placeholder="Tell us about your business and why you want to partner with us *" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"></textarea>
              <button type="submit" className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}