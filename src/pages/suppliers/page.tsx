import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuppliersPage() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedBusinessType, setSelectedBusinessType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const suppliersPerPage = 9;

  const allSuppliers = [
    {
      id: 1,
      name: 'TechVision Electronics Ltd',
      logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20circuit%20board%20pattern%20in%20blue%20and%20white%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist1&orientation=squarish',
      category: 'Electronics & Components',
      location: 'Shenzhen, China',
      yearsInBusiness: 12,
      verified: true,
      products: 2450,
      rating: 4.9,
      responseRate: 98,
      businessType: 'Manufacturer',
      mainMarkets: 'North America, Europe, Asia'
    },
    {
      id: 2,
      name: 'Global Textile Manufacturing',
      logo: 'https://readdy.ai/api/search-image?query=textile%20company%20logo%20with%20fabric%20weave%20pattern%20in%20warm%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist2&orientation=squarish',
      category: 'Textiles & Apparel',
      location: 'Mumbai, India',
      yearsInBusiness: 18,
      verified: true,
      products: 3200,
      rating: 4.8,
      responseRate: 95,
      businessType: 'Manufacturer',
      mainMarkets: 'Global'
    },
    {
      id: 3,
      name: 'EcoPackaging Solutions',
      logo: 'https://readdy.ai/api/search-image?query=eco-friendly%20packaging%20company%20logo%20with%20green%20leaf%20symbol%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist3&orientation=squarish',
      category: 'Packaging & Printing',
      location: 'Bangkok, Thailand',
      yearsInBusiness: 8,
      verified: true,
      products: 1850,
      rating: 4.7,
      responseRate: 92,
      businessType: 'Trading Company',
      mainMarkets: 'Southeast Asia, Europe'
    },
    {
      id: 4,
      name: 'Precision Machinery Corp',
      logo: 'https://readdy.ai/api/search-image?query=industrial%20machinery%20company%20logo%20with%20gear%20symbol%20in%20metallic%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist4&orientation=squarish',
      category: 'Machinery & Equipment',
      location: 'Osaka, Japan',
      yearsInBusiness: 25,
      verified: true,
      products: 1420,
      rating: 4.9,
      responseRate: 97,
      businessType: 'Manufacturer',
      mainMarkets: 'Asia, North America'
    },
    {
      id: 5,
      name: 'Natural Foods International',
      logo: 'https://readdy.ai/api/search-image?query=organic%20food%20company%20logo%20with%20wheat%20grain%20symbol%20in%20natural%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist5&orientation=squarish',
      category: 'Food & Beverage',
      location: 'California, USA',
      yearsInBusiness: 15,
      verified: true,
      products: 980,
      rating: 4.8,
      responseRate: 96,
      businessType: 'Manufacturer',
      mainMarkets: 'North America, Europe'
    },
    {
      id: 6,
      name: 'BuildPro Construction Materials',
      logo: 'https://readdy.ai/api/search-image?query=construction%20company%20logo%20with%20building%20blocks%20symbol%20in%20strong%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist6&orientation=squarish',
      category: 'Construction & Building',
      location: 'Dubai, UAE',
      yearsInBusiness: 10,
      verified: true,
      products: 2100,
      rating: 4.7,
      responseRate: 94,
      businessType: 'Trading Company',
      mainMarkets: 'Middle East, Africa'
    },
    {
      id: 7,
      name: 'ChemTech Solutions Ltd',
      logo: 'https://readdy.ai/api/search-image?query=chemical%20company%20logo%20with%20molecule%20structure%20symbol%20in%20blue%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist7&orientation=squarish',
      category: 'Chemicals & Materials',
      location: 'Singapore',
      yearsInBusiness: 14,
      verified: true,
      products: 1650,
      rating: 4.8,
      responseRate: 96,
      businessType: 'Manufacturer',
      mainMarkets: 'Asia, Europe'
    },
    {
      id: 8,
      name: 'AutoParts Global Trading',
      logo: 'https://readdy.ai/api/search-image?query=automotive%20company%20logo%20with%20car%20wheel%20symbol%20in%20metallic%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist8&orientation=squarish',
      category: 'Automotive & Transport',
      location: 'Guangzhou, China',
      yearsInBusiness: 9,
      verified: true,
      products: 2890,
      rating: 4.7,
      responseRate: 93,
      businessType: 'Trading Company',
      mainMarkets: 'Global'
    },
    {
      id: 9,
      name: 'HomeStyle Furniture Co',
      logo: 'https://readdy.ai/api/search-image?query=furniture%20company%20logo%20with%20chair%20symbol%20in%20warm%20wood%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist9&orientation=squarish',
      category: 'Home & Garden',
      location: 'Hanoi, Vietnam',
      yearsInBusiness: 11,
      verified: true,
      products: 1340,
      rating: 4.8,
      responseRate: 95,
      businessType: 'Manufacturer',
      mainMarkets: 'North America, Europe'
    },
    {
      id: 10,
      name: 'MediCare Equipment Supply',
      logo: 'https://readdy.ai/api/search-image?query=medical%20equipment%20company%20logo%20with%20cross%20symbol%20in%20clean%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist10&orientation=squarish',
      category: 'Medical & Healthcare',
      location: 'Seoul, South Korea',
      yearsInBusiness: 16,
      verified: true,
      products: 1580,
      rating: 4.9,
      responseRate: 98,
      businessType: 'Manufacturer',
      mainMarkets: 'Asia, North America'
    },
    {
      id: 11,
      name: 'SportGear Manufacturing',
      logo: 'https://readdy.ai/api/search-image?query=sports%20equipment%20company%20logo%20with%20athletic%20symbol%20in%20dynamic%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist11&orientation=squarish',
      category: 'Sports & Recreation',
      location: 'Taipei, Taiwan',
      yearsInBusiness: 13,
      verified: true,
      products: 2240,
      rating: 4.7,
      responseRate: 94,
      businessType: 'Manufacturer',
      mainMarkets: 'Global'
    },
    {
      id: 12,
      name: 'BeautyPro Cosmetics Ltd',
      logo: 'https://readdy.ai/api/search-image?query=cosmetics%20company%20logo%20with%20elegant%20beauty%20symbol%20in%20soft%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist12&orientation=squarish',
      category: 'Beauty & Personal Care',
      location: 'Paris, France',
      yearsInBusiness: 20,
      verified: true,
      products: 1920,
      rating: 4.8,
      responseRate: 96,
      businessType: 'Manufacturer',
      mainMarkets: 'Europe, North America'
    },
    {
      id: 13,
      name: 'AgriTech Solutions',
      logo: 'https://readdy.ai/api/search-image?query=agriculture%20technology%20company%20logo%20with%20plant%20symbol%20in%20green%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist13&orientation=squarish',
      category: 'Agriculture & Farming',
      location: 'São Paulo, Brazil',
      yearsInBusiness: 11,
      verified: true,
      products: 1450,
      rating: 4.7,
      responseRate: 92,
      businessType: 'Trading Company',
      mainMarkets: 'South America, Europe'
    },
    {
      id: 14,
      name: 'LightTech LED Systems',
      logo: 'https://readdy.ai/api/search-image?query=lighting%20company%20logo%20with%20bulb%20symbol%20in%20bright%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist14&orientation=squarish',
      category: 'Lighting & Electrical',
      location: 'Shenzhen, China',
      yearsInBusiness: 9,
      verified: true,
      products: 3100,
      rating: 4.8,
      responseRate: 95,
      businessType: 'Manufacturer',
      mainMarkets: 'Global'
    },
    {
      id: 15,
      name: 'PetCare Products International',
      logo: 'https://readdy.ai/api/search-image?query=pet%20care%20company%20logo%20with%20paw%20symbol%20in%20friendly%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist15&orientation=squarish',
      category: 'Pet Supplies',
      location: 'Melbourne, Australia',
      yearsInBusiness: 7,
      verified: true,
      products: 890,
      rating: 4.9,
      responseRate: 97,
      businessType: 'Trading Company',
      mainMarkets: 'Asia Pacific, North America'
    },
    {
      id: 16,
      name: 'OfficeMax Supply Chain',
      logo: 'https://readdy.ai/api/search-image?query=office%20supplies%20company%20logo%20with%20desk%20symbol%20in%20professional%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist16&orientation=squarish',
      category: 'Office & School Supplies',
      location: 'Hong Kong',
      yearsInBusiness: 14,
      verified: true,
      products: 2670,
      rating: 4.7,
      responseRate: 93,
      businessType: 'Trading Company',
      mainMarkets: 'Asia, North America'
    },
    {
      id: 17,
      name: 'ToyWorld Manufacturing',
      logo: 'https://readdy.ai/api/search-image?query=toy%20company%20logo%20with%20playful%20symbol%20in%20colorful%20design%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist17&orientation=squarish',
      category: 'Toys & Games',
      location: 'Dongguan, China',
      yearsInBusiness: 17,
      verified: true,
      products: 4200,
      rating: 4.8,
      responseRate: 94,
      businessType: 'Manufacturer',
      mainMarkets: 'Global'
    },
    {
      id: 18,
      name: 'SecurityTech Systems',
      logo: 'https://readdy.ai/api/search-image?query=security%20company%20logo%20with%20shield%20symbol%20in%20strong%20colors%20on%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=suplist18&orientation=squarish',
      category: 'Security & Protection',
      location: 'Tel Aviv, Israel',
      yearsInBusiness: 12,
      verified: true,
      products: 1340,
      rating: 4.9,
      responseRate: 98,
      businessType: 'Manufacturer',
      mainMarkets: 'Europe, North America'
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(allSuppliers.length / suppliersPerPage);
  const indexOfLastSupplier = currentPage * suppliersPerPage;
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = allSuppliers.slice(indexOfFirstSupplier, indexOfLastSupplier);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Supplier Directory
            </h1>
            <p className="text-gray-600">Connect with verified manufacturers and wholesalers worldwide</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                {/* Country Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Country</h3>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Countries</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="thailand">Thailand</option>
                    <option value="japan">Japan</option>
                  </select>
                </div>

                {/* Business Type */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Business Type</h3>
                  <select
                    value={selectedBusinessType}
                    onChange={(e) => setSelectedBusinessType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Types</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="trading">Trading Company</option>
                    <option value="wholesaler">Wholesaler</option>
                  </select>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Main Category</h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="textiles">Textiles</option>
                    <option value="machinery">Machinery</option>
                    <option value="food">Food & Beverage</option>
                  </select>
                </div>

                {/* Years in Business */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Years in Business</h3>
                  <div className="space-y-2">
                    {['1-5 years', '5-10 years', '10-15 years', '15+ years'].map((range) => (
                      <label key={range} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="years" className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" />
                        <span className="text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Verified Only */}
                <div className="mb-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">Verified Suppliers Only</span>
                  </label>
                </div>

                <button className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all text-sm whitespace-nowrap">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Suppliers List */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowFilters(true)}
                      className="lg:hidden px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm whitespace-nowrap"
                    >
                      <i className="ri-filter-line mr-2"></i>
                      Filters
                    </button>
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">{allSuppliers.length}</strong> suppliers found
                    </p>
                  </div>
                </div>
              </div>

              {/* Suppliers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSuppliers.map((supplier) => (
                  <div
                    key={supplier.id}
                    onClick={() => navigate(`/supplier/${supplier.id}`)}
                    className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={supplier.logo}
                          alt={supplier.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                            {supplier.name}
                          </h3>
                          {supplier.verified && (
                            <div className="flex-shrink-0 ml-2">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <i className="ri-verified-badge-fill text-white text-sm"></i>
                              </div>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{supplier.category}</p>
                        <div className="flex items-center space-x-1">
                          <i className="ri-star-fill text-yellow-400 text-sm"></i>
                          <span className="text-sm text-gray-600">{supplier.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="ri-map-pin-line mr-2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                        {supplier.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="ri-building-line mr-2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                        {supplier.businessType}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="ri-time-line mr-2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                        {supplier.yearsInBusiness} years in business
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="ri-shopping-bag-line mr-2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                        {supplier.products.toLocaleString()} products
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i className="ri-chat-check-line mr-2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                        {supplier.responseRate}% response rate
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-primary-light text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">
                      View Supplier
                    </button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center space-x-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border border-gray-300 rounded-lg text-sm transition-all whitespace-nowrap ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2 text-gray-500">...</span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page as number)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  )
                ))}
                
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border border-gray-300 rounded-lg text-sm transition-all whitespace-nowrap ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}