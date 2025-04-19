import AppStore from '../../assets/Home/appStore.jpg';
import GooglePlay from '../../assets/Home/googlePlay.jpg';


const DownloadAppSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl text-yellow-300 bg-teal-700 mx-auto rounded-lg px-35 py-2 max-w-fit mb-8 tracking-wider">
          Shop Anywhere, Anytime
        </h2>
        
        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide ">
          Experience seamless shopping on any device with our mobile app.
          Browse products, track orders, and get exclusive deals right at your fingertips.
          Download now and start your premium shopping journey!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src={AppStore} 
              alt="Download on the App Store" 
              className="h-14 w-auto"
            />
          </a>
          <a href="#" className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src={GooglePlay} 
              alt="Get it on Google Play" 
              className="h-14 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;