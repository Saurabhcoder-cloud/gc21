import { useState } from 'react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'ri-apps-line' },
    { id: 'getting-started', name: 'Getting Started', icon: 'ri-rocket-line' },
    { id: 'buying', name: 'Buying', icon: 'ri-shopping-cart-line' },
    { id: 'selling', name: 'Selling', icon: 'ri-store-line' },
    { id: 'payments', name: 'Payments', icon: 'ri-bank-card-line' },
    { id: 'shipping', name: 'Shipping', icon: 'ri-truck-line' },
    { id: 'account', name: 'Account', icon: 'ri-user-line' },
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create an account on TradeHub?',
      answer: 'To create an account, click the "Register" button in the top right corner. Choose whether you want to register as a buyer or supplier, then fill in your details including email, password, and company information. You\'ll receive a verification email to activate your account.'
    },
    {
      category: 'getting-started',
      question: 'What are the benefits of becoming a verified supplier?',
      answer: 'Verified suppliers receive a trust badge, higher visibility in search results, access to premium features, and increased buyer confidence. The verification process includes document verification, business license checks, and quality assessments.'
    },
    {
      category: 'buying',
      question: 'How do I search for products?',
      answer: 'Use the search bar on the homepage to enter keywords, product names, or categories. You can filter results by price, MOQ, supplier location, and verification status. Save your favorite products and suppliers for easy access later.'
    },
    {
      category: 'buying',
      question: 'What is an RFQ and how do I submit one?',
      answer: 'An RFQ (Request for Quotation) is a formal inquiry to suppliers for pricing and terms. To submit an RFQ, click "Post RFQ" in the navigation, describe your requirements including quantity, specifications, and target price. Multiple suppliers will respond with quotes.'
    },
    {
      category: 'buying',
      question: 'How can I verify supplier credibility?',
      answer: 'Check for the verified badge, review supplier ratings and reviews, examine their transaction history, and review uploaded certifications. You can also request samples before placing large orders.'
    },
    {
      category: 'selling',
      question: 'How do I list my products?',
      answer: 'After registering as a supplier, go to your dashboard and click "Add Product". Fill in product details including title, category, pricing, MOQ, specifications, and upload high-quality images. Products are reviewed before going live.'
    },
    {
      category: 'selling',
      question: 'What are the fees for selling on TradeHub?',
      answer: 'TradeHub offers different membership tiers. The free plan allows basic listings with limited features. Premium plans offer enhanced visibility, unlimited products, priority support, and advanced analytics. Check our Pricing page for detailed information.'
    },
    {
      category: 'selling',
      question: 'How do I respond to buyer inquiries?',
      answer: 'You\'ll receive notifications when buyers send inquiries. Go to your Inquiries page, review the buyer\'s requirements, and send a detailed quote including pricing, MOQ, lead time, and payment terms. Quick responses increase conversion rates.'
    },
    {
      category: 'payments',
      question: 'What payment methods are accepted?',
      answer: 'TradeHub supports various payment methods including bank transfers, credit cards, PayPal, and trade assurance. Payment terms are negotiated between buyers and suppliers, with options for deposits, full payment, or installments.'
    },
    {
      category: 'payments',
      question: 'Is my payment secure?',
      answer: 'Yes, all transactions are protected by our secure payment system. We use industry-standard encryption and offer trade assurance to protect both buyers and suppliers. Funds are held in escrow until delivery confirmation.'
    },
    {
      category: 'shipping',
      question: 'How does shipping work?',
      answer: 'Shipping terms are negotiated between buyers and suppliers. Common terms include FOB, CIF, and DDP. Suppliers provide tracking information, and buyers can monitor shipments through their dashboard. We also offer logistics support services.'
    },
    {
      category: 'shipping',
      question: 'What if my order is damaged or incorrect?',
      answer: 'Contact the supplier immediately and document the issue with photos. If resolution isn\'t reached, open a dispute through your order page. Our support team will mediate and help resolve the issue according to our buyer protection policy.'
    },
    {
      category: 'account',
      question: 'How do I update my company profile?',
      answer: 'Go to your dashboard and click on "Company Profile". You can update your company information, logo, description, certifications, and contact details. Keep your profile updated to build trust with potential partners.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your registered email address, and you\'ll receive a password reset link. Follow the link to create a new password. For security, passwords must be at least 8 characters with letters and numbers.'
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const searchedFaqs = searchQuery
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Help Center
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Find answers to common questions and learn how to make the most of TradeHub
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-full shadow-xl p-2 flex items-center">
                <i className="ri-search-line text-gray-400 text-xl ml-4"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help..."
                  className="flex-1 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/contact" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <i className="ri-customer-service-line text-emerald-600 text-lg"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Contact Support</div>
                <div className="text-xs text-gray-600">Get help from our team</div>
              </div>
            </a>
            <a href="/auth/register" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <i className="ri-user-add-line text-emerald-600 text-lg"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Create Account</div>
                <div className="text-xs text-gray-600">Get started today</div>
              </div>
            </a>
            <a href="/become-supplier" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <i className="ri-store-line text-emerald-600 text-lg"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Become Supplier</div>
                <div className="text-xs text-gray-600">Start selling</div>
              </div>
            </a>
            <a href="/trust" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <i className="ri-shield-check-line text-emerald-600 text-lg"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Trust & Safety</div>
                <div className="text-xs text-gray-600">Learn about security</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {searchedFaqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <i className="ri-arrow-down-s-line text-gray-400 text-xl group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {searchedFaqs.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-gray-300 text-6xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-base text-gray-600">Try adjusting your search or browse by category</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Still Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
              Contact Support
            </a>
            <a href="mailto:support@tradehub.com" className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap cursor-pointer">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
