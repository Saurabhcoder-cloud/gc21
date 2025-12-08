export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Careers at Global Connection 21</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join our mission to connect businesses worldwide. Build your career with a global leader in B2B trade.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">Benefits and perks that matter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-global-line', title: 'Global Impact', desc: 'Work on products used by millions worldwide' },
              { icon: 'ri-team-line', title: 'Great Team', desc: 'Collaborate with talented people from 30+ countries' },
              { icon: 'ri-rocket-line', title: 'Career Growth', desc: 'Clear paths for advancement and skill development' },
              { icon: 'ri-heart-pulse-line', title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs' },
              { icon: 'ri-time-line', title: 'Flexible Hours', desc: 'Work-life balance with flexible scheduling' },
              { icon: 'ri-home-office-line', title: 'Remote Options', desc: 'Hybrid and remote work opportunities' },
              { icon: 'ri-graduation-cap-line', title: 'Learning Budget', desc: 'Annual budget for courses and conferences' },
              { icon: 'ri-gift-line', title: 'Great Perks', desc: 'Stock options, bonuses, and team events' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
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

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next opportunity</p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Senior Full Stack Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
              { title: 'Product Manager - B2B Platform', dept: 'Product', location: 'San Francisco, CA', type: 'Full-time' },
              { title: 'UX/UI Designer', dept: 'Design', location: 'New York, NY', type: 'Full-time' },
              { title: 'Business Development Manager', dept: 'Sales', location: 'London, UK', type: 'Full-time' },
              { title: 'Data Scientist', dept: 'Data & Analytics', location: 'Remote', type: 'Full-time' },
              { title: 'Customer Success Manager', dept: 'Customer Success', location: 'Singapore', type: 'Full-time' },
              { title: 'Marketing Manager', dept: 'Marketing', location: 'Remote', type: 'Full-time' },
              { title: 'DevOps Engineer', dept: 'Engineering', location: 'Berlin, Germany', type: 'Full-time' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <i className="ri-building-line"></i> {job.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line"></i> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line"></i> {job.type}
                      </span>
                    </div>
                  </div>
                  <a href="#" className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see the right role?</p>
            <a href="#" className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap cursor-pointer">
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">What it's like to work here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                desc: 'We encourage experimentation and creative problem-solving. Your ideas matter.',
                icon: 'ri-lightbulb-line'
              },
              {
                title: 'Diversity & Inclusion',
                desc: 'We celebrate differences and create an environment where everyone belongs.',
                icon: 'ri-group-line'
              },
              {
                title: 'Customer Obsessed',
                desc: 'Everything we do is focused on delivering value to our customers.',
                icon: 'ri-customer-service-2-line'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-primary-50 rounded-2xl border border-primary-100 p-8 text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our team and help shape the future of global trade
          </p>
          <a href="#" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            View All Openings
          </a>
        </div>
      </section>
    </div>
  );
}