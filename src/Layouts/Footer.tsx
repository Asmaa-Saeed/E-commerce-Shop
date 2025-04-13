// Footer.tsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white  py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 mb-6 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">About ShopCart</h3>
          <p className="text-sm tracking-wide leading-normal mb-6 ">
            Eduaid theme number one world class university in the world There are student are studying always in this university for all time.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 mb-2" />
              <span>New York, USA.</span>
            </div>
            <div className="flex items-center ">
              <FaPhone className="mr-2 mb-2" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 mb-2" />
              <span>info@shopcart.com</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-xl hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FaPinterest /></a>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Categories</h3>
          <ul className="space-y-6 text-sm">
            <li><a href="#" className="hover:text-gray-300">ALL PRODUCTS</a></li>
            <li><a href="#" className="hover:text-gray-300">SHOP</a></li>
            <li><a href="#" className="hover:text-gray-300">BLOG</a></li>
            <li><a href="#" className="hover:text-gray-300">ABOUT</a></li>
            <li><a href="#" className="hover:text-gray-300">POLICY</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-gray-300">Summer Sessions</a></li>
            <li><a href="#" className="hover:text-gray-300">Events</a></li>
            <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
            <li><a href="#" className="hover:text-gray-300">Forums</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
          </ul>
        </div>

        {/* Recent Tweets Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Recent Tweets</h3>
          <div className="space-y-6">
            <div className="text-sm">
              <p>
                <span className="text-blue-400  tracking-wide leading-normal">@ShopCart</span> Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!
              </p>
            </div>
            <div className="text-sm">
              <p>
                <span className="text-blue-400  tracking-wide leading-normal">@ShopCart</span> Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;