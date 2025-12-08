import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

interface Buyer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  category: string;
  requirement: string;
  created_at: string;
}

export default function AdminBuyersPage() {
  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    category: 'EN590',
    requirement: '',
    password: ''
  });

  useEffect(() => {
    checkAdminStatus();
    fetchBuyers();
  }, []);

  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('user_type')
          .eq('id', user.id)
          .single();
        
        setIsAdmin(profile?.user_type === 'admin');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  const fetchBuyers = async () => {
    try {
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_type', 'buyer')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      const { data: companiesData } = await supabase
        .from('companies')
        .select('*')
        .eq('business_type', 'buyer');

      const buyersWithCompanies = profilesData?.map(profile => {
        const company = companiesData?.find(c => c.user_id === profile.id);
        return {
          id: profile.id,
          name: profile.name || 'N/A',
          email: profile.email || 'N/A',
          phone: profile.phone || 'N/A',
          company: company?.company_name || 'N/A',
          country: profile.country || 'N/A',
          city: profile.city || 'N/A',
          category: profile.category || 'N/A',
          requirement: company?.requirement || 'N/A',
          created_at: profile.created_at
        };
      }) || [];

      setBuyers(buyersWithCompanies);
    } catch (error) {
      console.error('Error fetching buyers:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to mask sensitive data for non-admin users
  const maskData = (data: string, type: 'email' | 'phone') => {
    if (isAdmin) return data;
    
    if (type === 'email') {
      return '••••••@••••.com';
    } else {
      return '+•••••••••••';
    }
  };

  const handleAddBuyer = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');

    try {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password || `Buyer${Math.random().toString(36).slice(-8)}!`
      });

      if (authError) throw authError;

      const userId = authData.user?.id;
      if (!userId) throw new Error('Failed to create user');

      // Insert profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          user_type: 'buyer',
          category: formData.category,
          country: formData.country,
          city: formData.city
        });

      if (profileError) throw profileError;

      // Insert company
      const { error: companyError } = await supabase
        .from('companies')
        .insert({
          user_id: userId,
          company_name: formData.company,
          contact_person_name: formData.name,
          business_type: 'buyer',
          preferred_categories: formData.category,
          country: formData.country,
          city: formData.city,
          requirement: formData.requirement
        });

      if (companyError) throw companyError;

      setSuccessMessage('Buyer added successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        city: '',
        category: 'EN590',
        requirement: '',
        password: ''
      });
      
      setTimeout(() => {
        setShowAddModal(false);
        setSuccessMessage('');
        fetchBuyers();
      }, 1500);

    } catch (error: any) {
      alert(error.message || 'Failed to add buyer');
    } finally {
      setSubmitting(false);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Country', 'City', 'Category', 'Requirement'];
    const csvContent = [
      headers.join(','),
      ...filteredBuyers.map(buyer => 
        [buyer.name, buyer.email, buyer.phone, buyer.company, buyer.country, buyer.city, buyer.category, buyer.requirement]
          .map(field => `"${field}"`)
          .join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `buyers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    setShowQuickAction(false);
  };

  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         buyer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         buyer.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || buyer.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(buyers.map(b => b.category)))];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <i className="ri-loader-4-line text-4xl text-red-600 animate-spin"></i>
          <p className="mt-4 text-gray-600">Loading buyers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Buyer Management</h1>
          <p className="text-gray-600 mt-1">Manage and monitor all registered buyers</p>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setShowQuickAction(!showQuickAction)}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <i className="ri-flashlight-line"></i>
            Quick Action
            <i className={`ri-arrow-${showQuickAction ? 'up' : 'down'}-s-line`}></i>
          </button>

          {showQuickAction && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
              <button
                onClick={() => {
                  setShowAddModal(true);
                  setShowQuickAction(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
              >
                <i className="ri-user-add-line text-red-600"></i>
                Add New Buyer
              </button>
              <button
                onClick={handleExportCSV}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
              >
                <i className="ri-download-line text-green-600"></i>
                Export to CSV
              </button>
              <button
                onClick={() => {
                  setShowImportModal(true);
                  setShowQuickAction(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
              >
                <i className="ri-upload-line text-blue-600"></i>
                Bulk Import
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <button
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
              >
                <i className="ri-time-line text-orange-600"></i>
                View Pending
              </button>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('all');
                  setShowQuickAction(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
              >
                <i className="ri-refresh-line text-gray-600"></i>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Buyers</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{buyers.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="ri-user-line text-2xl text-blue-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-green-600 flex items-center gap-1">
              <i className="ri-arrow-up-line"></i>
              +15% this month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Buyers</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{Math.floor(buyers.length * 0.85)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-green-600 flex items-center gap-1">
              <i className="ri-arrow-up-line"></i>
              +8% this month
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{Math.floor(buyers.length * 0.1)}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-2xl text-orange-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-gray-600">Awaiting verification</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">New This Month</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{Math.floor(buyers.length * 0.15)}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="ri-user-add-line text-2xl text-purple-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-green-600 flex items-center gap-1">
              <i className="ri-arrow-up-line"></i>
              +12% vs last month
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
              <input
                type="text"
                placeholder="Search buyers by name, email, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm whitespace-nowrap"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Buyers Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Buyer Info</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Requirement</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBuyers.map((buyer) => (
                <tr key={buyer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {buyer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{buyer.name}</p>
                        <p className="text-sm text-gray-600">{maskData(buyer.email, 'email')}</p>
                        <p className="text-sm text-gray-500">{maskData(buyer.phone, 'phone')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{buyer.company}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{buyer.city}</p>
                    <p className="text-sm text-gray-600">{buyer.country}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      {buyer.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-700 max-w-xs truncate">{buyer.requirement}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium whitespace-nowrap">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View Details">
                        <i className="ri-eye-line text-gray-600"></i>
                      </button>
                      {isAdmin && (
                        <>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                            <i className="ri-edit-line text-blue-600"></i>
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Delete">
                            <i className="ri-delete-bin-line text-red-600"></i>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBuyers.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-user-line text-6xl text-gray-300"></i>
            <p className="text-gray-600 mt-4">No buyers found</p>
          </div>
        )}
      </div>

      {/* Add Buyer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Add New Buyer</h2>
                <p className="text-gray-600 text-sm mt-1">Fill in the buyer information below</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <form onSubmit={handleAddBuyer} className="p-8">
              {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <p className="text-green-700 font-medium">{successMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Company Ltd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="United States"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="New York"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="EN590">EN590</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Crude Oil">Crude Oil</option>
                    <option value="LNG">LNG</option>
                    <option value="Petroleum">Petroleum</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Min 6 characters"
                    minLength={6}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirement <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Describe the buyer's requirements..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                      Adding Buyer...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-user-add-line"></i>
                      Add Buyer
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium whitespace-nowrap"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            <div className="border-b border-gray-200 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Bulk Import Buyers</h2>
                <p className="text-gray-600 text-sm mt-1">Upload a CSV file to import multiple buyers</p>
              </div>
              <button
                onClick={() => setShowImportModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-8">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-red-500 transition-colors cursor-pointer">
                <i className="ri-upload-cloud-line text-6xl text-gray-400"></i>
                <p className="text-gray-900 font-medium mt-4">Drop your CSV file here</p>
                <p className="text-gray-600 text-sm mt-2">or click to browse</p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium whitespace-nowrap">
                  Select File
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">CSV Format Requirements:</p>
                <p className="text-sm text-blue-700 mt-2">Name, Email, Phone, Company, Country, City, Category, Requirement</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}