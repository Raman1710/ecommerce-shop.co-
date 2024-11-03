import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      
      <p className="mb-4">
        Welcome to <strong>Shop.co</strong>! We respect your privacy and are committed to protecting it through our compliance with this policy. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        While using our website, we may collect various types of personal data from you, including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your name, email address, and contact information.</li>
        <li>Transaction details for purchases made through our site.</li>
        <li>Usage data such as browser type, IP address, and page interaction.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We may use your personal data for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To process and fulfill your orders, including sending notifications about your order status.</li>
        <li>To provide customer support and respond to your inquiries.</li>
        <li>To improve our services by analyzing usage data and user feedback.</li>
        <li>To communicate with you about promotions, special offers, and new products (only if you’ve opted in).</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data to third parties. However, we may share your information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Service providers who help us run our operations, such as payment processors and delivery services.</li>
        <li>Legal authorities if required by law or to protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">
        We prioritize the security of your data and implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal data. If you wish to make any changes, please contact our customer support team.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to Our Privacy Policy</h2>
      <p className="mb-4">
        We may update this privacy policy periodically. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this privacy policy or our practices, please contact us at <strong>support@shop.co</strong>.
      </p>

      <p className="text-sm text-gray-500">Effective Date: October 2024</p>
    </div>
  );
};

export default PrivacyPolicy;
