import { useState } from 'react';

interface BuyerInfo {
  name: string;
  company: string;
  country: string;
  city?: string;
  phone: string;
  email: string;
}

interface RFQ {
  id: string;
  product: string;
  category: string;
  quantity: string;
  targetPrice: string;
  buyer: BuyerInfo;
  status: 'New' | 'Quoted' | 'Closed';
  date: string;
  description: string;
}

interface BuyerContactBlockProps {
  buyer: BuyerInfo;
  isPaidSupplier: boolean;
}

function BuyerContactBlock({ buyer, isPaidSupplier }: BuyerContactBlockProps) {
  if (!isPaidSupplier) {
    return (
      <div className="rounded-lg border-2 border-dashed border-yellow-500 bg-yellow-50 p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-lock-line text-2xl text-yellow-900"></i>
          </div>
          <div className="flex-1">
            <p className="font-bold text-yellow-900 mb-2 text-lg">Contact Details Locked</p>
            <p className="text-yellow-800 mb-4">
              Upgrade to a Premium supplier plan to view buyer phone and email. 
              This allows you to contact buyers directly and close more deals!
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-yellow-900">
                <span className="font-semibold">Buyer Country:</span> {buyer.country}
              </p>
              {buyer.city && (
                <p className="text-sm text-yellow-900">
                  <span className="font-semibold">City:</span> {buyer.city}
                </p>
              )}
              <p className="text-sm text-yellow-900">
                <span className="font-semibold">Phone:</span> <span className="font-mono">+XX-XXXX-XXXXXX</span> 🔒
              </p>
              <p className="text-sm text-yellow-900">
                <span className="font-semibold">Email:</span> <span className="font-mono">xxxx@hidden.com</span> 🔒
              </p>
            </div>
            <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
              <i className="ri-vip-crown-line mr-2"></i>
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 p-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-shield-check-fill text-2xl text-white"></i>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <p className="font-bold text-emerald-900 text-lg">Buyer Contact Details</p>
            <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
              <i className="ri-vip-crown-fill mr-1"></i>
              Premium Access
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">Name:</span> {buyer.name}
            </p>
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">Company:</span> {buyer.company}
            </p>
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">Country:</span> {buyer.country}
            </p>
            {buyer.city && (
              <p className="text-sm text-emerald-900">
                <span className="font-semibold">City:</span> {buyer.city}
              </p>
            )}
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">Phone:</span> 
              <a href={`tel:${buyer.phone}`} className="ml-2 text-emerald-700 hover:text-emerald-800 font-semibold underline">
                {buyer.phone}
              </a>
            </p>
            <p className="text-sm text-emerald-900">
              <span className="font-semibold">Email:</span> 
              <a href={`mailto:${buyer.email}`} className="ml-2 text-emerald-700 hover:text-emerald-800 font-semibold underline">
                {buyer.email}
              </a>
            </p>
          </div>
          <div className="mt-4 flex space-x-3">
            <a
              href={`mailto:${buyer.email}`}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer inline-block"
            >
              <i className="ri-mail-line mr-2"></i>
              Send Email
            </a>
            <a
              href={`tel:${buyer.phone}`}
              className="px-4 py-2 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-all whitespace-nowrap cursor-pointer inline-block"
            >
              <i className="ri-phone-line mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SupplierInquiriesPage() {
  const [isPaidSupplier] = useState(true); // Change to false to test free supplier view
  const [selectedRFQ, setSelectedRFQ] = useState<RFQ | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const rfqs: RFQ[] = [
    {
      id: 'RFQ-2025-001',
      product: 'Industrial LED Lights',
      category: 'Lighting & Electronics',
      quantity: '5000 units',
      targetPrice: '$10-15/unit',
      buyer: {
        name: 'John Smith',
        company: 'TechCorp Industries',
        country: 'United States',
        city: 'San Francisco',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@techcorp.com',
      },
      status: 'New',
      date: '2025-01-15',
      description: 'Looking for high-quality industrial LED lights with 5-year warranty. Must be energy efficient and suitable for warehouse use. Need CE and UL certifications.',
    },
    {
      id: 'RFQ-2025-002',
      product: 'Cotton T-Shirts',
      category: 'Apparel & Fashion',
      quantity: '10000 pcs',
      targetPrice: '$2.50-3.50/pc',
      buyer: {
        name: 'Sarah Johnson',
        company: 'Global Retail Co.',
        country: 'United Kingdom',
        city: 'London',
        phone: '+44 20 1234 5678',
        email: 'sarah.j@globalretail.co.uk',
      },
      status: 'Quoted',
      date: '2025-01-14',
      description: '100% cotton t-shirts in various sizes (S-XXL). Need custom printing capability. Prefer organic cotton. GOTS certification required.',
    },
    {
      id: 'RFQ-2025-003',
      product: 'Laptop Chargers',
      category: 'Electronics',
      quantity: '2000 units',
      targetPrice: '$7-10/unit',
      buyer: {
        name: 'Michael Chen',
        company: 'PowerTech Solutions',
        country: 'Canada',
        city: 'Toronto',
        phone: '+1 (416) 555-9876',
        email: 'michael.chen@powertech.ca',
      },
      status: 'New',
      date: '2025-01-13',
      description: 'Universal laptop chargers compatible with major brands (Dell, HP, Lenovo). Must have safety certifications (UL, CE). 2-year warranty required.',
    },
    {
      id: 'RFQ-2025-004',
      product: 'Bluetooth Speakers',
      category: 'Electronics',
      quantity: '3000 units',
      targetPrice: '$15-25/unit',
      buyer: {
        name: 'Emily Rodriguez',
        company: 'AudioMax Inc.',
        country: 'United States',
        city: 'Los Angeles',
        phone: '+1 (310) 555-2468',
        email: 'emily.r@audiomax.com',
      },
      status: 'New',
      date: '2025-01-12',
      description: 'Portable Bluetooth speakers with waterproof rating IPX7. Battery life minimum 10 hours. Custom branding available. FCC certification needed.',
    },
  ];

  const filteredRFQs = filterStatus === 'All' ? rfqs : rfqs.filter(rfq => rfq.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Quoted': return 'bg-emerald-100 text-emerald-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Buyer Inquiries
          </h1>
          <p className="text-gray-600 mt-1">Browse and respond to buyer RFQs</p>
        </div>
        <div className="flex items-center space-x-3">
          {isPaidSupplier ? (
            <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg font-bold text-sm flex items-center">
              <i className="ri-vip-crown-fill mr-2"></i>
              Premium Supplier
            </span>
          ) : (
            <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
              <i className="ri-vip-crown-line mr-2"></i>
              Upgrade to Premium
            </button>
          )}
        </div>
      </div>

      {/* Info Banner */}
      {!isPaidSupplier && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex items-start">
            <i className="ri-information-line text-yellow-600 text-xl mr-3 mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-yellow-900 mb-1">Limited Access</p>
              <p className="text-sm text-yellow-800">
                As a free supplier, you can view buyer inquiries and product requirements, but buyer contact details (phone & email) are hidden. 
                Upgrade to Premium to unlock full buyer information.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Inquiries</p>
          <p className="text-2xl font-bold text-gray-900">{rfqs.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">New Inquiries</p>
          <p className="text-2xl font-bold text-blue-600">{rfqs.filter(r => r.status === 'New').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Quoted</p>
          <p className="text-2xl font-bold text-emerald-600">{rfqs.filter(r => r.status === 'Quoted').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Response Rate</p>
          <p className="text-2xl font-bold text-gray-900">85%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">Filter by Status:</span>
          {['All', 'New', 'Quoted', 'Closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                filterStatus === status
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">RFQ ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Target Price</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Buyer Country</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRFQs.map((rfq) => (
                <tr key={rfq.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{rfq.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900 font-medium">{rfq.product}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{rfq.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{rfq.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{rfq.targetPrice}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{rfq.buyer.country}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(rfq.status)}`}>
                      {rfq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{rfq.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedRFQ(rfq)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-pointer"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RFQ Detail Modal */}
      {selectedRFQ && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedRFQ(null)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Inquiry Details
                </h2>
                <button
                  onClick={() => setSelectedRFQ(null)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* RFQ Header */}
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm text-gray-600">{selectedRFQ.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedRFQ.status)}`}>
                      {selectedRFQ.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedRFQ.product}</h3>
                  <p className="text-gray-600">Posted on {selectedRFQ.date}</p>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <p className="font-semibold text-gray-900">{selectedRFQ.category}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Quantity</p>
                    <p className="font-semibold text-gray-900">{selectedRFQ.quantity}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Target Price</p>
                    <p className="font-semibold text-gray-900">{selectedRFQ.targetPrice}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Buyer Location</p>
                    <p className="font-semibold text-gray-900">
                      {selectedRFQ.buyer.city ? `${selectedRFQ.buyer.city}, ` : ''}{selectedRFQ.buyer.country}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements & Description</h4>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-4">{selectedRFQ.description}</p>
                </div>

                {/* Buyer Contact Information */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Buyer Contact Information</h4>
                  <BuyerContactBlock buyer={selectedRFQ.buyer} isPaidSupplier={isPaidSupplier} />
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4">
                  {isPaidSupplier ? (
                    <>
                      <button className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
                        <i className="ri-send-plane-fill mr-2"></i>
                        Submit Quote
                      </button>
                      <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all whitespace-nowrap cursor-pointer">
                        <i className="ri-bookmark-line mr-2"></i>
                        Save for Later
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all whitespace-nowrap cursor-pointer">
                      <i className="ri-vip-crown-line mr-2"></i>
                      Upgrade to Submit Quote
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
