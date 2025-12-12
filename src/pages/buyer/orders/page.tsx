
import { useState } from 'react';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function BuyerOrdersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'confirmed' | 'shipped' | 'completed'>('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders = [
    {
      id: 'ORD-2025-001',
      product: 'Wireless Bluetooth Earbuds',
      image: 'https://readdy.ai/api/search-image?query=modern%20wireless%20bluetooth%20earbuds%20with%20charging%20case%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=ord001&orientation=squarish',
      supplier: 'AudioTech Solutions',
      supplierCountry: 'China',
      quantity: '1000 pieces',
      unitPrice: '$2.40',
      totalAmount: '$2,400',
      status: 'In Production',
      orderDate: '2025-01-15',
      expectedDelivery: '2025-02-20',
      shippingAddress: '456 Industrial Park Road, Newark, NJ 07102, United States',
      paymentStatus: 'Paid',
      timeline: [
        { status: 'Order Placed', date: '2025-01-15', completed: true },
        { status: 'Payment Confirmed', date: '2025-01-16', completed: true },
        { status: 'In Production', date: '2025-01-18', completed: true },
        { status: 'Quality Check', date: 'Pending', completed: false },
        { status: 'Shipped', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false },
      ],
    },
    {
      id: 'ORD-2025-002',
      product: 'Solar Panel 300W',
      image: 'https://readdy.ai/api/search-image?query=modern%20solar%20panel%20photovoltaic%20module%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=ord002&orientation=squarish',
      supplier: 'Green Energy Systems',
      supplierCountry: 'Germany',
      quantity: '50 pieces',
      unitPrice: '$95.00',
      totalAmount: '$4,750',
      status: 'Shipped',
      orderDate: '2025-01-12',
      expectedDelivery: '2025-02-05',
      shippingAddress: '123 Business Avenue, Suite 500, New York, NY 10001, United States',
      paymentStatus: 'Paid',
      trackingNumber: 'DHL1234567890',
      timeline: [
        { status: 'Order Placed', date: '2025-01-12', completed: true },
        { status: 'Payment Confirmed', date: '2025-01-12', completed: true },
        { status: 'In Production', date: '2025-01-13', completed: true },
        { status: 'Quality Check', date: '2025-01-18', completed: true },
        { status: 'Shipped', date: '2025-01-20', completed: true },
        { status: 'Delivered', date: 'Expected: 2025-02-05', completed: false },
      ],
    },
    {
      id: 'ORD-2025-003',
      product: 'Stainless Steel Water Bottles',
      image: 'https://readdy.ai/api/search-image?query=stainless%20steel%20insulated%20water%20bottle%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=ord003&orientation=squarish',
      supplier: 'EcoLife Manufacturing',
      supplierCountry: 'China',
      quantity: '2000 pieces',
      unitPrice: '$6.50',
      totalAmount: '$13,000',
      status: 'Pending',
      orderDate: '2025-01-22',
      expectedDelivery: '2025-03-10',
      shippingAddress: '456 Industrial Park Road, Newark, NJ 07102, United States',
      paymentStatus: 'Pending',
      timeline: [
        { status: 'Order Placed', date: '2025-01-22', completed: true },
        { status: 'Payment Confirmed', date: 'Pending', completed: false },
        { status: 'In Production', date: 'Pending', completed: false },
        { status: 'Quality Check', date: 'Pending', completed: false },
        { status: 'Shipped', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false },
      ],
    },
    {
      id: 'ORD-2025-004',
      product: 'LED Strip Lights RGB 5M',
      image: 'https://readdy.ai/api/search-image?query=colorful%20RGB%20LED%20strip%20lights%20coiled%20on%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%2C%20professional%20lighting&width=400&height=400&seq=ord004&orientation=squarish',
      supplier: 'Bright Tech Industries',
      supplierCountry: 'China',
      quantity: '500 pieces',
      unitPrice: '$12.80',
      totalAmount: '$6,400',
      status: 'Completed',
      orderDate: '2024-12-10',
      expectedDelivery: '2025-01-15',
      deliveredDate: '2025-01-14',
      shippingAddress: '123 Business Avenue, Suite 500, New York, NY 10001, United States',
      paymentStatus: 'Paid',
      timeline: [
        { status: 'Order Placed', date: '2024-12-10', completed: true },
        { status: 'Payment Confirmed', date: '2024-12-10', completed: true },
        { status: 'In Production', date: '2024-12-12', completed: true },
        { status: 'Quality Check', date: '2024-12-28', completed: true },
        { status: 'Shipped', date: '2025-01-05', completed: true },
        { status: 'Delivered', date: '2025-01-14', completed: true },
      ],
    },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return order.status === 'Pending';
    if (activeTab === 'confirmed') return order.status === 'Confirmed';
    if (activeTab === 'shipped') return order.status === 'Shipped';
    if (activeTab === 'completed') return order.status === 'Completed';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Confirmed':
        return 'bg-blue-100 text-blue-700';
      case 'In Production':
        return 'bg-purple-100 text-purple-700';
      case 'Shipped':
        return 'bg-primary-light text-primary-dark';
      case 'Completed':
        return 'bg-primary-light text-primary-dark';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <BuyerLayout>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage all your purchase orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">
              {orders.filter((o) => o.status === 'In Production' || o.status === 'Shipped').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-primary">
              {orders.filter((o) => o.status === 'Completed').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">$26,550</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-1 p-2">
              {[
                { key: 'all', label: 'All Orders' },
                { key: 'pending', label: 'Pending' },
                { key: 'confirmed', label: 'In Production' },
                { key: 'shipped', label: 'Shipped' },
                { key: 'completed', label: 'Completed' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-primary-light text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Orders List */}
          <div className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <div key={order.id} className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{order.product}</h3>
                        <p className="text-sm text-gray-600">
                          {order.supplier} • {order.supplierCountry}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)} whitespace-nowrap ml-4`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span>Order ID: <strong className="text-gray-900">{order.id}</strong></span>
                      <span>Quantity: <strong className="text-gray-900">{order.quantity}</strong></span>
                      <span>Unit Price: <strong className="text-gray-900">{order.unitPrice}</strong></span>
                      <span>Total: <strong className="text-primary">{order.totalAmount}</strong></span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Ordered: {order.orderDate}</span>
                      <span>•</span>
                      <span>Expected: {order.expectedDelivery}</span>
                      {order.trackingNumber && (
                        <>
                          <span>•</span>
                          <span>Tracking: <strong>{order.trackingNumber}</strong></span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.paymentStatus === 'Paid' ? 'bg-primary-light text-primary-dark' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.paymentStatus}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
                    >
                      <i className="ri-eye-line mr-2"></i>
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                      <i className="ri-message-3-line mr-2"></i>
                      Contact Supplier
                    </button>
                    {order.status === 'Shipped' && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                        <i className="ri-truck-line mr-2"></i>
                        Track Shipment
                      </button>
                    )}
                  </div>
                </div>

                {/* Order Details */}
                {selectedOrder === order.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Timeline */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Order Timeline</h4>
                        <div className="space-y-4">
                          {order.timeline.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                item.completed ? 'bg-primary' : 'bg-gray-300'
                              }`}>
                                {item.completed ? (
                                  <i className="ri-check-line text-white"></i>
                                ) : (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-semibold ${
                                  item.completed ? 'text-gray-900' : 'text-gray-500'
                                }`}>
                                  {item.status}
                                </p>
                                <p className="text-xs text-gray-500">{item.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping Info */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Shipping Information</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Delivery Address</p>
                          <p className="text-sm text-gray-600">{order.shippingAddress}</p>
                          {order.trackingNumber && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-sm font-semibold text-gray-900 mb-1">Tracking Number</p>
                              <p className="text-sm text-primary font-mono">{order.trackingNumber}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
