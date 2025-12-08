export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Training Academy</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Master international trade with our comprehensive training programs. Learn from industry experts and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Paths</h2>
            <p className="text-xl text-gray-600">Structured courses for every skill level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'Beginner',
                icon: 'ri-seedling-line',
                title: 'Getting Started',
                courses: 12,
                duration: '8 hours',
                topics: ['Platform basics', 'Finding suppliers', 'Making your first order', 'Payment methods']
              },
              {
                level: 'Intermediate',
                icon: 'ri-plant-line',
                title: 'Growing Your Business',
                courses: 18,
                duration: '15 hours',
                topics: ['Negotiation skills', 'Quality control', 'Logistics management', 'Building relationships']
              },
              {
                level: 'Advanced',
                icon: 'ri-trophy-line',
                title: 'Expert Strategies',
                courses: 15,
                duration: '12 hours',
                topics: ['Market analysis', 'Risk management', 'Scaling operations', 'Advanced sourcing']
              }
            ].map((path, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  {path.level}
                </div>
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${path.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{path.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <i className="ri-book-line"></i> {path.courses} courses
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i> {path.duration}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {path.topics.map((topic, tidx) => (
                    <li key={tidx} className="flex items-center gap-2 text-gray-700">
                      <i className="ri-checkbox-circle-fill text-primary-600"></i>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-block w-full text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer">
                  Start Learning
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600">Most enrolled courses this month</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Supplier Verification 101', students: '2.5K', rating: 4.8, duration: '2h' },
              { title: 'Negotiation Masterclass', students: '3.2K', rating: 4.9, duration: '3h' },
              { title: 'Quality Control Essentials', students: '1.8K', rating: 4.7, duration: '2.5h' },
              { title: 'International Shipping Guide', students: '2.1K', rating: 4.8, duration: '2h' },
              { title: 'Payment Security Best Practices', students: '1.5K', rating: 4.9, duration: '1.5h' },
              { title: 'Building Supplier Relationships', students: '2.8K', rating: 4.8, duration: '2h' },
              { title: 'Market Research Techniques', students: '1.2K', rating: 4.7, duration: '3h' },
              { title: 'Customs & Compliance', students: '1.9K', rating: 4.6, duration: '2.5h' }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-full h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <i className="ri-play-circle-line text-5xl text-primary-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line"></i> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i> {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <i className="ri-star-fill"></i>
                  <span className="text-gray-900 font-semibold">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Certified</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Earn industry-recognized certifications that demonstrate your expertise in international trade and sourcing.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Certified Sourcing Professional', level: 'Professional' },
                  { name: 'International Trade Specialist', level: 'Advanced' },
                  { name: 'Quality Assurance Expert', level: 'Expert' }
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-medal-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.level} Level</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Why Get Certified?</h3>
              <ul className="space-y-4">
                {[
                  'Stand out to potential partners',
                  'Demonstrate your expertise',
                  'Access exclusive opportunities',
                  'Join our certified community',
                  'Lifetime credential validity',
                  'Digital badge for LinkedIn'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <i className="ri-checkbox-circle-fill text-2xl"></i>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Learning Journey</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our training programs
          </p>
          <a href="/auth/register" className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}