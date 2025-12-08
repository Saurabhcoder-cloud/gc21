import { useState } from 'react';

interface Buyer {
  id: string;
  name: string;
  company: string;
  country: string;
  city: string;
  industry: string;
  businessType: string;
  verified: boolean;
  memberSince: string;
  activeRFQs: number;
  totalOrders: number;
  avatar?: string;
  lookingFor: string[];
  description: string;
}

export default function BuyerCentralPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const buyers: Buyer[] = [
    {
      id: 'B001',
      name: 'John Smith',
      company: 'TechCorp Industries',
      country: 'United States',
      city: 'San Francisco',
      industry: 'Electronics',
      businessType: 'Retailer',
      verified: true,
      memberSince: '2023-05',
      activeRFQs: 5,
      totalOrders: 124,
      lookingFor: ['LED Lights', 'Smart Home Devices', 'IoT Sensors'],
      description: 'Leading electronics retailer looking for innovative smart home products and IoT solutions. Interested in long-term partnerships with reliable suppliers.',
    },
    {
      id: 'B002',
      name: 'Maria Garcia',
      company: 'Global Fashion Ltd.',
      country: 'Spain',
      city: 'Barcelona',
      industry: 'Apparel & Fashion',
      businessType: 'Wholesaler',
      verified: true,
      memberSince: '2023-08',
      activeRFQs: 8,
      totalOrders: 89,
      lookingFor: ['Cotton T-Shirts', 'Denim Jeans', 'Fashion Accessories'],
      description: 'Wholesale fashion distributor seeking quality apparel manufacturers. Focus on sustainable and eco-friendly materials.',
    },
    {
      id: 'B003',
      name: 'Chen Wei',
      company: 'Eastern Trading Co.',
      country: 'China',
      city: 'Shanghai',
      industry: 'Home & Garden',
      businessType: 'Importer',
      verified: true,
      memberSince: '2022-11',
      activeRFQs: 12,
      totalOrders: 256,
      lookingFor: ['Garden Tools', 'Outdoor Furniture', 'Home Decor'],
      description: 'Established trading company specializing in home and garden products. Looking for competitive pricing and reliable shipping.',
    },
    {
      id: 'B004',
      name: 'Ahmed Hassan',
      company: 'Dubai Wholesale Hub',
      country: 'UAE',
      city: 'Dubai',
      industry: 'Consumer Electronics',
      businessType: 'Distributor',
      verified: true,
      memberSince: '2023-01',
      activeRFQs: 6,
      totalOrders: 178,
      lookingFor: ['Smartphones', 'Tablets', 'Accessories'],
      description: 'Major electronics distributor in Middle East. Seeking bulk orders of consumer electronics with warranty support.',
    },
    {
      id: 'B005',
      name: 'Sophie Martin',
      company: 'Paris Retail Group',
      country: 'France',
      city: 'Paris',
      industry: 'Beauty & Personal Care',
      businessType: 'Retailer',
      verified: false,
      memberSince: '2024-01',
      activeRFQs: 3,
      totalOrders: 45,
      lookingFor: ['Skincare Products', 'Cosmetics', 'Hair Care'],
      description: 'Boutique retail chain looking for premium beauty and personal care products. Interested in organic and natural brands.',
    },
    {
      id: 'B006',
      name: 'Robert Johnson',
      company: 'Canadian Imports Inc.',
      country: 'Canada',
      city: 'Toronto',
      industry: 'Sports & Outdoors',
      businessType: 'Importer',
      verified: true,
      memberSince: '2023-03',
      activeRFQs: 7,
      totalOrders: 134,
      lookingFor: ['Fitness Equipment', 'Camping Gear', 'Sports Apparel'],
      description: 'Import company specializing in sports and outdoor equipment. Looking for durable products with competitive pricing.',
    },
    {
      id: 'B007',
      name: 'Yuki Tanaka',
      company: 'Tokyo Trading Corp.',
      country: 'Japan',
      city: 'Tokyo',
      industry: 'Toys & Games',
      businessType: 'Wholesaler',
      verified: true,
      memberSince: '2022-09',
      activeRFQs: 9,
      totalOrders: 201,
      lookingFor: ['Educational Toys', 'Board Games', 'Puzzles'],
      description: 'Wholesale distributor of toys and games. Seeking innovative and educational products for children.',
    },
    {
      id: 'B008',
      name: 'Emma Wilson',
      company: 'UK Home Solutions',
      country: 'United Kingdom',
      city: 'London',
      industry: 'Home Appliances',
      businessType: 'Retailer',
      verified: true,
      memberSince: '2023-06',
      activeRFQs: 4,
      totalOrders: 92,
      lookingFor: ['Kitchen Appliances', 'Vacuum Cleaners', 'Air Purifiers'],
      description: 'Retail chain specializing in home appliances. Looking for energy-efficient products with modern designs.',
    },
  ];

  const industries = ['All', 'Electronics', 'Apparel & Fashion', 'Home & Garden', 'Consumer Electronics', 'Beauty & Personal Care', 'Sports & Outdoors', 'Toys & Games', 'Home Appliances'];
  const countries = ['All', 'United States', 'Spain', 'China', 'UAE', 'France', 'Canada', 'Japan', 'United Kingdom'];

  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buyer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buyer.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || buyer.industry === selectedIndustry;
    const matchesCountry = selectedCountry === 'All' || buyer.country === selectedCountry;
    
    return matchesSearch && matchesIndustry && matchesCountry;
  });

  const maskEmail = (name: string) => {
    const firstLetter = name.charAt(0).toLowerCase();
    return `${firstLetter}xxx@hidden.com`;
  };

  const maskPhone = (country: string) => {
    const countryCode = country === 'United States' ? '+1' : 
                       country === 'United Kingdom' ? '+44' :
                       country === 'China' ? '+86' :
                       country === 'UAE' ? '+971' :
                       country === 'Spain' ? '+34' :
                       country === 'France' ? '+33' :
                       country === 'Canada' ? '+1' :
                       country === 'Japan' ? '+81' : '+XX';
    return `${countryCode}-XXXX-XXXXXX`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Buyer Central
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with verified buyers from around the world. Browse active RFQs and expand your business opportunities.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium mb-1">Total Active Buyers</p>
                  <p className="text-3xl font-bold">8+</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-user-line text-2xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium mb-1">Total Active RFQs</p>
                  <p className="text-3xl font-bold">54+</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-2xl"></i>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium mb-1">Verified Buyers</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-shield-check-line text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection Banner */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-keyhole-line text-xl text-blue-600"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Protection Enabled</h3>
              <p className="text-sm text-gray-600 mb-3">
                All buyer contact information is protected. Connect through our secure messaging system to maintain privacy and security for both parties.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-blue-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium">Verified Buyers Only</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium">Secure Messaging</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium">Quality Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 sticky top-[120px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  placeholder="Search by name, company, or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Industry Filter */}
            <div className="lg:w-64">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedIndustry || selectedCountry) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('All');
                  setSelectedCountry('All');
                }}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer text-sm font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredBuyers.length}</span> {filteredBuyers.length === 1 ? 'buyer' : 'buyers'}
            </p>
          </div>
        </div>
      </section>

      {/* Buyers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBuyers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-search-line text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No buyers found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('All');
                  setSelectedCountry('All');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors cursor-pointer font-medium whitespace-nowrap"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBuyers.map((buyer) => (
                <div key={buyer.id} className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`${buyer.logo} text-2xl text-blue-600`}></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{buyer.company}</h3>
                        <p className="text-sm text-gray-500">{buyer.businessType}</p>
                      </div>
                    </div>
                    {buyer.verified && (
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-verified-badge-fill text-lg text-blue-600"></i>
                      </div>
                    )}
                  </div>

                  {/* Location & Industry */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="ri-map-pin-line text-blue-600"></i>
                      <span>{buyer.city}, {buyer.country}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="ri-building-line text-blue-600"></i>
                      <span>{buyer.industry}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {buyer.description}
                  </p>

                  {/* Looking For */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Looking for:</p>
                    <div className="flex flex-wrap gap-2">
                      {buyer.lookingFor.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{buyer.activeRFQs}</p>
                      <p className="text-xs text-gray-500">Active RFQs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{buyer.totalOrders}</p>
                      <p className="text-xs text-gray-500">Total Orders</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{buyer.memberSince}</p>
                      <p className="text-xs text-gray-500">Member Since</p>
                    </div>
                  </div>

                  {/* Masked Contact Info */}
                  <div className="space-y-2 mb-4 bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <i className="ri-lock-line text-blue-600"></i>
                      Protected Contact Information
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <i className="ri-user-line text-gray-400 text-xs"></i>
                        <span className="text-gray-500">{buyer.maskedName}</span>
                        <i className="ri-lock-fill text-blue-600 text-xs ml-auto"></i>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <i className="ri-mail-line text-gray-400 text-xs"></i>
                        <span className="text-gray-500">{buyer.maskedEmail}</span>
                        <i className="ri-lock-fill text-blue-600 text-xs ml-auto"></i>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <i className="ri-phone-line text-gray-400 text-xs"></i>
                        <span className="text-gray-500">{buyer.maskedPhone}</span>
                        <i className="ri-lock-fill text-blue-600 text-xs ml-auto"></i>
                      </div>
                    </div>
                  </div>

                  {/* Buyer ID */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Buyer ID: <span className="font-mono text-gray-700">{buyer.id}</span></p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all whitespace-nowrap cursor-pointer">
                    <i className="ri-mail-send-line mr-2"></i>
                    Send Inquiry
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
