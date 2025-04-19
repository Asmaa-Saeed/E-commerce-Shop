import Map from "../Contact/Map";

const CustomerSection = () => {
  return (
    <div className="flex flex-col items-center mt-20  p-4 bg-gray-100 min-h-screen">
          <div className="bg-teal-700 text-white text-center py-2 px-24 rounded-lg mb-6">
            <p className="text-2xl text-yellow-300  tracking-wider">More Than 60,000 Customers</p>
          </div>
          <p className="text-center tracking-wide text-gray-500 max-w-md mb-6">
            Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping
          </p>
          <div className="relative bg-gray-800 rounded-lg p-4 w-full max-w-2xl">
            <div className="w-full h-64 bg-gray-600 rounded-lg overflow-hidden">
              <div className="w-full h-full">
                <Map className="w-full h-full" zoom={2} disableInteraction={true} />
              </div>
            </div>
            </div>
          </div>
       
  ) 
}

  export  default CustomerSection;