import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierOrdersPage() {
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: 'ORD-2847',
      buyer: {
        name: 'TechCorp Inc.',
        country: 'United States',
        avatar: 'TC',
      },
      product: 'Industrial LED Lights 50W',
      quantity: '5000 units',
      amount: '$62,500',
      status: 'confirmed',
      paymentStatus: 'deposit-paid',
      date: '2024-01-15',
      expectedShipment: '2024-02-15',
      progress: 25,
    },
    {
      id: 'ORD-2846',
      buyer: {
        name: 'Global Traders Ltd.',
        country: 'United Kingdom',
        avatar: 'GT',
      },
      product: 'Wireless Bluetooth Speaker',
      quantity: '2000 units',
      amount: '$17,600',
      status: 'in-production',
      paymentStatus: 'full-paid',
      date: '2024-01-12',
      expectedShipment: '2024-02-10',
      progress: 60,
    },
    {
      id: 'ORD-2845',
      buyer: {
        name: 'MegaMart Retail',
        country: 'Canada',
        avatar: 'MM',
      },
      product: 'Smart Home Motion Sensor',
      quantity: '10000 units',
      amount: '$58,000',
      status: 'shipped',
      paymentStatus: 'full-paid',
      date: '2024-01-08',
      expectedShipment: '2024-02-05',
      trackingNumber: 'TRK-8472639485',
      progress: 100,
    },
    {
      id: 'ORD-2844',
      buyer: {
        name: 'Electronics Hub',
        country: 'Australia',
        avatar: 'EH',
      },
      product: 'USB-C Fast Charging Cable',
      quantity: '15000 units',
      amount: '$48,000',
      status: 'completed',
      paymentStatus: 'full-paid',
      date: '2024-01-05',
      expectedShipment: '2024-02-01',
      progress: 100,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-700';
      case 'in-production': return 'bg-amber-100 text-amber-700';
      case 'shipped': return 'bg-purple-100 text-purple-700';
      case 'completed': return 'bg-primary-light text-primary-dark';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'deposit-paid': return 'bg-amber-100 text-amber-700';
      case 'full-paid': return 'bg-primary-light text-primary-dark';
      case 'pending': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredOrders = orders.filter(order => 
    filterStatus === 'all' || order.status === filterStatus
  );

  return (
    <SupplierLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Orders Management
          </h1>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Confirmed</span>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-check-double-line text-blue-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">8</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">In Production</span>
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <i className="ri-tools-line text-amber-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Shipped</span>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-ship-line text-purple-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">6</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Completed</span>
              <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-primary"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">234</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Orders
            </button>
            <button
              onClick={() => setFilterStatus('confirmed')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'confirmed' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setFilterStatus('in-production')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'in-production' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Production
            </button>
            <button
              onClick={() => setFilterStatus('shipped')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'shipped' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Shipped
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                filterStatus === 'completed' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {order.buyer.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status.replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getPaymentStatusColor(order.paymentStatus)}`}>
                        {order.paymentStatus.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{order.buyer.name}</p>
                    <p className="text-xs text-gray-500">
                      <i className="ri-map-pin-line mr-1"></i>
                      {order.buyer.country}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{order.amount}</p>
                  <p className="text-xs text-gray-500 mt-1">Order Date: {order.date}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Product</p>
                    <p className="text-sm font-semibold text-gray-900">{order.product}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Quantity</p>
                    <p className="text-sm font-semibold text-gray-900">{order.quantity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Expected Shipment</p>
                    <p className="text-sm font-semibold text-gray-900">{order.expectedShipment}</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">Production Progress</span>
                  <span className="text-xs font-semibold text-primary">{order.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${order.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Tracking Number */}
              {order.trackingNumber && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-purple-600 font-semibold mb-1">Tracking Number</p>
                      <p className="text-sm font-bold text-purple-900">{order.trackingNumber}</p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-all whitespace-nowrap">
                      Track Shipment
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {order.status === 'confirmed' && (
                  <button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap">
                    <i className="ri-play-line mr-2"></i>
                    Start Production
                  </button>
                )}
                {order.status === 'in-production' && (
                  <button className="px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all whitespace-nowrap">
                    <i className="ri-ship-line mr-2"></i>
                    Mark as Shipped
                  </button>
                )}
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-message-3-line mr-2"></i>
                  Message Buyer
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                  <i className="ri-eye-line mr-2"></i>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
