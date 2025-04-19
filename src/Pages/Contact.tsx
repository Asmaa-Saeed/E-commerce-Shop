import BGImage from '../assets/BackgroundImage/bg.jpg';
import Footer from '../Layouts/Footer';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactForm from '../Sections/Contact/ContactForm';
import Map from '../Sections/Contact/Map';


const Contact = () => {
    return (
        <div>
        <div
          className="relative w-full h-80 flex  items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${BGImage})` }}
        >
          <div className="absolute inset-0 bg-white opacity-70"></div>
          <h2 className="relative text-4xl font-bold  tracking-wide leading-normal text-center text-black z-10">
            Get In Touch With Us
          </h2>
        </div>

         {/* Map and Contact Info */}
         <div className='m-auto flex items-center flex-col mt-20 mb-10 '>
            <h1 className='text-teal-600 text-2xl mb-2 font-bold tracking-wide'>Get In Touch With Us</h1>
            <h3 className='mb-3 tracking-wide'>We're Always Eager To Hear From You!</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl md:mx-auto sm:mx-3 mx-2">
         {/* Map Placeholder */}
         <div className="bg-white h-[480px] rounded-lg overflow-hidden shadow-lg">
           <div className="h-full w-full">
             <Map className="w-full h-full" zoom={13} />
           </div>
         </div>

         {/* Contact Details */}
         <div className="space-y-5">
           {/* Office Address */}
           <div className="p-6 rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center">
               <span className="text-green-500 mr-3">📍</span>
               <div>
                 <p className="font-semibold tracking-wider">OFFICE ADDRESS</p>
                 <p className="text-gray-500 mt-2 tracking-wider">1201 park street, Fifth Avenue</p>
               </div>
             </div>
           </div>

           {/* Phone Number */}
           <div className="p-6  rounded-lg shadow-lg border border-gray-200">
             <div className="flex items-center">
               <span className="text-green-500 mr-3"><FaPhone size={20} /></span>
               <div>
                 <p className="font-semibold tracking-wider">PHONE NUMBER</p>
                 <p className="text-gray-500 mt-2 tracking-wide">+22698 745 632, 02 982 745</p>
               </div>
             </div>
           </div>

           {/* Send Email */}
           <div className="p-6  rounded-lg shadow-lg border border-gray-200 ">
             <div className="flex items-center">
               <span className="text-blue-500 mr-3"><FaEnvelope size={20} /></span>
               <div>
                 <p className="font-semibold tracking-wider">SEND EMAIL</p>
                 <p className="text-gray-500 mt-2 tracking-wider">admin@shopcart.com</p>
               </div>
             </div>
           </div>

           {/* Our Website */}
           <div className="p-6  rounded-lg shadow-lg border border-gray-200 ">
             <div className="flex items-center">
               <span className="text-red-500 mr-3">🌐</span>
               <div>
                 <p className="font-semibold tracking-wider">OUR WEBSITE</p>
                 <p className="text-gray-500 mt-2 tracking-wider">www.shopcart.com</p>
               </div>
             </div>
           </div>
         </div>
        </div>
        {/* contact form  */}
        <ContactForm/>
        {/* footer */}
        <Footer/>
    </div>

    )
}

export default Contact;