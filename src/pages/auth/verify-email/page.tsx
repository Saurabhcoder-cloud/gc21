
import { useNavigate } from 'react-router-dom';

export default function VerifyEmailPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-mail-send-line text-4xl text-primary"></i>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Verify Your Email
          </h1>
          
          <p className="text-gray-600 mb-6">
            We've sent a verification link to your email address. Please check your inbox and click the link to activate your account.
          </p>

          <div className="bg-primary-light border border-primary rounded-lg p-4 mb-6">
            <p className="text-sm text-primary">
              <i className="ri-information-line mr-2"></i>
              The verification link will expire in 24 hours
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/auth/login')}
              className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap"
            >
              Go to Login
            </button>
            
            <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
              Resend Verification Email
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Didn't receive the email? Check your spam folder or contact support
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer flex items-center justify-center space-x-1"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}
