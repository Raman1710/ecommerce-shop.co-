import React from 'react';

const DeliveryDetails = () => {
  return (
    <div className="delivery-details-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Delivery Details</h1>
      
      <p className="mb-4">
        At <strong>Shop.co</strong>, we strive to ensure that your order is delivered to you as quickly and efficiently as possible. Below are the details regarding our delivery process, estimated delivery times, and policies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Delivery Methods</h2>
      <p className="mb-4">
        We offer multiple shipping methods to cater to your needs:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Standard Shipping:</strong> Estimated delivery within 5-7 business days.</li>
        <li><strong>Express Shipping:</strong> Estimated delivery within 2-3 business days.</li>
        <li><strong>Overnight Shipping:</strong> Next-day delivery for orders placed before 2 PM.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Order Processing</h2>
      <p className="mb-4">
        All orders are processed within 1-2 business days. Orders placed over the weekend or on holidays will be processed the next business day. You will receive a confirmation email once your order has been shipped, along with a tracking number to monitor your package.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
      <p className="mb-4">
        Shipping costs depend on your location and the shipping method selected at checkout. Standard shipping is free for orders above $100. Express and Overnight shipping charges vary based on your region and order weight.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Delivery Times</h2>
      <p className="mb-4">
        Delivery times may vary depending on your location and the shipping method selected. We make every effort to deliver your order within the estimated time frame; however, unforeseen circumstances such as weather delays or carrier issues may affect delivery times.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Tracking Your Order</h2>
      <p className="mb-4">
        Once your order has been shipped, you will receive an email with your tracking number and a link to track your package. You can also track your order by logging into your account on <strong>Shop.co</strong> and viewing your order history.
      </p>

      <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
      <p className="mb-4">
        We currently offer international shipping to select countries. Delivery times and costs for international shipping may vary depending on your location and the customs process in your country.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Delivery Issues</h2>
      <p className="mb-4">
        If you encounter any issues with your delivery, such as missing or damaged items, please contact our customer service team at <strong>support@shop.co</strong>. We are here to assist you and ensure that your experience is satisfactory.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        For any further inquiries regarding your delivery, feel free to reach out to our support team at <strong>support@shop.co</strong> or call us at <strong>1-800-SHOPCO</strong>.
      </p>
    </div>
  );
};

export default DeliveryDetails;
