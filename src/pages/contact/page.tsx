import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get in Touch
              </h2>
              <p className="text-base text-gray-600 mb-8">
                Our team is available 24/7 to assist you with any questions or concerns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">support@tradehub.com</p>
                    <p className="text-sm text-gray-600">sales@tradehub.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-sm text-gray-600">123 Business Avenue</p>
                    <p className="text-sm text-gray-600">New York, NY 10001, USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-sm text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-facebook-fill text-lg"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-lg"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-lg"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to meet you in person
            </p>
          </div>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
