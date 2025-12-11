import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
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
    <div className="min-h-screen bg-white">
      {/* Categories Dropdown Modal */}
      {showCategoriesDropdown && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowCategoriesDropdown(false)}
          ></div>
          <div className="fixed left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200" style={{ top: '180px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">All Categories</h3>
                <button
                  onClick={() => setShowCategoriesDropdown(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
                {categories.map((category, idx) => (
                  <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary hover:shadow-lg transition-all">
                    <a 
                      href={category.url}
                      className="flex items-center gap-3 mb-4 group cursor-pointer"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary flex-shrink-0">
                        <i className={`${category.icon} text-2xl`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">{category.name}</h4>
                    </a>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a 
                            href={`${category.url}/${sub.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                            className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all inline-block cursor-pointer"
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
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors cursor-pointer whitespace-nowrap"
                >
                  View All Categories
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Promo Banner */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-primary-dark to-primary text-white py-2 text-center text-sm">
        <span className="mr-2">Super Deal: 200K+ curated products for seasonal sourcing.</span>
        <a href="/promotions" className="underline font-semibold hover:text-primary-light cursor-pointer">Explore now →</a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: '40px' }}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(47, 128, 237, 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(86, 204, 242, 0.35) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The leading B2B ecommerce platform for global trade
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Explore verified suppliers, negotiate confidently, and secure logistics for every shipment with Global Connection 21.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-10">
              <div className="bg-white rounded-lg shadow-2xl p-2 flex items-center">
                <select 
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 focus:outline-none bg-transparent"
                >
                  <option value="all">All</option>
                  <option value="products">Products</option>
                  <option value="suppliers">Suppliers</option>
                  <option value="rfq">RFQ</option>
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, suppliers, categories..."
                  className="flex-1 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  aria-label="Search by image"
                >
                  <i className="ri-camera-line text-xl"></i>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Search Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-12">
              <span className="text-sm uppercase tracking-wide text-white/60">Frequently searched:</span>
              <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors whitespace-nowrap cursor-pointer">Smart home devices</button>
              <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors whitespace-nowrap cursor-pointer">Eco packaging</button>
              <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors whitespace-nowrap cursor-pointer">OEM apparel</button>
              <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors whitespace-nowrap cursor-pointer">Industrial robots</button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-sm uppercase tracking-wide text-white/60 mb-1">Active buyers</div>
                <div className="text-3xl font-semibold text-white">200M+</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-white/60 mb-1">Product categories</div>
                <div className="text-3xl font-semibold text-white">5,900</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-white/60 mb-1">Regions & suppliers</div>
                <div className="text-3xl font-semibold text-white">200+ regions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="rounded-3xl bg-gray-900 text-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Millions of business offerings</h3>
              <p className="text-white/70 text-sm leading-relaxed">Source from a rich catalogue of ready-to-ship and customizable products.</p>
            </div>
            <div className="rounded-3xl bg-gray-900 text-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Assured quality and compliance</h3>
              <p className="text-white/70 text-sm leading-relaxed">Certified suppliers, inspection services, and end-to-end quality control.</p>
            </div>
            <div className="rounded-3xl bg-gray-900 text-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">One-stop trading solutions</h3>
              <p className="text-white/70 text-sm leading-relaxed">Payments, financing, and logistics tools built for global commerce.</p>
            </div>
            <div className="rounded-3xl bg-gray-900 text-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Tailored sourcing guidance</h3>
              <p className="text-white/70 text-sm leading-relaxed">Trade advisors and market insights tailored to your growth goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Products Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[260px,1fr]">
            {/* Categories Sidebar */}
            <aside className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm h-fit">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
                <a href="/categories" className="text-sm font-medium text-primary hover:text-primary cursor-pointer">View all</a>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  { icon: 'ri-t-shirt-air-line', name: 'Apparel & Accessories', url: '/category/apparel-accessories' },
                  { icon: 'ri-smartphone-line', name: 'Consumer Electronics', url: '/category/consumer-electronics' },
                  { icon: 'ri-building-4-line', name: 'Construction & Real Estate', url: '/category/construction-real-estate' },
                  { icon: 'ri-car-line', name: 'Vehicles & Accessories', url: '/category/vehicles-accessories' },
                  { icon: 'ri-robot-line', name: 'Machinery & Equipment', url: '/category/machinery-equipment' },
                  { icon: 'ri-home-8-line', name: 'Home, Garden & Furniture', url: '/category/home-garden' },
                  { icon: 'ri-heart-pulse-line', name: 'Health & Beauty', url: '/category/health-beauty' },
                  { icon: 'ri-archive-stack-line', name: 'Packaging & Printing', url: '/category/packaging-printing' },
                  { icon: 'ri-basketball-line', name: 'Sports & Entertainment', url: '/category/sports-entertainment' },
                  { icon: 'ri-gift-line', name: 'Gifts & Crafts', url: '/category/gifts-crafts' },
                  { icon: 'ri-suitcase-line', name: 'Luggage, Bags & Cases', url: '/category/luggage-bags-cases' },
                  { icon: 'ri-paw-line', name: 'Pet Supplies', url: '/category/pet-supplies' },
                  { icon: 'ri-shield-keyhole-line', name: 'Security & Protection', url: '/category/security-protection' },
                  { icon: 'ri-tools-line', name: 'Service Equipment', url: '/category/service-equipment' },
                  { icon: 'ri-bear-smile-line', name: 'Mother, Kids & Toys', url: '/category/mother-kids' },
                  { icon: 'ri-book-open-line', name: 'School & Office Supplies', url: '/category/school-office' },
                  { icon: 'ri-plant-line', name: 'Agriculture & Food', url: '/category/agriculture-food' },
                ].map((cat, idx) => (
                  <li key={idx}>
                    <a 
                      href={cat.url}
                      className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-primary-light hover:text-primary cursor-pointer"
                    >
                      <span className="flex items-center gap-3 font-medium">
                        <i className={`${cat.icon} text-lg text-primary`}></i>
                        {cat.name}
                      </span>
                      <i className="ri-arrow-right-up-line text-base"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Category Icons */}
              <div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between mb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Categories for you</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Explore high-performing categories with ready stock</h3>
                  </div>
                  <a href="/categories" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-500 cursor-pointer whitespace-nowrap">
                    Browse marketplace
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {[
                    { name: 'Smart Watches', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNorhayqLcM_Hi1OzwDDrx3f6kEWI4UYIy6w&s' },
                    { name: 'Electric Bikes', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayGNqsSk0auKB8t81FgRXdmHprRgBRG_sOg&s' },
                    { name: 'Electric Scooters', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4tdDgRVZXcMT0_b4xJ9DHUNMFYUy_t8_xw&s' },
                    { name: 'Mobile Phones', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsU2eZt5-yMpsQxEfMiSjqAicOGsWEMvWK6Q&s' },
                    { name: 'Laptops', img: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/07/laptop.jpeg.jpg' },
                    { name: 'Electric Motorcycles', img: 'https://assets.bizclikmedia.net/1800/67aa7f479d0100a4aa6a3975fd4395d8:31b290a874a7440993999a5f55a9e7e3/verge-ts-pro-electric-motorbike-first-ride-front-gear.webp' },
                    { name: 'Car Accessories', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawlYfB8AzmP4UYVUsqHkVt2CcCc52_YnA1A&s' },
                    { name: 'Toys', img: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-07/44289962475_e5c5209506_b.jpg' },
                    { name: 'Bags', img: 'https://tiimg.tistatic.com/fp/1/009/273/ladies-designer-bags-448.jpg' },
                    { name: 'Men Shoes', img: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/3/paioXPum_7bbbdd2c194546c48db078ae975e880f.jpg' },
                    { name: 'Women Shoes', img: 'https://www.darveys.com/blog/wp-content/uploads/2021/09/Featured_Image_Shoes-brands-for-women-1.jpg' },
                    { name: 'Home Appliances', img: 'https://img.freepik.com/free-photo/modern-kitchen-with-sleek-appliances-breakfast-bar_9975-33069.jpg?semt=ais_incoming&w=740&q=80' },
                  ].map((item, idx) => (
                    <a 
                      key={idx}
                      href={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-xl cursor-pointer"
                    >
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-100 bg-gray-50">
                        <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                      <span className="text-xs font-medium text-primary">Shop now</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Apparel & Accessories */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Apparel & Accessories</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/apparel-accessories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: 'African Ankara Print Set', img: 'https://i.pinimg.com/736x/5b/e0/33/5be0334cf21f77fa8eabca5a9364a828.jpg', desc: 'Vibrant wax print two-piece set crafted for boutique retailers.', price: '$18.50 - $26.80', moq: 'MOQ 80 sets' },
                    { name: 'Tactical Outdoor Jacket', img: 'https://cdn.media.amplience.net/i/tumi/FW24_Seasonal_Outerwear_Talent_MensShell_Black_0175_v2_72%20DPI%20RGB?fmt=auto', desc: 'Water-resistant softshell jacket with modular pockets and fleece lining.', price: '$34.00 - $52.00', moq: 'MOQ 150 pcs' },
                    { name: 'Nursing Dress Collection', img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/JV/ZV/RL/2977374/manufacturer-of-women-s-labor-delivery-maternity-nursing-nightgown-for-hospital-breastfeeding-sleepwears-500x500.jpg', desc: 'Breathable cotton nursing dresses with hidden zipper panels.', price: '$16.90 - $24.50', moq: 'MOQ 120 pcs' },
                    { name: 'Performance Fishing Suit', img: 'https://www.gillfishing.com/wp-content/uploads/2023/07/Gill_Fishing_MeridianXSuit_Supporting_1.jpg', desc: 'UV-protective fishing gear with quick-dry fabric and vented panels.', price: '$42.00 - $68.00', moq: 'MOQ 90 sets' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Apparel & Accessories</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Consumer Electronics */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Consumer Electronics</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/consumer-electronics" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: '4K Action Camera Kit', img: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sports-action-camera/b/g/0/ultra-hd-4k-wifi-sports-cam-x20-30m-waterproof-action-camera-original-imahd5fmjnvyczva.jpeg?q=90', desc: 'Waterproof action camera with dual screens and magnetic mounts.', price: '$72.00 - $96.00', moq: 'MOQ 60 kits' },
                    { name: 'Wireless ANC Earbuds', img: 'https://elver.in/cdn/shop/files/Product_Images_1.png?v=1756470086', desc: 'Hybrid noise-cancelling earbuds with 48-hour battery life.', price: '$21.50 - $34.00', moq: 'MOQ 300 sets' },
                    { name: 'Smart Home Hub Display', img: 'https://i.ytimg.com/vi/apAIQk4TaKM/maxresdefault.jpg', desc: 'Touchscreen smart display with voice assistant and IoT integrations.', price: '$58.00 - $84.00', moq: 'MOQ 180 units' },
                    { name: 'Ultra-thin Laptop', img: 'https://www.hindustantimes.com/ht-img/img/2025/09/09/550x309/ultra_thin_laptops_1757411645755_1757411657044.jpg', desc: 'Lightweight 14" ultrabook with Intel i7 processor and OLED display.', price: '$640 - $820', moq: 'MOQ 50 units' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Consumer Electronics</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Construction & Real Estate */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Construction & Real Estate</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/construction-real-estate" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: 'Prefab Modular Office', img: 'https://cpimg.tistatic.com/7042248/b/5/prefabricated-site-office-cabin-with-glass.jpg', desc: 'Prefab steel structure office modules with insulated panels.', price: '$8,900 - $12,400', moq: 'MOQ 2 units' },
                    { name: 'Eco Concrete Blocks', img: 'https://api.content.travisperkins.co.uk/site/binaries/content/gallery/how-to-pick-concrete-blocks-hero---stack-of-hollow-concrete-blocks.jpg', desc: 'Lightweight aerated concrete blocks for sustainable building.', price: '$0.32 - $0.48 / piece', moq: 'MOQ 10K pcs' },
                    { name: 'Aluminum Curtain Wall System', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGteI_dga1MdQl6Lza596DemdBtfZOOYebjg&s', desc: 'Glazed curtain wall panels engineered for commercial towers.', price: '$120 - $168 / sqm', moq: 'MOQ 500 sqm' },
                    { name: 'Solar Roof Tiles', img: 'https://www.pv-magazine-india.com/wp-content/uploads/sites/8/2022/07/SunEdison_Arka_Product-image_1-1-1200x575.jpg', desc: 'Interlocking photovoltaic roof tiles with tempered glass surface.', price: '$28.00 - $43.00', moq: 'MOQ 5K tiles' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Construction & Real Estate</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Vehicles & Accessories */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Vehicles & Accessories</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/vehicles-accessories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: 'Last-Mile Delivery E-Bike', img: 'https://framerusercontent.com/images/AakV6DrzC7wfBHzJi5FNKRQLHeA.jpeg', desc: 'Cargo e-bike with swappable battery packs and integrated GPS.', price: '$920 - $1,280', moq: 'MOQ 40 units' },
                    { name: 'Autonomous Warehouse AGV', img: 'https://www.kendrion.com/fileadmin/_processed_/d/4/csm_agv-keyvisual_bd60d4cab7.jpg', desc: 'LiDAR guided autonomous guided vehicle for warehouse logistics.', price: '$7,600 - $9,800', moq: 'MOQ 5 units' },
                    { name: 'Carbon Fiber Motorcycle Helmet', img: 'https://www.livehindustan.com/lh-img/uploadimage/library/2022/12/16/16_9/16_9_1/agv_pista_gp_rr_futuro_carbon_most_expensive_helmet_in_india_1671184877.jpg', desc: 'ECE-certified full-face helmet with integrated Bluetooth comms.', price: '$88.00 - $126.00', moq: 'MOQ 200 pcs' },
                    { name: 'Smart Car HUD', img: 'https://content.presspage.com/uploads/2702/91df4e9e-9456-44e9-8b92-c1e511b01cde/1920_4-2.jpg?10000', desc: 'Augmented reality windshield HUD with ADAS overlays.', price: '$210 - $295', moq: 'MOQ 80 units' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Vehicles & Accessories</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Machinery & Equipment */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Machinery & Equipment</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/machinery-equipment" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: 'CNC Fiber Laser Cutter', img: 'https://5.imimg.com/data5/SELLER/Default/2021/5/GF/PG/UM/58624978/cnc-fiber-laser-cutting-machine.jpg', desc: 'High-precision fiber laser cutting machine with auto-focus head.', price: '$18,000 - $26,000', moq: 'MOQ 1 set' },
                    { name: 'Automated Sachet Packing Line', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuMh2XNysv6lOTZ6rjyPDHu9P9SdksboW8w&s', desc: 'Servo-driven sachet filling and sealing line for powders and liquids.', price: '$9,500 - $14,800', moq: 'MOQ 1 set' },
                    { name: 'Industrial Air Compressor', img: 'https://www.shutterstock.com/image-photo/closeup-air-compressor-unit-featuring-600nw-2536084853.jpg', desc: 'Oil-free rotary screw compressor with smart control system.', price: '$4,200 - $6,900', moq: 'MOQ 3 units' },
                    { name: 'Automated Pallet Wrapper', img: 'https://en.innovamaquinaria.com/wp-content/uploads/sites/3/2022/02/Automatic-Stretch-Wrapping-System-Pallets-Industrial-Innova-Comparative-Guide.jpg', desc: 'Turntable stretch wrapper with pre-stretch film carriage.', price: '$3,100 - $4,500', moq: 'MOQ 2 units' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Machinery & Equipment</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Home, Garden & Furniture */}
              <div className="space-y-6" data-product-shop>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Home, Garden & Furniture</p>
                    <h4 className="mt-2 text-2xl font-semibold text-gray-900">Curated selections</h4>
                  </div>
                  <a href="/category/home-garden" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
                    View more
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" data-product-shop>
                  {[
                    { name: 'Smart Air Purifier', img: 'https://s.alicdn.com/@sc04/kf/Hcf08f56dcded4445bdbc232ba333226cH.png', desc: 'H13 HEPA purifier with air quality monitoring and mobile app.', price: '$92.00 - $138.00', moq: 'MOQ 120 units' },
                    { name: 'Minimalist Sofa Set', img: 'https://image.made-in-china.com/365f3j00RbAkOoPrwdcS/Apartment-Minimalist-Modular-Modern-Luxury-Sectional-Couch-Home-Living-Room-Furniture-Set-Cat-Claw-Skin-Sofa.webp', desc: 'Modular fabric sofa with sustainable pine frame and storage chaise.', price: '$420 - $680', moq: 'MOQ 15 sets' },
                    { name: 'Smart Garden Hydroponics', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20y-tySq6cMtb12jlzkLvSrrayRa2HwD1-Q&s', desc: 'Countertop hydroponic garden with automated LED grow cycles.', price: '$69.00 - $118.00', moq: 'MOQ 200 units' },
                    { name: 'Outdoor Solar Lanterns', img: 'https://www.thespruce.com/thmb/NnXoOgu79M83z1ndb7GIUbPMucU=/fit-in/1500x2667/filters:no_upscale():max_bytes(150000):strip_icc()/spr-asmad-solar-lights-outdoor-jarren-potter-06-b2f15db9c14a4524a33506302dc1cc60.jpeg', desc: 'Weatherproof solar lantern set with amber glow and auto timer.', price: '$16.80 - $24.60', moq: 'MOQ 400 sets' },
                  ].map((product, idx) => (
                    <a 
                      key={idx}
                      href="/product-detail"
                      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                      data-product-shop
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Home, Garden & Furniture</span>
                        <h5 className="text-lg font-semibold text-gray-900 leading-tight">{product.name}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">{product.price}</span>
                          <span>{product.moq}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending & New Arrivals */}
      <section className="bg-background-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Discover your next business opportunity</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Match with trending products and verified deals today</h2>
            </div>
            <a href="/discover" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary cursor-pointer whitespace-nowrap">
              Explore more categories
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)]">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Top Ranking */}
              <article className="rounded-[32px] bg-white p-8 shadow-xl border border-white">
                <header className="flex flex-col gap-2 mb-6">
                  <span className="inline-flex w-max items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">Top ranking</span>
                  <h3 className="text-2xl font-semibold text-gray-900">Standout bestsellers curated by sourcing experts</h3>
                  <p className="text-sm text-gray-500">Access the most in-demand items from audited suppliers and secure early-mover advantage.</p>
                </header>
                <div className="space-y-4">
                  {[
                    { title: 'Sustainable street sneakers', label: 'Top ranking', price: 'From $18.40', img: 'https://picsum.photos/seed/ranking-sneaker/320/220' },
                    { title: 'Electric city scooters', label: '132,800 items added today', price: 'MOQ 50 units', img: 'https://picsum.photos/seed/ranking-scooter/320/220' },
                    { title: 'OEM audio accessories', label: 'Verified factories', price: 'From $6.80', img: 'https://picsum.photos/seed/ranking-audio/320/220' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <div className="h-20 w-20 overflow-hidden rounded-2xl bg-gray-100 flex-shrink-0">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{item.label}</p>
                        <h4 className="mt-1 text-base font-semibold text-gray-900 leading-snug">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.price}</p>
                      </div>
                      <i className="ri-arrow-right-line text-gray-300"></i>
                    </div>
                  ))}
                </div>
              </article>

              {/* New Arrivals */}
              <article className="rounded-[32px] bg-gradient-to-br from-primary-light via-white to-white p-8 shadow-xl border border-primary">
                <header className="flex flex-col gap-2 mb-6">
                  <span className="inline-flex w-max items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">New arrivals</span>
                  <h3 className="text-2xl font-semibold text-gray-900">Fresh launches direct from factory floors</h3>
                  <p className="text-sm text-gray-600">Discover just-listed innovations ready for custom branding and rapid fulfillment.</p>
                </header>
                <div className="space-y-4">
                  {[
                    { title: 'Minimalist womenswear sets', label: 'New arrivals', price: 'MOQ 120 sets', img: 'https://picsum.photos/seed/arrival-fashion/320/220' },
                    { title: 'Gourmet beverage bundles', label: 'Factory pricing', price: 'From $1.90', img: 'https://picsum.photos/seed/arrival-beverage/320/220' },
                    { title: 'Smart home starters', label: 'Fast dispatch', price: 'MOQ 80 kits', img: 'https://picsum.photos/seed/arrival-smarthome/320/220' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <div className="h-20 w-20 overflow-hidden rounded-2xl bg-gray-100 flex-shrink-0">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark/80">{item.label}</p>
                        <h4 className="mt-1 text-base font-semibold text-gray-900 leading-snug">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.price}</p>
                      </div>
                      <i className="ri-arrow-right-line text-primary-dark/50"></i>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Top Deals */}
            <aside className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-primary-dark to-primary p-8 text-white shadow-xl">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">Top deals</span>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">Unlock exclusive sourcing incentives</h3>
                <p className="mt-3 text-sm text-white/70">Bundle procurement services with verified suppliers and save on logistics, inspections, and insurance.</p>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary"></span>
                  <span>Up to 18% off secure logistics bundles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary"></span>
                  <span>Flexible payment terms with Trade Assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary"></span>
                  <span>Dedicated sourcing advisor for bulk orders</span>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-3xl bg-white/10 h-40">
                  <img src="https://picsum.photos/seed/deal-team/480/320" alt="Dedicated sourcing advisor" className="h-full w-full object-cover" />
                </div>
                <a href="/services/trade-assurance" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white/90 cursor-pointer whitespace-nowrap">
                  Redeem trade services
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary flex-shrink-0">
                <i className="ri-shield-star-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Trade Assurance</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Secure payments with guaranteed refunds and shipment monitoring.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary flex-shrink-0">
                <i className="ri-pass-valid-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Verified Suppliers</h3>
                <p className="text-sm text-gray-600 leading-relaxed">On-site inspections, certifications, and transparent company profiles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary flex-shrink-0">
                <i className="ri-secure-payment-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Safe & Easy Payments</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Flexible payment terms, financing options, and escrow protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Request for quotation</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">Need customized sourcing? Submit an RFQ and get responses in 24 hours.</h2>
                <p className="text-white/80 text-lg">Describe your requirements, compare offers, and collaborate with vetted suppliers.</p>
              </div>
              <div className="flex flex-col gap-4">
                <a href="/rfq/create" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow hover:shadow-lg cursor-pointer whitespace-nowrap">
                  Create RFQ
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a href="/rfq" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 cursor-pointer whitespace-nowrap">
                  Learn how RFQ works
                  <i className="ri-information-line ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="space-y-4 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Discover</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">Discover your next business opportunity on Global Connection 21</h2>
                <p className="text-gray-600 text-lg">Access trade intelligence, personalized recommendations, and seamless order tracking—all in one platform.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/auth/register" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark cursor-pointer whitespace-nowrap">Register as Buyer</a>
                <a href="/auth/supplier-register" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 hover:border-gray-500 cursor-pointer whitespace-nowrap">Register as Supplier</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}