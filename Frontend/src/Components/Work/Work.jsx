import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className="work-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Work with Us</h1>
      
      <p className="mb-4">
        At <strong>Shop.co</strong>, we believe in fostering an environment that encourages creativity, innovation, and collaboration. We are always on the lookout for talented individuals who are passionate about fashion and e-commerce.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Culture</h2>
      <p className="mb-4">
        Our company culture is built on the values of inclusivity, integrity, and teamwork. We encourage everyone to bring their unique perspectives to the table and foster a sense of belonging where every voice is heard. We believe in continuous growth, both personally and professionally, and provide ample opportunities for career advancement.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Work at Shop.co?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Dynamic Environment:</strong> Work in a fast-paced, creative atmosphere where innovation and problem-solving are valued.</li>
        <li><strong>Growth Opportunities:</strong> Whether you're just starting out or looking to advance your career, we offer opportunities to help you grow and thrive in the fashion and e-commerce industry.</li>
        <li><strong>Collaborative Team:</strong> Our team is made up of talented individuals who are passionate about what they do. Together, we create exceptional experiences for our customers.</li>
        <li><strong>Employee Benefits:</strong> Competitive salaries, health benefits, flexible working hours, and other perks to help you maintain a healthy work-life balance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Our Commitment to Diversity</h2>
      <p className="mb-4">
        We are committed to building a diverse and inclusive workplace where people of all backgrounds can thrive. We believe that our differences are what make us stronger as a team and enable us to better serve our diverse customer base.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
      <p className="mb-4">
        Are you ready to be part of a dynamic and forward-thinking team? Check out our open positions on our <strong><Link to="/careers" className="text-blue-600 hover:underline">Careers page</Link></strong> and apply today.
      </p>

      <p>
        We can’t wait to see what you’ll bring to <strong>Shop.co</strong>!
      </p>
    </div>
  );
};

export default Work;
