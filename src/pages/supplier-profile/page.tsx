import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SupplierProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productName: '',
    quantity: '',
    targetPrice: '',
    requirements: ''
  });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);

  // Mock supplier data
  const supplier = {
    id: id || '1',
    name: 'TechVision Electronics Ltd',
    logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20circuit%20board%20pattern%20in%20blue%20and%20white%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=supplier-logo&orientation=squarish',
    banner: 'https://readdy.ai/api/search-image?query=modern%20electronics%20manufacturing%20facility%20with%20automated%20assembly%20lines%20and%20quality%20control%20stations%20bright%20clean%20industrial%20workspace%20professional%20corporate%20photography%20high%20quality&width=1200&height=400&seq=supplier-banner&orientation=landscape',
    verified: true,
    rating: 4.9,
    totalReviews: 1247,
    yearsInBusiness: 12,
    location: 'Shenzhen, China',
    category: 'Electronics & Components',
    employees: '500-1000',
    mainMarkets: ['North America', 'Europe', 'Southeast Asia'],
    description: 'TechVision Electronics Ltd is a leading manufacturer of high-quality electronic components and consumer electronics. With over 12 years of experience, we specialize in producing innovative products that meet international quality standards. Our state-of-the-art manufacturing facilities and dedicated R&D team ensure that we deliver cutting-edge solutions to our global clients.',
    certifications: ['ISO 9001', 'CE', 'RoHS', 'FCC'],
    responseTime: '2 hours',
    responseRate: '98%',
    totalProducts: 2450,
    totalOrders: 8920
  };

  const products = [
    {
      id: 1,
      name: 'Industrial LED Flood Light 200W',
      image: 'https://readdy.ai/api/search-image?query=professional%20industrial%20LED%20flood%20light%20200W%20mounted%20on%20white%20wall%20in%20modern%20factory%20warehouse%20with%20bright%20illumination%20clean%20white%20background%20product%20photography%20high%20quality&width=400&height=400&seq=prod1&orientation=squarish',
      price: '$45.00 - $52.00',
      moq: '100 pieces',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Wireless Bluetooth Earbuds',
      image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20earbuds%20with%20charging%20case%20in%20matte%20black%20finish%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod2&orientation=squarish',
      price: '$8.50 - $12.00',
      moq: '200 pieces',
      rating: 4.6
    },
    {
      id: 3,
      name: 'USB-C Fast Charging Cable',
      image: 'https://readdy.ai/api/search-image?query=premium%20USB-C%20charging%20cable%20coiled%20neatly%20on%20white%20surface%20with%20metallic%20connectors%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod3&orientation=squarish',
      price: '$2.50 - $4.00',
      moq: '500 pieces',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Smart Home Security Camera',
      image: 'https://readdy.ai/api/search-image?query=modern%20smart%20security%20camera%20in%20white%20finish%20with%20lens%20and%20sensors%20on%20white%20surface%20clean%20minimalist%20background%20professional%20product%20photography%20high%20quality&width=400&height=400&seq=prod4&orientation=squarish',
      price: '$25.00 - $35.00',
      moq: '100 pieces',
      rating: 4.9
    }
  ];

  const reviews = [
    {
      id: 1,
      buyer: 'Global Tech Solutions',
      country: 'USA',
      rating: 5,
      date: '2025-01-15',
      comment: 'Excellent supplier! Products arrived on time and quality exceeded expectations. Communication was professional throughout the entire process.'
    },
    {
      id: 2,
      buyer: 'European Electronics Co.',
      country: 'Germany',
      rating: 5,
      date: '2025-01-10',
      comment: 'Very reliable supplier with high-quality products. The verification process was smooth and delivery was prompt. Highly recommended!'
    },
    {
      id: 3,
      buyer: 'Asia Pacific Trading',
      country: 'Singapore',
      rating: 4,
      date: '2025-01-05',
      comment: 'Good quality products and competitive pricing. Minor delay in shipping but overall satisfied with the service.'
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);
    setIsContactSubmitted(true);
    setTimeout(() => {
      setIsContactModalOpen(false);
      setIsContactSubmitted(false);
      setContactFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 2000);
  };

  const updateContactForm = (field, value) => {
    setContactFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryFormData);
    setIsInquirySubmitted(true);
    setTimeout(() => {
      setIsInquiryModalOpen(false);
      setIsInquirySubmitted(false);
      setInquiryFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productName: '',
        quantity: '',
        targetPrice: '',
        requirements: ''
      });
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* ... existing code ... */}

              {/* Actions */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Contact Supplier
                </button>
                {/* ... existing code ... */}
              </div>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="relative pt-20">
          <div className="w-full h-80">
            <img src={supplier.banner} alt={supplier.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
          </div>
        </section>

        {/* Supplier Info */}
        <section className="relative -mt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {supplier.name}
                        </h1>
                        {supplier.verified && (
                          <div className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium flex items-center space-x-1">
                            <i className="ri-verified-badge-fill"></i>
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <i className="ri-star-fill text-yellow-400"></i>
                          <span className="font-semibold">{supplier.rating}</span>
                          <span>({supplier.totalReviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="ri-map-pin-line"></i>
                          <span>{supplier.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="ri-time-line"></i>
                          <span>{supplier.yearsInBusiness} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-mail-line mr-2"></i>
                      Contact Supplier
                    </button>
                    <button 
                      onClick={() => setIsInquiryModalOpen(true)}
                      className="px-6 py-2.5 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-chat-3-line mr-2"></i>
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{supplier.totalProducts}</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{supplier.totalOrders}</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{supplier.responseRate}</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{supplier.responseTime}</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {['products', 'about', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'products' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    View All Products →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
                  {products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                      data-product-shop
                    >
                      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-base font-bold text-emerald-600">{product.price}</span>
                          <div className="flex items-center space-x-1">
                            <i className="ri-star-fill text-yellow-400 text-sm"></i>
                            <span className="text-sm text-gray-600">{product.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">MOQ: {product.moq}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About Company</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-8">{supplier.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-sm text-gray-600 w-32">Business Type:</span>
                        <span className="text-sm text-gray-900 font-medium">Manufacturer</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-sm text-gray-600 w-32">Employees:</span>
                        <span className="text-sm text-gray-900 font-medium">{supplier.employees}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-sm text-gray-600 w-32">Category:</span>
                        <span className="text-sm text-gray-900 font-medium">{supplier.category}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-sm text-gray-600 w-32">Location:</span>
                        <span className="text-sm text-gray-900 font-medium">{supplier.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Markets</h3>
                    <div className="flex flex-wrap gap-2">
                      {supplier.mainMarkets.map((market, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm">
                          {market}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {supplier.certifications.map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                  <div className="flex items-center space-x-2">
                    <i className="ri-star-fill text-yellow-400 text-xl"></i>
                    <span className="text-2xl font-bold text-gray-900">{supplier.rating}</span>
                    <span className="text-base text-gray-600">({supplier.totalReviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">{review.buyer}</h3>
                          <p className="text-sm text-gray-600">{review.country}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`ri-star-fill text-sm ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.comment}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ... existing code ... */}

              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-mail-line mr-2"></i>
                      Contact Supplier
                    </button>
                    <button 
                      onClick={() => setIsInquiryModalOpen(true)}
                      className="w-full px-6 py-2.5 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-chat-3-line mr-2"></i>
                      Send Inquiry
                    </button>
                    {/* ... existing code ... */}
                  </div>
                  {/* ... existing code ... */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Supplier
                </h3>
                <p className="text-sm text-gray-600 mt-1">Send an inquiry to TechSource Electronics Co.</p>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isContactSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-green-600"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">The supplier will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  {/* Info Banner */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-information-line text-blue-600 text-lg mt-0.5"></i>
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">Quick Response Guaranteed</p>
                        <p>This supplier typically responds within 24 hours. Your contact details will be shared with the supplier.</p>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={contactFormData.name}
                        onChange={(e) => updateContactForm('name', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contactFormData.email}
                        onChange={(e) => updateContactForm('email', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={contactFormData.phone}
                        onChange={(e) => updateContactForm('phone', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={contactFormData.company}
                        onChange={(e) => updateContactForm('company', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your Company Ltd."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={contactFormData.message}
                      onChange={(e) => updateContactForm('message', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                      placeholder="Please include:&#10;- Product name or specifications&#10;- Quantity needed&#10;- Target price (if any)&#10;- Delivery requirements&#10;- Any other specific requirements"
                      required
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
                  </div>

                  {/* Supplier Info */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">You are contacting:</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">TS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">TechSource Electronics Co.</p>
                        <p className="text-sm text-gray-600">Verified Supplier • Shenzhen, China</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setIsContactModalOpen(false)}
                      className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Send Inquiry Modal */}
      {isInquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Send Product Inquiry</h2>
                <button
                  onClick={() => setIsInquiryModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {!isInquirySubmitted ? (
                <>
                  {/* Info Banner */}
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <i className="ri-information-line text-blue-600 text-xl mt-0.5"></i>
                      <div className="flex-1">
                        <p className="text-sm text-blue-900 font-medium mb-1">
                          Request for Quotation (RFQ)
                        </p>
                        <p className="text-sm text-blue-700">
                          Submit your product requirements and receive competitive quotes from this verified supplier within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Form */}
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={inquiryFormData.name}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, name: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={inquiryFormData.email}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, email: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={inquiryFormData.phone}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={inquiryFormData.company}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, company: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Requirements</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={inquiryFormData.productName}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, productName: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                            placeholder="e.g., LED Solar Street Light"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Quantity Required <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={inquiryFormData.quantity}
                              onChange={(e) => setInquiryFormData({ ...inquiryFormData, quantity: e.target.value })}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                              placeholder="e.g., 500 units"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Target Price (Optional)
                            </label>
                            <input
                              type="text"
                              value={inquiryFormData.targetPrice}
                              onChange={(e) => setInquiryFormData({ ...inquiryFormData, targetPrice: e.target.value })}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                              placeholder="e.g., $50 per unit"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Detailed Requirements <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            required
                            value={inquiryFormData.requirements}
                            onChange={(e) => setInquiryFormData({ ...inquiryFormData, requirements: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm resize-none"
                            placeholder="Please provide detailed specifications, quality requirements, delivery timeline, shipping destination, and any other important information..."
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {inquiryFormData.requirements.length} / 500 characters
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Supplier Info */}
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Sending inquiry to:</p>
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%20professional%20technology%20company%20logo%20with%20clean%20minimalist%20design%20on%20white%20background%20featuring%20abstract%20geometric%20shapes%20in%20emerald%20green%20color%20scheme&width=80&height=80&seq=supplier-logo-001&orientation=squarish"
                          alt="TechGlobal Industries"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">TechGlobal Industries Co., Ltd.</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              <i className="ri-verified-badge-fill mr-1"></i>
                              Verified
                            </span>
                            <span className="text-xs text-gray-500">Guangdong, China</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setIsInquiryModalOpen(false)}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-send-plane-fill mr-2"></i>
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-check-line text-3xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Your product inquiry has been sent to TechGlobal Industries. They will review your requirements and respond within 24 hours.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-sm text-emerald-600">
                    <i className="ri-mail-check-line"></i>
                    <span>Check your email for confirmation</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
