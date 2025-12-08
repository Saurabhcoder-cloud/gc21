export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">Last updated: January 20, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  At TradeHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our B2B marketplace platform. Please read this policy carefully to understand our practices regarding your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  We collect several types of information from and about users of our platform:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>Name, email address, phone number, and contact details</li>
                  <li>Company name, business address, and tax identification</li>
                  <li>Payment information and billing details</li>
                  <li>Profile information and preferences</li>
                  <li>Communication history and messages</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Business Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>Business licenses and certifications</li>
                  <li>Product catalogs and specifications</li>
                  <li>Transaction history and order details</li>
                  <li>Reviews and ratings</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To communicate with you about your account and activities</li>
                  <li>To send marketing and promotional communications (with your consent)</li>
                  <li>To detect, prevent, and address fraud and security issues</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To facilitate connections between buyers and suppliers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  We may share your information in the following circumstances:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">With Other Users</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Your business profile, product listings, and contact information may be visible to other users to facilitate B2B transactions. You control what information is publicly displayed.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">With Service Providers</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We work with third-party service providers for payment processing, hosting, analytics, and customer support. These providers have access to your information only to perform specific tasks on our behalf.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">For Legal Reasons</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Business Transfers</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-600">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-base text-gray-600 leading-relaxed mt-3">
                  To exercise these rights, please contact us at privacy@tradehub.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies help us remember your preferences, understand how you use our platform, and improve your experience. You can control cookies through your browser settings, but disabling cookies may limit some features of our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the platform after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-base text-gray-900 font-medium">TradeHub Privacy Team</p>
                  <p className="text-sm text-gray-600">Email: privacy@tradehub.com</p>
                  <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">Address: 123 Business Avenue, New York, NY 10001, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
