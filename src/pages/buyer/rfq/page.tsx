import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuyerRFQPage() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRFQ, setSelectedRFQ] = useState<RFQ | null>(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    unit: 'pieces',
    targetPrice: '',
    currency: 'USD',
    description: '',
    specifications: '',
    deliveryLocation: '',
    deliveryDate: '',
    paymentTerms: 'T/T',
    certifications: '',
    attachments: null as File[] | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rfqs: RFQ[] = [
    {
      id: 'RFQ-2025-001',
      product: 'Industrial LED Lights',
      category: 'Lighting & Electronics',
      quantity: '5000 units',
      targetPrice: '$10-15/unit',
      country: 'United States',
      city: 'San Francisco',
      status: 'Open',
      quotes: 8,
      date: '2025-01-15',
      description: 'Looking for high-quality industrial LED lights with 5-year warranty. Must be energy efficient and suitable for warehouse use.',
    },
    {
      id: 'RFQ-2025-002',
      product: 'Cotton T-Shirts',
      category: 'Apparel & Fashion',
      quantity: '10000 pcs',
      targetPrice: '$2.50-3.50/pc',
      country: 'United States',
      city: 'San Francisco',
      status: 'Quoted',
      quotes: 12,
      date: '2025-01-14',
      description: '100% cotton t-shirts in various sizes (S-XXL). Need custom printing capability. Prefer organic cotton.',
    },
    {
      id: 'RFQ-2025-003',
      product: 'Laptop Chargers',
      category: 'Electronics',
      quantity: '2000 units',
      targetPrice: '$7-10/unit',
      country: 'United States',
      city: 'San Francisco',
      status: 'Open',
      quotes: 5,
      date: '2025-01-13',
      description: 'Universal laptop chargers compatible with major brands. Must have safety certifications (UL, CE).',
    },
    {
      id: 'RFQ-2025-004',
      product: 'Ceramic Mugs',
      category: 'Home & Kitchen',
      quantity: '15000 pcs',
      targetPrice: '$1.20-2.00/pc',
      country: 'United States',
      city: 'San Francisco',
      status: 'Closed',
      quotes: 15,
      date: '2025-01-10',
      description: 'White ceramic mugs, 11oz capacity. Need custom logo printing. Dishwasher and microwave safe.',
    },
    {
      id: 'RFQ-2025-005',
      product: 'Bluetooth Speakers',
      category: 'Electronics',
      quantity: '3000 units',
      targetPrice: '$15-25/unit',
      country: 'United States',
      city: 'San Francisco',
      status: 'Open',
      quotes: 6,
      date: '2025-01-12',
      description: 'Portable Bluetooth speakers with waterproof rating IPX7. Battery life minimum 10 hours.',
    },
    {
      id: 'RFQ-2025-006',
      product: 'Office Chairs',
      category: 'Furniture',
      quantity: '500 units',
      targetPrice: '$80-120/unit',
      country: 'United States',
      city: 'San Francisco',
      status: 'Quoted',
      quotes: 9,
      date: '2025-01-11',
      description: 'Ergonomic office chairs with lumbar support. Adjustable height and armrests. Black color preferred.',
    },
  ];

  const filteredRFQs = filterStatus === 'All' ? rfqs : rfqs.filter(rfq => rfq.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-700';
      case 'Quoted': return 'bg-primary-light text-primary-dark';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, attachments: Array.from(e.target.files!) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and close modal
      setFormData({
        productName: '',
        category: '',
        quantity: '',
        unit: 'pieces',
        targetPrice: '',
        currency: 'USD',
        description: '',
        specifications: '',
        deliveryLocation: '',
        deliveryDate: '',
        paymentTerms: 'T/T',
        certifications: '',
        attachments: null
      });
      setShowCreateModal(false);
      
      // Show success message
      alert('RFQ created successfully! Suppliers will be notified.');
    } catch (error) {
      alert('Failed to create RFQ. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My RFQs
          </h1>
          <p className="text-gray-600 mt-1">Manage your buying requests and quotes</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line mr-2"></i>
          Create New RFQ
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total RFQs</p>
          <p className="text-2xl font-bold text-gray-900">{rfqs.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Open RFQs</p>
          <p className="text-2xl font-bold text-blue-600">{rfqs.filter(r => r.status === 'Open').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Quoted RFQs</p>
          <p className="text-2xl font-bold text-primary">{rfqs.filter(r => r.status === 'Quoted').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Total Quotes</p>
          <p className="text-2xl font-bold text-gray-900">{rfqs.reduce((sum, r) => sum + r.quotes, 0)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">Filter by Status:</span>
          {['All', 'Open', 'Quoted', 'Closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                filterStatus === status
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* RFQ List */}
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quotes</th>
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
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(rfq.status)}`}>
                      {rfq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-primary">{rfq.quotes} quotes</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{rfq.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedRFQ(rfq)}
                      className="text-primary hover:text-primary-dark font-medium text-sm cursor-pointer"
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
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  RFQ Details
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
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedRFQ.product}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">{selectedRFQ.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedRFQ.status)}`}>
                        {selectedRFQ.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Quotes Received</p>
                    <p className="text-3xl font-bold text-primary">{selectedRFQ.quotes}</p>
                  </div>
                </div>

                {/* RFQ Details */}
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
                    <p className="text-sm text-gray-600 mb-1">Date Posted</p>
                    <p className="font-semibold text-gray-900">{selectedRFQ.date}</p>
                  </div>
                </div>

                {/* Shipping Location */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    <i className="ri-map-pin-line mr-2"></i>
                    Shipping Location
                  </p>
                  <p className="text-blue-900">{selectedRFQ.city}, {selectedRFQ.country}</p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements & Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedRFQ.description}</p>
                </div>

                {/* Your Contact Info (visible to buyer) */}
                <div className="bg-primary-light rounded-lg p-4 border border-primary">
                  <p className="text-sm font-semibold text-primary mb-3">
                    <i className="ri-user-line mr-2"></i>
                    Your Contact Information (Visible to Suppliers)
                  </p>
                  <div className="space-y-2 text-sm text-primary">
                    <p><span className="font-semibold">Name:</span> John Smith</p>
                    <p><span className="font-semibold">Company:</span> TechCorp Industries</p>
                    <p><span className="font-semibold">Email:</span> john.smith@techcorp.com</p>
                    <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer">
                    <i className="ri-mail-line mr-2"></i>
                    View Quotes ({selectedRFQ.quotes})
                  </button>
                  <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all whitespace-nowrap cursor-pointer">
                    <i className="ri-edit-line mr-2"></i>
                    Edit RFQ
                  </button>
                  <button className="px-6 py-3 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-all whitespace-nowrap cursor-pointer">
                    <i className="ri-close-circle-line mr-2"></i>
                    Close RFQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Create RFQ Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Create New RFQ</h2>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Industrial LED Lights"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="machinery">Machinery</option>
                    <option value="textiles">Textiles</option>
                    <option value="chemicals">Chemicals</option>
                    <option value="food">Food & Beverage</option>
                    <option value="construction">Construction Materials</option>
                    <option value="automotive">Automotive Parts</option>
                    <option value="packaging">Packaging</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      placeholder="1000"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleInputChange}
                      className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
                    >
                      <option value="pieces">Pieces</option>
                      <option value="kg">Kilograms</option>
                      <option value="tons">Tons</option>
                      <option value="liters">Liters</option>
                      <option value="meters">Meters</option>
                      <option value="sets">Sets</option>
                    </select>
                  </div>
                </div>

                {/* Target Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Price (Optional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="targetPrice"
                      value={formData.targetPrice}
                      onChange={handleInputChange}
                      placeholder="10.50"
                      step="0.01"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CNY">CNY</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., New York, USA"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Delivery Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
                  />
                </div>

                {/* Payment Terms */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Terms <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm cursor-pointer"
                  >
                    <option value="T/T">T/T (Telegraphic Transfer)</option>
                    <option value="L/C">L/C (Letter of Credit)</option>
                    <option value="D/P">D/P (Documents against Payment)</option>
                    <option value="D/A">D/A (Documents against Acceptance)</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Western Union">Western Union</option>
                  </select>
                </div>

                {/* Certifications */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Required Certifications (Optional)
                  </label>
                  <input
                    type="text"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    placeholder="e.g., CE, ISO 9001, FDA"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your product requirements in detail..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* Specifications */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Technical Specifications (Optional)
                  </label>
                  <textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Size, color, material, power requirements, etc."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none"
                  />
                </div>

                {/* Attachments */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <i className="ri-upload-cloud-2-line text-4xl text-gray-400 mb-2"></i>
                      <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, DOC, JPG, PNG (Max 10MB each)</p>
                      {formData.attachments && (
                        <p className="text-sm text-primary mt-2 font-medium">
                          {formData.attachments.length} file(s) selected
                        </p>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end mt-8 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Creating...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill mr-2"></i>
                      Submit RFQ
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
