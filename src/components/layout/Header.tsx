import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-menu-container')) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Save to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));

      // Build query params
      const params = new URLSearchParams();
      params.set('search', searchQuery);
      if (selectedCategory) params.set('category', selectedCategory);
      if (priceRange) params.set('price', priceRange);
      if (selectedLocation) params.set('location', selectedLocation);

      // Navigate to products page
      navigate(`/products?${params.toString()}`);
      setIsSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
    const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
    navigate(`/products?search=${encodeURIComponent(term)}`);
    setIsSearchModalOpen(false);
  };

  const popularSearches = [
    'LED Lights',
    'Solar Panels',
    'Office Chairs',
    'Packaging Materials',
    'Industrial Machinery',
    'Electronic Components',
    'Textile Fabrics',
    'Safety Equipment'
  ];

  const categories = [
    'Electronics & Electrical',
    'Machinery & Industrial',
    'Textiles & Apparel',
    'Home & Garden',
    'Construction & Real Estate',
    'Automotive & Transportation',
    'Food & Beverage',
    'Chemicals & Materials'
  ];

  const allCategories = [
    { 
      icon: 'ri-t-shirt-air-line', 
      name: 'Apparel & Accessories', 
      url: '/category/apparel-accessories',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Bags', 'Jewelry']
    },
    { 
      icon: 'ri-smartphone-line', 
      name: 'Consumer Electronics', 
      url: '/category/consumer-electronics',
      subcategories: ['Mobile Phones', 'Laptops', 'Smart Watches', 'Audio', 'Cameras']
    },
    { 
      icon: 'ri-building-4-line', 
      name: 'Construction & Real Estate', 
      url: '/category/construction-real-estate',
      subcategories: ['Building Materials', 'Doors & Windows', 'Flooring', 'Lighting', 'Hardware']
    },
    { 
      icon: 'ri-car-line', 
      name: 'Vehicles & Accessories', 
      url: '/category/vehicles-accessories',
      subcategories: ['Auto Parts', 'Motorcycles', 'E-Bikes', 'Car Electronics', 'Tires']
    },
    { 
      icon: 'ri-robot-line', 
      name: 'Machinery & Equipment', 
      url: '/category/machinery-equipment',
      subcategories: ['Industrial Machinery', 'CNC Equipment', 'Packaging Machines', 'Food Processing', 'Textile Machinery']
    },
    { 
      icon: 'ri-home-8-line', 
      name: 'Home, Garden & Furniture', 
      url: '/category/home-garden',
      subcategories: ['Furniture', 'Home Decor', 'Kitchen Appliances', 'Garden Tools', 'Bedding']
    },
    { 
      icon: 'ri-heart-pulse-line', 
      name: 'Health & Beauty', 
      url: '/category/health-beauty',
      subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Personal Care', 'Medical Devices']
    },
    { 
      icon: 'ri-archive-stack-line', 
      name: 'Packaging & Printing', 
      url: '/category/packaging-printing',
      subcategories: ['Packaging Boxes', 'Labels', 'Printing Services', 'Bags & Pouches', 'Packaging Materials']
    },
    { 
      icon: 'ri-basketball-line', 
      name: 'Sports & Entertainment', 
      url: '/category/sports-entertainment',
      subcategories: ['Fitness Equipment', 'Outdoor Sports', 'Team Sports', 'Water Sports', 'Gaming']
    },
    { 
      icon: 'ri-gift-line', 
      name: 'Gifts & Crafts', 
      url: '/category/gifts-crafts',
      subcategories: ['Handicrafts', 'Promotional Gifts', 'Holiday Supplies', 'Art Supplies', 'DIY Crafts']
    },
    { 
      icon: 'ri-suitcase-line', 
      name: 'Luggage, Bags & Cases', 
      url: '/category/luggage-bags-cases',
      subcategories: ['Travel Luggage', 'Backpacks', 'Handbags', 'Phone Cases', 'Laptop Bags']
    },
    { 
      icon: 'ri-paw-line', 
      name: 'Pet Supplies', 
      url: '/category/pet-supplies',
      subcategories: ['Pet Food', 'Pet Toys', 'Pet Accessories', 'Pet Grooming', 'Pet Furniture']
    },
    { 
      icon: 'ri-shield-keyhole-line', 
      name: 'Security & Protection', 
      url: '/category/security-protection',
      subcategories: ['CCTV Systems', 'Access Control', 'Alarm Systems', 'Safety Equipment', 'Fire Protection']
    },
    { 
      icon: 'ri-tools-line', 
      name: 'Service Equipment', 
      url: '/category/service-equipment',
      subcategories: ['Cleaning Equipment', 'Hotel Supplies', 'Restaurant Equipment', 'Laundry Equipment', 'Vending Machines']
    },
    { 
      icon: 'ri-bear-smile-line', 
      name: 'Mother, Kids & Toys', 
      url: '/category/mother-kids',
      subcategories: ['Baby Clothing', 'Baby Care', 'Toys', 'Strollers', 'Maternity Products']
    },
    { 
      icon: 'ri-book-open-line', 
      name: 'School & Office Supplies', 
      url: '/category/school-office',
      subcategories: ['Stationery', 'Office Furniture', 'School Bags', 'Writing Instruments', 'Paper Products']
    },
    { 
      icon: 'ri-plant-line', 
      name: 'Agriculture & Food', 
      url: '/category/agriculture-food',
      subcategories: ['Fresh Produce', 'Food Processing', 'Agricultural Machinery', 'Seeds & Plants', 'Animal Feed']
    },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled 
          ? 'bg-transparent' 
          : 'bg-white shadow-md'
      }`}>
        {/* Top Bar */}
        <div className={`border-b transition-colors duration-300 ${
          isHomePage && !isScrolled 
            ? 'bg-primary-500 border-primary-400' 
            : 'bg-primary-500 border-primary-400'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-10">
              <div className="flex items-center space-x-6 text-xs">
                <a href="/news" className="text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  News
                </a>
                <a href="/trust" className="text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  Trust Certificate
                </a>
                <a href="/about" className="text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  About
                </a>
                <a href="/help" className="text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  Need Help?
                </a>
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <button className="text-white/90 hover:text-white transition-colors whitespace-nowrap">
                  English - USD
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`border-b transition-colors duration-300 ${
          isHomePage && !isScrolled 
            ? 'bg-primary-600/95 border-primary-500' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/" className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${
                isHomePage && !isScrolled ? 'text-white' : 'text-primary-600'
              }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                Global Connection 21
              </a>
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="/products" className={`transition-colors whitespace-nowrap cursor-pointer ${
                  isHomePage && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-primary-500'
                }`}>
                  Products
                </a>
                <a href="/suppliers" className={`transition-colors whitespace-nowrap cursor-pointer ${
                  isHomePage && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-primary-500'
                }`}>
                  Suppliers
                </a>
                <a href="/buyer-central" className={`transition-colors whitespace-nowrap cursor-pointer ${
                  isHomePage && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-primary-500'
                }`}>
                  Buyer Central
                </a>
                <a href="/pricing" className={`transition-colors whitespace-nowrap cursor-pointer ${
                  isHomePage && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-primary-500'
                }`}>
                  Pricing
                </a>
                <a href="/help" className={`transition-colors whitespace-nowrap cursor-pointer ${
                  isHomePage && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-600 hover:text-primary-500'
                }`}>
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className={`transition-colors duration-300 ${
          isHomePage && !isScrolled ? 'bg-white' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-menu-line"></i>
                  <span className="text-sm font-medium">All categories</span>
                </button>
                
                <button 
                  onClick={() => setIsSearchModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:border-primary-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-search-line text-gray-600"></i>
                  <span className="text-sm font-medium text-gray-700">Search Products</span>
                </button>
              </div>

              <nav className="hidden lg:flex items-center space-x-6 text-sm">
                <a href="/trade-shows" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Trade Shows
                </a>
                <a href="/top-ranking" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Top Ranking
                </a>
                <a href="/ready-to-ship" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Ready to Ship
                </a>
                <a href="/global-logistics" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Global Logistics
                </a>
                <a href="/supplier-hub" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Supplier Hub
                </a>
                <a href="/rfq-service" className="text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  RFQ Service
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <a href="/auth/login" className="text-sm text-gray-700 hover:text-primary-500 transition-colors whitespace-nowrap cursor-pointer">
                  Sign In
                </a>
                <a href="/auth/register" className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer">
                  Join Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories Dropdown Modal */}
      {isCategoriesDropdownOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            style={{ top: '120px' }}
            onClick={() => setIsCategoriesDropdownOpen(false)}
          ></div>
          <div className="fixed left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200" style={{ top: '120px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">All Categories</h3>
                <button
                  onClick={() => setIsCategoriesDropdownOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
                {allCategories.map((category, idx) => (
                  <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                    <a 
                      href={category.url}
                      className="flex items-center gap-3 mb-4 group cursor-pointer"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 flex-shrink-0">
                        <i className={`${category.icon} text-2xl`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">{category.name}</h4>
                    </a>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a 
                            href={`${category.url}/${sub.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                            className="text-sm text-gray-600 hover:text-primary-500 hover:translate-x-1 transition-all inline-block cursor-pointer"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center">
                <a 
                  href="/categories"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  View All Categories
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Search Products</h2>
                <button
                  onClick={() => setIsSearchModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for products, suppliers, categories..."
                  className="w-full px-6 py-4 pr-14 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-primary-500 transition-colors"
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"
                >
                  <i className="ri-search-line text-xl text-white"></i>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Quick Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Any Price</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000+">$1,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Locations</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
              </div>

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map(term => (
                    <button
                      key={term}
                      onClick={() => handleQuickSearch(term)}
                      className="px-4 py-2 bg-primary-50 text-primary-600 text-sm rounded-full hover:bg-primary-100 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Searches</h3>
                  <div className="space-y-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(term)}
                        className="flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-left cursor-pointer"
                      >
                        <i className="ri-time-line text-gray-400"></i>
                        <span className="text-sm text-gray-700">{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add padding to body content */}
      <div className="h-[120px]"></div>
    </>
  );
}