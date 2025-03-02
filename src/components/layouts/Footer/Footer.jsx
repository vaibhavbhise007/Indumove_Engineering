import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400">Address</h3>
            <p>Gat no.263, MIDC Rd, near to a Raymond Fasteners India Pvt. Ltd., near Mercedes Benz, Phase III, Industrial Area, </p>
            <p>Chakan, Pune, Maharashtra 410501,</p>
            <p>India</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-400 ">Our Products</h3>

            <div className='flex flex-col-2 gap-4'>

              <div>
                <ul className="space-y-2">
                  <li>Pipe Storage Rack</li>
                  <li>Cage Trolley</li>
                  <li>Pipe Rack</li>
                  <li>Hand Trolley</li>

                </ul>
              </div>
              <ul>
                <li>Platform Trolley</li>
                <li>Tool Trolley</li>
                <li>Storage Container</li>
                <li>Wire Mesh Trolley</li>
                <li>Pallets</li>
              </ul>
              <div>
              </div>
            </div>
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
            <p>Email: info.indumove.engg@gmail.com</p>
            <p>Phone: +91-9096352312</p>
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