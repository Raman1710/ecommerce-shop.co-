import React from 'react';

const OrdersFAQ = () => {
  return (
    <div className="manage-orders-faq-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Order FAQs</h1>

      <h2 className="text-2xl font-semibold mb-2">1. How can I view my order history?</h2>
      <p className="mb-4">
        To view your order history, log into your account and navigate to the "My Orders" section. Here, you can see all your past orders along with their statuses.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Can I modify my order after it has been placed?</h2>
      <p className="mb-4">
        Once your order is placed, we cannot guarantee modifications. However, you can contact customer support to see if changes can be made before the order is dispatched.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. How can I cancel my order?</h2>
      <p className="mb-4">
        To cancel your order, please contact our customer support team as soon as possible. If your order hasn't been shipped yet, we will be able to assist you in canceling it.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. What should I do if I received the wrong item?</h2>
      <p className="mb-4">
        If you received the wrong item, please contact our customer support team immediately. We will assist you in resolving the issue and arranging a return.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. How do I provide feedback on my order?</h2>
      <p className="mb-4">
        We value your feedback! You can provide feedback directly through our website or by contacting customer support. Your opinions help us improve our services.
      </p>
    </div>
  );
};

export default OrdersFAQ;
