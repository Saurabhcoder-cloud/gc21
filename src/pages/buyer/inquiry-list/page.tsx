
import { useState } from 'react';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function InquiryListPage() {
  const [inquiryList, setInquiryList] = useState([
    {
      id: 1,
      product: 'Industrial LED Flood Light 200W',
      image: 'https://readdy.ai/api/search-image?query=industrial%20LED%20flood%20light%20200W%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=inq001&orientation=squarish',
      supplier: 'Bright Tech Industries',
      category: 'Lighting',
      price: '$45-50',
      moq: '500 pieces',
      addedDate: '2025-01-20',
    },
    {
      id: 2,
      product: 'Wireless Bluetooth Speaker',
      image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20portable%20speaker%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=inq002&orientation=squarish',
      supplier: 'AudioTech Solutions',
      category: 'Electronics',
      price: '$15-20',
      moq: '200 pieces',
      addedDate: '2025-01-21',
    },
    {
      id: 3,
      product: 'Bamboo Cutting Board Set',
      image: 'https://readdy.ai/api/search-image?query=bamboo%20wooden%20cutting%20board%20set%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=inq003&orientation=squarish',
      supplier: 'EcoLife Manufacturing',
      category: 'Home & Kitchen',
      price: '$8-12',
      moq: '1000 pieces',
      addedDate: '2025-01-22',
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showRFQModal, setShowRFQModal] = useState(false);

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === inquiryList.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(inquiryList.map((item) => item.id));
    }
  };

  const handleRemoveItem = (id: number) => {
    setInquiryList(inquiryList.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((item) => item !== id));
  };

  const handleSendRFQ = () => {
    setShowRFQModal(true);
  };

  return (
    <BuyerLayout>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Inquiry List</h1>
          <p className="text-gray-600">Save products you're interested in and send inquiries to multiple suppliers</p>
        </div>

        {inquiryList.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-bookmark-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Your inquiry list is empty</h3>
            <p className="text-gray-600 mb-6">Start adding products you're interested in to compare and send inquiries</p>
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line mr-2"></i>
              Browse Products
            </a>
          </div>
        ) : (
          <>
            {/* Actions Bar */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === inquiryList.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Select All ({inquiryList.length} items)
                    </span>
                  </label>
                  {selectedItems.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {selectedItems.length} selected
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  {selectedItems.length > 0 && (
                    <>
                      <button
                        onClick={handleSendRFQ}
                        className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                      >
                        <i className="ri-send-plane-line mr-2"></i>
                        Send RFQ ({selectedItems.length})
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                        <i className="ri-delete-bin-line mr-2"></i>
                        Remove Selected
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Inquiry List */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="divide-y divide-gray-200">
                {inquiryList.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-all">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1 cursor-pointer"
                      />
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.product}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.product}</h3>
                        <p className="text-sm text-gray-600 mb-3">{item.supplier}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <i className="ri-price-tag-3-line mr-1"></i>
                            {item.category}
                          </span>
                          <span className="flex items-center">
                            <i className="ri-money-dollar-circle-line mr-1"></i>
                            {item.price}
                          </span>
                          <span className="flex items-center">
                            <i className="ri-shopping-cart-line mr-1"></i>
                            MOQ: {item.moq}
                          </span>
                          <span className="flex items-center">
                            <i className="ri-calendar-line mr-1"></i>
                            Added: {item.addedDate}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                          <i className="ri-send-plane-line mr-2"></i>
                          Send Inquiry
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-white transition-all whitespace-nowrap">
                          <i className="ri-eye-line mr-2"></i>
                          View Details
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="px-4 py-2 border border-red-300 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-all whitespace-nowrap"
                        >
                          <i className="ri-delete-bin-line mr-2"></i>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Send RFQ Modal */}
      {showRFQModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Send RFQ to Suppliers</h3>
                <button
                  onClick={() => setShowRFQModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Selected Products ({selectedItems.length})</h4>
                <div className="space-y-2">
                  {inquiryList
                    .filter((item) => selectedItems.includes(item.id))
                    .map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.product} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{item.product}</p>
                          <p className="text-xs text-gray-600">{item.supplier}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Quantity Needed
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 1000 pieces"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Target Price
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., $10-15 per unit"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Shipping Country
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Expected Delivery
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    maxLength={500}
                    placeholder="Describe your specific requirements, quality standards, packaging needs, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRFQModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                  >
                    <i className="ri-send-plane-line mr-2"></i>
                    Send RFQ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </BuyerLayout>
  );
}
