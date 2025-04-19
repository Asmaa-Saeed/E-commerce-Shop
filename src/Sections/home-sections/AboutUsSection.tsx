const AboutUsSection = () => {
  return (
    <section className="py-32 bg-white text-center">
      <h2 className="text-2xl text-yellow-300 bg-teal-700 mx-auto rounded-sm px-55 py-1.5 max-w-fit mb-12 tracking-wider">About Us</h2>

    <div className="bg-[#222222] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-16 justify-between gap-8">
        {/* Stats Section */}
        <div className="flex flex-col space-y-12 mb-8 md:mb-0 tracking-wider">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.5)]">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">12,600 +</h3>
              <p className="text-gray-300 text-lg">Users Enrolled</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">700 +</h3>
              <p className="text-gray-300 text-lg">Loyal Customers</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.5)]">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">9000 +</h3>
              <p className="text-gray-300 text-lg">Good Reviews</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center md:text-left md:max-w-md flex flex-col items-center">
          <h4 className="text-yellow-400 text-3xl font-semibold mb-4 tracking-wide">Why Choose Us</h4>
          <p className="text-gray-300 text-lg mb-8 tracking-wide leading-relaxed text-center">
          Shop effortlessly on any device with our user-friendly app. Discover amazing products, exclusive deals, and a seamless shopping experience. Join our growing community of satisfied customers.
          </p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 cursor-pointer tracking-wider">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUsSection;