import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierReviewsPage() {
  const [filterRating, setFilterRating] = useState('all');

  const reviews = [
    {
      id: 1,
      buyer: 'TechCorp Inc.',
      avatar: 'TC',
      product: 'Industrial LED Lights 50W',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent quality products and fast shipping. The LED lights are exactly as described. Very professional supplier, highly recommended!',
      helpful: 24,
      response: null,
    },
    {
      id: 2,
      buyer: 'Global Traders Ltd.',
      avatar: 'GT',
      product: 'Wireless Bluetooth Speaker',
      rating: 4,
      date: '2024-01-12',
      comment: 'Good product quality. Packaging could be better but overall satisfied with the purchase. Communication was excellent.',
      helpful: 18,
      response: 'Thank you for your feedback! We will improve our packaging. Looking forward to serving you again.',
    },
    {
      id: 3,
      buyer: 'MegaMart Retail',
      avatar: 'MM',
      product: 'Smart Home Motion Sensor',
      rating: 5,
      date: '2024-01-10',
      comment: 'Outstanding service and product quality. The sensors work perfectly and the customization service was great. Will order again!',
      helpful: 31,
      response: 'Thank you so much! We appreciate your business and look forward to our continued partnership.',
    },
    {
      id: 4,
      buyer: 'Electronics Hub',
      avatar: 'EH',
      product: 'USB-C Fast Charging Cable',
      rating: 3,
      date: '2024-01-08',
      comment: 'Product is okay but delivery took longer than expected. Quality is acceptable for the price point.',
      helpful: 12,
      response: null,
    },
  ];

  const stats = {
    average: 4.6,
    total: 156,
    distribution: [
      { stars: 5, count: 98, percentage: 63 },
      { stars: 4, count: 42, percentage: 27 },
      { stars: 3, count: 12, percentage: 8 },
      { stars: 2, count: 3, percentage: 2 },
      { stars: 1, count: 1, percentage: 1 },
    ],
  };

  const filteredReviews = reviews.filter(review => 
    filterRating === 'all' || review.rating === parseInt(filterRating)
  );

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Reviews & Ratings
          </h1>
          <p className="text-gray-600 mt-1">Manage customer feedback and reviews</p>
        </div>

        {/* Rating Overview */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">{stats.average}</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`${
                        star <= Math.round(stats.average) ? 'ri-star-fill text-amber-500' : 'ri-star-line text-gray-300'
                      } text-xl`}
                    ></i>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{stats.total} reviews</p>
              </div>

              <div className="flex-1 space-y-2">
                {stats.distribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 w-8">{dist.stars}★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500"
                        style={{ width: `${dist.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{dist.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">Product Quality</span>
                  <i className="ri-star-fill text-primary"></i>
                </div>
                <p className="text-2xl font-bold text-primary">4.8</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-900">Communication</span>
                  <i className="ri-message-3-fill text-blue-600"></i>
                </div>
                <p className="text-2xl font-bold text-blue-900">4.7</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-purple-900">Shipping Speed</span>
                  <i className="ri-ship-fill text-purple-600"></i>
                </div>
                <p className="text-2xl font-bold text-purple-900">4.5</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-900">As Described</span>
                  <i className="ri-check-double-fill text-amber-600"></i>
                </div>
                <p className="text-2xl font-bold text-amber-900">4.6</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterRating === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilterRating(rating.toString())}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  filterRating === rating.toString() ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating} Stars
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{review.buyer}</h3>
                    <p className="text-xs text-gray-600 mb-2">{review.product}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className={`${
                              star <= review.rating ? 'ri-star-fill text-amber-500' : 'ri-star-line text-gray-300'
                            }`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-900 mb-4">{review.comment}</p>

              {review.response && (
                <div className="bg-primary-light border border-primary rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-reply-line text-primary mt-0.5"></i>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Your Response</p>
                      <p className="text-sm text-primary">{review.response}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    <i className="ri-thumb-up-line mr-1"></i>
                    Helpful ({review.helpful})
                  </button>
                </div>
                {!review.response && (
                  <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                    <i className="ri-reply-line mr-2"></i>
                    Respond
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
