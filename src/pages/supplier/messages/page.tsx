import { useState } from 'react';
import SupplierLayout from '../../../components/layout/SupplierLayout';

export default function SupplierMessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      buyer: 'TechCorp Inc.',
      avatar: 'TC',
      lastMessage: 'Can you provide samples before bulk order?',
      time: '5 min ago',
      unread: 3,
      online: true,
    },
    {
      id: 2,
      buyer: 'Global Traders Ltd.',
      avatar: 'GT',
      lastMessage: 'Thank you for the quote. We will review it.',
      time: '1 hour ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      buyer: 'MegaMart Retail',
      avatar: 'MM',
      lastMessage: 'When can you ship the order?',
      time: '3 hours ago',
      unread: 1,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'buyer',
      text: 'Hello, I am interested in your Industrial LED Lights. Can you provide more details?',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'supplier',
      text: 'Hello! Thank you for your interest. Our LED lights are 50W with high efficiency. What quantity are you looking for?',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'buyer',
      text: 'We need around 5000 units. What is your best price for this quantity?',
      time: '10:35 AM',
    },
    {
      id: 4,
      sender: 'supplier',
      text: 'For 5000 units, we can offer $12.50 per unit. This includes packaging. Shipping cost depends on your location.',
      time: '10:38 AM',
    },
    {
      id: 5,
      sender: 'buyer',
      text: 'Can you provide samples before bulk order?',
      time: '10:40 AM',
    },
  ];

  return (
    <SupplierLayout>
      <div className="h-[calc(100vh-8rem)]">
        <div className="bg-white rounded-xl border border-gray-200 h-full flex overflow-hidden">
          {/* Conversations List */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all ${
                    selectedChat === conv.id ? 'bg-primary-light' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-light0 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">{conv.buyer}</h3>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    TC
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary-light0 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">TechCorp Inc.</h3>
                  <p className="text-xs text-primary">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                  <i className="ri-phone-line text-xl"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                  <i className="ri-more-2-fill text-xl"></i>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'supplier' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${msg.sender === 'supplier' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.sender === 'supplier'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'supplier' ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-end space-x-3">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-all flex-shrink-0">
                  <i className="ri-attachment-2 text-xl"></i>
                </button>
                <div className="flex-1">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        setMessageText('');
                      }
                    }}
                  ></textarea>
                </div>
                <button className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-dark transition-all flex-shrink-0">
                  <i className="ri-send-plane-fill text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
