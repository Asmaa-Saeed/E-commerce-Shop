import React from 'react';
import backgroundImage from '../../assets/Home/regestrationBg.jpg';

const RegistrationSection: React.FC = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center py-10 px-4 mt-20">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Promotional Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p className="text-yellow-400 text-sm uppercase font-semibold tracking-wide">Save The Day</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-wider">
            Join On Day Long Free <br />
            Workshop For <span className="text-yellow-400">Advanced Mastering</span> On Sales
          </h1>
          <p className="text-gray-300 text-sm mt-4 tracking-wide">Limited Time Offer! Hurry Up</p>
        </div>

        {/* Right Section: Registration Form */}
        <div className="md:w-2/3 flex justify-center">
          <div className="bg-gradient-to-b from-gray-50 via-brown-200 to-brown-700 rounded-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-teal-700 tracking-wider mb-6 text-shadow-teal-100">Register Now</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="UserName"
                autoComplete='off'
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border border-[rgba(255,255,255,0.13)] focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent tracking-wide"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete='email'
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border border-[rgba(255,255,255,0.13)] focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent tracking-wide"
              />
              <input
                type="tel"
                placeholder="Phone"
                autoComplete='tel'
                className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border border-[rgba(255,255,255,0.13)] focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-transparent tracking-wide"
              />
              <button
                type="button"
                className="w-full px-3 py-3.5 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all duration-300 tracking-widest cursor-pointer hover:shadow-lg"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;