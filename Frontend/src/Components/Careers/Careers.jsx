import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="careers-container p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Careers at Shop.co</h1>
      
      <p className="mb-4">
        Ready to take the next step in your career? At <strong>Shop.co</strong>, we are always looking for talented and passionate individuals to join our team. Whether you’re an experienced professional or just starting out, we have a variety of positions available across different departments.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
      <p className="mb-4">
        Below are some of the positions currently available at <strong>Shop.co</strong>. Click on the job title for more details and to apply.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><Link to="/career" className="text-blue-600 hover:underline">Frontend Developer</Link> - Build stunning, responsive interfaces for our e-commerce platform.</li>
        <li><Link to="/career" className="text-blue-600 hover:underline">Backend Developer</Link> - Work on our robust back-end architecture and APIs.</li>
        <li><Link to="/career" className="text-blue-600 hover:underline">Product Manager</Link> - Oversee product development and collaborate with teams to launch innovative features.</li>
        <li><Link to="/career" className="text-blue-600 hover:underline">Graphic Designer</Link> - Create visually stunning content for our platform and marketing materials.</li>
        <li><Link to="/career" className="text-blue-600 hover:underline">Digital Marketing Specialist</Link> - Develop and implement marketing campaigns to grow our online presence.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">How to Apply</h2>
      <p className="mb-4">
        To apply for any of the positions listed above, click on the job title to view the full job description and application details. Be sure to attach your resume and cover letter outlining your relevant experience and why you’d be a great fit for the role.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Internship Opportunities</h2>
      <p className="mb-4">
        We also offer internship opportunities for students and recent graduates. Gain hands-on experience in a fast-paced e-commerce environment while working on meaningful projects. Keep an eye on our internship openings throughout the year!
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Hiring Process</h2>
      <p className="mb-4">
        Our hiring process is designed to ensure that we find the right candidates for our team. Here’s what you can expect:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Step 1:</strong> Submit your application online for the position that interests you.</li>
        <li><strong>Step 2:</strong> If selected, you’ll have an initial interview with our HR team to discuss your background and qualifications.</li>
        <li><strong>Step 3:</strong> Successful candidates will move on to technical interviews or further discussions with the hiring team.</li>
        <li><strong>Step 4:</strong> If everything goes well, we’ll extend a formal job offer!</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Join the Shop.co Team</h2>
      <p className="mb-4">
        We are passionate about creating a positive work environment where every team member can thrive. If you’re ready to make an impact and grow your career with us, apply for one of our open positions today!
      </p>

      <p>
        For general inquiries about careers at <strong>Shop.co</strong>, feel free to reach out to our HR team at <strong>careers@shop.co</strong>.
      </p>
    </div>
  );
};

export default Careers;
