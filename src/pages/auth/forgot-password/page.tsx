
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-lock-unlock-line text-3xl text-emerald-600"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Forgot Password?
          </h1>
          <p className="text-gray-600">
            {submitted 
              ? "Check your email for reset instructions"
              : "Enter your email and we'll send you reset instructions"
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="ri-mail-line text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-check-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Sent!</h3>
              <p className="text-sm text-gray-600 mb-6">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              <p className="text-xs text-gray-500 mb-6">
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  try again
                </button>
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <a
              href="/auth/login"
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-1"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Back to Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
