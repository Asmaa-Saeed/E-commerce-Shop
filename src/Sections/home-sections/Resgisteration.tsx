import React from 'react';
import backgroundImage from '../../assets/Home/regestrationBg.jpg';

const RegistrationSection: React.FC = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center py-10 px-4">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Promotional Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p className="text-yellow-400 text-sm uppercase font-semibold">Save The Day</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Join On Day Long Free <br />
            Workshop For <span className="text-yellow-400">Advanced Mastering</span> On Sales
          </h1>
          <p className="text-gray-300 text-sm mt-4">Limited Time Offer! Hurry Up</p>
        </div>

        {/* Right Section: Registration Form */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-[rgba(255,255,255,0.39)] backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
            <h2 className="text-2xl font-semibold text-teal-600 tracking-wider mb-6">Register Now</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="UserName"
                className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <button
                type="button"
                className="w-full py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 tracking-widest cursor-pointer hover:shadow-lg"
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