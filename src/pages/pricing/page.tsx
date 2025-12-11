import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [isLoading, setIsLoading] = useState(true);

  // Detect visitor location and set currency
  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to detect location using timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta')) {
          setCurrency('INR');
        } else {
          // Fallback: Try IP-based detection
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          if (data.country_code === 'IN') {
            setCurrency('INR');
          }
        }
      } catch (error) {
        // Default to USD if detection fails
        console.log('Location detection failed, defaulting to USD');
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      priceUSD: 5000,
      priceINR: 199_999,
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 product listings',
        'Basic supplier verification',
        'Email support',
        'Standard shipping options',
        'Basic order tracking',
        'Monthly analytics reports',
        'Secure payment processing'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      priceUSD: 7000,
      priceINR: 499_999,
      description: 'For growing businesses',
      features: [
        'Everything in Starter',
        'Up to 200 product listings',
        'Priority supplier matching',
        'Advanced verification badges',
        '24/7 chat support',
        'Discounted shipping rates',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Custom payment terms',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      priceUSD: 10_000,
      priceINR: 799_999,
      description: 'For large-scale operations',
      features: [
        'Everything in Growth',
        'Unlimited product listings',
        'Custom supplier network',
        'White-label solutions',
        'Priority order processing',
        'Custom logistics solutions',
        'Dedicated success team',
        'Advanced security features',
        'Custom integrations',
        'Volume discounts',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const formatPrice = (priceUSD: number, priceINR: number) => {
    if (currency === 'INR') {
      return `₹${priceINR.toLocaleString('en-IN')}`;
    }
    return `$${priceUSD.toLocaleString('en-US')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Choose the plan that fits your business needs. All plans include our core features.</p>
          
          {/* Currency Toggle */}
          {!isLoading && (
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${currency === 'USD' ? 'text-white font-semibold' : 'text-gray-400'}`}>USD ($)</span>
              <button
                onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
                className="relative w-16 h-8 bg-primary rounded-full transition-colors cursor-pointer"
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${currency === 'INR' ? 'translate-x-9' : 'translate-x-1'}`}></div>
              </button>
              <span className={`text-lg ${currency === 'INR' ? 'text-white font-semibold' : 'text-gray-400'}`}>INR (₹)</span>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      {formatPrice(plan.priceUSD, plan.priceINR)}
                    </span>
                    <span className="text-gray-600 ml-2">/year</span>
                  </div>
                  <Link
                    to={plan.id === 'enterprise' ? '/contact' : '/auth/register'}
                    className={`block w-full text-center py-3 rounded-md font-semibold whitespace-nowrap transition-colors mb-8 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-dark text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="ri-check-line text-primary text-xl flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Compare All Features</h2>
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Growth</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Product listings</td>
                    <td className="px-6 py-4 text-center text-gray-700">50</td>
                    <td className="px-6 py-4 text-center text-gray-700">200</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Supplier verification</td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Priority support</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Analytics dashboard</td>
                    <td className="px-6 py-4 text-center text-gray-700">Basic</td>
                    <td className="px-6 py-4 text-center text-gray-700">Advanced</td>
                    <td className="px-6 py-4 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">API access</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Dedicated account manager</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">White-label solutions</td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-close-line text-gray-400 text-xl"></i></td>
                    <td className="px-6 py-4 text-center"><i className="ri-check-line text-primary text-xl"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, Growth and Enterprise plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-light">Our team is here to help you choose the right plan</p>
          <Link to="/contact" className="bg-white hover:bg-gray-100 text-primary px-10 py-4 rounded-md font-semibold whitespace-nowrap transition-colors inline-block">
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
