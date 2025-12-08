import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, authHelpers, dbHelpers } from '../../../lib/supabase';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Company Information
    companyName: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    gstVatNumber: '',
    industry: '',
    annualPurchaseVolume: '',
    // Preferences
    preferredCategories: [] as string[],
    // Terms
    agreeToTerms: false,
  });

  const categories = [
    'Electronics & Electrical',
    'Machinery & Industrial',
    'Textiles & Apparel',
    'Home & Garden',
    'Construction & Real Estate',
    'Automotive & Transportation',
    'Food & Beverage',
    'Chemicals & Materials',
    'Packaging & Printing',
    'Sports & Entertainment',
    'Health & Medical',
    'Agriculture',
  ];

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      preferredCategories: prev.preferredCategories.includes(category)
        ? prev.preferredCategories.filter(c => c !== category)
        : [...prev.preferredCategories, category]
    }));
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid business email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
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
      setError('Please enter your company name');
      return false;
    }
    if (!formData.country) {
      setError('Please select your country');
      return false;
    }
    if (!formData.city.trim()) {
      setError('Please enter your city');
      return false;
    }
    if (!formData.address.trim()) {
      setError('Please enter your company address');
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

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms & Conditions');
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
          full_name: formData.fullName,
          user_type: 'buyer',
        }
      );

      if (authError) throw authError;
      if (!authData.user) throw new Error('Failed to create user');

      // 2. Create profile
      const { error: profileError } = await dbHelpers.createProfile({
        id: authData.user.id,
        email: formData.email,
        full_name: formData.fullName,
        phone: formData.phone,
        user_type: 'buyer',
        status: 'active',
        country: formData.country,
      });

      if (profileError) throw profileError;

      // 3. Create company
      const { error: companyError } = await dbHelpers.createCompany({
        user_id: authData.user.id,
        company_name: formData.companyName,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        postal_code: formData.postalCode,
        gst_vat_number: formData.gstVatNumber,
        industry: formData.industry,
        annual_purchase_volume: formData.annualPurchaseVolume,
        preferred_categories: formData.preferredCategories,
        verification_status: 'unverified',
      });

      if (companyError) throw companyError;

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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Create Buyer Account
          </h1>
          <p className="text-gray-600">Join thousands of businesses sourcing globally</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">Personal Info</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">Company Details</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 3 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">Preferences</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <i className="ri-error-warning-line text-red-600"></i>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
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
                    Company Name *
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
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
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
                    Company Address *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Street address, building number"
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
                    GST/VAT Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.gstVatNumber}
                    onChange={(e) => updateFormData('gstVatNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="GST/VAT number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Industry / Business Type
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => updateFormData('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Import/Export">Import/Export</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Annual Purchase Volume (Optional)
                  </label>
                  <select
                    value={formData.annualPurchaseVolume}
                    onChange={(e) => updateFormData('annualPurchaseVolume', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Range</option>
                    <option value="$0 - $50,000">$0 - $50,000</option>
                    <option value="$50,000 - $200,000">$50,000 - $200,000</option>
                    <option value="$200,000 - $500,000">$200,000 - $500,000</option>
                    <option value="$500,000 - $1M">$500,000 - $1M</option>
                    <option value="$1M - $5M">$1M - $5M</option>
                    <option value="$5M+">$5M+</option>
                  </select>
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

          {/* Step 3: Preferences */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Preferences</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Preferred Product Categories (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={formData.preferredCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
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
                    <a href="/terms" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
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
                    'Create Account'
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
            Want to sell products?{' '}
            <a href="/auth/supplier-register" className="font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer">
              Register as Supplier
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
