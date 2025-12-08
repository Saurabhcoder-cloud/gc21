
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate admin login
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20geometric%20network%20pattern%20dark%20background%20technology%20digital%20connections%20minimal%20modern%20design%20professional%20business%20interface%20subtle%20grid%20lines%20dark%20navy%20slate%20colors&width=1920&height=1080&seq=admin-bg-001&orientation=landscape')] opacity-5 bg-cover bg-center"></div>
      
      <div className="relative w-full max-w-md">
        {/* Security Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <i className="ri-shield-keyhole-line text-red-400"></i>
            <span className="text-sm font-semibold text-red-400">Secure Admin Access</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="ri-admin-line text-3xl text-white"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Admin Portal
            </h1>
            <p className="text-sm text-gray-600 mt-2">Sign in to manage the platform</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400"></i>
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  placeholder="admin@tradehub.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400"></i>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="/auth/admin-forgot-password" className="text-sm font-medium text-red-600 hover:text-red-700">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Sign In to Admin Panel
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <i className="ri-error-warning-line text-amber-600 mt-0.5"></i>
              <div>
                <p className="text-xs font-semibold text-amber-900">Security Notice</p>
                <p className="text-xs text-amber-700 mt-1">
                  All admin activities are logged and monitored. Unauthorized access attempts will be reported.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center mt-6">
          <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            <i className="ri-arrow-left-line mr-2"></i>
            Back to main site
          </a>
        </div>
      </div>
    </div>
  );
}
