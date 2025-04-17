import goodChanceImg from '../assets/About/goodchance.jpg'
import shopOnlineImg from '../assets/About/shopOnline.jpg'
import Footer from '../Layouts/Footer';
import { FaShoppingBasket, FaCartPlus, FaCreditCard } from 'react-icons/fa';

const About = () => {
    return (
        <div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-16">
      {/* Left Section - Images */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0 items-end">
        <div className="relative mb-4 md:mb-0 w-96 h-96 ">
          <img
            src={goodChanceImg}
            alt="Student with headphones"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative w-62 h-62">
          <img
            src={shopOnlineImg}
            alt="Person working on laptop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Section - Text and Points */}
      <div className="md:ml-8 mb-20 max-w-md">
        <p className="text-teal-600 mt-3 text-md font-semibold uppercase mb-2 tracking-wide">About Our Brand</p>
        <h2 className="text-2xl font-semibold mb-4">
          Good Qualification Services And Better Experiences
        </h2>
        <p className="text-gray-500 mb-6">
          Distinctively provide access mutfuncto users whereas transparent processes
          somnes incentivize efficient functionalities rather than extensible architectur
          communicate leveraged services and cross-platform.
        </p>

        {/* Points */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-16 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600"><FaShoppingBasket size={20}/></span>
            </div>
            <div>
              <h3 className="font-semibold">Choose The Product</h3>
              <p className="text-gray-500">
                Distinctively provide access mutfuncto users whereas communicate leveraged services
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-red-500"><FaCartPlus size ={20}/></span>
            </div>
            <div>
              <h3 className="font-semibold">Add It To Cart</h3>
              <p className="text-gray-500">
                Distinctively provide access mutfuncto users whereas communicate leveraged services
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-yellow-600"><FaCreditCard size={20}/></span>
            </div>
            <div>
              <h3 className="font-semibold">Buy It</h3>
              <p className="text-gray-500">
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