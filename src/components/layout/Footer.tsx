import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="space-y-4 md:col-span-2">
              <Link to="/" className="text-2xl font-bold text-primary-700">Global Connection 21</Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Global Connection 21 connects millions of buyers and suppliers with trusted tools for sourcing, payments, and logistics across 200+ regions.
              </p>
              <div className="flex gap-3 text-gray-500">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-lg"></i>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-lg"></i>
                </a>
              </div>
            </div>

            {/* Get Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/help" className="hover:text-primary-600 transition-colors cursor-pointer">Help Center</Link></li>
                <li><Link to="/trade-assurance" className="hover:text-primary-600 transition-colors cursor-pointer">Trade Assurance</Link></li>
                <li><Link to="/report" className="hover:text-primary-600 transition-colors cursor-pointer">Report Abuse</Link></li>
                <li><Link to="/disputes" className="hover:text-primary-600 transition-colors cursor-pointer">Submit Dispute</Link></li>
              </ul>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Buyers</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/rfq-service" className="hover:text-primary-600 transition-colors cursor-pointer">RFQ Service</Link></li>
                <li><Link to="/logistics" className="hover:text-primary-600 transition-colors cursor-pointer">Logistics Services</Link></li>
                <li><Link to="/inspection" className="hover:text-primary-600 transition-colors cursor-pointer">Inspection Solutions</Link></li>
                <li><Link to="/insights" className="hover:text-primary-600 transition-colors cursor-pointer">Sourcing Insights</Link></li>
              </ul>
            </div>

            {/* For Suppliers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">For Suppliers</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/supplier-hub" className="hover:text-primary-600 transition-colors cursor-pointer">Supplier Hub</Link></li>
                <li><Link to="/pricing" className="hover:text-primary-600 transition-colors cursor-pointer">Gold Membership</Link></li>
                <li><Link to="/partners" className="hover:text-primary-600 transition-colors cursor-pointer">Partner Program</Link></li>
                <li><Link to="/academy" className="hover:text-primary-600 transition-colors cursor-pointer">Training Academy</Link></li>
              </ul>
            </div>
          </div>

          {/* Company Section - Second Row */}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-primary-600 transition-colors cursor-pointer">About Global Connection 21</Link></li>
              <li><Link to="/careers" className="hover:text-primary-600 transition-colors cursor-pointer">Careers</Link></li>
              <li><Link to="/press" className="hover:text-primary-600 transition-colors cursor-pointer">Press</Link></li>
              <li><Link to="/investors" className="hover:text-primary-600 transition-colors cursor-pointer">Investors</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <p className="text-gray-600">© 2025 Global Connection 21. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <select className="px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
              <select className="px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="cny">CNY</option>
                <option value="inr">INR</option>
              </select>
              <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer">Terms of Use</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer">Privacy Policy</Link>
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer">Powered by Readdy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}