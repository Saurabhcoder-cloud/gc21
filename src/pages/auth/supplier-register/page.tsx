import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, authHelpers, dbHelpers } from '../../../lib/supabase';

export default function SupplierRegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Contact Person Information
    contactPersonName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Step 2: Company Details
    companyName: '',
    businessType: '',
    yearEstablished: '',
    registrationNumber: '',
    gstVatNumber: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    website: '',
    // Step 3: Business Information
    numberOfEmployees: '',
    productionCapacity: '',
    exportPercentage: '',
    mainMarkets: [] as string[],
    mainProductCategories: [] as string[],
    shortDescription: '',
    detailedIntroduction: '',
    // Step 4: Documents & Verification
    companyLogo: null as File | null,
    businessLicense: null as File | null,
    certifications: [] as File[],
    agreeToTerms: false,
    agreeToSellerPolicies: false,
  });

  const businessTypes = [
    'Manufacturer',
    'Trading Company',
    'Wholesaler',
    'Distributor',
    'Agent',
    'Service Provider',
  ];

  const markets = [
    'North America',
    'South America',
    'Europe',
    'Asia',
    'Africa',
    'Middle East',
    'Oceania',
  ];

  const productCategories = [
    'Electronics & Electrical',
    'Machinery & Industrial Equipment',
    'Textiles & Apparel',
    'Home & Garden',
    'Construction & Real Estate',
    'Automotive & Transportation',
    'Food & Beverage',
    'Chemicals & Materials',
    'Packaging & Printing',
    'Sports & Entertainment',
    'Health & Medical',
    'Agriculture & Farming',
    'Beauty & Personal Care',
    'Furniture & Furnishings',
    'Toys & Hobbies',
    'Security & Protection',
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const toggleArrayItem = (field: 'mainMarkets' | 'mainProductCategories', item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const validateStep1 = () => {
    if (!formData.contactPersonName.trim()) {
      setError('Please enter contact person name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid business email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Please enter phone number');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.companyName.trim()) {
      setError('Please enter company name');
      return false;
    }
    if (!formData.businessType) {
      setError('Please select business type');
      return false;
    }
    if (!formData.yearEstablished) {
      setError('Please enter year established');
      return false;
    }
    if (!formData.country) {
      setError('Please select country');
      return false;
    }
    if (!formData.city.trim()) {
      setError('Please enter city');
      return false;
    }
    if (!formData.address.trim()) {
      setError('Please enter company address');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (formData.mainProductCategories.length === 0) {
      setError('Please select at least one product category');
      return false;
    }
    if (!formData.shortDescription.trim()) {
      setError('Please provide a short company description');
      return false;
    }
    return true;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setStep(4);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms & Conditions');
      return;
    }
    if (!formData.agreeToSellerPolicies) {
      setError('Please agree to the Seller Policies');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Create auth user
      const { data: authData, error: authError } = await authHelpers.signUp(
        formData.email,
        formData.password,
        {
          full_name: formData.contactPersonName,
          user_type: 'supplier',
        }
      );

      if (authError) throw authError;
      if (!authData.user) throw new Error('Failed to create user');

      // 2. Create profile
      const { error: profileError } = await dbHelpers.createProfile({
        id: authData.user.id,
        email: formData.email,
        full_name: formData.contactPersonName,
        phone: formData.phone,
        user_type: 'supplier',
        status: 'pending', // Pending until admin verifies
        country: formData.country,
      });

      if (profileError) throw profileError;

      // 3. Create company with all supplier details
      const { error: companyError } = await dbHelpers.createCompany({
        user_id: authData.user.id,
        company_name: formData.companyName,
        contact_person_name: formData.contactPersonName,
        business_type: formData.businessType,
        year_established: parseInt(formData.yearEstablished),
        registration_number: formData.registrationNumber,
        gst_vat_number: formData.gstVatNumber,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        postal_code: formData.postalCode,
        website: formData.website,
        number_of_employees: formData.numberOfEmployees,
        production_capacity: formData.productionCapacity,
        export_percentage: formData.exportPercentage,
        main_markets: formData.mainMarkets,
        preferred_categories: formData.mainProductCategories,
        short_description: formData.shortDescription,
        detailed_introduction: formData.detailedIntroduction,
        verification_status: 'pending', // Pending admin verification
      });

      if (companyError) throw companyError;

      // Note: File uploads would be handled separately with Supabase Storage
      // For now, we'll redirect to verification page
      
      // Success - redirect to verification page
      navigate('/auth/verify-email');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Become a Supplier
          </h1>
          <p className="text-gray-600">Join our global marketplace and reach millions of buyers worldwide</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="ml-2 text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">Contact Info</span>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="ml-2 text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">Company</span>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="ml-2 text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">Business</span>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                step >= 4 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                4
              </div>
              <span className="ml-2 text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">Verification</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <i className="ri-error-warning-line text-red-600"></i>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Step 1: Contact Person Information */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Person Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name (Contact Person) *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPersonName}
                    onChange={(e) => updateFormData('contactPersonName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Min. 8 characters"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                      <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400`}></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Re-enter password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <a
                  href="/auth/login"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back to Login
                </a>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                >
                  Continue
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Company Details */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateFormData('companyName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your Company Ltd."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => updateFormData('businessType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Year Established *
                  </label>
                  <input
                    type="number"
                    value={formData.yearEstablished}
                    onChange={(e) => updateFormData('yearEstablished', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="2010"
                    min="1900"
                    max={new Date().getFullYear()}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Registration Number *
                  </label>
                  <input
                    type="text"
                    value={formData.registrationNumber}
                    onChange={(e) => updateFormData('registrationNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Registration number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    GST/VAT Number *
                  </label>
                  <input
                    type="text"
                    value={formData.gstVatNumber}
                    onChange={(e) => updateFormData('gstVatNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="GST/VAT number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Legal Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Street address, building number, floor"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData('postalCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Postal code"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                >
                  Continue
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Business Information */}
          {step === 3 && (
            <form onSubmit={handleStep3Submit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of Employees
                  </label>
                  <select
                    value={formData.numberOfEmployees}
                    onChange={(e) => updateFormData('numberOfEmployees', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-500">101-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Production Capacity (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.productionCapacity}
                    onChange={(e) => updateFormData('productionCapacity', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g., 10,000 units/month"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Export Percentage
                  </label>
                  <select
                    value={formData.exportPercentage}
                    onChange={(e) => updateFormData('exportPercentage', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Range</option>
                    <option value="0-10%">0-10%</option>
                    <option value="11-30%">11-30%</option>
                    <option value="31-50%">31-50%</option>
                    <option value="51-70%">51-70%</option>
                    <option value="71-90%">71-90%</option>
                    <option value="91-100%">91-100%</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Main Markets / Regions (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {markets.map(market => (
                      <label key={market} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.mainMarkets.includes(market)}
                          onChange={() => toggleArrayItem('mainMarkets', market)}
                          className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">{market}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Main Product Categories * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
                    {productCategories.map(category => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.mainProductCategories.includes(category)}
                          onChange={() => toggleArrayItem('mainProductCategories', category)}
                          className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Short Company Description * (Max 200 characters)
                  </label>
                  <textarea
                    value={formData.shortDescription}
                    onChange={(e) => updateFormData('shortDescription', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={2}
                    maxLength={200}
                    placeholder="Brief description of your company and products"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.shortDescription.length}/200 characters</p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Detailed Company Introduction (Optional, Max 500 characters)
                  </label>
                  <textarea
                    value={formData.detailedIntroduction}
                    onChange={(e) => updateFormData('detailedIntroduction', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={4}
                    maxLength={500}
                    placeholder="Detailed information about your company, capabilities, certifications, and competitive advantages"
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.detailedIntroduction.length}/500 characters</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
                >
                  Continue
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Verification Documents */}
          {step === 4 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification Documents</h2>

              <div className="space-y-6">
                {/* Company Logo */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-image-line text-3xl text-emerald-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Logo (Optional)</h3>
                    <p className="text-sm text-gray-600 mb-4">Upload your company logo for better brand visibility</p>
                    <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-upload-2-line mr-2"></i>
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => updateFormData('companyLogo', e.target.files?.[0])}
                      />
                    </label>
                    {formData.companyLogo && (
                      <p className="text-sm text-emerald-600 mt-2">
                        <i className="ri-check-line mr-1"></i>
                        {formData.companyLogo.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Business License */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-file-text-line text-3xl text-emerald-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business License *</h3>
                    <p className="text-sm text-gray-600 mb-4">Upload your business registration or license document (PDF, JPG, PNG)</p>
                    <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-upload-2-line mr-2"></i>
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => updateFormData('businessLicense', e.target.files?.[0])}
                      />
                    </label>
                    {formData.businessLicense && (
                      <p className="text-sm text-emerald-600 mt-2">
                        <i className="ri-check-line mr-1"></i>
                        {formData.businessLicense.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Certifications */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-award-line text-3xl text-emerald-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Certifications (Optional)</h3>
                    <p className="text-sm text-gray-600 mb-4">Upload quality certifications (ISO, CE, FDA, etc.) - Multiple files allowed</p>
                    <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-upload-2-line mr-2"></i>
                      Choose Files
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => updateFormData('certifications', Array.from(e.target.files || []))}
                      />
                    </label>
                    {formData.certifications.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {formData.certifications.map((file, idx) => (
                          <p key={idx} className="text-sm text-emerald-600">
                            <i className="ri-check-line mr-1"></i>
                            {file.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-blue-600 text-xl mt-0.5"></i>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-900 mb-1">Verification Process</h4>
                      <p className="text-sm text-blue-800">
                        Your documents will be reviewed by our verification team within 2-3 business days. 
                        Verified suppliers receive a badge, higher search visibility, and access to premium features.
                        You'll receive an email notification once your account is verified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                    className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-0.5"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="/terms" target="_blank" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" target="_blank" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToSellerPolicies}
                    onChange={(e) => updateFormData('agreeToSellerPolicies', e.target.checked)}
                    className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-0.5"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the Seller Policies and understand that providing false information may result in account suspension
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={loading}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap disabled:opacity-50"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Creating Account...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/auth/login" className="font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer">
              Sign In
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Want to buy products?{' '}
            <a href="/auth/register" className="font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer">
              Register as Buyer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
