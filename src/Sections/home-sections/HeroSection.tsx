import { Search } from "lucide-react";
import backgroundImage from '../../assets/Main/hero.jpg'
const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-50 px-4 md:px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl mb-8 text-gray-900 leading-snug tracking-wider">
        Search Your One From <span className="text-yellow-400"> <br/> Thousands</span>  Of Products
        </h1>
        <div className="mt-8 flex items-center justify-center">
          <div className="flex w-full max-w-xl rounded-full shadow border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search your product"
              className="flex-1 px-6 py-3 bg-white text-gray-700 outline-none"
            />
            <button className="bg-white cursor-pointer transition-all px-5 flex items-center justify-center">
              <Search className="text-gray-700" />
            </button>
          </div>
        </div>
        <p className="mt-6 tracking-wider text-gray-500 text-sm sm:text-base">
          We Have the Largest Collection of Products
        </p>
      </div>
    </section>
  );
};

export default HeroSection;