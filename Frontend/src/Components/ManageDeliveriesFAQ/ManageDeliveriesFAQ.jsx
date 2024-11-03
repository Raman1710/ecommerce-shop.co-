import React from 'react';

const ManageDeliveriesFAQ = () => {
  return (
    <div className="manage-deliveries-faq-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Delivery FAQs</h1>

      <h2 className="text-2xl font-semibold mb-2">1. How can I track my delivery?</h2>
      <p className="mb-4">
        You can track your delivery using the tracking link provided in your order confirmation email. Alternatively, you can log into your account and navigate to the "My Orders" section to view the status of your delivery.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. What should I do if my delivery is delayed?</h2>
      <p className="mb-4">
        If your delivery is delayed, please check the tracking information for updates. If the tracking status hasn't changed for an extended period, please contact our customer support for assistance.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Can I change my delivery address after placing an order?</h2>
      <p className="mb-4">
        If you need to change your delivery address, please contact our customer support as soon as possible. We can only make changes if the order has not been dispatched yet.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. What should I do if my package is damaged?</h2>
      <p className="mb-4">
        If your package is damaged upon arrival, please take photos and contact our customer support team within 48 hours of receiving your package. We will guide you through the return process.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Do you deliver internationally?</h2>
      <p className="mb-4">
        Yes, we offer international shipping. Delivery times and fees may vary depending on the destination. Please check our shipping policy for more details.
      </p>
    </div>
  );
};

export default ManageDeliveriesFAQ;
