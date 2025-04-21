import goodChanceImg from '../assets/About/goodchance.jpg'
import shopOnlineImg from '../assets/About/shopOnline.jpg'
import Footer from '../Layouts/Footer';
import { FaShoppingBasket, FaCartPlus, FaCreditCard } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen">
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 px-4 md:px-8 lg:px-16 gap-8">
            {/* Left Section - Images */}
            <div className="flex flex-col md:flex-row md:space-x-4 mb-8 md:mb-0 items-center md:items-end w-full md:w-1/2">
              <div className="relative mb-4 md:mb-0 w-full md:w-96 h-64 sm:h-80 md:h-96">
                <img
                  src={goodChanceImg}
                  alt="Student with headphones"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative w-full md:w-64 h-48 sm:h-60">
                <img
                  src={shopOnlineImg}
                  alt="Person working on laptop"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Section - Text and Points */}
            <div className="md:ml-4 lg:ml-8 mb-12 md:mb-20 w-full md:w-1/2 max-w-md px-4 md:px-0">
              <p className="text-teal-600 text-sm md:text-md font-semibold uppercase mb-2 tracking-wide">About Our Brand</p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Good Qualification Services And Better Experiences
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-6">
                Distinctively provide access mutfuncto users whereas transparent processes
                somnes incentivize efficient functionalities rather than extensible architectur
                communicate leveraged services and cross-platform.
              </p>

              {/* Points */}
              <div className="space-y-6 md:space-y-8">
                {/* Point items */}
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-12 md:w-16 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-green-600"><FaShoppingBasket size={20}/></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm md:text-base">Choose The Product</h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      Distinctively provide access mutfuncto users whereas communicate leveraged services
                    </p>
                  </div>
                </div>

                <div className="flex items-start md:items-center gap-4">
                  <div className="w-12 md:w-16 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-red-500"><FaCartPlus size={20}/></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm md:text-base">Add It To Cart</h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      Distinctively provide access mutfuncto users whereas communicate leveraged services
                    </p>
                  </div>
                </div>

                <div className="flex items-start md:items-center gap-4">
                  <div className="w-12 md:w-16 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-yellow-600"><FaCreditCard size={20}/></span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm md:text-base">Buy It</h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                      Distinctively provide access mutfuncto users whereas communicate leveraged services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
}

export default About;