import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(100);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: 'Industrial LED Flood Light 200W High Efficiency Outdoor Lighting',
    images: [
      'https://readdy.ai/api/search-image?query=professional%20industrial%20LED%20flood%20light%20200W%20mounted%20on%20white%20wall%20in%20modern%20factory%20warehouse%20with%20bright%20illumination%20clean%20white%20background%20product%20photography%20high%20quality&width=800&height=800&seq=detail1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=close-up%20view%20of%20industrial%20LED%20flood%20light%20showing%20heat%20sink%20and%20mounting%20bracket%20on%20white%20background%20professional%20product%20photography%20high%20quality&width=800&height=800&seq=detail2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=industrial%20LED%20flood%20light%20illuminating%20outdoor%20area%20at%20night%20showing%20bright%20light%20beam%20on%20white%20background%20professional%20product%20photography%20high%20quality&width=800&height=800&seq=detail3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=industrial%20LED%20flood%20light%20size%20comparison%20with%20measurement%20scale%20on%20white%20background%20professional%20product%20photography%20high%20quality&width=800&height=800&seq=detail4&orientation=squarish',
    ],
    price: { min: 45, max: 52 },
    moq: 100,
    stock: 5000,
    leadTime: '15-20 days',
    rating: 4.8,
    reviews: 342,
    orders: 2450,
    supplier: {
      name: 'Bright Tech Industries',
      logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20light%20bulb%20symbol%20in%20blue%20colors%20on%20clean%20white%20background%20professional%20corporate%20branding%20high%20quality&width=200&height=200&seq=supplier1&orientation=squarish',
      location: 'Shenzhen, China',
      verified: true,
      yearsInBusiness: 12,
      responseRate: 98,
      responseTime: '2 hours'
    },
    specifications: [
      { label: 'Power', value: '200W' },
      { label: 'Voltage', value: 'AC 85-265V' },
      { label: 'Luminous Flux', value: '22000-24000 lm' },
      { label: 'Color Temperature', value: '3000K-6500K' },
      { label: 'IP Rating', value: 'IP66 Waterproof' },
      { label: 'Beam Angle', value: '120 degrees' },
      { label: 'Material', value: 'Aluminum Alloy' },
      { label: 'Lifespan', value: '50,000 hours' },
      { label: 'Warranty', value: '3 years' },
      { label: 'Certification', value: 'CE, RoHS, FCC' },
    ],
    description: 'Our Industrial LED Flood Light 200W is designed for high-performance outdoor and industrial lighting applications. Featuring advanced LED technology, this flood light delivers exceptional brightness with energy efficiency. The robust aluminum alloy housing ensures durability and excellent heat dissipation, while the IP66 waterproof rating makes it suitable for all weather conditions. Perfect for warehouses, stadiums, parking lots, construction sites, and outdoor areas requiring powerful illumination.',
    features: [
      'High luminous efficiency with 110-120 lm/W',
      'Energy saving up to 80% compared to traditional lighting',
      'Wide beam angle for maximum coverage',
      'Instant start with no warm-up time required',
      'Excellent heat dissipation system for extended lifespan',
      'Easy installation with adjustable mounting bracket',
      'Environmentally friendly with no mercury or harmful substances',
      'Low maintenance costs with long-lasting performance'
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'LED Street Light 150W Solar Powered',
      image: 'https://readdy.ai/api/search-image?query=modern%20LED%20street%20light%20with%20solar%20panel%20on%20top%20mounted%20on%20pole%20white%20background%20professional%20product%20photography%20high%20quality&width=300&height=300&seq=related1&orientation=squarish',
      price: '$65.00 - $75.00',
      moq: '50 pieces',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Industrial High Bay LED Light 100W',
      image: 'https://readdy.ai/api/search-image?query=industrial%20high%20bay%20LED%20light%20fixture%20hanging%20from%20ceiling%20white%20background%20professional%20product%20photography%20high%20quality&width=300&height=300&seq=related2&orientation=squarish',
      price: '$38.00 - $45.00',
      moq: '100 pieces',
      rating: 4.8
    },
    {
      id: 4,
      name: 'LED Wall Pack Light 80W Outdoor',
      image: 'https://readdy.ai/api/search-image?query=LED%20wall%20pack%20light%20fixture%20mounted%20on%20wall%20white%20background%20professional%20product%20photography%20high%20quality&width=300&height=300&seq=related3&orientation=squarish',
      price: '$32.00 - $38.00',
      moq: '100 pieces',
      rating: 4.6
    },
    {
      id: 5,
      name: 'LED Tunnel Light 120W Industrial',
      image: 'https://readdy.ai/api/search-image?query=LED%20tunnel%20light%20fixture%20with%20protective%20cover%20white%20background%20professional%20product%20photography%20high%20quality&width=300&height=300&seq=related4&orientation=squarish',
      price: '$42.00 - $50.00',
      moq: '80 pieces',
      rating: 4.7
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'John Smith',
      country: 'United States',
      rating: 5,
      date: '2025-01-15',
      comment: 'Excellent quality flood lights! Very bright and well-built. We ordered 500 units for our warehouse project and they exceeded our expectations. The supplier was very professional and responsive.',
      verified: true
    },
    {
      id: 2,
      author: 'Maria Garcia',
      country: 'Spain',
      rating: 4,
      date: '2025-01-10',
      comment: 'Good product with competitive pricing. The lights are working perfectly for our outdoor parking lot. Delivery was on time and packaging was secure.',
      verified: true
    },
    {
      id: 3,
      author: 'Ahmed Hassan',
      country: 'UAE',
      rating: 5,
      date: '2025-01-05',
      comment: 'Outstanding performance! These LED flood lights are perfect for our construction site. Very energy efficient and the brightness is impressive. Highly recommend this supplier.',
      verified: true
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-primary-dark cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/products" className="hover:text-primary-dark cursor-pointer">Products</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">LED Flood Light</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image Gallery */}
            <div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-full h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="bg-white rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-400 text-lg"></i>
                    <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <span className="text-sm text-gray-600">{product.orders} orders</span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${product.price.min}.00 - ${product.price.max}.00
                  </div>
                  <p className="text-sm text-gray-600">Price varies based on quantity</p>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Minimum Order:</span>
                    <span className="text-sm font-semibold text-gray-900">{product.moq} pieces</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Available Stock:</span>
                    <span className="text-sm font-semibold text-gray-900">{product.stock.toLocaleString()} pieces</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Lead Time:</span>
                    <span className="text-sm font-semibold text-gray-900">{product.leadTime}</span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Quantity (pieces)
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(product.moq, quantity - 10))}
                      className="w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center"
                    >
                      <i className="ri-subtract-line"></i>
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 10)}
                      className="w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center"
                    >
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Minimum order: {product.moq} pieces</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                    <i className="ri-mail-line mr-2"></i>
                    Contact Supplier
                  </button>
                  <button className="w-full px-6 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary-light transition-all whitespace-nowrap">
                    <i className="ri-price-tag-3-line mr-2"></i>
                    Get Latest Price
                  </button>
                  <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all whitespace-nowrap">
                    <i className="ri-bookmark-line mr-2"></i>
                    Add to Inquiry List
                  </button>
                </div>
              </div>

              {/* Supplier Card */}
              <div className="bg-white rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supplier Information</h3>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={product.supplier.logo}
                      alt={product.supplier.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-base font-semibold text-gray-900">{product.supplier.name}</h4>
                      {product.supplier.verified && (
                        <i className="ri-verified-badge-fill text-primary"></i>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {product.supplier.location}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Years in Business:</span>
                    <span className="font-semibold text-gray-900">{product.supplier.yearsInBusiness} years</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Response Rate:</span>
                    <span className="font-semibold text-gray-900">{product.supplier.responseRate}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-semibold text-gray-900">{product.supplier.responseTime}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => navigate(`/supplier/${product.id}`)}
                    className="w-full px-4 py-2 bg-primary-light text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap"
                  >
                    View Supplier
                  </button>
                  <button
                    onClick={() => {
                      // Scroll to contact section or open contact modal
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-lg shadow-sm mb-12">
            <div className="border-b border-gray-200">
              <div className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'description'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'specifications'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'reviews'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Reviews ({product.reviews})
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-700">
                        <i className="ri-checkbox-circle-fill text-primary mt-1"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">{spec.label}:</span>
                        <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-base font-semibold text-gray-900">{review.author}</h4>
                              {review.verified && (
                                <span className="px-2 py-0.5 bg-primary-light text-primary-dark text-xs font-medium rounded">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{review.country}</p>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`${
                                i < review.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
                              }`}
                            ></i>
                          ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                  data-product-shop
                >
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-dark transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-bold text-primary">{relatedProduct.price}</span>
                      <div className="flex items-center space-x-1">
                        <i className="ri-star-fill text-yellow-400 text-sm"></i>
                        <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">MOQ: {relatedProduct.moq}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}