export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About TradeHub
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connecting global businesses through trusted B2B trade since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-target-line text-primary text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To empower businesses worldwide by providing a trusted, efficient, and transparent B2B marketplace that connects buyers with verified suppliers, fostering global trade and economic growth.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We believe in breaking down barriers to international trade, making it accessible for businesses of all sizes to discover quality products, build lasting partnerships, and expand their global reach.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-primary text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To become the world's most trusted B2B marketplace, where every business can confidently source products, connect with reliable partners, and thrive in the global economy.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We envision a future where international trade is seamless, transparent, and accessible to all, powered by technology and built on trust, enabling businesses to grow without boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              TradeHub by the Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Building trust through transparency and results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-base text-gray-600">Products Listed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">150K+</div>
              <div className="text-base text-gray-600">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5M+</div>
              <div className="text-base text-gray-600">Active Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">180+</div>
              <div className="text-base text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Story
            </h2>
            <div className="space-y-6 text-base text-gray-600 leading-relaxed">
              <p>
                Founded in 2010, TradeHub began with a simple yet powerful vision: to make global B2B trade accessible, transparent, and efficient for businesses of all sizes. What started as a small platform connecting local manufacturers with international buyers has grown into one of the world's leading B2B marketplaces.
              </p>
              <p>
                Over the past decade, we've witnessed the transformative power of technology in breaking down barriers to international trade. We've invested heavily in building a robust platform that not only connects buyers and suppliers but also provides the tools, resources, and support needed to facilitate successful transactions.
              </p>
              <p>
                Today, TradeHub serves millions of businesses across 180+ countries, facilitating billions of dollars in trade annually. Our success is built on three core pillars: trust, transparency, and technology. Every supplier on our platform undergoes rigorous verification, every transaction is protected, and every interaction is designed to be seamless and secure.
              </p>
              <p>
                As we look to the future, we remain committed to our founding mission: empowering businesses to grow through global trade. We continue to innovate, expand our services, and build new features that make international commerce easier, safer, and more profitable for all our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We verify every supplier, protect every transaction, and ensure that trust is at the heart of every connection made on our platform.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We continuously evolve our platform with cutting-edge technology to provide the best possible experience for our users.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Success</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Your success is our success. We're committed to providing exceptional support and resources to help your business thrive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-global-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We connect businesses across borders, cultures, and time zones, making global trade accessible to everyone.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We believe in open, honest communication and clear processes that build confidence in every transaction.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
                <i className="ri-team-line text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We foster a vibrant community of businesses that support, learn from, and grow with each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the people driving TradeHub forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Chen', role: 'CEO & Founder', image: 'https://readdy.ai/api/search-image?query=professional%20asian%20businesswoman%20CEO%20in%20modern%20office%20wearing%20business%20suit%20confident%20smile%20clean%20white%20background%20corporate%20headshot%20high%20quality&width=400&height=400&seq=team1&orientation=squarish' },
              { name: 'Michael Rodriguez', role: 'CTO', image: 'https://readdy.ai/api/search-image?query=professional%20hispanic%20male%20technology%20executive%20CTO%20in%20modern%20office%20wearing%20business%20casual%20confident%20smile%20clean%20white%20background%20corporate%20headshot%20high%20quality&width=400&height=400&seq=team2&orientation=squarish' },
              { name: 'Emily Watson', role: 'COO', image: 'https://readdy.ai/api/search-image?query=professional%20caucasian%20businesswoman%20COO%20in%20modern%20office%20wearing%20business%20suit%20confident%20smile%20clean%20white%20background%20corporate%20headshot%20high%20quality&width=400&height=400&seq=team3&orientation=squarish' },
              { name: 'David Kim', role: 'VP of Sales', image: 'https://readdy.ai/api/search-image?query=professional%20asian%20male%20sales%20executive%20VP%20in%20modern%20office%20wearing%20business%20suit%20confident%20smile%20clean%20white%20background%20corporate%20headshot%20high%20quality&width=400&height=400&seq=team4&orientation=squarish' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Our Growing Community
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be part of the global B2B revolution and grow your business with TradeHub
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/auth/register?type=buyer" className="px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer">
              Register as Buyer
            </a>
            <a href="/become-supplier" className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-primary transition-all whitespace-nowrap cursor-pointer">
              Become a Supplier
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
