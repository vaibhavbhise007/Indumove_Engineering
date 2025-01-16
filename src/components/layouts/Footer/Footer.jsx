import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400">Address</h3>
            <p>Kharabhwadi Chakan  </p>
            <p>Khed, Maharashtra, Pune (422501)</p>
            <p>India</p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400">Our Services</h3>
            <ul className="space-y-2">
              <li>Desing and Development</li>
              <li>Manufacturing</li>
             
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400">Contact</h3>
            <p>Email: indumoveindustries@gmail.com</p>
            <p>Phone: +91 9096352312</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p>&copy; 2025 Endumove Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;