
import { useState } from 'react';
import BuyerLayout from '../../../components/layout/BuyerLayout';

export default function BuyerMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      supplier: 'Bright Tech Industries',
      country: 'China',
      avatar: 'BT',
      lastMessage: 'We can offer you a better price for bulk orders',
      time: '5 min ago',
      unread: 3,
      online: true,
    },
    {
      id: 2,
      supplier: 'Global Textile Co.',
      country: 'India',
      avatar: 'GT',
      lastMessage: 'The samples have been shipped',
      time: '1 hour ago',
      unread: 1,
      online: false,
    },
    {
      id: 3,
      supplier: 'EcoLife Manufacturing',
      country: 'China',
      avatar: 'EL',
      lastMessage: 'Thank you for your order!',
      time: '2 hours ago',
      unread: 0,
      online: true,
    },
    {
      id: 4,
      supplier: 'Green Energy Systems',
      country: 'Germany',
      avatar: 'GE',
      lastMessage: 'Your shipment is on the way',
      time: '1 day ago',
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'supplier',
      text: 'Hello! Thank you for your inquiry about our LED flood lights.',
      time: '10:30 AM',
      date: '2025-01-22',
    },
    {
      id: 2,
      sender: 'buyer',
      text: 'Hi! I need 500 pieces. What is your best price?',
      time: '10:32 AM',
      date: '2025-01-22',
    },
    {
      id: 3,
      sender: 'supplier',
      text: 'For 500 pieces, we can offer $48 per unit. This includes free shipping to the US.',
      time: '10:35 AM',
      date: '2025-01-22',
    },
    {
      id: 4,
      sender: 'buyer',
      text: 'That sounds good. What is the lead time?',
      time: '10:40 AM',
      date: '2025-01-22',
    },
    {
      id: 5,
      sender: 'supplier',
      text: 'The production time is 20 days, and shipping takes about 5 days. So total 25 days.',
      time: '10:42 AM',
      date: '2025-01-22',
    },
    {
      id: 6,
      sender: 'supplier',
      text: 'We can offer you a better price for bulk orders. If you order 1000 pieces, the price will be $45 per unit.',
      time: '11:15 AM',
      date: '2025-01-22',
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Send message logic
      setMessageText('');
    }
  };

  const selectedConv = conversations.find((c) => c.id === selectedConversation);

  return (
    <BuyerLayout>
      <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-200px)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Messages</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`p-4 border-b border-gray-200 cursor-pointer transition-all ${
                  selectedConversation === conv.id ? 'bg-emerald-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">{conv.supplier}</h3>
                      {conv.unread > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-emerald-600 text-white text-xs font-semibold rounded-full flex-shrink-0">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{conv.country}</p>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-gray-500 mt-1">{conv.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          {selectedConv && (
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedConv.avatar}
                    </div>
                    {selectedConv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{selectedConv.supplier}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedConv.online ? 'Online' : 'Offline'} • {selectedConv.country}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
                    <i className="ri-phone-line text-xl"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
                    <i className="ri-more-2-fill text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md ${message.sender === 'buyer' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      message.sender === 'buyer'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'buyer' ? 'text-right' : 'text-left'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer flex-shrink-0"
              >
                <i className="ri-attachment-line text-xl"></i>
              </button>
              <div className="flex-1">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message..."
                  rows={2}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={!messageText.trim()}
                className="w-10 h-10 flex items-center justify-center bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 cursor-pointer"
              >
                <i className="ri-send-plane-fill text-xl"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
}
