import React from 'react';

const PaymentsFAQ = () => {
  return (
    <div className="manage-payments-faq-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Payment FAQs</h1>

      <h2 className="text-2xl font-semibold mb-2">1. What payment methods do you accept?</h2>
      <p className="mb-4">
        We accept various payment methods, including credit cards, debit cards, and PayPal. Please check our payment section during checkout for a complete list.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Is my payment information secure?</h2>
      <p className="mb-4">
        Yes, we take your payment security seriously. We use encryption and secure payment gateways to ensure your information is protected.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. How can I request a refund?</h2>
      <p className="mb-4">
        To request a refund, please contact our customer support team within the return period specified in our return policy. They will assist you through the process.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Why was my payment declined?</h2>
      <p className="mb-4">
        Payments can be declined for various reasons, including insufficient funds or incorrect card information. Please check your payment details and try again or contact your bank for assistance.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. How can I get a receipt for my purchase?</h2>
      <p className="mb-4">
        A receipt will be sent to your registered email address after your purchase is completed. You can also find your order details in your account under the "My Orders" section.
      </p>
    </div>
  );
};

export default PaymentsFAQ;
