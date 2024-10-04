import React from 'react';
import { Link } from 'react-router-dom';
const CustomerSupport = () => {
  return (
    <div className="customer-support-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Customer Support</h1>
      
      <p className="mb-4">
        At <strong>Shop.co</strong>, we are committed to providing you with the best shopping experience. Our dedicated customer support team is here to assist you with any queries, issues, or concerns you may have. Below are the various ways you can reach out to us for help.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How to Reach Us</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Email Support:</strong> You can contact our support team via email at <strong>support@shop.co</strong>. We aim to respond to all inquiries within 24 hours.</li>
        <li><strong>Phone Support:</strong> Call our customer service hotline at <strong>1-800-SHOPCO</strong>. Our lines are open Monday to Friday from 9:00 AM to 6:00 PM (EST).</li>
        <li><strong>Live Chat:</strong> Use our live chat feature to get instant support from one of our representatives. Available Monday to Friday from 9:00 AM to 6:00 PM (EST).</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <p className="mb-4">
        Before contacting our support team, you might find the answer to your question in our <strong><Link to="/faqs" className="text-blue-600 hover:underline" >FAQ section</Link></strong>. We’ve compiled answers to the most common questions about orders, shipping, returns, and more.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Order Issues</h2>
      <p className="mb-4">
        If you’re experiencing any issues with your order, such as delayed delivery, incorrect items, or damaged products, please reach out to our team via email or phone. Make sure to include your order number and a description of the issue so we can assist you promptly.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Returns and Exchanges</h2>
      <p className="mb-4">
        For returns and exchanges, please refer to our <strong><p className="text-blue-600 hover:underline inline-block">Return Policy</p></strong>. If you need further assistance with a return, our support team is happy to help guide you through the process.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Technical Support</h2>
      <p className="mb-4">
        If you are experiencing technical difficulties with our website, such as issues with checkout, login, or browsing, feel free to report it to <strong>techsupport@shop.co</strong>. Our technical team will address the issue as soon as possible.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Hours</h2>
      <p className="mb-4">
        Our customer support team is available during the following hours:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (EST)</li>
        <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM (EST)</li>
        <li><strong>Sunday:</strong> Closed</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Connect with Us</h2>
      <p className="mb-4">
        Stay updated with the latest promotions, product launches, and customer updates by following us on social media:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Facebook:</strong> <a href="https://facebook.com/" className="text-blue-600 hover:underline">@Shop.co</a></li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/" className="text-blue-600 hover:underline">@Shop_co</a></li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/" className="text-blue-600 hover:underline">@Shop.co</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">We're Here to Help!</h2>
      <p className="mb-4">
        Our goal is to ensure that you are completely satisfied with your shopping experience at <strong>Shop.co</strong>. Don't hesitate to reach out with any questions or concerns!
      </p>
    </div>
  );
};

export default CustomerSupport;
