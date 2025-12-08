export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Financial information, reports, and updates for Global Connection 21 investors and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Highlights</h2>
            <p className="text-xl text-gray-600">Key performance indicators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Users', value: '5M+', change: '+45% YoY', icon: 'ri-user-line' },
              { label: 'Annual GMV', value: '$2.8B', change: '+62% YoY', icon: 'ri-money-dollar-circle-line' },
              { label: 'Countries Served', value: '200+', change: '+15 New', icon: 'ri-global-line' },
              { label: 'Revenue Growth', value: '78%', change: 'Q4 2024', icon: 'ri-line-chart-line' }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${metric.icon} text-2xl text-primary-600`}></i>
                </div>
                <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <p className="text-green-600 text-sm font-semibold">{metric.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Reports</h2>
            <p className="text-xl text-gray-600">Quarterly and annual financial statements</p>
          </div>

          <div className="space-y-4">
            {[
              { period: 'Q4 2024', title: 'Fourth Quarter 2024 Earnings Report', date: 'Jan 15, 2025', type: 'Quarterly' },
              { period: 'FY 2024', title: 'Annual Report 2024', date: 'Jan 15, 2025', type: 'Annual' },
              { period: 'Q3 2024', title: 'Third Quarter 2024 Earnings Report', date: 'Oct 15, 2024', type: 'Quarterly' },
              { period: 'Q2 2024', title: 'Second Quarter 2024 Earnings Report', date: 'Jul 15, 2024', type: 'Quarterly' },
              { period: 'Q1 2024', title: 'First Quarter 2024 Earnings Report', date: 'Apr 15, 2024', type: 'Quarterly' }
            ].map((report, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">{report.type}</span>
                      <span className="text-gray-500 text-sm">{report.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{report.title}</h3>
                    <p className="text-gray-600">{report.period}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                      View Report
                    </a>
                    <a href="#" className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap cursor-pointer">
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investor Presentations</h2>
            <p className="text-xl text-gray-600">Earnings calls and investor day materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Q4 2024 Earnings Call', date: 'Jan 15, 2025', type: 'Webcast' },
              { title: 'Investor Day 2024', date: 'Nov 20, 2024', type: 'Presentation' },
              { title: 'Q3 2024 Earnings Call', date: 'Oct 15, 2024', type: 'Webcast' },
              { title: 'Strategic Vision 2025', date: 'Sep 10, 2024', type: 'Presentation' },
              { title: 'Q2 2024 Earnings Call', date: 'Jul 15, 2024', type: 'Webcast' },
              { title: 'Technology Roadmap', date: 'Jun 5, 2024', type: 'Presentation' }
            ].map((pres, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <i className="ri-presentation-line text-5xl text-primary-600"></i>
                </div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">{pres.type}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pres.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pres.date}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                  View <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Governance</h2>
            <p className="text-xl text-gray-600">Leadership and governance information</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Board of Directors</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Sarah Johnson', role: 'Chairperson' },
                  { name: 'Michael Chen', role: 'CEO & Director' },
                  { name: 'Emily Rodriguez', role: 'Independent Director' },
                  { name: 'David Kim', role: 'Independent Director' },
                  { name: 'Lisa Anderson', role: 'Independent Director' }
                ].map((member, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-bold text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <a href="#" className="text-primary-600 hover:text-primary-700 cursor-pointer">
                      <i className="ri-arrow-right-line text-xl"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Governance Documents</h3>
              <ul className="space-y-4">
                {[
                  'Corporate Governance Guidelines',
                  'Code of Business Conduct',
                  'Board Committee Charters',
                  'Bylaws',
                  'Certificate of Incorporation'
                ].map((doc, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                      <span className="font-semibold text-gray-900">{doc}</span>
                      <i className="ri-download-line text-primary-600"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Investor Contact</h2>
          <p className="text-xl text-primary-100 mb-8">
            For investor inquiries and information requests
          </p>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <p className="text-primary-100 mb-2">Investor Relations</p>
                <a href="mailto:ir@globalconnection21.com" className="text-xl font-semibold hover:text-primary-100 transition-colors cursor-pointer">
                  ir@globalconnection21.com
                </a>
              </div>
              <div>
                <p className="text-primary-100 mb-2">Phone</p>
                <a href="tel:+1-555-0199" className="text-xl font-semibold hover:text-primary-100 transition-colors cursor-pointer">
                  +1 (555) 019-9000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}